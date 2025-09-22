// components/sections/Log4Shell.tsx
import * as React from "react";
import { StatCard } from "../primitives/Card";

function FullBleed({ className = "", children }: React.PropsWithChildren<{ className?: string; }>) {
  return (
    <div className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen ${className}`}>
      {children}
    </div>
  );
}

export function Log4Shell() {
  return (
    <FullBleed className="bg-[#00102A]">
      <section
        aria-labelledby="log4shell-title"
        className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-16 py-6 md:py-12"
      >
        <div className="flex flex-col items-center text-center gap-6">
          <h2
            id="log4shell-title"
            className="font-[var(--font-sora,_Sora,sans-serif)] font-normal
                       leading-[1.2] text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
          >
            Do You Remember{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              Log4Shell
            </span>
            ?
          </h2>

          <p
            className="max-w-[720px]
                       font-[var(--font-roboto,_Roboto,system-ui)]
                       text-[18px] leading-[150%]"
            style={{ color: "#F5F7FA" }}
          >
            In December 2021, Log4Shell (CVE-2021-44228) exposed millions of Java-based systems worldwide.
            A single logging library triggered a global cybersecurity crisis with catastrophic consequences.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <StatCard
            iconSrc="/descriptionPage/icons/companies.png"
            iconAlt="Reputational impact"
            align="left"
            heading="Reputational Damage"
            items={[
              "Damaged brand reputation.",
              "Consumer trust erosion.",
              "Negative press and public scrutiny.",
            ]}
          />

          <StatCard
            iconSrc="/descriptionPage/icons/companies.png"
            iconAlt="Financial impact"
            align="left"
            heading="Financial Devastation"
            items={[
              "[[ $700M+ ]] legal exposure established.",
              "[[ $90,000+ ]] average direct cost per breach.",
              "Massive overtime for 24/7 “war rooms”.",
            ]}
            enableInlineHighlights
          />

          <StatCard
            iconSrc="/descriptionPage/icons/companies.png"
            iconAlt="Operational impact"
            align="left"
            heading="Operational Paralysis"
            items={[
              "Up to [[ 3,300 developer hours ]] lost.",
              "All innovation halted.",
              "[[ 29% recurrence rate ]] forced costly rework cycles.",
            ]}
            enableInlineHighlights
          />
        </div>

        <p
          className="mt-8 text-center
                     font-[var(--font-roboto,_Roboto,system-ui)] text-[14px]"
          style={{ color: "#D2D2D3" }}
        >
          Don’t let your organization be the next case study.
        </p>
      </section>
    </FullBleed>
  );
}
