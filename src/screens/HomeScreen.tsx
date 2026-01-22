import React from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { DebtCard } from "../components/DebtCard";
import { Button } from "../components/Button"; // Aquele botão que criamos no Passo 3
import { Debt } from "../types/Debt";

// Dados fictícios para teste
const MOCK_DEBTS: Debt[] = [
  {
    id: "1",
    personName: "João Silva",
    value: 50.0,
    dueDate: "25/10/2023",
    status: "pending",
    createdAt: String(new Date()),
  },
  {
    id: "2",
    personName: "Maria Souza",
    value: 120.5,
    dueDate: "20/10/2023",
    status: "paid",
    createdAt: String(new Date()),
  },
];

export function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>
        <FlatList
          data={MOCK_DEBTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DebtCard
              data={item}
              onPress={() => console.log("Clicou na dívida")}
            />
          )}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Botão flutuante para adicionar nova dívida */}
      <View style={styles.footer}>
        <Button
          title="+ Nova Dívida"
          onPress={() => navigation.navigate("AddDebt")}
          color="#A3E635"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7", // Fundo levemente cinza para destacar o branco dos cards
  },
  content: {
    flex: 1,
    padding: 20,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
});
