import type { Config } from "tailwindcss";

/**
 * Design tokens for BYMA Course.
 *
 * IMPORTANT: These values are implementation approximations of the brand's
 * visual DNA (deep purple, magenta, pink-purple, lavender, warm cream).
 * No official HEX values were provided — these are subject to stakeholder
 * approval and must be validated against the official brand assets.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#3B1E5A",
        primary: {
          DEFAULT: "#6D28D9",
          hover: "#5B21B6",
        },
        accent: {
          DEFAULT: "#D6336C",
          hover: "#BE2A5E",
          strong: "#BE2A5E",
          soft: "#F7D6E6",
        },
        lavender: "#EDE4FB",
        background: "#FBF7F1",
        surface: "#FFFFFF",
        ink: "#1F1633",
        muted: "#6B6480",
        border: "#E7E1EE",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.8125rem", { lineHeight: "1rem", letterSpacing: "0.14em" }],
        "h1-mobile": ["2.25rem", { lineHeight: "1.1" }],
        "h1-desktop": ["4rem", { lineHeight: "1.05" }],
        "h2-mobile": ["1.875rem", { lineHeight: "1.15" }],
        "h2-desktop": ["3rem", { lineHeight: "1.1" }],
        "h3-mobile": ["1.375rem", { lineHeight: "1.25" }],
        "h3-desktop": ["1.75rem", { lineHeight: "1.2" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1.25rem",
        xl: "1.75rem",
      },
      maxWidth: {
        content: "1200px",
        prose: "46rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(31, 22, 51, 0.06)",
        md: "0 8px 24px rgba(31, 22, 51, 0.08)",
        lg: "0 20px 48px rgba(109, 40, 217, 0.12)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "flow-pulse": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        float: "float 8s ease-in-out infinite",
        "flow-pulse": "flow-pulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
