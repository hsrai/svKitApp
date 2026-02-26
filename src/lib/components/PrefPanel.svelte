<script lang="ts">
    import { onMount } from 'svelte';
    import { applyPreferences } from '$lib/services/themeEngine';

    let prefs = $state({
        hue: 200,      // Blue
        density: 1.0,  // Normal
        contrast: 60,  // Mid
        radius: 0.5    // Rounded
    });

    // Sync Engine with State
    $effect(() => {
        applyPreferences(prefs);
    });

    onMount(() => {
        const saved = localStorage.getItem('erp-prefs');
        if (saved) prefs = JSON.parse(saved);
    });

    const save = () => localStorage.setItem('erp-prefs', JSON.stringify(prefs));
</script>

<aside data-simulation-panel>
    <details>
        <summary>User Preferences (Simulation)</summary>
        <section>
            <label>Hue: {prefs.hue}
                <input type="range" min="0" max="360" bind:value={prefs.hue} />
            </label>
            
            <label>Density (Gap): {prefs.density}
                <input type="range" min="0.5" max="2" step="0.1" bind:value={prefs.density} />
            </label>
            
            <label>Contrast: {prefs.contrast}%
                <input type="range" min="30" max="80" bind:value={prefs.contrast} />
            </label>
            
            <label>Corner Radius: {prefs.radius}rem
                <input type="range" min="0" max="2" step="0.25" bind:value={prefs.radius} />
            </label>
            
            <button onclick={save}>Save to Profile</button>
        </section>
    </details>
</aside>

<style>
    /* Styling the simulation box itself using the variables it controls */
    aside[data-simulation-panel] {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        background: var(--card-bg);
        border: 2px solid var(--primary);
        border-radius: var(--radius-theme);
        padding: 1rem;
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }
    section { display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; }
    label { display: flex; flex-direction: column; font-size: 0.8rem; font-weight: bold; }
</style>