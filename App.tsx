import React, { useCallback } from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
  Lexend_900Black,
} from "@expo-google-fonts/lexend";

// Importando nossas telas e tipos
import { HomeScreen } from "./src/screens/HomeScreen";
import { AddDebtScreen } from "./src/screens/AddDebtScreen";
import { RootStackParamList } from "./src/types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lexend-Regular": Lexend_400Regular,
    "Lexend-Bold": Lexend_700Bold,
    "Lexend-Black": Lexend_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      {/* Deixa os ícones da barra de status (hora, bateria) pretos */}
      <StatusBar barStyle="dark-content" backgroundColor="#FFD600" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#F7F7F7" },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddDebt" component={AddDebtScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
