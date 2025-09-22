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
      <div className="flex items-baseline gap-3 justify-center xl:justify-start">
        <span
          className="text-[#FF8AB2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {n}
        </span>
        <h3
          className="text-white leading-[1.2] tracking-tight
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        >
          {title}
        </h3>
      </div>
      <p
        className="text-white/90 xl:text-left xl:!px-0"
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
      <div className="flex flex-col gap-8">
        <h2
          className="text-center text-white leading-[1.2] tracking-tight
                       text-3xl sm:text-4xl md:text-5xl lg:text-[64px]"
        >
          Let Us Protect You
        </h2>

        <div className="grid grid-cols-1 xl:gap-10 xl:grid-cols-3">

          <div className="flex flex-col gap-12 2xl:gap-36 md:col-span-2">
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
