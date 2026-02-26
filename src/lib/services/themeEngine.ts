export const applyPreferences = (prefs: {
    hue: number,
    density: number,
    contrast: number,
    radius: number
}) => {
    const root = document.documentElement;
    
    // 1. Perceptual Color Logic
    // Using OKLCH ensures the 'vibe' changes but 'readability' stays constant
    root.style.setProperty('--primary', `oklch(${prefs.contrast}% 0.15 ${prefs.hue})`);
    root.style.setProperty('--accent', `oklch(${prefs.contrast}% 0.15 ${prefs.hue + 120})`); 
    
    // Background logic: Light mode for ERP focus
    root.style.setProperty('--bg-theme', `oklch(99% 0.01 ${prefs.hue})`);
    root.style.setProperty('--card-bg', `oklch(100% 0 0)`);
    root.style.setProperty('--text-theme', `oklch(20% 0.02 ${prefs.hue})`);

    // 2. The Physics of Space
    root.style.setProperty('--gap-mult', prefs.density.toString());
    root.style.setProperty('--radius-theme', `${prefs.radius}rem`);
    
    // 3. Mathematical Typography
    root.style.setProperty('--base-font-size', `${0.9 + (prefs.density * 0.05)}rem`);
};