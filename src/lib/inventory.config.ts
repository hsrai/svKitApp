export interface Product {
    id: string;
    name: string;
    rate: number;
    unit: string;
}

export const FRUIT_INVENTORY: Product[] = [
    { id: 'f1', name: 'Apple (Kashmiri)', rate: 120, unit: 'kg' },
    { id: 'f2', name: 'Banana (Robusta)', rate: 60, unit: 'doz' },
    { id: 'f3', name: 'Mango (Alphonso)', rate: 450, unit: 'kg' },
    { id: 'f4', name: 'Orange (Nagpur)', rate: 80, unit: 'kg' },
    { id: 'f5', name: 'Grapes (Seedless)', rate: 100, unit: 'kg' },
    { id: 'f6', name: 'Pomegranate', rate: 180, unit: 'kg' },
    { id: 'f7', name: 'Papaya', rate: 40, unit: 'kg' }
];