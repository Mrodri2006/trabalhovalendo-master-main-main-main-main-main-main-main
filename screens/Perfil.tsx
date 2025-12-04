import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { ArrowLeft, Edit2, Star, MapPin, Phone, Mail, LogOut } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();
 
  //informções fornecidas por mim mesmo, depois puxar do firebase as informações que são informadas no login do usuário 

  const usuario = {
    nome: "João Silva",
    avaliacao: 4.8,
    numeroAvaliacoes: 45,
    localizacao: "São Paulo, SP",
    telefone: "(11) 98765-4321",
    email: "joao.silva@email.com",
    descricao: "Profissional com 5 anos de experiência em serviços gerais",
    servicos: [
      { id: 1, nome: "Eletricista" },
      { id: 2, nome: "Encanador" },
      { id: 3, nome: "Manutenção Geral" },
    ],
    historico: [
      { id: 1, servico: "Reparo Elétrico", data: "20/11/2024", status: "Concluído", valor: "R$ 150" },
      { id: 2, servico: "Desentupimento", data: "15/11/2024", status: "Concluído", valor: "R$ 200" },
      { id: 3, servico: "Instalação Luminária", data: "10/11/2024", status: "Concluído", valor: "R$ 120" },
    ],
  };

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meu Perfil</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Editar")} style={styles.editButton}>
          <Edit2 size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      
      <View style={styles.perfilSection}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JS</Text>
          </View>
        </View>

        <Text style={styles.nome}>{usuario.nome}</Text>

        <View style={styles.infoRow}>
          <MapPin size={16} color="#666" />
          <Text style={styles.infoText}>{usuario.localizacao}</Text>
        </View>

      </View>


      <View style={styles.contatoSection}>
        <Text style={styles.sectionTitle}>Informações de Contato</Text>

        <View style={styles.contatoItem}>
          <Phone size={18} color="#005362" />
          <View style={styles.contatoContent}>
            <Text style={styles.contatoLabel}>Telefone</Text>
            <Text style={styles.contatoValue}>{usuario.telefone}</Text>
          </View>
        </View>

        <View style={styles.contatoItem}>
          <Mail size={18} color="#005362" />
          <View style={styles.contatoContent}>
            <Text style={styles.contatoLabel}>Email</Text>
            <Text style={styles.contatoValue}>{usuario.email}</Text>
          </View>
        </View>
      </View>

    
      <View style={styles.servicosSection}>
        <Text style={styles.sectionTitle}>Serviços Oferecidos</Text>

        <View style={styles.servicosGrid}>
          {usuario.servicos.map((serv) => (
            <View key={serv.id} style={styles.servicoCard}>
              <Text style={styles.servicoNome}>{serv.nome}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.historicoSection}>
        <Text style={styles.sectionTitle}>Histórico de Serviços</Text>

        {usuario.historico.map((item) => (
          <View key={item.id} style={styles.historicoCard}>
            <View style={styles.historicoContent}>
              <Text style={styles.historicoServico}>{item.servico}</Text>
              <Text style={styles.historicoData}>{item.data}</Text>
            </View>
            <View style={styles.historicoRight}>
              <Text style={styles.historicoValor}>{item.valor}</Text>
              <View style={[styles.statusBadge, { backgroundColor: "#d4edda" }]}>
                <Text style={styles.statusText}>{item.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSecundario}>
          <Text style={styles.buttonSecundarioText}>Minhas Avaliações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecundario}>
          <Text style={styles.buttonSecundarioText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSair} onPress={() => navigation.navigate("Login")} >
          <LogOut size={20} color="#fff" />
          <Text style={styles.buttonSairText}>Sair</Text>
        </TouchableOpacity>
     
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },

  editButton: {
    backgroundColor: "#005362",
    padding: 8,
    borderRadius: 8,
  },

  perfilSection: {
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  avatarContainer: {
    marginBottom: 12,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#005362",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },

  avatarText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
  },

  nome: {
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },

  avaliacaoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 4,
  },

  avaliacao: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },

  numAvaliacoes: {
    fontSize: 14,
    color: "#666",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 6,
  },

  infoText: {
    fontSize: 14,
    color: "#666",
  },

  descricao: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    lineHeight: 20,
    marginTop: 8,
  },

  contatoSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 12,
  },

  contatoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#f7f7f7",
    borderRadius: 12,
    marginBottom: 10,
    gap: 12,
  },

  contatoContent: {
    flex: 1,
  },

  contatoLabel: {
    fontSize: 12,
    color: "#999",
    fontWeight: "500",
  },

  contatoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginTop: 2,
  },

  servicosSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  servicosGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  servicoCard: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#e8f5e9",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#527954",
  },

  servicoNome: {
    fontSize: 13,
    fontWeight: "600",
    color: "#527954",
    textAlign: "center",
  },

  historicoSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },

  historicoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 1,
  },

  historicoContent: {
    flex: 1,
  },

  historicoServico: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },

  historicoData: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },

  historicoRight: {
    alignItems: "flex-end",
    gap: 6,
  },

  historicoValor: {
    fontSize: 14,
    fontWeight: "700",
    color: "#005362",
  },

  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: "#d4edda",
  },

  statusText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#28a745",
  },

  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 10,
  },

  buttonSecundario: {
    backgroundColor: "#f0f0f0",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  buttonSecundarioText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#005362",
  },

  buttonSair: {
    backgroundColor: "#E74C3C",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },

  buttonSairText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});