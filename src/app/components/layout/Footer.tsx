"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const logoSrc = "/open-source-logo.png";
export function Footer() {
  const [email, setEmail] = React.useState("");
  const [submitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<null | { ok: boolean; msg: string; }>(null);
  const pathname = usePathname();

  const emailOk = React.useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email]
  );

  async function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    if (!emailOk) {
      setStatus({ ok: false, msg: "Please enter a valid email." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // normalize email casing/whitespace
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Subscription failed. Try again.");
      }

      setStatus({ ok: true, msg: "Thanks! Please check your inbox to confirm." });
      setEmail("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";

      setStatus({ ok: false, msg: message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <footer
      className="border-t mx-auto"
      style={{
        background: "var(--color-background)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container py-6 mx-auto flex flex-col gap-4">
        {/* Top grid */}
        <div className="flex flex-wrap gap-8 xl:gap-4 justify-between align-middle">
          {/* Brand + blurb */}
          <div className="space-y-4 w-full xl:w-2/5 ">
            <div className="flex items-center gap-3">
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
              <span className="text-white text-sm md:text-lg xl:text-2xl text-left flex flex-col">
                <span className="whitespace-nowrap">Open Source</span>
                <span>Economy</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-white/90 px-0 text-left">
              Open Source Economy is a non-profit organization dedicated to helping developers keep contributing to open source while receiving funding for their projects.
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
          <div className="flex flex-col gap-4 min-w-full md:min-w-3/5 xl:min-w-0">
            <div className="flex flex-row justify-center gap-8 text-white/80">
              <Link href="#" aria-label="LinkedIn" className="hover:text-white">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href="#" aria-label="X" className="hover:text-white">  <Image src="/icons/x.png" alt="X (Twitter)" width={20} height={20} /></Link>
              <Link href="#" aria-label="Youtube" className="hover:text-white"><Image src="/icons/youtube.png" alt="Youtube" width={20} height={20} /></Link>
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Newsletter</div>

              <form className="flex gap-2" onSubmit={onSubscribe} noValidate>
                <label className="sr-only" htmlFor="footer-email">Email</label>
                <div className="relative w-full">
                  <input
                    id="footer-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border bg-[var(--color-input)] px-3 py-4 pr-[110px] text-sm text-white outline-none placeholder:text-white/50"
                    style={{ borderColor: "var(--color-border)" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg px-4 py-1.5 text-sm font-medium text-white transition-opacity disabled:opacity-60"
                    style={{ backgroundImage: "var(--grad-cta)" }}
                  >
                    {submitting ? "…" : "Subscribe"}
                  </button>
                </div>
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
        </div>

        {/* Bottom bar */}
        <div className="border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/90 md:flex-row md:items-center">
            <div>
              © Open Source Economy — Non profit organisation · CHE-440.055.692 · Switzerland
            </div>
            <div className="w-full flex flex-row justify-center md:justify-end gap-3">
              <Link href="#" className="hover:text-white">Terms Of Service</Link>
              <span className="h-4 w-px bg-white/60 md:inline-block" />
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
