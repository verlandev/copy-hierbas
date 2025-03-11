/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        "fade-in-top": "fadeInTop 1s ease-out forwards",
        "fade-in-left": "fadeInLeft 1s ease-out forwards",
        "fade-in-right": "fadeInRight 1s ease-out forwards",
        "fade-in-bottom": "faceInBottom 1s ease-out forwards",
      },
      keyframes: {
        fadeInTop: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        faceInBottom: {
          "0%": { opacity: 0, transform: "translateY(50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        }
      },
    },
  },
  plugins: []
}