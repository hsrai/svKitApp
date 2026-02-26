<script lang="ts">
    import { applyPreferences } from '$lib/services/themeEngine';

    let isOpen = $state(false);
    let prefs = $state({
        hue: 220,
        density: 1.0,
        contrast: 60,
        radius: 0.5,
        mode: 'light' as 'light' | 'dark'
    });

    $effect(() => {
        applyPreferences(prefs);
    });
</script>

<aside class="pref-drawer" class:open={isOpen}>
    <button class="toggle-btn" onclick={() => isOpen = !isOpen} aria-label="Settings">
        {isOpen ? '✕' : '⚙'}
    </button>

    {#if isOpen}
        <div class="content">
            <h3>Theme Settings</h3>
            
            <div class="control-group">
                <label>Theme Mode</label>
                <div class="segmented-control">
                    <button class:active={prefs.mode === 'light'} onclick={() => prefs.mode = 'light'}>Light</button>
                    <button class:active={prefs.mode === 'dark'} onclick={() => prefs.mode = 'dark'}>Dark</button>
                </div>
            </div>

            <div class="control-group">
                <label>Hue: {prefs.hue}°</label>
                <input type="range" min="0" max="360" bind:value={prefs.hue} class="hue-slider" />
            </div>

            <div class="control-group">
                <label>Density: {prefs.density}</label>
                <input type="range" min="0.5" max="1.5" step="0.1" bind:value={prefs.density} />
            </div>

            <div class="control-group">
                <label>Radius: {prefs.radius}rem</label>
                <input type="range" min="0" max="1.5" step="0.25" bind:value={prefs.radius} />
            </div>
        </div>
    {/if}
</aside>

<style>
    .pref-drawer {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--card-bg);
        border: 1px solid var(--primary);
        border-radius: var(--radius-theme);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        width: 3.5rem;
        height: 3.5rem;
        overflow: hidden;
        z-index: 9999;
    }

    .pref-drawer.open {
        width: 300px;
        height: auto;
        padding: 1.5rem;
    }

    .toggle-btn {
        width: 3.5rem;
        height: 3.5rem;
        position: absolute;
        top: 0;
        right: 0;
        background: var(--primary);
        color: var(--bg-theme);
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-theme);
    }

    .content { margin-top: 3rem; display: flex; flex-direction: column; gap: 1.5rem; }

    /* The Visual Color Strip */
    .hue-slider {
        appearance: none;
        height: 12px;
        border-radius: 6px;
        background: linear-gradient(to right, 
            oklch(70% 0.15 0), oklch(70% 0.15 60), oklch(70% 0.15 120), 
            oklch(70% 0.15 180), oklch(70% 0.15 240), oklch(70% 0.15 300), oklch(70% 0.15 360)
        );
    }

    .segmented-control {
        display: flex;
        background: color-mix(in oklch, var(--text-theme), transparent 90%);
        border-radius: 0.5rem;
        padding: 0.25rem;
    }

    .segmented-control button {
        flex: 1;
        padding: 0.5rem;
        font-size: 0.8rem;
        border-radius: 0.4rem;
    }

    .segmented-control button.active {
        background: var(--primary);
        color: var(--bg-theme);
    }
</style>