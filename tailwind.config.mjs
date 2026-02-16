import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sozna-bg': '#0d1117', // deep night black-blue
        'sozna-sidebar': '#010409', // darker void
        'sozna-text': '#a5b4fc', // soft indigo-gray
        'sozna-heading': '#e0e7ff', // pale indigo-white
        'sozna-accent': '#22d3ee', // cyan neon
        'sozna-accent-hover': '#67e8f9', // brighter cyan
        'sozna-tag': '#1e293b', // dark slate
        'sozna-tag-hover': '#334155', // lighter slate
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