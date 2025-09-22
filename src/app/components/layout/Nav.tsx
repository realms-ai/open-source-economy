"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GradientButton } from "../primitives/GradientButton";

export function Nav({
  logoSrc = "/open-source-logo.png",
}: {
  logoSrc?: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/solutions", label: "Solutions" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#00102A] shadow-sm supports-[backdrop-filter]:backdrop-blur max-w-screen-2xl mx-auto pb-2 pt-4"
    >
      <div className="h-16 flex items-center justify-between gap-2">

        <Link href="/" className="flex items-center gap-1">
          <span className="relative block w-14 h-10 md:w-20 md:h-14">
            <Image
              src={logoSrc}
              alt=""
              fill
              sizes="(max-width: 640px) 40px, 56px"
              className="object-contain"
              priority={pathname === "/"}
            />
          </span>
          <span className="text-white text-sm md:text-lg leading-tight font-medium flex flex-col">
            <span className="whitespace-nowrap">Open Source</span>
            <span className="text-center">Economy</span>
          </span>
        </Link>


        <nav
          aria-label="Primary"
          className="hidden lg:block"
        >
          <ul className="flex items-center gap-8">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex flex-col items-center"
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="text-white/90 group-hover:text-white transition-colors text-base leading-6">
                      {l.label}
                    </span>
                    <span
                      className={`mt-1 h-0.5 transition-opacity ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        } w-6`}
                      style={{ backgroundColor: "#FF518C" }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <GradientButton href="/signin" label="Sign In" />
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <nav aria-label="Mobile" className="lg:hidden pb-4">
          <ul className="flex flex-col gap-2">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                    {active && (
                      <span className="ml-3 inline-block h-1 w-4 rounded-full" style={{ backgroundColor: "#FF518C" }} />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
