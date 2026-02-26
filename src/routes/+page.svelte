<script>
    import { COLOR_ANCHORS, RADIUS_MAP, PACKING_MAP, CONTRAST_MAP } from '$lib/themeConstants';
    import { buildTheme } from '$lib/themeEngine';

    // State Rune: Enterprise-grade reactivity
    let config = $state({
        hue: 220, 
        chroma: 25, 
        contrast: 'NORMAL', 
        radius: 'NORMAL', 
        packing: 'NORMAL', 
        isDark: true
    });

    let isExpanded = $state(false);

    // Effect Rune: Syncs state to CSS variables
    $effect(() => { 
        buildTheme(config); 
    });

    function toggleMode() { 
        config.isDark = !config.isDark; 
    }
</script>

<aside class="lab-controls {!isExpanded ? 'lab-controls--collapsed' : ''}">
    <button 
        type="button"
        class="lab-header-btn" 
        onclick={() => isExpanded = !isExpanded}
        aria-expanded={isExpanded}
        aria-controls="lab-panel-content"
    >
        {#if isExpanded}
            <span class="text-[10px] font-black uppercase tracking-widest">Laboratory Controls</span>
            <span class="text-xs">✕</span>
        {:else}
            <span class="w-full text-center">⚙️</span>
        {/if}
    </button>

    {#if isExpanded}
        <div id="lab-panel-content" class="lab-body">
            <section>
                <span class="text-[9px] uppercase font-black opacity-40">Perceptual Hues</span>
                <div class="color-grid mt-2">
                    {#each COLOR_ANCHORS as a}
                        <button 
                            type="button"
                            onclick={() => {config.hue = a.hue; config.chroma = a.chroma;}} 
                            class="btn-swatch {config.hue === a.hue ? 'btn-swatch--active' : ''}" 
                            style:--h={a.hue} 
                            style:--c={a.chroma}
                            aria-label="Set hue to {a.name}"
                        ></button>
                    {/each}
                </div>
            </section>

            <section>
                <span class="text-[9px] uppercase font-black opacity-40">Atmosphere</span>
                <button 
                    type="button"
                    onclick={toggleMode} 
                    class="w-full mt-2 py-3 text-[10px] font-bold uppercase tracking-tight bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                >
                    Mode: {config.isDark ? 'Dark (Shaded)' : 'Light (Tinted)'}
                </button>
            </section>

            <section>
                <span class="text-[9px] uppercase font-black opacity-40">Geometry & Density</span>
                <div class="grid grid-cols-3 gap-1 mt-2">
                    {#each Object.keys(PACKING_MAP) as p}
                        <button 
                            type="button"
                            onclick={() => config.packing = p} 
                            class="py-2 text-[9px] font-bold rounded {config.packing === p ? 'bg-white text-black' : 'bg-white/5'}"
                        >
                            {p}
                        </button>
                    {/each}
                </div>
            </section>
        </div>
    {/if}
</aside>

<main class="main-content">
    <article class="card">
        <header>
            <h1>The Enterprise Laboratory</h1>
            <p class="text-xl opacity-60">Testing perceptual anchors and glassmorphism at scale.</p>
        </header>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Separation of Concern</strong> is demonstrated here by keeping the style logic in the Skin (CSS) and the structure in this Skeleton (Svelte). Below you will find a variety of elements to stress test the <code>{config.packing}</code> density.</p>
        
        <blockquote class="card-quote">
            "Design is not just what it looks like and feels like. Design is how it works within the constraints of the environment."
        </blockquote>
    </article>

    <section class="card">
        <h2>Data Representation</h2>
        <p>Layman: This table shows how our system is currently organized.</p>
        <table>
            <thead>
                <tr><th>Component</th><th>Role</th><th>Status</th></tr>
            </thead>
            <tbody>
                <tr><td>Constants</td><td>Perceptual Data</td><td>Verified</td></tr>
                <tr><td>Engine</td><td>Logic Injector</td><td>Reactive</td></tr>
                <tr><td>Skin</td><td>Visual Design</td><td>Global</td></tr>
            </tbody>
        </table>
    </section>

    <section class="card">
        <h2>Technical Specification</h2>
        <p>Layman: This code snippet represents the brain of the theme engine.</p>
        <pre><code>// Dynamic LCH Token Generation
// Logic uses the state: {config.isDark ? 'Dark' : 'Light'} Mode
root.style.setProperty('--bg-theme', `lch(L C H)`);</code></pre>
        
        <h3 class="mt-8 mb-4 font-bold uppercase text-xs opacity-50">Typography Block</h3>
        <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortissollicitudin augue. </p>
        
        <ul class="stress-list">
            <li>✓ Robust accessibility via ARIA labels.</li>
            <li>✓ Responsive layout grids for all devices.</li>
            <li>✓ Dynamic LCH color mapping for contrast safety.</li>
        </ul>
    </section>

    <section class="card">
        <h2>Interactive Feedback</h2>
        <p>Test button rounding (<code>{config.radius}</code>) and hover states below:</p>
        <div class="flex gap-4">
            <button type="button" class="btn-primary">Execute Primary</button>
            <button type="button" class="btn-secondary">Cancel Action</button>
        </div>
    </section>
</main>