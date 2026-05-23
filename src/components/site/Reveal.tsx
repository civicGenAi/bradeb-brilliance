import { useEffect, useRef, type ReactNode, type ElementType } from "react";

type Variant = "up" | "left" | "scale" | "words";

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  stagger = 60,
  className = "",
  as: As = "div",
  threshold = 0.18,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  stagger?: number;
  className?: string;
  as?: ElementType;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in");
            if (variant === "words") {
              const spans = el.querySelectorAll<HTMLSpanElement>(":scope > span");
              spans.forEach((s, i) => {
                s.style.transitionDelay = `${delay + i * stagger}ms`;
              });
            } else {
              el.style.transitionDelay = `${delay}ms`;
            }
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [variant, delay, stagger, threshold]);

  const base =
    variant === "left"
      ? "reveal-left"
      : variant === "scale"
      ? "reveal-scale"
      : variant === "words"
      ? "split-words"
      : "reveal";

  return (
    <As ref={ref as never} className={`${base} ${className}`}>
      {children}
    </As>
  );
}

/** Splits a string into per-word <span> children for word-by-word reveals. */
export function SplitText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <Reveal variant="words" className={className}>
      {words.map((w, i) => (
        <span key={i} style={{ marginRight: "0.28em" }}>
          {w}
        </span>
      ))}
    </Reveal>
  );
}