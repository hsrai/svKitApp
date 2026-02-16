/* Filename: themeConstants.js | Location: src/lib/themeConstants.js */

export const PACKING_MAP = {
    COMPACT:     { gap: 0.5, line: 1.25 }, 
    NORMAL:      { gap: 1.0, line: 1.60 }, 
    COMFORTABLE: { gap: 1.8, line: 2.0  }  
};

export const RADIUS_MAP = {
    SHARP:   "0px",   // Serious, professional
    NORMAL:  "8px",   // Modern, friendly
    ROUNDED: "24px"   // Playful, organic
};

export const CONTRAST_MAP = {
    LOW:    { textL: 0.70 }, // Reduced eye strain
    NORMAL: { textL: 0.85 }, // Recommended for most
    HIGH:   { textL: 1.0 }   // Maximum readability
};

export const CHROMA_VIBRANT = 0.15;
export const CHROMA_NEUTRAL = 0.02;
export const HUE_SHIFT_SECONDARY = 30;
export const HUE_SHIFT_ACCENT = 150;