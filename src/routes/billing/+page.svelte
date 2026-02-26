<script lang="ts">
    import { GLOBAL_CONSTANTS } from '$lib/global.config';
    import { generateSummary } from './engine';
    import { FRUIT_INVENTORY } from '$lib/inventory.config';
    
    // 1. Global Standard Bundles (ERPs use these across all modules)
    import '$lib/styles/bundles/forms.css';
    import '$lib/styles/bundles/tables.css';
    
    // 2. Local Feature Identity (Specific to Billing)
    import './billing-local.css';

    // 3. State Management (Svelte 5 Runes)
    let customerName = $state('');
    let items = $state([
        { id: crypto.randomUUID(), name: 'Apples', quantity: 10, rate: 50 }
    ]);

    // 4. Derived Logic (The 'Brain' - updates automatically)
    let summary = $derived(generateSummary(customerName, items));

    const addItem = () => {
        items.push({ id: crypto.randomUUID(), name: '', quantity: 0, rate: 0 });
    };

    const removeItem = (id: string) => {
        items = items.filter(i => i.id !== id);
    };

    const handleProductChange = (item: any, event: Event) => {
        const select = event.target as HTMLSelectElement;
        const selectedFruit = FRUIT_INVENTORY.find(f => f.name === select.value);
        
        if (selectedFruit) {
            item.name = selectedFruit.name;
            item.rate = selectedFruit.rate; // Auto-fill the rate
        }
    };

</script>

<main>
    <header>
        <h1>{GLOBAL_CONSTANTS.companyName}</h1>
        <address>
            {GLOBAL_CONSTANTS.hqAddress} | <time>{summary.date}</time>
        </address>
    </header>

    <section>
        <fieldset>
            <legend>Customer Details</legend>
            <input 
                type="text" 
                bind:value={customerName} 
                placeholder="Enter Customer Name" 
            />
        </fieldset>

        <table data-table-type="responsive">
            <caption>Fruit Sales Invoice</caption>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>


{#each items as item (item.id)}
    <tr>
        <td data-label="Description">
            <select 
                value={item.name} 
                onchange={(e) => handleProductChange(item, e)}
            >
                <option value="" disabled selected>Select a Fruit</option>
                {#each FRUIT_INVENTORY as fruit}
                    <option value={fruit.name}>{fruit.name}</option>
                {/each}
            </select>
        </td>
        <td data-label="Qty">
            <input type="number" bind:value={item.quantity} min="0" />
        </td>
        <td data-label="Rate">
            <input type="number" bind:value={item.rate} />
        </td>
<td data-label="Amount">
    {summary.currency}{(item.quantity * item.rate).toFixed(2)}
</td>

<td data-label="Action">
    <button 
        type="button" 
        onclick={() => removeItem(item.id)}
        class="icon-button"
        title="Delete Item"
    >
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            fill-opacity="0" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
        >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
    </button>
</td>        </tr>
{/each}
            </tbody>
        </table>

        <button type="button" onclick={addItem}>
            + Add Line Item
        </button>
    </section>

    <footer>
        <aside>
            <h2>Invoice Summary</h2>
            <dl>
                <dt>Sub-total</dt>
                <dd>{summary.currency}{summary.subTotal.toFixed(2)}</dd>
                
                <dt>GST ({summary.taxRateLabel})</dt>
                <dd>{summary.currency}{summary.taxAmount.toFixed(2)}</dd>
                
                <dt>Grand Total</dt>
                <dd>
                    <output>{summary.currency}{summary.grandTotal.toFixed(2)}</output>
                </dd>
            </dl>
        </aside>
    </footer>
</main>