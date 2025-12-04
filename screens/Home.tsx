import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Search, MapPin, Star, User, Wrench, LogOut } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicialCliente({ onLogout }) {

  const navigation = useNavigation();

  const servicosPopulares = [
    { id: 1, nome: "Eletricista", icon: <Wrench size={28} /> },
    { id: 2, nome: "Diarista", icon: <User size={28} /> },
    { id: 3, nome: "Encanador", icon: <Wrench size={28} /> },
    { id: 4, nome: "Montagem de Móveis", icon: <Wrench size={28} /> },
  ];

  const profissionaisRecomendados = [
    { id: 1, nome: "Carlos Silva", avaliacao: 4.9, distancia: "2 km" },
    { id: 2, nome: "Ana Monteiro", avaliacao: 4.8, distancia: "3 km" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Olá!</Text>

        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Perfil")}>
            <User size={24} />
            
          </TouchableOpacity>

        </View>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchBox}>
        <Search size={20} color="#666" />
        <TextInput
          placeholder="Buscar serviços..."
          placeholderTextColor="#777"
          style={styles.searchInput}
        />
      </View>

      {/* Serviços Populares */}
      <Text style={styles.sectionTitle}>Serviços Populares</Text>

      <View style={styles.grid}>
        {servicosPopulares.map((serv) => (
          <View key={serv.id} style={styles.card}>
            <View style={styles.iconCenter}>{serv.icon}</View>
            <Text style={styles.cardText}>{serv.nome}</Text>
          </View>
        ))}
      </View>

      {/* Profissionais Recomendados */}
      <Text style={styles.sectionTitle}>Recomendados para Você</Text>

      {profissionaisRecomendados.map((pro) => (
        <View key={pro.id} style={styles.recomendadoCard}>
          <View>
            <Text style={styles.nomeProf}>{pro.nome}</Text>

            <View style={styles.infoLinha}>
              <Star size={16} />
              <Text style={styles.infoTxt}>{pro.avaliacao}</Text>
            </View>

            <View style={styles.infoLinha}>
              <MapPin size={16} />
              <Text style={styles.infoTxt}>{pro.distancia}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.botaoChamar}>
            <Text style={styles.botaoTxt}>Chamar</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#fff" },

  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  titulo: { fontSize: 22, fontWeight: "600" },

  headerButtons: { flexDirection: "row", gap: 12 },
  iconButton: {
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 16,
    marginVertical: 16,
  },
  searchInput: { marginLeft: 10, flex: 1, fontSize: 14 },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    padding: 16,
    backgroundColor: "#fafafa",
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 12,
    elevation: 2,
  },

  iconCenter: { marginBottom: 8 },
  cardText: { fontSize: 15, fontWeight: "500" },

  recomendadoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f7f7f7",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },

  nomeProf: { fontSize: 16, fontWeight: "600" },
  infoLinha: { flexDirection: "row", alignItems: "center", marginTop: 4, gap: 6 },
  infoTxt: { fontSize: 14, color: "#555" },

  botaoChamar: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: "center",
  },
  botaoTxt: { color: "#fff", fontWeight: "600" },
});
