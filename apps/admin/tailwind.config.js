/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    '../../packages/shadcn/src/components/**/*.{ts,tsx}',
    '../../packages/shared-components/src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [require('../../packages/shadcn/src/tailwind/tailwind.config.js')],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
