import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sozna-bg': '#18181b', // zinc-900
        'sozna-sidebar': '#09090b', // zinc-950
        'sozna-text': '#d4d4d8', // zinc-300
        'sozna-heading': '#f4f4f5', // zinc-100
        'sozna-accent': '#f59e0b', // amber-500
        'sozna-accent-hover': '#fbbf24', // amber-400
        'sozna-tag': '#27272a', // zinc-800
        'sozna-tag-hover': '#3f3f46', // zinc-700
      },
      fontFamily: {
        serif: ['"Crimson Pro"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
  ],
};