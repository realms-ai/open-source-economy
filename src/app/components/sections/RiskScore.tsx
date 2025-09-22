// components/sections/RiskScore.tsx
import Image from "next/image";

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline gap-3">
        <span
          className="text-[#FF8AB2]"
          style={{
            fontFamily: "Sora, ui-sans-serif, system-ui",
            fontSize: "clamp(2rem, 4.5vw, 3rem)", // 32→48
            lineHeight: 1,
            fontWeight: 400,
          }}
        >
          {n}
        </span>
        <h3
          className="text-white"
          style={{
            fontFamily: "Sora, ui-sans-serif, system-ui",
            fontSize: "clamp(1.75rem, 4vw, 3rem)", // 28→48
            lineHeight: 1.2,
            fontWeight: 400,
          }}
        >
          {title}
        </h3>
      </div>
      <p
        className="max-w-prose text-base text-white/90 md:text-lg"
        style={{ fontFamily: "Roboto, system-ui" }}
      >
        {desc}
      </p>
    </div>
  );
}

export function RiskScore({
  cardSrc = "/descriptionPage/icons/risk.png",
  cardAlt = "Risk Score card",
}: {
  cardSrc?: string;
  cardAlt?: string;
}) {
  return (
    <section className="bg-[#00102A]">
      <div className="mx-auto max-w-[1352px] px-6 py-16 md:px-10 md:py-24">
        <h2
          className="text-center text-white"
          style={{
            fontFamily: "Sora, ui-sans-serif, system-ui",
            fontWeight: 400,
            fontSize: "clamp(2rem, 4.5vw, 4rem)",
            lineHeight: 1.2,
          }}
        >
          Let Us Protect You
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">

          <div className="space-y-10 md:col-span-2">
            <Step
              n="01"
              title="We Analyze"
              desc="We score your open source dependencies, measuring community strength, maintainer expertise, and supply chain integrity."
            />
            <Step
              n="02"
              title="We Alert"
              desc="We send actionable, real-time alerts—detecting hidden risks, mapping CVEs, and clarifying exploitability with VEX to reduce noise."
            />
            <Step
              n="03"
              title="We Partner"
              desc="For critical dependencies, we collaborate with maintainers, harden projects, and ensure long-term security and sustainability."
            />
          </div>


          <aside className="md:col-span-1">
            <figure className="relative w-full overflow-hidden rounded-2xl">
              <div className="aspect-[325/538]" />
              <Image
                src={cardSrc}
                alt={cardAlt}
                fill

                className="object-contain"
                sizes="(min-width: 768px) 33vw, 100vw"
                priority={false}
              />
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
