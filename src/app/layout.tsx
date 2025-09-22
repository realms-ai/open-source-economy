import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./components/layout/Nav";
import { Footer } from "./components/layout/Footer";
import { sora, roboto } from "../../lib/theme";

export const metadata: Metadata = {
  title: "Open Source Economy",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={`${sora.variable} ${roboto.variable}`}>
      {/* Pulls colors from CSS vars; no hard-coded hex */}
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
