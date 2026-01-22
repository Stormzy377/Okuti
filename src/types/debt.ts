export interface Debt {
    id: string;
    personName: string;
    value: number;
    dueDate: string; // Guardamos comos tring (ISO) para facilitar o salvamento no AsyncStorage
    observations?: string;
    status: 'pending' | 'paid';
    createdAt: string;
}