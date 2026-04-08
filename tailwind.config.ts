import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF5F05",
          "orange-hover": "#E05000",
        },
        surface: {
          DEFAULT: "#0A0A0A",
          card: "#141414",
          border: "#1F1F1F",
          "border-hover": "#2E2E2E",
          muted: "#3D3D3D",
          "700": "#1F1F1F",
        },
        /** 恒亿 platform / industrial UI */
        industrial: {
          50: "#F7FAFC",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#4A5568",
          600: "#2D3748",
          700: "#2D3748",
          800: "#1A202C",
          900: "#0F1115",
        },
        accent: {
          DEFAULT: "#FF6B00",
          muted: "rgba(255, 107, 0, 0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "card-popular": "0 0 40px -10px rgba(255,95,5,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
