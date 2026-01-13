import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../theme/colors';

export function HomeScreen() {
    const theme = useColorScheme() ?? 'light';
    const currentColors = Colors[theme];

    return (
        <View style={[styles.container, { backgroundColor: currentColors.background }]}>
            <Text style={{ color: currentColors.text }}>Meus Kilapes</Text>
        </View>
    )
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    });