import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo';

import Aval from '../model/Aval';

export default function ListarAval() {
  const [avals, setAvals] = useState<Aval[]>([]);
  const navigation = useNavigation();

  const refAval = firestore
    .collection('Usuario')
    .doc(auth.currentUser?.uid)
    .collection('Aval');

  useEffect(() => {
    const unsubscribe = refAval.onSnapshot(query => {
      const lista: Aval[] = [];
      query.forEach(doc => {
        const data = { ...doc.data(), id: doc.id };
        lista.push(Aval.fromJSON(data));
      });
      setAvals(lista);
    }, err => {
      console.error(err);
    });
    return () => unsubscribe();
  }, []);

  const excluir = async (item: Aval) => {
    if (!item.id) return;
    try {
      await refAval.doc(item.id).delete();
      alert('Excluído com sucesso');
    } catch (err) {
      alert(String(err));
    }
  };

  const editar = (item: Aval) => {
    navigation.navigate('Avaliações' as any, { aval: item });
  };

  return (
    <ImageBackground source={require('../assets/back.png')} resizeMode="stretch" style={styles.container}>
      <FlatList
        data={avals}
        keyExtractor={(item) => item.id ?? Math.random().toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => editar(item)}
            onLongPress={() => excluir(item)}
          >
            <Text style={styles.text}> Título: {item.titulo}</Text>
            <Text> Nota: {item.nota}</Text>
            <Text> Data: {item.data ? new Date(item.data).toLocaleDateString() : '-'}</Text>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}
