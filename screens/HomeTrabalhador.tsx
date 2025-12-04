import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MapPin, Clock, Plus, LogOut } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicialAutonomo({onLogout}) {
  const navigation = useNavigation();

  const servicosSolicitados = [
    {
      id: 1,
      titulo: "Montagem de móvel",
      distancia: "3 km",
      horario: "Hoje, 14:00",
    },
    {
      id: 2,
      titulo: "Conserto elétrico",
      distancia: "5 km",
      horario: "Aguardando confirmação",
    },
  ];

  const servicosDisponiveis = [
    { id: 1, nome: "Eletricista" },
    { id: 2, nome: "Diarista" },
    { id: 3, nome: "Montagem" },
    { id: 4, nome: "Pintor" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.hello}>Olá, prestador</Text>
            <Text style={styles.welcome}>Seja bem-vindo</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <Clock size={26} />
        </TouchableOpacity>
      </View>

              <TouchableOpacity
         style={styles.iconButton}
         onPress={() => navigation.navigate("Login")}  
        >
        <LogOut size={22} />
        </TouchableOpacity>


      {/* Serviços Solicitados */}
      <Text style={styles.sectionTitle}>Serviços Solicitados</Text>

      {servicosSolicitados.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.cardTitle}>{item.titulo}</Text>

          <View style={styles.row}>
            <MapPin size={18} />
            <Text style={styles.infoText}>{item.distancia}</Text>
          </View>

          <View style={styles.row}>
            <Clock size={18} />
            <Text style={styles.infoText}>{item.horario}</Text>
          </View>

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.buttonText}>Aceitar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectText}>Recusar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Serviços Disponíveis */}
      <Text style={styles.sectionTitle}>Serviços Disponíveis</Text>

      <View style={styles.grid}>
        {servicosDisponiveis.map((serv) => (
          <View key={serv.id} style={styles.gridItem}>
            <Text style={styles.gridText}>{serv.nome}</Text>
          </View>
        ))}
      </View>

      {/* Botão Flutuante */}
      <TouchableOpacity style={styles.floatingButton}>
        <Plus size={30} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 80,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
    marginRight: 10,
  },

  hello: {
    fontSize: 14,
    color: "#666",
  },

  welcome: {
    fontSize: 20,
    fontWeight: "bold",
  },

  iconButton: {
    padding: 6,
  },

  /* SEÇÕES */
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  infoText: {
    marginLeft: 6,
    color: "#555",
  },

  buttonsRow: {
    flexDirection: "row",
    marginTop: 12,
  },

  acceptButton: {
    flex: 1,
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  rejectButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#1e90ff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  rejectText: {
    color: "#1e90ff",
    fontWeight: "bold",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  gridItem: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
    alignItems: "center",
  },

  gridText: {
    fontSize: 16,
    fontWeight: "600",
  },

  /* BOTÃO FLUTUANTE */
  floatingButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#1e90ff",
    padding: 18,
    borderRadius: 40,
    elevation: 6,
  },
});
