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
        background: "#1A0B07",
        foreground: "#F5E6D3",
        primary: {
          DEFAULT: "#D4AF37",
          light: "#F5D27A",
          dark: "#B8860B",
        },
        brown: {
          50: "#F5E6D3",
          100: "#E8D5C0",
          200: "#C9A882",
          300: "#8B6914",
          400: "#6B4226",
          500: "#4A1F0F",
          600: "#3A1508",
          700: "#2A0F06",
          800: "#1A0B07",
          900: "#0D0503",
        },
        coral: {
          DEFAULT: "#C65D3E",
          light: "#E8734A",
          dark: "#A04830",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F5D27A",
          dark: "#B8860B",
          glow: "rgba(212,175,55,0.15)",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.05)",
          border: "rgba(255,255,255,0.1)",
          hover: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display": ["clamp(2.5rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "heading": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5D27A 50%, #B8860B 100%)",
        "dark-gradient": "radial-gradient(circle at 30% 30%, #4A1F0F, #1A0B07)",
        "coral-gradient": "linear-gradient(135deg, #C65D3E 0%, #E8734A 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 60px rgba(212,175,55,0.1)",
        "gold-glow-lg": "0 0 100px rgba(212,175,55,0.15)",
        "glass": "0 8px 32px rgba(0,0,0,0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        "container": "1400px",
      },
      spacing: {
        "section": "7.5rem",
        "section-md": "5rem",
        "section-sm": "3.75rem",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.25)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
