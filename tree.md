```sh
/ (Project Root)
├── tailwind.config.cjs        # The Bridge: Maps CSS Variables to Tailwind tokens
├── package.json               # node packages needed
├── src/
│   ├── app.css                # The Skin: Decorative BEM classes using @apply
│   ├── lib/
│   │   ├── themeConstants.js  # The Truth: Identified math constants (PI-style)
│   │   └── themeEngine.js     # The Brain: Logic that converts inputs to CSS
│   └── routes/
│       ├── +layout.svelte     # The Injection: Svelte 5 Runes + <head> Style Tag
│       └── +page.svelte       # The Skeleton: Pure BEM-based Naked HTML content
```
1.
2.
3. src/app.css
4.
5. src/lib/themeEngine.js
6. src/routes/+layout.svelte
7. src/routes/+page.svelte
