/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        claro: {
          "primary": "#29633a",
          "primary-content": "#c0c0c0",
          
          "secondary": "#202020",
          "secondary-content": "#ffd700",
          
          "accent": "#ffd700",
          "accent-content": "#202020",

          "neutral": "#ffffff",
          "neutral-content": "#202020",

          "base-100": "#c0c0c0",
          "base-content": "#202020",

          "info": "#00bafe",
          "info-content": "#042e49",

          "success": "#00d390",
          "success-content": "#004c39",
          
          "warning": "#ffb700",
          "warning-content": "#793205",
          
          "error": "#ff637d",
          "error-content": "#4d0218",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "2rem",

          "--border": "2px",
        },
        oscuro: {
          "primary": "#29633a",
          "primary-content": "#c0c0c0",
          
          "secondary": "#c0c0c0",
          "secondary-content": "#202020",
          
          "accent": "#ffd700",
          "accent-content": "#202020",

          "neutral": "#ffffff",
          "neutral-content": "#202020",

          "base-100": "#202020",
          "base-content": "#c0c0c0",

          "info": "#00bafe",
          "info-content": "#042e49",

          "success": "#00d390",
          "success-content": "#004c39",
          
          "warning": "#ffb700",
          "warning-content": "#793205",
          
          "error": "#ff637d",
          "error-content": "#4d0218",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "2rem",

          "--border": "2px",
        },
      },
    ],
  },
}

