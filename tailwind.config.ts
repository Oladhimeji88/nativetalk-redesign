import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Landing/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3ebf0f",
          700: "#33a00b",
        },
        green: {
          DEFAULT: "#3ebf0f",
          700: "#2d9309",
          300: "#87ff5c",
          100: "#dfffd5",
          50: "#eefbe8",
        },
        ink: {
          DEFAULT: "#0a211f",
          2: "#071916",
        },
        cream: {
          DEFAULT: "#f7f9f2",
          2: "#eef2e8",
        },
        paper: "#ffffff",
        text: "#0a211f",
        muted: {
          DEFAULT: "#52625c",
          dark: "#9cb4a7",
        },
        line: {
          DEFAULT: "rgba(10,33,31,0.14)",
          dark: "rgba(255,255,255,.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        wrap: "1240px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.2,.8,.2,1)",
      },
      keyframes: {
        pulse: {
          "0%": { boxShadow: "0 0 0 0 rgba(62,191,15,.45)" },
          "70%": { boxShadow: "0 0 0 9px rgba(62,191,15,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(62,191,15,0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "live-pulse": "pulse 1.7s infinite",
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
