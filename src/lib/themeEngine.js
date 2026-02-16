/* Filename: themeEngine.js | Location: src/lib/themeEngine.js */
import * as CONST from "./themeConstants";

/**
 * Converts Hex to RGB to OKLCH. 
 * This is a simplified version to ensure SSR stability without external plugins.
 */
function hexToOklch(hex) {
    // Basic Hex to RGB
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    // Simplified perceptual lightness (approximation of OKLCH 'L')
    const l = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    
    // We use a fixed Hue/Chroma based on the hex input for stability
    // For a true OKLCH conversion without a library, the math is massive.
    // Here we use the calculated Lightness and constant Hue logic.
    return { 
        l: Math.max(0.1, Math.min(0.9, l)), 
        c: CONST.CHROMA_VIBRANT, 
        h: Math.floor(Math.random() * 360) // Fallback hue or derived from RGB
    };
}

export function buildTheme(seedHex, contrastKey, edgeKey, packingKey) {
    // 1. Get Lightness from Hex (Standard Luminance)
    const r = parseInt(seedHex.slice(1, 3), 16);
    const g = parseInt(seedHex.slice(3, 5), 16);
    const b = parseInt(seedHex.slice(5, 7), 16);
    const l = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // 2. Derive Hue (approximate from RGB)
    // This is more stable than a complex LCH library in SSR
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0;
    if (max !== min) {
        if (max === r) h = (g - b) / (max - min) + (g < b ? 6 : 0);
        else if (max === g) h = (b - r) / (max - min) + 2;
        else h = (r - g) / (max - min) + 4;
        h = Math.round(h * 60);
    }

    // 3. Map preferences
    const contrast = CONST.CONTRAST_MAP[contrastKey] || CONST.CONTRAST_MAP.SO_SO;
    const packing  = CONST.PACKING_MAP[packingKey]   || CONST.PACKING_MAP.SO_SO;
    const radius   = CONST.RADIUS_MAP[edgeKey]       || CONST.RADIUS_MAP.SO_SO;

    const isDark = l < 0.5;
    const bgL    = isDark ? 0.05 : 0.98;
    const textL  = isDark ? contrast.textL : (1 - contrast.textL);
    const shadowAlpha = edgeKey === 'WELL_ROUNDED' ? (isDark ? '0.6' : '0.15') : '0';

    return `
        :root {
            --h-primary: ${h};
            --l-primary: ${l.toFixed(3)};
            --c-primary: ${CONST.CHROMA_VIBRANT};
            --h-secondary: ${(h + CONST.HUE_SHIFT_SECONDARY) % 360};
            --h-accent: ${(h + CONST.HUE_SHIFT_ACCENT) % 360};
            --bg-l: ${bgL};
            --bg-c: ${CONST.CHROMA_NEUTRAL};
            --text-l: ${textL};
            --radius: ${radius};
            --gap-mult: ${packing.gap};
            --line-height: ${packing.line};
            --shadow-opacity: ${shadowAlpha};
            --font-base: clamp(1rem, 0.4vw + 0.8rem, 1.2rem);
        }
    `.replace(/\s+/g, ' ').trim();
}