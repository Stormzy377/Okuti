import React, { useEffect } from "react";
import { useColorScheme, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';

// Importando as fontes que instalamos
import { useFonts, VT323_400Regular } from '@expo-google-fonts/vt323';
import { Inter_400Regular, Inter_900Black } from '@expo-google-fonts/inter';

import { HomeScreen } from "./src/screens/HomeScreen";
import { AddDebtScreen } from "./src/screens/AddDebtScreen";
import { Colors } from "./src/theme/colors";

export type RootStackParamList = {
  Home: undefined;
  AddDebt: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// Impede que a tela de carregamento suma antes das fontes estarem prontas
SplashScreen.preventAutoHideAsync();

export default function App() {
  const theme = useColorScheme() ?? "light";
  
  // Carregando as fontes
  const [fontsLoaded] = useFonts({
    Pixel: VT323_400Regular,
    Inter: Inter_400Regular,
    InterBold: Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}/>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // Estilo Brutalista no Header
          headerStyle: { 
            backgroundColor: theme === 'dark' ? '#000' : '#F5F2ED',
          },
          headerTitleStyle: {
            fontFamily: 'Pixel',
            fontSize: 28,
          },
          headerShadowVisible: false, // Remove a sombra suave do iOS
          headerTintColor: theme === 'dark' ? '#fff' : '#000',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'OKUTI // CONTROLE'}}
        />

        <Stack.Screen
          name="AddDebt"
          component={AddDebtScreen}
          options={{ title: 'NOVO KILAPE'}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}