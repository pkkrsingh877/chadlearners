import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // This will enable dark mode based on a class (you can toggle with class="dark")
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],  // Default body font (Lato)
        heading: ['Poppins', 'sans-serif'],  // Default heading font (Poppins)
      },
      colors: {
        // Dark mode palette (default)
        darkBackground: "#222831", // HEX
        darkForeground: "#EEEEEE", // HEX
        darkAccent: "#FF5722", // HEX
        darkMuted: "#2D4059", // HEX

        // Light mode palette
        lightBackground: "#F8F9FA", // HEX
        lightForeground: "#495057", // HEX
        lightAccent: "#FF5722", // HEX
        lightMuted: "#343A40", // HEX

        // Gradients for both modes (you can adjust this as needed)
        gradientTop: "linear-gradient(0deg, #fbf5f3ff, #8daa9dff, #522b47ff, #7b0828ff, #0f0e0eff)",
        gradientRight: "linear-gradient(90deg, #fbf5f3ff, #8daa9dff, #522b47ff, #7b0828ff, #0f0e0eff)",
        gradientBottom: "linear-gradient(180deg, #fbf5f3ff, #8daa9dff, #522b47ff, #7b0828ff, #0f0e0eff)",
        gradientLeft: "linear-gradient(270deg, #fbf5f3ff, #8daa9dff, #522b47ff, #7b0828ff, #0f0e0eff)",
      },
    },
  },
  plugins: [],
} satisfies Config;
