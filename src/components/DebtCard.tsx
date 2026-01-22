import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Debt } from "../types/Debt";

interface Props {
  data: Debt;
  onPress: () => void;
}

export function DebtCard({ data, onPress }: Props) {
  // Definimos a cor baseada no status
  const isPaid = data.status === "paid";
  const statusColor = isPaid ? "#4ADE80" : "#F87171"; // Verde para pago, Vermelho para pendente

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.content}>
        <View>
          <Text style={styles.personName}>{data.personName}</Text>
          <Text style={styles.date}>Vence em: {data.dueDate}</Text>
        </View>

        <View style={styles.rightContent}>
          <Text style={styles.value}>R$ {data.value.toFixed(2)}</Text>
          <View style={[styles.badge, { backgroundColor: statusColor }]}>
            <MaterialCommunityIcons
              name={isPaid ? "check-circle" : "clock-outline"}
              size={14}
              color="#000"
            />
            <Text style={styles.badgeText}>{isPaid ? "PAGO" : "PENDENTE"}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderWidth: 3,
    borderColor: "#000",
    borderRadius: 12,
    marginBottom: 16,
    // Sombra "Hard" Neo Brutalista
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  content: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  personName: {
    fontFamily: "Lexend-Bold",
    fontSize: 18,
    color: "#000",
  },
  date: {
    fontFamily: "Lexend-Regular",
    fontSize: 14,
    color: "#666",
  },
  rightContent: {
    alignItems: "flex-end",
  },
  value: {
    fontFamily: "Lexend-Black",
    fontSize: 18,
    color: "#000",
    marginBottom: 4,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
  },
  badgeText: {
    fontFamily: "Lexend-Bold",
    fontSize: 10,
    marginLeft: 4,
    color: "#000",
  },
});
