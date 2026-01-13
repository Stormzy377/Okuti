src/
  ├── components/   (Botões, inputs, itens da lista)
  ├── screens/      (As telas: Home, Cadastro, Detalhes)
  ├── services/     (Configuração do AsyncStorage e Notificações)
  ├── types/        (Definições de tipos do TypeScript)
  ├── utils/        (Cálculos de data com dayjs e formatação de moeda)
  └── theme/        (Cores e estilos globais)

  Gerenciamento automático de cores e temas do sistema

  export const Colors = {
  light: {
    background: '#FFFFFF',
    text: '#121212',
    primary: '#007AFF', // Azul moderno
    secondary: '#5856D6',
    card: '#F2F2F7',
    border: '#C7C7CC',
    danger: '#FF3B30',
    success: '#34C759',
  },
  dark: {
    background: '#000000',
    text: '#FFFFFF',
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    card: '#1C1C1E',
    border: '#38383A',
    danger: '#FF453A',
    success: '#32D74B',
  }
};

npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../theme/colors';

export function HomeScreen() {
  const theme = useColorScheme() ?? 'light'; // Detecta se o celular está em dark ou light mode
  const currentColors = Colors[theme];

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={{ color: currentColors.text }}>Minhas Dívidas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../theme/colors';

export function AddDebtScreen() {
  const theme = useColorScheme() ?? 'light';
  
  return (
    <View style={[styles.container, { backgroundColor: Colors[theme].background }]}>
      <Text style={{ color: Colors[theme].text }}>Nova Dívida</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});