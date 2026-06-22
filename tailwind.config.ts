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
        atlas: {
          cream: "#FAFAF7",
          white: "#FFFFFF",
          green: "#1A7A4A",
          "green-light": "#2ECC71",
          "green-muted": "#EAF5EE",
          "green-glow": "#A8E6C3",
          charcoal: "#1C1C1E",
          slate: "#3A3A44",
          muted: "#6B6B7A",
          border: "#E4E4EA",
          "border-light": "#F0F0F5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover": "0 16px 48px -8px rgba(0,0,0,0.14), 0 2px 8px rgba(0,0,0,0.06)",
        green: "0 4px 24px rgba(26,122,74,0.18)",
        "green-lg": "0 8px 48px rgba(26,122,74,0.22)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "flow-line": "flowLine 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        flowLine: {
          "0%": { strokeDashoffset: "300" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
