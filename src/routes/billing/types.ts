/**
 * Data structures for the billing system.
 */
export interface FruitItem {
    id: string;
    name: string;
    quantity: number;
    rate: number;
}

export interface BillSummary {
    customerName: string;
    subTotal: number;
    taxAmount: number;
    grandTotal: number;
    date: string;
}