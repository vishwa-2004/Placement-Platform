/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        void: '#050508',
        surface: '#0d0d14',
        panel: '#12121e',
        border: '#1e1e32',
        accent: '#6c63ff',
        glow: '#00f5d4',
        ember: '#ff6b35',
      },

      boxShadow: {
        glow: '0 0 20px rgba(108,99,255,0.4)',
      },
    },
  },

  plugins: [],
}