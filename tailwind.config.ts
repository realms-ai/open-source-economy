import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sora)", "ui-sans-serif", "system-ui"],
        roboto: ["var(--font-roboto)", "Roboto", "system-ui"],
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
          xl: "2rem",
          "2xl": "4rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
