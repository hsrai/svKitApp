/* Filename: themeConstants.js | Location: src/lib/themeConstants.js */

export const HUE_SHIFT_SECONDARY = 30;
export const HUE_SHIFT_ACCENT = 180;
export const CHROMA_VIBRANT = 0.15;
export const CHROMA_NEUTRAL = 0.01;

export const CONTRAST_MAP = {
    HIGH: { textL: 0.98, muteL: 0.80 },
    SO_SO: { textL: 0.85, muteL: 0.65 },
    LIGHT: { textL: 0.70, muteL: 0.50 }
};

export const PACKING_MAP = {
    COMPACT: { gap: 0.5, line: 1.2 },
    SO_SO: { gap: 1.0, line: 1.5 },
    COMFORT: { gap: 1.5, line: 1.7 }
};

export const RADIUS_MAP = {
    SHARP: "0px",
    SO_SO: "8px",
    WELL_ROUNDED: "24px"
};
