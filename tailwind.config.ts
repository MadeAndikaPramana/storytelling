import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--bg-panel)",
        "panel-2": "var(--bg-panel-2)",
        cream: "var(--cream)",
        "cream-dim": "var(--cream-dim)",
        ember: "var(--ember)",
        gold: "var(--gold)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.3rem, 1.6rem + 3.2vw, 3.6rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 1.4rem + 1.6vw, 2.4rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      maxWidth: { prose: "34rem" },
    },
  },
  plugins: [],
};

export default config;
