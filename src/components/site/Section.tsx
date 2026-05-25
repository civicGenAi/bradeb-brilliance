import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import type { CSSProperties, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  /** Container width. "default" = 80rem, "wide" = 87.5rem, "none" = full-bleed. */
  container?: "default" | "wide" | "none";
  /** Use the smaller vertical rhythm. */
  tight?: boolean;
  className?: string;
  innerClassName?: string;
  style?: CSSProperties;
};

/** Section wrapper that enforces the shared vertical rhythm + container width. */
export function Section({
  children,
  id,
  container = "default",
  tight,
  className,
  innerClassName,
  style,
}: SectionProps) {
  const wrap =
    container === "wide" ? "container-wide" : container === "none" ? "" : "container-bradeb";
  return (
    <section
      id={id}
      className={cn("relative", tight ? "section-y-sm" : "section-y", className)}
      style={style}
    >
      {container === "none" ? children : <div className={cn(wrap, innerClassName)}>{children}</div>}
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Eyebrow + dash accent colour. */
  accent?: "teal" | "gold";
  /** Render heading/description in light colours for dark backgrounds. */
  light?: boolean;
  className?: string;
};

/** Consistent eyebrow + heading + description block used across pages. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "teal",
  light,
  className,
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <Reveal className={cn(centered && "text-center mx-auto max-w-2xl", className)}>
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-3 flex items-center gap-2",
            centered && "justify-center",
            accent === "gold" ? "text-gold" : "text-teal",
          )}
        >
          <span className={cn("h-[2px] w-8", accent === "gold" ? "bg-gold" : "bg-teal")} />
          {eyebrow}
        </p>
      )}
      <h2 className={cn("heading-section", light ? "text-white" : "text-navy")}>{title}</h2>
      {description && (
        <p className={cn("lead mt-4", light ? "text-white/70" : "text-[#4a5568]")}>{description}</p>
      )}
    </Reveal>
  );
}
