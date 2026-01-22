import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

// Propriedades que o botão pode receber
interface ButtonProps {
    title: string;
    onPress: () => void;
    color?: string; // Cor opcional do botão
}

export function Button({ title, onPress, color = "#A3E635" }: ButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.container, { backgroundColor: color }]}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderWidth: 3,
        borderColor: '#000',
        borderRadius: 12,
        // Efeito de sombra
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '900',
        textAlign: 'center',
        color: '#000',
        textTransform: 'uppercase',
    }
});