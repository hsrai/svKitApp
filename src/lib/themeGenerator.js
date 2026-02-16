// src/lib/themeConstants.js

export const HUE_SHIFT_SECONDARY = 30;   // Degrees
export const HUE_SHIFT_ACCENT = 180;      // Opposite side (Complement)
export const CHROMA_VIBRANT = 0.15;       // For Primary/Accent
export const CHROMA_SUBTLE = 0.02;        // For Background/Neutral

export const CONTRAST_RATIOS = {
    HIGH: { textL: 0.98, textMutedL: 0.80 },
    SO_SO: { textL: 0.85, textMutedL: 0.65 },
    LIGHT: { textL: 0.70, textMutedL: 0.50 }
};

export const PACKING_MULTIPLIERS = {
    COMPACT: { gap: 0.5, line: 1.2 },
    SO_SO: { gap: 1.0, line: 1.5 },
    COMFORT: { gap: 1.5, line: 1.7 }
};

export const EDGE_RADII = {
    SHARP: "0px",
    SO_SO: "8px",
    WELL_ROUNDED: "24px"
};