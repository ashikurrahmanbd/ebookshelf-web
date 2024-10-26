/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202543',  // Replace with your primary color from Figma
        secondary: '#1c213f',  // Replace with your secondary color from Figma
        accent: '#FFC300',     // Accent color
        background: '#F4F4F4', // Background color
        textPrimary: '#333333', // Text color
        textSecondary: '#666666', // Secondary text color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Figma’s preferred fonts
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        
      },
      boxShadow: {
        'custom-light': '2px 4px 6px rgba(0, 0, 0, 0.1)',
        'custom-dark': '4px 8px 10px rgba(0, 0, 0, 0.25)',
        'custom-colored': '0 1px 6px rgba(253, 121, 168, 0.4), 0 4px 7px rgba(225, 112, 85, 0.2)',
      },
    },
  },
  plugins: [],
}

