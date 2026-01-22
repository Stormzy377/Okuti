import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "../components/Button";
import uuid from "react-native-uuid";
import { Debt } from "../types/Debt";
import { saveDebt } from "../utils/storage";

export function AddDebtScreen({ navigation }: any) {
  // Estados para os campos do formulário
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState("");
  const [obs, setObs] = useState("");

  const handleSave = async () => {
    if (!name || !value || !date) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

    const newDebt: Debt = {
      id: String(Date.now()), // Usando timestamp como ID único simples
      personName: name,
      value: parseFloat(value.replace(",", ".")), // Converte "10,50" para 10.50
      dueDate: date,
      observations: obs,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      await saveDebt(newDebt);
      navigation.goBack();
    } catch (error) {
      alert("Não foi possível salvar a dívida.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Botão de Voltar */}
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={32}
            color="#000"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>Kilápe do Dia</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Nome do Devedor</Text>
          <TextInput
            style={styles.input}
            placeholder="Quem está devendo?"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Valor (Kz)</Text>
          <TextInput
            style={styles.input}
            placeholder="0,00"
            keyboardType="numeric"
            value={value}
            onChangeText={setValue}
          />

          <Text style={styles.label}>Data de Devolução</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={date}
            onChangeText={setDate}
          />

          <Text style={styles.label}>Observação (Opcional)</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Ex: Emprestado para o almoço"
            multiline
            numberOfLines={4}
            value={obs}
            onChangeText={setObs}
          />

          <View style={{ marginTop: 20 }}>
            <Button
              title="Salvar Kilápe"
              onPress={handleSave}
              color="#FFD600"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  scrollContent: {
    padding: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontFamily: "Lexend-Black",
    fontSize: 28,
    marginLeft: 10,
    color: "#000",
  },
  form: {
    gap: 12,
  },
  label: {
    fontFamily: "Lexend-Bold",
    fontSize: 16,
    color: "#000",
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 12,
    padding: 16,
    fontFamily: "Lexend-Regular",
    fontSize: 16,
    // Sombra Neo Brutalista nos inputs também!
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
});
