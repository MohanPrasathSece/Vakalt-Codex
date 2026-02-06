import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        charcoal: "#1C1C1C",
        graphite: "#2A2A2A",
        mist: "#F5F5F3",
        line: "#E6E6E3",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      letterSpacing: {
        wide: ".08em",
      },
      boxShadow: {
        soft: "0 30px 60px -40px rgba(0,0,0,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
