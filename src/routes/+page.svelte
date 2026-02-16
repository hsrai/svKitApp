<script>
    import { COLOR_ANCHORS, RADIUS_MAP, PACKING_MAP, CONTRAST_MAP } from '$lib/themeConstants';
    import { buildTheme } from '$lib/themeEngine';

    let config = $state({
        hue: 220, chroma: 20, contrast: 'NORMAL', radius: 'NORMAL', packing: 'NORMAL', isDark: true
    });

    $effect(() => { buildTheme(config); });

    function setAnchor(anchor) {
        config.hue = anchor.hue;
        config.chroma = anchor.chroma;
        config.isDark = anchor.hue > 50; 
    }
</script>

<div class="main-container">
    <header class="card">
        <h1 class="card__title">System Dashboard</h1>
        <p>LCH Atmospheric Engine v5.0 | Separation of Concern: Strict</p>
    </header>

    <div class="layout-grid">
        <aside>
            <section class="card">
                <h2 class="card__title">3x3 Perceptual Anchors</h2>
                <div class="color-grid">
                    {#each COLOR_ANCHORS as a}
                        <button 
                            onclick={() => setAnchor(a)}
                            class="btn-swatch {config.hue === a.hue ? 'btn-swatch--active' : ''}"
                            style:--h={a.hue}
                            style:--c={a.chroma}
                            aria-label="Set theme to {a.name}"
                            title={a.label}
                        ></button>
                    {/each}
                </div>
            </section>

            <section class="card">
                <h2 class="card__title">Refinements</h2>
                <div class="flex flex-col gap-4">
                    <div>
                        <span class="text-[10px] font-black uppercase opacity-40">Layout Density</span>
                        <div class="flex gap-2 mt-2">
                            {#each Object.keys(PACKING_MAP) as p}
                                <button onclick={() => config.packing = p} class="text-[10px] font-bold px-3 py-1 rounded {config.packing === p ? 'bg-white text-black' : 'bg-white/10'}">{p}</button>
                            {/each}
                        </div>
                    </div>
                </div>
            </section>
        </aside>

        <main class="stress-test">
            <section class="card">
                <h2 class="card__title">Stress Test: Perceptual Readability</h2>
                
                <p><strong>Code Analysis:</strong></p>
                <p>Layman: This creates a color by mixing light, color-strength, and a position on the color wheel.</p>
                <pre><code>root.style.setProperty('--bg-theme', `lch(${"${bgL}"}% ${"${finalChroma}"} ${"${hue}"})`);</code></pre>

                <p><strong>Hierarchical List:</strong></p>
                <ul>
                    <li><strong>Perceptual Anchors:</strong> Ruby (0), Green (140), Blue (220).</li>
                    <li><strong>Separation:</strong> Logic (Engine), Style (Skin), Structure (Skeleton).</li>
                    <li><strong>Naked Strategy:</strong> No inline styles, only data-attribute bridges.</li>
                </ul>

                <p><strong>Data Comparison Table:</strong></p>
                <table>
                    <thead>
                        <tr><th>Anchor</th><th>Hue Position</th><th>Chroma Intensity</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Ruby (Warm)</td><td>0°</td><td>40</td></tr>
                        <tr><td>Blue (Calm)</td><td>220°</td><td>35</td></tr>
                        <tr><td>Yellow (Fresh)</td><td>70°</td><td>45</td></tr>
                    </tbody>
                </table>

                <p><strong>Lorem Ipsum Stress:</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </section>
        </main>
    </div>
</div>