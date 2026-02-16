import { RADIUS_MAP, PACKING_MAP, CONTRAST_MAP } from './themeConstants';

/**
 * Enterprise Theme Engine
 * Generates LCH tokens for the global scope.
 */
export function buildTheme(config) {
    if (typeof document === 'undefined') return;

    const { hue, chroma, contrast, radius, packing, isDark } = config;
    
    // Foundation math
    const bgL = isDark ? 12 : 94;
    const multiplier = CONTRAST_MAP[contrast] || 1.0;
    const finalChroma = (chroma || 20) * multiplier;
    
    const glassL = isDark ? bgL + 6 : bgL - 6;
    const textL = isDark ? 98 : 2;

    const root = document.documentElement;
    
    // Applying CSS variables with robust LCH syntax
    root.style.setProperty('--bg-theme', `lch(${bgL}% ${finalChroma} ${hue})`);
    root.style.setProperty('--card-bg', `lch(${glassL}% ${finalChroma} ${hue} / 0.75)`);
    root.style.setProperty('--text-theme', `lch(${textL}% 2 ${hue})`);
    root.style.setProperty('--primary', `lch(60% 50 ${hue})`);
    
    const pack = PACKING_MAP[packing];
    root.style.setProperty('--radius-theme', RADIUS_MAP[radius]);
    root.style.setProperty('--line-height-theme', pack.line);
    root.style.setProperty('--gap-mult', pack.gap);
    root.style.setProperty('--card-padding', pack.padding);
}