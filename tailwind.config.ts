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
        bg: "var(--bg-page)",
        dim: "var(--text-dim)",
        subtle: "var(--text-subtle)",
        accent: "var(--accent)",
      },
      backgroundImage: {
        "hi": "linear-gradient(135deg, var(--grad-hi-from), var(--grad-hi-to))",
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
