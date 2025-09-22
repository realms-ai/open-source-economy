// app/open-source-cost/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Users, LineChart, Activity, Linkedin, Github, Twitter } from "lucide-react";
import { Sora } from "next/font/google";
import { StatCard } from "./components/primitives/Card";
import { GradientButton } from "./components/primitives/GradientButton";
import { Hero } from "./components/sections/Hero";
import { Log4Shell } from "./components/sections/Log4Shell";
import { RiskScore } from "./components/sections/RiskScore";
import { ContactForm } from "./components/sections/ContactForm";

const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], display: "swap" });

export const metadata: Metadata = {
  title: "What’s The Cost Of Using Open Source Blindly? | Open Source Economy",
  description:
    "Open source is powerful—but unmanaged risk has real costs. Quantify the risks and adopt a pragmatic, sustainable approach.",
  alternates: { canonical: "/open-source-cost" },
  openGraph: {
    title: "What’s The Cost Of Using Open Source Blindly?",
    description:
      "Open source is powerful—but unmanaged risk has real costs. Quantify the risks and adopt a pragmatic, sustainable approach.",
    type: "article",
    url: "/open-source-cost",
  },
  twitter: {
    card: "summary_large_image",
    title: "What’s The Cost Of Using Open Source Blindly?",
    description: "Open source is powerful—but unmanaged risk has real costs.",
  },
};


export default function Page() {
  return (
    <main className={`${sora.className}min-h-screen text-white`}>


      <Hero />
      <Log4Shell />


      <RiskScore />


      <ContactForm />



    </main>
  );
};