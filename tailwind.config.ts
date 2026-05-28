import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta Bariloche / Patagonia
        sand: {
          50: "#FBF7F0",
          100: "#F4EBDB",
          200: "#E8D6B5",
          300: "#D9BC89",
        },
        moss: {
          50: "#EFF2EA",
          100: "#D5DCC4",
          200: "#A3B07F",
          400: "#5E6F44",
          600: "#3D4A2A",
          800: "#26301A",
        },
        cedar: {
          400: "#B07B4A",
          500: "#8E5A2E",
          600: "#6B4220",
          700: "#4A2D13",
        },
        lake: {
          200: "#A8C5CC",
          400: "#5F8E97",
          600: "#3D6770",
          800: "#1F3B43",
        },
        slate: {
          850: "#1A2128",
          950: "#0B0F13",
        },
        // Violeta espiritual — para texto principal
        violet: {
          50: "#F4EFFA",
          100: "#E5D9F2",
          200: "#C9B3E5",
          300: "#A688CC",
          400: "#8E6FBF",
          500: "#6B4E9E",
          600: "#4F377A",
          700: "#382658",
          800: "#261A3D",
          900: "#15102A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 14s ease-in-out infinite",
        "float-slower": "float 22s ease-in-out infinite",
        "fade-up": "fadeUp 1s ease-out forwards",
        breathe: "breathe 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-30px) translateX(20px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "grain":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
