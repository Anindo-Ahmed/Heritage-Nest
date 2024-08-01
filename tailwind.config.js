/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.72) 72%, rgba(0, 0, 0, .88) 88%), url('./src/assets/images/BannerImage-1.png')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

