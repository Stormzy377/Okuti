import AsyncStorage from "@react-native-async-storage/async-storage";
import { Debt } from "../types/Debt";

const COLLECTION_NAME = "@okuti:debts";

export async function saveDebt(newDebt: Debt) {
  try {
    // 1. Procuramos o que já está salvo
    const response = await AsyncStorage.getItem(COLLECTION_NAME);
    const previousData = response ? JSON.parse(response) : [];

    // 2. Juntamos a nova dívida com as antigas
    const data = [...previousData, newDebt];

    // 3. Guardamos a lista atualizada (temos de transformar em string)
    await AsyncStorage.setItem(COLLECTION_NAME, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    throw error; // Repassamos o erro para a UI tratar
  }
}

export async function getAllDebts(): Promise<Debt[]> {
  try {
    const response = await AsyncStorage.getItem(COLLECTION_NAME);
    const data = response ? JSON.parse(response) : [];
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function updateDebtStatus(id: string) {
  try {
    const response = await getAllDebts();
    const updated = response.map((debt) => {
      if (debt.id === id) {
        return { ...debt, status: "paid" as const };
      }
      return debt;
    });

    await AsyncStorage.setItem(COLLECTION_NAME, JSON.stringify(updated));
  } catch (error) {
    console.log(error);
  }
}
