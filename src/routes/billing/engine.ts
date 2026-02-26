import { GLOBAL_CONSTANTS } from '$lib/global.config';
import { BILLING_SETTINGS } from './constants';
import type { FruitItem, BillSummary } from './types';

export const generateSummary = (name: string, items: FruitItem[]): BillSummary => {
    const subTotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
    const taxAmount = subTotal * BILLING_SETTINGS.defaultTaxRate;
    
    return {
        customerName: name,
        subTotal,
        taxAmount,
        grandTotal: subTotal + taxAmount,
        date: new Date().toLocaleDateString(BILLING_SETTINGS.dateFormat),
        currency: GLOBAL_CONSTANTS.currencySymbol
    };
};