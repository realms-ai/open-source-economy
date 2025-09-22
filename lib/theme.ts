// lib/theme.ts
import { Roboto, Sora } from "next/font/google";

// Expose both a CSS variable (for Tailwind) and a className (quick apply)
export const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});
export const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], display: "swap", variable: "--font-roboto" });
export const fonts = {
  sora, roboto                     // has .className and .variable
};

export const theme = {
  // (your existing tokens)
  color: {
    bg: "#0B1330",
    dim: "rgba(255,255,255,0.75)",
    border: "rgba(255,255,255,0.10)",
    white: "#FFFFFF",
  },
  gradient: {
    brandHi: "linear-gradient(135deg, #FF5CA8, #985CFF)",
    cta: "linear-gradient(90deg, #FF518C 0%, #5C3994 100%)",
    logo: "linear-gradient(90deg, #FFAA67 0.03%, #FF7E7A 21.02%, #FF518C 46.02%, #5E309C 100%)",
  },
  surface: { card: "rgba(255,255,255,0.04)" },
  radius: { md: 12, lg: 16, xl: 20 },

  // Font hooks (use either)
  font: {
    className: sora.className,    // quick: drop onto <html> or <main>
    variable: sora.variable,      // full: use with Tailwind font-sans via CSS var
    familyStack: "var(--font-sora), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto",
  },
};
