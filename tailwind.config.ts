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
        background: "#FAF7F2",
        foreground: "#2C2C2C",
        primary: {
          DEFAULT: "#0B7A75",
          light: "#1A9E98",
          dark: "#065E5A",
        },
        teal: {
          50: "#EDFAF9",
          100: "#D0F2F0",
          200: "#A3E5E2",
          300: "#5CC8C3",
          400: "#1A9E98",
          500: "#0B7A75",
          600: "#065E5A",
          700: "#044946",
          800: "#033533",
          900: "#022221",
        },
        gold: {
          DEFAULT: "#C4A35A",
          light: "#D4B97A",
          dark: "#A68938",
        },
        cream: {
          50: "#FFFFFF",
          100: "#FAF7F2",
          200: "#F5F0E8",
          300: "#EBE4D8",
          400: "#DDD4C4",
          500: "#C9BFAE",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(3rem, 6vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        display: [
          "clamp(2.25rem, 4vw, 3.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        heading: ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "teal-gradient": "linear-gradient(135deg, #0B7A75 0%, #1A9E98 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C4A35A 0%, #D4B97A 50%, #A68938 100%)",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(0,0,0,0.04)",
        card: "0 4px 30px rgba(0,0,0,0.06)",
        elevated: "0 8px 40px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        container: "1400px",
      },
      spacing: {
        section: "7rem",
        "section-md": "5rem",
        "section-sm": "3.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
