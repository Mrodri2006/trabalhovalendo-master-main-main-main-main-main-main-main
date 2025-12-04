import { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableOpacity, ImageBackground, Switch } from 'react-native';
import { TextInput } from 'react-native-paper';
import { auth, firestore } from '../firebase';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../estilo';

import Aval from '../model/Aval';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default function CadastroAval() {
  const [formAval, setFormAval] = useState<Partial<Aval>>({});
  const [visivel, setVisivel] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  const confirmado = (data: Date) => {
    setFormAval({
      ...formAval,
      data: data.toISOString(),
    });
    setVisivel(false);
  };

  useEffect(() => {
    if ((route as any).params) {
      setFormAval((route as any).params.aval || (route as any).params);
    }
  }, [route.params]);

  const salvar = () => {
    const refAval = firestore
      .collection('Usuario')
      .doc(auth.currentUser?.uid)
      .collection('Aval');

    const novoAval = new Aval(formAval);
    const valid = novoAval.validate();
    if (valid) {
      alert(valid);
      return;
    }

    if (formAval.id) {
      const idRef = refAval.doc(formAval.id);
      idRef
        .update(novoAval.toJSON())
        .then(() => alert('Avaliação atualizada'))
        .catch(err => alert(String(err)));
    } else {
      const idRef = refAval.doc();
      novoAval.id = idRef.id;
      // vincular usuário atual
      novoAval.usuarioId = auth.currentUser?.uid ? auth.currentUser?.uid : novoAval.usuarioId;
      idRef
        .set(novoAval.toJSON())
        .then(() => {
          alert('Avaliação adicionada com sucesso');
          setFormAval({});
        })
        .catch(err => alert(String(err)));
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ImageBackground source={require('../assets/back.png')} resizeMode="stretch" style={styles.container}>
        <Text style={styles.titulo2}>Cadastro de Avaliação</Text>

        <View style={styles.inputView}>
          <TextInput
            label="Título"
            onChangeText={valor =>
              setFormAval({
                ...formAval,
                titulo: valor,
              })
            }
            value={formAval.titulo as string}
            style={styles.input}
            activeUnderlineColor="#005362"
          />

          <TextInput
            label="Descrição"
            onChangeText={valor =>
              setFormAval({
                ...formAval,
                descricao: valor,
              })
            }
            value={formAval.descricao as string}
            style={styles.input}
            activeUnderlineColor="#005362"
            multiline
          />

          <TextInput
            label="Nota (0-5)"
            keyboardType="numeric"
            onChangeText={valor =>
              setFormAval({
                ...formAval,
                nota: valor === '' ? (undefined as any) : Number(valor),
              })
            }
            value={formAval.nota != null ? String(formAval.nota) : ''}
            style={styles.input}
            activeUnderlineColor="#005362"
          />

          <View style={{ marginVertical: 8 }}>
            <TouchableOpacity style={[styles.input, { justifyContent: 'center', height: 60 }]} onPress={() => setVisivel(true)}>
              <Text style={{ color: '#333' }}>
                {formAval.data ? new Date(formAval.data).toLocaleDateString() : 'Selecionar data'}
              </Text>
            </TouchableOpacity>
            <DateTimePicker isVisible={visivel} mode="date" onConfirm={confirmado} onCancel={() => setVisivel(false)} maximumDate={new Date()} />
          </View>


        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={salvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSec]} onPress={() => (navigation as any).replace('Menu')}>
            <Text style={[styles.buttonText, styles.buttonSecText]}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}