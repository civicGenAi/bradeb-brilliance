import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Mail,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  HardHat,
  Wrench,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden text-[#94a3b8]"
      style={{ backgroundColor: "#050a14" }}
    >
      {/* blueprint grid background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <pattern id="fgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="#2e9ca3" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fgrid)" />
      </svg>
      {/* corner glows */}
      <div
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-[140px] opacity-20"
        style={{ background: "#17767c" }}
      />
      <div
        className="absolute -bottom-40 -right-32 w-[400px] h-[400px] rounded-full blur-[140px] opacity-15"
        style={{ background: "#2e9ca3" }}
      />

      {/* hazard stripe */}
      <div
        className="relative h-1.5 w-full"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg,#2e9ca3 0 16px,#0a1628 16px 32px)",
        }}
      />

      {/* ====== TOP BAND: badges ====== */}
      <div className="relative border-b border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 sm:py-8 flex flex-col sm:flex-row flex-wrap sm:justify-between items-start sm:items-center gap-6 sm:gap-4">
          {[
            { Icon: ShieldCheck, label: "CRB Certified", value: "Class V Contractor" },
            { Icon: HardHat, label: "WCF Registered", value: "Safety Compliant" },
            { Icon: Wrench, label: "Since 2020", value: "Engineered to Last" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 group">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl border border-[#2e9ca3]/30 bg-[#0a1628] flex items-center justify-center text-[#2e9ca3] group-hover:border-[#2e9ca3] group-hover:text-[#2e9ca3] transition-colors shrink-0">
                <Icon size={20} className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#2e9ca3]/80 font-bold">
                  {label}
                </p>
                <p className="text-white text-xs sm:text-sm font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== MAIN GRID ====== */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-12 md:py-20 grid gap-10 md:gap-12 grid-cols-2 lg:grid-cols-12">
        {/* Brand block */}
        <div className="col-span-2 lg:col-span-4 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative">
              <img src={logo} alt="Bradeb" className="h-12 w-auto sm:h-14 logo-on-dark" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#2e9ca3] animate-pulse shadow-[0_0_10px_#2e9ca3]" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-white tracking-wider text-base sm:text-lg block leading-tight">
                BRADEB
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-[#2e9ca3]">
                Investment Limited
              </span>
            </div>
          </div>
          <p className="text-[13px] sm:text-[14px] leading-relaxed mb-6 text-[#94a3b8] max-w-sm">
            Architects of Possibility. Builders of Dreams. Tanzania's trusted partner for
            construction, civil engineering and pest control.
          </p>

          <div className="flex gap-2 mb-6">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#2e9ca3] hover:bg-[#17767c] hover:text-white hover:border-[#17767c] transition-all"
              >
                <I size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="col-span-1 lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#2e9ca3] font-bold mb-4 sm:mb-5 flex items-center gap-2">
            <span className="h-px w-4 sm:w-6 bg-[#2e9ca3]" /> Navigate
          </h4>
          <ul className="space-y-3 text-[12px] sm:text-[13px]">
            {["Home", "About", "Services", "Projects", "Team", "Reviews", "Contact"].map((n) => (
              <li key={n}>
                <Link
                  to={n === "Home" ? "/" : `/${n.toLowerCase()}`}
                  className="group inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <span className="h-px w-3 bg-[#2e9ca3]/40 group-hover:w-5 group-hover:bg-[#2e9ca3] transition-all" />
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="col-span-1 lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#2e9ca3] font-bold mb-4 sm:mb-5 flex items-center gap-2">
            <span className="h-px w-4 sm:w-6 bg-[#2e9ca3]" /> Capabilities
          </h4>
          <ul className="space-y-3 text-[12px] sm:text-[13px]">
            {[
              "Building Construction",
              "Civil Engineering",
              "Fumigation Services",
              "Pest Control",
              "Mechanical & Electrical",
              "Renovation Works",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="text-[#2e9ca3] mt-1 text-[10px]">◆</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#2e9ca3] font-bold mb-4 sm:mb-5 flex items-center gap-2">
            <span className="h-px w-6 bg-[#2e9ca3]" /> Headquarters
          </h4>
          <ul className="space-y-4 text-[12px] sm:text-[13px]">
            <li className="flex gap-3">
              <MapPin size={16} className="text-[#2e9ca3] shrink-0 mt-0.5" />
              <span>
                P.O. Box 12390
                <br />
                Mbezi Beach – Ndumbwi
                <br />
                Dar es Salaam, Tanzania
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-[#2e9ca3] shrink-0 mt-0.5" />
              <a
                href="mailto:info@bradebinvestmentltd.com"
                className="hover:text-white transition-colors break-all"
              >
                info@bradebinvestmentltd.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-[#2e9ca3] shrink-0 mt-0.5" />
              <a href="tel:+255754230234" className="hover:text-white transition-colors">
                +255 754 230 234
              </a>
            </li>
          </ul>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#17767c] hover:bg-[#2e9ca3] hover:text-[#0a1628] text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors"
          >
            Request a Quote <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* ====== BOTTOM BAR ====== */}
      <div className="relative border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between items-center md:items-start gap-4 text-[10px] sm:text-[11px] text-center md:text-left">
          <p className="flex items-center justify-center md:justify-start gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2e9ca3] animate-pulse shrink-0" />
            <span>© {currentYear} Bradeb Investment Limited — All Rights Reserved.</span>
          </p>
          <Link
            to="/consumer-policy"
            className="hover:text-white underline-offset-2 hover:underline transition-colors"
          >
            Consumer Policy
          </Link>
          <p className="font-mono tracking-wider text-[#64748b] flex flex-wrap justify-center gap-2">
            <span>
              CRB <span className="text-[#2e9ca3]">B5/1722/01/2024</span>
            </span>
            <span className="hidden sm:inline">·</span>
            <span>
              TIN <span className="text-[#2e9ca3]">142-322-722</span>
            </span>
            <span className="hidden sm:inline">·</span>
            <span>Tanzania</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
