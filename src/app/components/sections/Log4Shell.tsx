// components/sections/Log4Shell.tsx
import * as React from "react";
import { StatCard } from "../primitives/Card";

export function Log4Shell() {
  return (
    <div className=" bg-[var(--background)]">
      <section
        aria-labelledby="log4shell-title"
        className="mx-auto"
      >
        {/* Title + subtitle */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            id="log4shell-title"
            className="font-sans font-normal leading-[1.2] tracking-tight
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Do You Remember&nbsp;
            <span className="bg-hi bg-clip-text text-[#FF518C]">Log4Shell</span>
            ?
          </h2>

          <p className="leading-[150%] text-subtle">
            In December 2021, Log4Shell (CVE-2021-44228) exposed millions of Java-based
            systems worldwide. A single logging library triggered a global cybersecurity
            crisis with catastrophic consequences.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 xl:gap-32 xl:grid-cols-3 text-center">
          <StatCard
            iconSrc="/descriptionPage/icons/money-loss.png"
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
            iconSrc="/descriptionPage/icons/financial-devastation.png"
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
            iconSrc="/descriptionPage/icons/operational-paralysis.png"
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

        <p className="mt-8 text-center font-roboto text-dim underline xl:no-underline">
          Don’t let your organization be the next case study.
        </p>
      </section>
    </div>
  );
}
