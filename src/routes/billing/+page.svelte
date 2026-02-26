<script lang="ts">
    import { GLOBAL_CONSTANTS } from '$lib/global.config';
    import { generateSummary } from './engine';
    
    // Bundle Imports
    import '$lib/styles/bundles/forms.css';
    import '$lib/styles/bundles/tables.css';
    import './billing-local.css';

    let items = $state([
        { id: crypto.randomUUID(), name: 'Apples', quantity: 2, rate: 50 }
    ]);
    let customer = $state('');
    let summary = $derived(generateSummary(customer, items));

    const add = () => items.push({ id: crypto.randomUUID(), name: '', quantity: 0, rate: 0 });
</script>

<main>
    <header>
        <h1>{GLOBAL_CONSTANTS.companyName}</h1>
        <p>{GLOBAL_CONSTANTS.hqAddress} • {summary.date}</p>
    </header>

    <section>
        <fieldset>
            <legend>Customer</legend>
            <input type="text" bind:value={customer} placeholder="Enter Name..." />
        </fieldset>

        <table data-table-type="responsive">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {#each items as item (item.id)}
                    <tr>
                        <td data-label="Item"><input bind:value={item.name} /></td>
                        <td data-label="Qty"><input type="number" bind:value={item.quantity} /></td>
                        <td data-label="Rate"><input type="number" bind:value={item.rate} /></td>
                        <td data-label="Total">₹{item.quantity * item.rate}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <button type="button" onclick={add}>+ Add Line Item</button>
    </section>

    <footer>
        <aside>
            <h2>Summary</h2>
            <dl>
                <dt>Subtotal</dt> <dd>₹{summary.subTotal}</dd>
                <dt>Grand Total</dt> <dd><output>₹{summary.grandTotal}</output></dd>
            </dl>
        </aside>
    </footer>
</main>