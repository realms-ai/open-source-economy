// app/layout.tsx
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
      <body className="bg-[#0B1330] text-white">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
