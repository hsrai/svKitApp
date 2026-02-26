<script lang="ts">
    import { GLOBAL_CONSTANTS } from '$lib/global.config';
    import { BILLING_SETTINGS } from './constants';
    import { generateSummary } from './engine';
    import type { FruitItem } from './types';

    // Global Bundles
    import '$lib/styles/bundles/forms.css';
    import '$lib/styles/bundles/tables.css';
    // Local Identity
    import './billing-local.css';

    let customerName = $state('');
    let items = $state<FruitItem[]>([
        { id: crypto.randomUUID(), name: '', quantity: 0, rate: 0 }
    ]);
    let summary = $derived(generateSummary(customerName, items));

    const addItem = () => items.push({ id: crypto.randomUUID(), name: '', quantity: 0, rate: 0 });
    const removeItem = (id: string) => items = items.filter(i => i.id !== id);
</script>

<main>
    <header>
        <h1>{GLOBAL_CONSTANTS.companyName}</h1>
        <address class="not-italic text-sm opacity-80">
            {GLOBAL_CONSTANTS.hqAddress} | <time>{summary.date}</time>
        </address>
    </header>

    <section class="flex flex-col gap-8">
        <fieldset>
            <legend>Customer Details</legend>
            <input type="text" bind:value={customerName} placeholder="Customer Name" />
        </fieldset>

        <table data-table-type="responsive">
            <caption>Detailed Fruit Invoice</caption>
            <thead>
                <tr>
                    <th>Fruit</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {#each items as item (item.id)}
                    <tr>
                        <td data-label="Fruit"><input bind:value={item.name} placeholder="Item Name" /></td>
                        <td data-label="Qty"><input type="number" bind:value={item.quantity} /></td>
                        <td data-label="Rate"><input type="number" bind:value={item.rate} /></td>
                        <td data-label="Amount">{GLOBAL_CONSTANTS.currencySymbol}{(item.quantity * item.rate).toFixed(2)}</td>
                        <td data-label="Action">
                            <button onclick={() => removeItem(item.id)} class="text-accent text-xs uppercase font-bold">Remove</button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>

        <button type="button" class="add-btn" onclick={addItem}>+ Add Fruit</button>
    </section>

    <footer>
        <aside>
            <h2 class="mb-4 text-xl font-bold border-b pb-2">Final Summary</h2>
            <dl>
                <dt>Sub-total</dt>
                <dd>{GLOBAL_CONSTANTS.currencySymbol}{summary.subTotal.toFixed(2)}</dd>

                <dt>GST ({(BILLING_SETTINGS.defaultTaxRate * 100)}%)</dt>
                <dd>{GLOBAL_CONSTANTS.currencySymbol}{summary.taxAmount.toFixed(2)}</dd>

                <dt class="text-xl">Grand Total</dt>
                <dd><output>{GLOBAL_CONSTANTS.currencySymbol}{summary.grandTotal.toFixed(2)}</output></dd>
            </dl>
        </aside>
    </footer>
</main>