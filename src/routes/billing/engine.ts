import { GLOBAL_CONSTANTS } from '$lib/global.config';
import { BILLING_SETTINGS } from './constants';
import type { FruitItem, BillSummary } from './types';

export const generateSummary = (name: string, items: FruitItem[]): BillSummary => {
    const subTotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
    
    // Logic pulls strictly from your constants file
    const taxAmount = subTotal * BILLING_SETTINGS.defaultTaxRate;
    const taxRatePercent = (BILLING_SETTINGS.defaultTaxRate * 100).toString() + '%';

    return {
        customerName: name,
        subTotal,
        taxAmount,
        grandTotal: subTotal + taxAmount,
        date: new Date().toLocaleDateString(BILLING_SETTINGS.dateFormat),
        currency: GLOBAL_CONSTANTS.currencySymbol,
        taxRateLabel: taxRatePercent 
    };
};