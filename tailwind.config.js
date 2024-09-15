/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-color": "#D8D8D8",
        "primary-foreground": "#1C2224",
        "secondary-foreground": "#384853",
        "accent-foreground": "#FEA12D",
        "secondary-accent-foreground": "#3362AB",
      },
    },
  },
  plugins: [],
};
