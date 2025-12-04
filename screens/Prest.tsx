import React, { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth, firestore } from '../firebase';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../estilo';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default function CadastroPrest() {
  const [formprest, setFormPrest] = useState<any>({});
  const [visivel, setVisivel] = useState(false);
  const route: any = useRoute();
  const navigation: any = useNavigation();

  const confirmado = (data: Date) => {
    setFormPrest({
      ...formprest,
      datanascimento: data,
    });
    setVisivel(false);
  };

  useEffect(() => {
    if (route.params) {
      setFormPrest(route.params.prest || route.params);
    }
  }, [route.params]);

  const salvar = async () => {
    const refPrest = firestore
      .collection('Usuario')
      .doc(auth.currentUser?.uid)
      .collection('Prest');

    const novoPrest = { ...formprest } as any;

    try {
      if (formprest.id) {
        await refPrest.doc(formprest.id).update(novoPrest);
        alert('Cadastro atualizado');
      } else {
        const idPrest = refPrest.doc();
        novoPrest.id = idPrest.id;
        await idPrest.set(novoPrest);
        alert('Cadastro adicionado com sucesso');
        setFormPrest({});
      }
    } catch (err) {
      alert(String(err));
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ImageBackground source={require('../assets/back.png')} resizeMode="stretch" style={styles.container}>
        <Text style={styles.titulo2}>Cadastro de Prestadores</Text>

        <View style={styles.inputView}>
          <TextInput
            label="Nome"
            onChangeText={valor => setFormPrest({ ...formprest, nome: valor })}
            value={formprest.nome}
            style={styles.input}
            activeUnderlineColor="#005362"
          />

          <TextInput
            label="Email"
            onChangeText={valor => setFormPrest({ ...formprest, email: valor })}
            value={formprest.email}
            style={styles.input}
            activeUnderlineColor="#005362"
          />

          <TextInput
            label="Telefone"
            onChangeText={valor => setFormPrest({ ...formprest, fone: valor })}
            value={formprest.fone}
            style={styles.input}
            activeUnderlineColor="#005362"
          />

          <TouchableOpacity style={[styles.input, { justifyContent: 'center', height: 60 }]} onPress={() => setVisivel(true)}>
            <Text style={{ color: '#333' }}>
              {formprest.datanascimento ? new Date(formprest.datanascimento).toLocaleDateString() : 'Selecionar data de nascimento'}
            </Text>
          </TouchableOpacity>

          <DateTimePicker
            isVisible={visivel}
            mode="date"
            onConfirm={confirmado}
            onCancel={() => setVisivel(false)}
            maximumDate={new Date()}
          />

          <TextInput
            label="cnpj"
            onChangeText={valor => setFormPrest({ ...formprest, cnpj: valor })}
            value={formprest.cnpj}
            style={styles.input}
            activeUnderlineColor="#005362"
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={salvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSec]} onPress={() => navigation.replace('Menu')}>
            <Text style={[styles.buttonText, styles.buttonSecText]}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}