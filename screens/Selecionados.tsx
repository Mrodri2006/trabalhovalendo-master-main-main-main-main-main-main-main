import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Button,
  Linking,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../estilo";

export default function Selecionados() {
  const navigation = useNavigation();
  const route = useRoute();
  const { servicos } = route.params || { servicos: [] };
  const [modalVisible, setModalVisible] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const criaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listaItem}
      onPress={() => {
        setServicoSelecionado(item);
        setModalVisible(true);
      }}
      onLongPress={() => Linking.openURL(item.youtube)}
    >
      <Text>Serviço: {item.Servico}</Text>
      <Text>Tipo: {item.Tipo}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../assets/back.png")}
      resizeMode="stretch"
      style={styles.container}
    >
      <Text style={styles.titulo}>Serviços Selecionados</Text>

      {servicos.length > 0 ? (
        <FlatList
          data={servicos}
          renderItem={criaItem}
          keyExtractor={(item) => item.Servico.toString()}
        />
      ) : (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: "#666" }}>Nenhum serviço selecionado</Text>
        </View>
      )}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "90%",
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 8,
            }}
          >
            {servicoSelecionado && (
              <>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 12,
                  }}
                >
                  {servicoSelecionado.Servico}
                </Text>
                <Text style={{ marginBottom: 8 }}>
                  <Text style={{ fontWeight: "bold" }}>Tipo:</Text> {servicoSelecionado.Tipo}
                </Text>
                <Text style={{ marginBottom: 16 }}>
                  <Text style={{ fontWeight: "bold" }}>Descrição:</Text> {servicoSelecionado.descricao || "Sem descrição"}
                </Text>
              </>
            )}

            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}