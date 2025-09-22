"use client";
import * as React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

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
  iconSize = 24,
  heading,
  text,
  items,
  align = "center",
  className = "",
  enableInlineHighlights = false,
}: StatCardProps) {
  const isList = Array.isArray(items) && items.length > 0;
  const isLg = useMediaQuery({ minWidth: 1280 });
  const alignCls = (align === "center" || !isLg) ? "text-center" : "text-left";

  return (
    <div className={`${alignCls} ${className}`}>
      {iconSrc && (
        <div className={align === "center" ? "mx-auto mb-2" : "mb-2"}>
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
        <div className="text-[#FF518C] leading-[1.2] text-4xl md:text-5xl">
          {heading}
        </div>
      )}

      {!isList && text && (
        <p
          className={`${(align === "center" || !isLg) ? "mx-auto" : ""} mt-2
                      font-[var(--font-roboto,_Roboto,system-ui)]
                      text-white/90 leading-relaxed
                      max-w-[26ch] md:max-w-[34ch]`}
        >
          {renderWithHighlights(text, enableInlineHighlights)}
        </p>
      )}

      {isList && (
        <ul className="mt-3 space-y-6 text-white/90">
          {items!.map((it, i) => (
            <li key={i} className="flex gap-2 justify-center xl:justify-start">
              <span className="min-w-0">
                {renderWithHighlights(it, enableInlineHighlights)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
