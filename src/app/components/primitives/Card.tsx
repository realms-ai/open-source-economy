"use client";
import * as React from "react";
import Image from "next/image";
import clsx from "clsx";

type StatCardProps = {

  iconSrc?: string;
  iconAlt?: string;
  iconSize?: number;
  heading?: React.ReactNode;
  text?: string | React.ReactNode;
  items?: Array<string | React.ReactNode>;
  align?: "left" | "center";
  className?: string;
  enableInlineHighlights?: boolean;
};

function renderWithHighlights(v: string | React.ReactNode, enable: boolean) {
  if (!enable || typeof v !== "string") return v;
  // [[this part]] -> <strong class="text-white font-semibold">
  return v.split(/(\[\[.*?\]\])/g).map((part, i) => {
    const m = part.match(/^\[\[(.*)\]\]$/);
    if (!m) return <React.Fragment key={i}>{part}</React.Fragment>;
    return <strong key={i} className="text-white font-semibold">{m[1]}</strong>;
  });
}

export function StatCard({
  iconSrc,
  iconAlt = "",
  iconSize = 36,
  heading,
  text,
  items,
  align = "center",
  className = "",
  enableInlineHighlights = false,
}: StatCardProps) {
  const isList = Array.isArray(items) && items.length > 0;
  const alignCls = align === "left" ? "text-center xl:text-left" : "text-center";


  return (
    <div className={clsx(alignCls, className, "flex flex-col gap-2 xl:gap-4")}>
      {iconSrc && (
        <div className={clsx(align === "center" && "mx-auto")}>
          <Image
            src={iconSrc}
            alt={iconAlt}
            width={iconSize}
            height={iconSize}
            sizes={`${iconSize}px`}
            className="inline-block"
          />
        </div>
      )}

      {heading !== undefined && (
        <div className="text-[#FF518C] leading-[1.2] text-4xl md:text-4xl">
          {heading}
        </div>
      )}

      {!isList && text && (
        <p
          className={clsx("lg:mx-auto", "text-white/90 leading-relaxed")}
        >
          {renderWithHighlights(text, enableInlineHighlights)}
        </p>
      )}

      {isList && (
        <ul className="text-white/90 flex flex-col gap-2 xl:gap-4">
          {items!.map((it, i) => (
            <li key={i} className="flex justify-center xl:justify-start">
              <span className="xl:text-xl">
                {renderWithHighlights(it, enableInlineHighlights)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
