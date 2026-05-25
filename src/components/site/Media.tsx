import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

type MediaProps = {
  /** Real image URL. When omitted, a branded photo-ready placeholder renders instead. */
  src?: string;
  alt?: string;
  /** Aspect ratio, e.g. "16/9", "4/3", "1/1", "21/9", "3/4". */
  aspect?: string;
  /** Caption shown only in placeholder mode, e.g. "Site work — Kijitonyama". */
  label?: string;
  /** Darkening scrim for text-over-image. "none" | "soft" | "strong" | "left". */
  scrim?: "none" | "soft" | "strong" | "left";
  rounded?: string;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
};

const SCRIMS: Record<NonNullable<MediaProps["scrim"]>, string> = {
  none: "",
  soft: "bg-gradient-to-t from-black/45 to-transparent",
  strong: "bg-gradient-to-t from-black/70 via-black/25 to-transparent",
  left: "bg-gradient-to-r from-black/75 via-black/35 to-transparent",
};

/**
 * Photo-ready media slot.
 *
 * The placeholder is intentionally branded (navy gradient + blueprint grid +
 * logo watermark) so empty sections still look finished. Swap in a real photo
 * later by passing `src` — layout and aspect ratio stay identical.
 */
export function Media({
  src,
  alt = "",
  aspect = "16/9",
  label,
  scrim = "none",
  rounded = "rounded-2xl",
  className,
  imgClassName,
  children,
}: MediaProps) {
  return (
    <div
      className={cn("relative overflow-hidden bg-[#0a1628]", rounded, className)}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn("absolute inset-0 h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <Placeholder label={label} />
      )}

      {scrim !== "none" && (
        <span className={cn("pointer-events-none absolute inset-0", SCRIMS[scrim])} />
      )}

      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
}

function Placeholder({ label }: { label?: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1d3c6b 0%, #07396c 60%, #0a1628 100%)" }}
      aria-hidden
    >
      {/* blueprint grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.08]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="media-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0 L0 0 0 32" fill="none" stroke="#2e9ca3" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#media-grid)" />
      </svg>

      {/* logo watermark */}
      <img
        src={logo}
        alt=""
        className="w-16 md:w-20 opacity-15 mix-blend-luminosity select-none"
        draggable={false}
      />

      {/* corner tag */}
      <span className="absolute left-3 top-3 rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 backdrop-blur-sm">
        Photo
      </span>

      {label && (
        <span className="absolute bottom-3 left-3 right-3 text-[11px] font-medium uppercase tracking-[0.12em] text-white/55">
          {label}
        </span>
      )}
    </div>
  );
}
