"use client";
import Link from "next/link";
import { GradientButton } from "../primitives/GradientButton";
import { Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#00102A] border-t border-border">
      <div className="mx-auto max-w-[1352px] px-6 py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand + blurb */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(90deg,#FF518C_0%,#5C3994_100%)]" />
              <span className="font-header text-sm font-semibold tracking-wide text-white">
                Open Source Economy
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-white">
              Open Source Economy is a non-profit organization dedicated to helping developers keep
              contributing to open source while receiving funding for their projects.
            </p>
          </div>

          {/* Company */}
          <div>
            <div className="font-header text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 font-body text-sm text-white/90">
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="font-header text-sm font-semibold text-white">Resources</div>
            <ul className="mt-3 space-y-2 font-body text-sm text-white/90">
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Docs</Link></li>
              <li><Link href="#" className="hover:text-white">Security</Link></li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <div className="font-header text-sm font-semibold text-white">Follow</div>
            <div className="mt-3 flex items-center gap-3 text-white/80">
              <Link href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" aria-label="X" className="hover:text-white"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></Link>
            </div>

            <div className="mt-6 font-header text-sm font-semibold text-white">Newsletter</div>
            <div className="mt-3 flex gap-2">
              <input
                placeholder="Enter Your Email"
                className="w-full rounded-xl border border-border bg-[--color-input] px-3 py-2 font-body text-sm text-white outline-none placeholder:text-white/50"
              />
              {/* Keep button exactly as your primitive */}
              <GradientButton href="/signin" label="Subscribe" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/90 md:flex-row md:items-center">
            <div className="font-body">
              © Open Source Economy — Non profit organisation · CHE-440.055.692 · Switzerland
            </div>
            <div className="font-body flex items-center gap-3">
              <Link href="#" className="hover:text-white">Terms Of Service</Link>
              <span className="hidden h-4 w-px bg-white/60 md:inline-block" />
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* exact placeholder shade from spec */}
      <style jsx>{`
        input::placeholder { color: #D2D2D3; opacity: 1; }
      `}</style>
    </footer>
  );
}
