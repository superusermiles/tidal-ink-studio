import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ocean-teal': '#2A7B88',
        'warm-sand': '#E8D5B7',
        'deep-navy': '#1B2838',
        'coral-accent': '#E07A5F',
      },
      fontFamily: {
        space: ['var(--font-space)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;