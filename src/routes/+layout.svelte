<script>
    import "../app.css";
    import { onMount } from 'svelte';
    import { buildTheme } from '$lib/themeEngine';

    // Svelte 5 Property Rune
    let { children } = $props();

    // Global default theme state
    let config = $state({
        hue: 220,
        chroma: 0.12,
        contrast: 'NORMAL',
        radius: 'NORMAL',
        packing: 'NORMAL',
        isDark: true
    });

    onMount(() => {
        buildTheme(config);
    });
</script>

{@render children?.()}