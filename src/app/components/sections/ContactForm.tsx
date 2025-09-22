"use client";

import * as React from "react";

type FormState = {
  name: string;
  email: string;
  linkedin: string;
  message: string;
  honeypot: string; // spam trap
};

// Success card
function SuccessCard({ onReset }: { onReset: () => void; }) {
  return (
    <div
      className="w-full max-w-[488px] rounded-[16px] border p-3 md:p-4"
      style={{
        background: "rgba(255, 238, 244, 0.2)",
        borderColor: "var(--color-border)",
      }}
      role="status"
      aria-live="polite"
    >
      {/* Top row */}
      <div className="flex items-center gap-[0.01px]">
        {/* 40x40 check icon in a subtle ring */}
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-full"
          style={{ border: "2px solid var(--color-brand-pink, #FF8AB2)" }}
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M20 6L9 17l-5-5"
              fill="none"
              stroke="var(--color-brand-pink, #FF8AB2)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {/* Text block with left padding 12px */}
        <div className="pl-3">
          <div className="space-y-1">
            <h3
              className="m-0"
              style={{
                fontFamily: "Sora, ui-sans-serif, system-ui",
                fontWeight: 400,
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", // ~28→40
                lineHeight: 1.2,
                color: "var(--color-brand-pink, #FF518C)",
              }}
            >
              Form Received!
            </h3>
            <p
              className="text-sm md:text-base"
              style={{
                fontFamily: "Roboto, system-ui",
                color: "var(--color-muted, #F5F7FA)",
              }}
            >
              We’ve received your message and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-3 md:mt-4 flex justify-end">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex min-w-[140px] items-center justify-center rounded-[12px] px-4 py-2.5 text-sm font-medium text-white"
          style={{ backgroundImage: "var(--grad-cta)" }}
        >
          Send Another Message
        </button>
      </div>
    </div>
  );
}

// Error card
function ErrorCard(
  {
    message = "Server Unavailable",
    code = "500",
    onReset,
    onClose,
  }: {
    message?: string;
    code?: string | number;
    onReset: () => void;
    onClose?: () => void;
  }
) {
  return (
    <div
      className="w-full max-w-[488px] rounded-[16px] border p-3 md:p-4"
      style={{
        background: "var(--color-background, #00102A)",
        borderColor: "var(--color-border)",
      }}
      role="alert"
      aria-live="assertive"
    >
      {/* Close (optional) */}
      <div className="flex justify-end">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="h-6 w-6 rounded-md text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Icon, title, description */}
      <div className="mx-auto max-w-[464px] space-y-4">
        <div className="flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
            <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 8v5m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                fill="none"
                stroke="#FF0000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <h3
          className="text-center"
          style={{
            fontFamily: "Sora, ui-sans-serif, system-ui",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: 1.5,
            color: "#FF0000",
          }}
        >
          Oops! Something went wrong
        </h3>

        <p
          className="mx-auto max-w-[348px] text-center"
          style={{ fontFamily: "Roboto, system-ui", fontSize: "16px", lineHeight: "150%", color: "#FFFFFF" }}
        >
          We couldn’t process your request at the moment. Please check your connection and try again later.
        </p>

        {/* Inline error strip */}
        <div className="rounded-[8px] border px-4 py-3" style={{ background: "rgba(239,68,68,0.1)", borderColor: "var(--color-border)" }}>
          <div className="flex items-center justify-center gap-2 text-center">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: "#FF0000" }} />
            <span className="text-sm" style={{ color: "#FF0000", fontFamily: "Roboto, system-ui" }}>
              Error Code: {code}
            </span>
            <span className="text-sm" style={{ color: "#FF0000", fontFamily: "Roboto, system-ui" }}>
              {message}
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex min-w-[140px] items-center justify-center rounded-[12px] px-4 py-2.5 text-sm font-medium text-white"
          style={{ backgroundImage: "var(--grad-cta)" }}
        >
          Send Another Message
        </button>
      </div>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    linkedin: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [status, setStatus] = React.useState<null | { ok: boolean; msg: string; }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);

    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: "Please fill the required fields." });
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setStatus({ ok: false, msg: "Please enter a valid email." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || `Server Unavailable (${res.status})`);
      }

      setStatus({ ok: true, msg: "Thanks! We’ll be in touch shortly." });
      setForm({ name: "", email: "", linkedin: "", message: "", honeypot: "" });
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message || "Failed to send message." });
    } finally {
      setSubmitting(false);
    }
  }

  const resetToForm = () => setStatus(null);

  return (
    <section className="bg-[var(--color-background)]">
      <div className="flex flex-col gap-4 md:gap-8 xl:gap-16">
        <h2
          className="text-center text-white text-3xl sm:text-4xl md:text-5xl xl:text-7xl"
        >
          Don’t Wait For The Next Breach
        </h2>
        <p className="leading-[150%] text-[var(--color-muted)] xl:px-28 2xl:px-56">
          We’re here to support your business. Whether you want to learn more about our services,
          explore collaboration opportunities, or need guidance, our team is ready to help you
          strengthen your open source security.
        </p>

        <div className="xl:px-56 2xl:px-96">
          {/* Swap content based on status */}
          {status?.ok === true ? (
            <SuccessCard onReset={resetToForm} />
          ) : status?.ok === false ? (
            <ErrorCard message={status.msg} onReset={resetToForm} />
          ) : (
            <div
              className="rounded-[16px] border p-6 backdrop-blur flex flex-col gap-4 md:gap-8"
              style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
                boxShadow: "0px 25px 50px -12px rgba(239, 77, 172, 0.25)",
              }}
            >
              <div
                className="text-white text-3xl text-center xl:text-left"
              >
                Get In Touch
              </div>
              <p className="leading-[150%] text-white px-0 xl:text-left">
                This is so that we can get in contact with you in case any opportunity comes up
              </p>

              <form className="grid gap-4" onSubmit={onSubmit} noValidate>
                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="company"
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                  value={form.honeypot}
                  onChange={(e) => setForm((f) => ({ ...f, honeypot: e.target.value }))}
                  aria-hidden="true"
                />

                <div className="grid gap-4 xl:grid-cols-2">
                  <label htmlFor="name" className="text-sm text-white">
                    <span className="block">Your Full Name*</span>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your Full Name"
                      className="mt-1 w-full rounded-[8px] border bg-[var(--color-input)] px-3 py-2 text-white outline-none placeholder:[color:var(--color-muted-weak)]"
                      style={{ borderColor: "var(--color-border)" }}
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </label>

                  <label htmlFor="email" className="text-sm text-white">
                    <span className="block">Your Email*</span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Your Email"
                      className="mt-1 w-full rounded-[8px] border bg-[var(--color-input)] px-3 py-2 text-white outline-none placeholder:[color:var(--color-muted-weak)]"
                      style={{ borderColor: "var(--color-border)" }}
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </label>
                </div>

                <label htmlFor="linkedin" className="text-sm text-white">
                  <span className="block">Your LinkedIn</span>
                  <input
                    id="linkedin"
                    name="linkedin"
                    placeholder="Your LinkedIn"
                    className="mt-1 w-full rounded-[8px] border bg-[var(--color-input)] px-3 py-2 text-white outline-none placeholder:[color:var(--color-muted-weak)]"
                    style={{ borderColor: "var(--color-border)" }}
                    value={form.linkedin}
                    onChange={(e) => setForm((f) => ({ ...f, linkedin: e.target.value }))}
                  />
                </label>

                <label htmlFor="message" className="text-sm text-white">
                  <span className="block">Your Message*</span>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Enter your message..."
                    className="mt-1 w-full resize-y rounded-[8px] border bg-[var(--color-input)] px-3 py-2 text-white outline-none placeholder:[color:var(--color-muted-weak)]"
                    style={{ borderColor: "var(--color-border)" }}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </label>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex select-none items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-opacity disabled:opacity-60"
                    style={{ backgroundImage: "var(--grad-cta)" }}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
