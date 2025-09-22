import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "ui-sans-serif", "system-ui"],
        roboto: ["var(--font-roboto)", "Roboto", "system-ui"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5" }], // 14px
        base: ["1rem", { lineHeight: "1.5" }],   // 16px
        lg: ["1.125rem", { lineHeight: "1.75" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75" }],  // 20px
        "2xl": ["1.5rem", { lineHeight: "2" }],   // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25" }], // 30px
        h1: ["clamp(2rem, 6vw + 0.5rem, 4rem)", { lineHeight: "1.2" }],
        h2: ["clamp(1.6rem, 4.5vw + 0.5rem, 3rem)", { lineHeight: "1.25" }],
        h3: ["clamp(1.3rem, 3.5vw + 0.5rem, 2.25rem)", { lineHeight: "1.3" }],
        h4: ["clamp(1.15rem, 2.5vw + 0.5rem, 1.75rem)", { lineHeight: "1.35" }],
        h5: ["clamp(1rem, 2vw + 0.4rem, 1.5rem)", { lineHeight: "1.4" }],
        h6: ["clamp(0.95rem, 1.5vw + 0.35rem, 1.25rem)", { lineHeight: "1.45" }],
        body: ["clamp(0.95rem, 0.45vw + 0.85rem, 1.125rem)", { lineHeight: "1.6" }],
        small: ["clamp(0.8rem, 0.35vw + 0.75rem, 0.95rem)", { lineHeight: "1.5" }],
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        subtle: "var(--color-muted)",
        dim: "var(--color-muted-weak)",
        accent: "var(--color-accent)",
        border: "var(--color-border)",
        input: "var(--color-input)",
      },
      backgroundImage: {
        hi: "linear-gradient(135deg, var(--grad-hi-from), var(--grad-hi-to))",
        cta: "var(--grad-cta)",
        brand: "var(--grad-brand)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        }
      },
    },
  },
  plugins: [],
};

export default config;
