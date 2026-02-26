export const applyPreferences = (prefs: {
    hue: number,
    density: number,
    contrast: number,
    radius: number,
    mode: 'light' | 'dark'
}) => {
    const root = document.documentElement;
    const isDark = prefs.mode === 'dark';
    
    // 1. Color Logic (OKLCH)
    root.style.setProperty('--primary', `oklch(${prefs.contrast}% 0.15 ${prefs.hue})`);
    root.style.setProperty('--accent', `oklch(${prefs.contrast}% 0.15 ${prefs.hue + 150})`); 
    
    // Backgrounds based on Mode
    root.style.setProperty('--bg-theme', isDark ? `oklch(12% 0.01 ${prefs.hue})` : `oklch(99% 0.01 ${prefs.hue})`);
    root.style.setProperty('--card-bg', isDark ? `oklch(18% 0.02 ${prefs.hue})` : `oklch(100% 0 0)`);
    root.style.setProperty('--text-theme', isDark ? `oklch(98% 0.01 ${prefs.hue})` : `oklch(15% 0.02 ${prefs.hue})`);

    // 2. Structural Logic
    root.style.setProperty('--gap-mult', prefs.density.toString());
    root.style.setProperty('--radius-theme', `${prefs.radius}rem`);
    root.style.setProperty('--base-font-size', `${0.85 + (prefs.density * 0.1)}rem`);
};