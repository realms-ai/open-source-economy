// app/components/layout/Footer.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { Linkedin, Github, Twitter } from "lucide-react";

export function Footer() {
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<null | { ok: boolean; msg: string; }>(null);

  async function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setStatus({ ok: false, msg: "Please enter a valid email." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Subscription failed. Try again.");
      }
      setStatus({ ok: true, msg: "Thanks! Please check your inbox to confirm." });
      setEmail("");
    } catch (err: any) {
      setStatus({ ok: false, msg: err.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer
      className="border-t max-w-screen-2xl mx-auto"
      style={{
        background: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container py-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand + blurb */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundImage: "var(--grad-cta)" }}
                aria-hidden="true"
              />
              <span className="text-sm font-semibold tracking-wide text-white">Open Source Economy</span>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Open Source Economy is a non-profit organization dedicated to helping developers keep
              contributing to open source while receiving funding for their projects.
            </p>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-semibold text-white">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="#" className="hover:text-white">About</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-sm font-semibold text-white">Resources</div>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="#" className="hover:text-white">Blog</Link></li>
              <li><Link href="#" className="hover:text-white">Docs</Link></li>
              <li><Link href="#" className="hover:text-white">Security</Link></li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div>
            <div className="flex items-center gap-3 text-white/80">
              <Link href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" aria-label="X" className="hover:text-white"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></Link>
            </div>

            <div className="mt-6 text-sm font-semibold text-white">Newsletter</div>

            <form className="mt-3 flex gap-2" onSubmit={onSubscribe} noValidate>
              <label className="sr-only" htmlFor="footer-email">Email</label>
              <input
                id="footer-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border bg-[var(--color-input)] px-3 py-2 text-sm text-white outline-none placeholder:text-white/50"
                style={{ borderColor: "var(--color-border)" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {/* gradient submit */}
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex min-w-[120px] items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white transition-opacity disabled:opacity-60"
                style={{ backgroundImage: "var(--grad-cta)" }}
              >
                {submitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            <div
              role="status"
              aria-live="polite"
              className={`mt-2 min-h-5 text-xs ${status ? (status.ok ? "text-emerald-400" : "text-red-400") : "text-transparent"
                }`}
            >
              {status?.msg || "placeholder"}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/90 md:flex-row md:items-center">
            <div>
              © Open Source Economy — Non profit organisation · CHE-440.055.692 · Switzerland
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:text-white">Terms Of Service</Link>
              <span className="hidden h-4 w-px bg-white/60 md:inline-block" />
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input::placeholder { color: var(--color-muted-weak); opacity: 1; }
      `}</style>
    </footer>
  );
}
