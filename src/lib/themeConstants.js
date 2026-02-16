/**
 * UI Laboratory Constants
 */
export const COLOR_ANCHORS = [
    { name: 'Ruby',   hue: 0,   chroma: 40,  label: 'Warm' },   
    { name: 'Green',  hue: 140, chroma: 35,  label: 'Natural' }, 
    { name: 'Violet', hue: 280, chroma: 40,  label: 'Creative' },
    { name: 'Orange', hue: 25,  chroma: 45,  label: 'Energy' },  
    { name: 'Blue',   hue: 220, chroma: 35,  label: 'Calm' },    
    { name: 'Slate',  hue: 220, chroma: 5,   label: 'Neutral' }, 
    { name: 'Yellow', hue: 70,  chroma: 45,  label: 'Fresh' },  
    { name: 'Indigo', hue: 255, chroma: 35,  label: 'Deep' },   
    { name: 'Rose',   hue: 340, chroma: 10,  label: 'Muted' }
];

export const RADIUS_MAP = { SHARP: "0px", NORMAL: "12px", ROUND: "24px" };
export const PACKING_MAP = { 
    COMPACT: { gap: 0.6, line: 1.25, padding: "1rem" }, 
    NORMAL: { gap: 1.0, line: 1.55, padding: "2rem" }, 
    COMFORTABLE: { gap: 1.8, line: 1.9, padding: "3rem" } 
};
export const CONTRAST_MAP = { LOW: 0.4, NORMAL: 1.0, HIGH: 1.6 };