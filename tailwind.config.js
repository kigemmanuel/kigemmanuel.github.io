// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}", 
  ],
  theme: {
    extend: {
      screens: {
        'mbl': {'max': '767px'},
        'mlg': {'min': '896px', 'max': '1200px'},
      },
    },
  },
  plugins: [],
};