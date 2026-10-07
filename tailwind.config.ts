import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#05060a", surface: "#0b1020" },
      fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(16px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: { "fade-up": "fade-up .7s ease-out both" },
    },
  },
  plugins: [],
};

export default config;
