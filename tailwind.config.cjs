module.exports = {
  content: ['./src/**/*.{svelte,ts,css}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',   // slate-900
        surface: '#111827',      // gray-900
        primary: '#e11d48',      // rose-600
        secondary: '#2563eb',    // blue-600
        accent: '#f59e0b',       // amber-500
        text: '#e5e7eb'          // gray-200
      }
    }
  },
  plugins: []
};