import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>OKUTI</Text>
            <Text style={styles.subtitle}>Quem deve, Paga</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#FFD600", // Amarelo vibrante
    borderBottomWidth: 4,
    borderColor: "#000",
  },
  title: {
    fontFamily: "Lexend-Black",
    fontSize: 32,
    color: "#000",
  },
  subtitle: {
    fontFamily: "Lexend-Regular",
    fontSize: 16,
    color: "#000",
    marginTop: -5,
  },
});