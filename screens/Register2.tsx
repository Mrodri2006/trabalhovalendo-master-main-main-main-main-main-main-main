import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth, firestore } from '../firebase';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from '../estilo';

import { Usuario } from '../model/Usuario';

export default function Register() {
  const [formUsuario, setFormUsuario] = useState<Partial<Usuario>>({});
  const [dataPickerVisivel, setDataPickerVisivel] = useState(false);
  const navigation = useNavigation();

  const registrar = () => {
    if (!formUsuario.email || !formUsuario.senha || !formUsuario.nome) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    auth
      .createUserWithEmailAndPassword(formUsuario.email, formUsuario.senha)
      .then((userCredentials) => {
        console.log('Logado como: ' + userCredentials.user?.email);

        const refUsuario = firestore.collection('Usuario');
        const idUsuario = refUsuario.doc(auth.currentUser.uid);

        idUsuario.set({
          id: auth.currentUser.uid,
          nome: formUsuario.nome,
          email: formUsuario.email,
          senha: formUsuario.senha,
          fone: formUsuario.fone,
          dataNascimento: formUsuario.dataNascimento
            ? formUsuario.dataNascimento.toISOString()
            : null,
        });

        navigation.replace('Menu');
      })
      .catch((erro) => alert(erro.message));
  };

  const confirmarData = (data) => {
    setFormUsuario({
      ...formUsuario,
      dataNascimento: data,
    });
    setDataPickerVisivel(false);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ImageBackground
        source={require('../assets/back.png')}
        resizeMode="stretch"
        style={styles.container}
      >
        <Text style={styles.titulo2}>CADASTRO DE USUÁRIOS</Text>

        <View style={styles.TabInput}>
          <TouchableOpacity style={styles.buttonTab}>
            <Text style={styles.buttonTextTab}>Contratante</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonTab1}
            onPress={() => navigation.replace('Register')}
          >
            <Text style={styles.buttonTextTab2}>Prestador</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputView}>
          <TextInput
            label="Nome"
            onChangeText={(valor) =>
              setFormUsuario({
                ...formUsuario,
                nome: valor,
              })
            }
            style={styles.input}
            activeUnderlineColor="#005362"
          />
          <TextInput
            label="Email"
            onChangeText={(valor) =>
              setFormUsuario({
                ...formUsuario,
                email: valor,
              })
            }
            style={styles.input}
            activeUnderlineColor="#005362"
          />
          <TextInput
            label="Senha"
            onChangeText={(valor) =>
              setFormUsuario({
                ...formUsuario,
                senha: valor,
              })
            }
            secureTextEntry={true}
            style={styles.input}
            activeUnderlineColor="#005362"
          />
          <TextInput
            label="Fone"
            onChangeText={(valor) =>
              setFormUsuario({
                ...formUsuario,
                fone: valor,
              })
            }
            style={styles.input}
            activeUnderlineColor="#005362"
          />

          <TouchableOpacity
            style={[styles.input, { justifyContent: 'center', height: 60 }]}
            onPress={() => setDataPickerVisivel(true)}
          >
            <Text style={{ color: '#333' }}>
              {formUsuario.dataNascimento
                ? formUsuario.dataNascimento.toLocaleDateString()
                : 'Selecionar data de nascimento'}
            </Text>
          </TouchableOpacity>

          <DateTimePicker
            isVisible={dataPickerVisivel}
            mode="date"
            onConfirm={confirmarData}
            onCancel={() => setDataPickerVisivel(false)}
            maximumDate={new Date()} 
          />
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={registrar}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonSec]}
            onPress={() => navigation.replace('Login')}
          >
            <Text style={[styles.buttonText, styles.buttonSecText]}>
              Voltar
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}