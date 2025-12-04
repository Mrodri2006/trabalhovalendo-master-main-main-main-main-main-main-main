import { useState } from 'react';
import { FlatList, Text, TouchableOpacity, ImageBackground } from 'react-native';

import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import styles from '../estilo';
import { useEffect } from 'react';

import { Prest } from '../model/Prest';



export default function ListarPrest() {
    const [prest, setprest] = useState<Prest[]>([]);

    const navigation = useNavigation();

    const refPrest = firestore.collection("Usuario")
        .doc(auth.currentUser?.uid)
        .collection("Prest")

    useEffect(() => {
        const unsubscribe = refPrest.onSnapshot((query) => {
            const lista: any[] = [];
            query.forEach((documento) => {
                lista.push({
                    ...documento.data(),
                    id: documento.id
                });
            });
            setprest(lista);
        }, (err) => {
            console.error(err);
        });

        return () => unsubscribe();
    }, []); 

    const excluir = async (item: any) => {
        try {
            await refPrest.doc(item.id).delete();
            alert('Excluido com sucesso');
        } catch (err) {
            alert(String(err));
        }
    }
    const editar = (item: any) => {
        navigation.navigate('Cadastro de Prestadores' as any, { prest: item });
    }

    return (
        <ImageBackground source={require('../assets/back.png')} resizeMode='stretch' style={styles.container}>
            <FlatList
                data={prest}
                keyExtractor={(item) => item.id ?? Math.random().toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.listItem}
                        onPress={() => editar(item)}
                        onLongPress={() => excluir(item)}
                    >
                        <Text style={styles.text}> Nome: {item.nome}</Text>
                    </TouchableOpacity>
                )
                }
            />
        </ImageBackground>
    )
}

