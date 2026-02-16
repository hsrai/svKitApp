<script>
    /**
     * @file +layout.svelte
     * @description The "Brain" of the application. 
     * Manages global theme state and injects dynamic CSS variables.
     */
    import "../app.css";
    import { buildTheme } from '$lib/themeEngine';
    import * as CONST from '$lib/themeConstants';

    // 1. Props & Children
    let { children } = $props();
    
    // 2. Theme State (Svelte 5 Runes)
    let favColor = $state("#3b82f6");
    let contrast = $state("SO_SO");
    let edges    = $state("SO_SO");
    let packing  = $state("SO_SO");

    // 3. Computed Styles (Derived Rune)
    // This triggers buildTheme whenever state changes
    let cssVariables = $derived(buildTheme(favColor, contrast, edges, packing));
</script>

<svelte:head>
    {@html `<style>${cssVariables}</style>`}
</svelte:head>

{@render children()}

<aside class="dashboard">
    <header>
        <h2 class="dashboard__title">Theme Dashboard</h2>
    </header>
    
    <div class="dashboard__item">
        <label class="dashboard__label" for="color">Primary Color</label>
        <input id="color" type="color" bind:value={favColor} class="dashboard__input" />
    </div>

    <div class="dashboard__item">
        <label class="dashboard__label" for="contrast">Contrast Level</label>
        <select id="contrast" bind:value={contrast} class="dashboard__input">
            {#each Object.keys(CONST.CONTRAST_MAP) as opt}
                <option value={opt}>{opt}</option>
            {/each}
        </select>
    </div>

    <div class="dashboard__item">
        <label class="dashboard__label" for="edges">Corner Radius</label>
        <select id="edges" bind:value={edges} class="dashboard__input">
            {#each Object.keys(CONST.RADIUS_MAP) as opt}
                <option value={opt}>{opt}</option>
            {/each}
        </select>
    </div>

    <div class="dashboard__item">
        <label class="dashboard__label" for="density">Content Density</label>
        <select id="density" bind:value={packing} class="dashboard__input">
            {#each Object.keys(CONST.PACKING_MAP) as opt}
                <option value={opt}>{opt}</option>
            {/each}
        </select>
    </div>
</aside>