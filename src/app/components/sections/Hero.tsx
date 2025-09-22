import * as React from "react";
import { StatCard } from "../primitives/Card";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-[#00102A] text-white">
      <div className="flex flex-col gap-8">

        <div className="flex flex-col items-center gap-6 text-center">
          <h1
            id="hero-title"
            className="font-normal leading-tight text-3xl sm:text-4xl md:text-5xl xl:text-7xl"
          >
            What’s The Cost Of Using Open Source Blindly?
          </h1>

          <p className="text-white/85 leading-relaxed para">
            Open source is powerful — but it also opens the door to supply chain attacks.
            Too often, essential libraries are maintained by just a handful of volunteers
            without the resources to keep them secure.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
          <StatCard
            iconSrc="/descriptionPage/icons/companies.png"
            iconAlt="Companies"
            iconSize={24}
            heading="90%"
            text="[[90%]] of companies are using open source projects"
            enableInlineHighlights
          />
          <StatCard
            iconSrc="/descriptionPage/icons/terminal.png"
            iconAlt="Terminal"
            iconSize={40}
            heading="76%"
            text="[[76%]] of code in codebases is open source"
            enableInlineHighlights
          />
          <StatCard
            iconSrc="/descriptionPage/icons/users.png"
            iconAlt="Users"
            iconSize={40}
            heading="60%"
            text="[[60%]] of maintainers are not paid for their work"
            enableInlineHighlights
          />
        </div>


      </div>
    </section>
  );
}
