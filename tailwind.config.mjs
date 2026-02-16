import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sozna-bg': '#1a1a2e', // deep purple-black
        'sozna-sidebar': '#0f0f1a', // darker purple-black
        'sozna-text': '#b8b8c8', // soft lavender-gray
        'sozna-heading': '#e4e4f0', // soft white-purple
        'sozna-accent': '#9d8ec4', // muted lavender purple
        'sozna-accent-hover': '#b8a9c9', // lighter lavender
        'sozna-tag': '#2a2a3e', // dark purple-gray
        'sozna-tag-hover': '#3a3a4e', // lighter purple-gray
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