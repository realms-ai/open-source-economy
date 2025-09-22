import Link from "next/link";
import * as React from "react";

type GradientButtonProps = {
  href?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "a" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function GradientButton({
  href = "#",
  label = "Sign In",
  className = "",
  style,
  as = "a",
  onClick,
}: GradientButtonProps) {
  const containerClass =
    `inline-flex items-center justify-center ` +
    `flex-none order-0 grow-0 no-underline select-none ` +
    className;

  const containerStyle: React.CSSProperties = {
    width: "clamp(140px, 22vw, 220px)",
    height: 44,
    borderRadius: 12,
    background: "linear-gradient(90deg, #FF518C 0%, #5C3994 100%)",
    ...style,
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "Sora, var(--font-sora), ui-sans-serif, system-ui",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
    color: "#FFFFFF",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  if (as === "button") {
    return (
      <button type="button" onClick={onClick} className={containerClass} style={containerStyle}>
        <span style={labelStyle}>{label}</span>
      </button>
    );
  }

  return (
    <Link href={href} className={containerClass} style={containerStyle}>
      <span style={labelStyle}>{label}</span>
    </Link>
  );
}
