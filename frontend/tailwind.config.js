/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ─── New Palette ─── */
        'brand-navy': '#012C3D',
        'brand-cream': '#F7F8F3',
        'brand-red': '#F8444F',
        'brand-red-dark': '#d13841',
        'brand-cyan': '#78BDC4',
        
        charcoal: '#012C3D',
        teal: {
          DEFAULT: '#78BDC4',
          light: '#a1d6da',
          muted: '#5a9da3',
        },
        sky: {
          DEFAULT: '#F7F8F3',
          light: '#ffffff',
        },
        gold: {
          DEFAULT: '#F8444F',
          light: '#f96972',
          pale: '#fadfe1',
        },
        silver: {
          DEFAULT: '#78BDC4',
          teal: '#a1d6da',
        },
        cloud: '#F7F8F3',
        ice: {
          DEFAULT: '#F7F8F3',
          light: '#ffffff',
        },
        /* Legacy aliases — keeps existing classes working */
        'slate-dark': '#012C3D',
        ember: '#F8444F',
        'ember-light': '#f96972',
        'ember-dark': '#d13841',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-ring': 'pulseRing 4s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
