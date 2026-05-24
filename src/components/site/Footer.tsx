import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone, ArrowUpRight, ShieldCheck, HardHat, Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden text-[#94a3b8]" style={{ backgroundColor: "#050a14" }}>
      {/* blueprint grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <pattern id="fgrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0 L0 0 0 40" fill="none" stroke="#26d4a0" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fgrid)" />
      </svg>
      {/* corner glows */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-[140px] opacity-20" style={{ background: "#157575" }} />
      <div className="absolute -bottom-40 -right-32 w-[400px] h-[400px] rounded-full blur-[140px] opacity-15" style={{ background: "#c9a84c" }} />

      {/* hazard stripe */}
      <div className="relative h-1.5 w-full" style={{ backgroundImage: "repeating-linear-gradient(135deg,#c9a84c 0 16px,#0a1628 16px 32px)" }} />

      {/* ====== TOP BAND: badges ====== */}
      <div className="relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { Icon: ShieldCheck, label: "CRB Certified", value: "Class V Contractor" },
            { Icon: HardHat,    label: "WCF Registered", value: "Safety Compliant" },
            { Icon: Wrench,     label: "Since 2020",     value: "Engineered to Last" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4 group">
              <div className="h-12 w-12 rounded-xl border border-[#26d4a0]/30 bg-[#0a1628] flex items-center justify-center text-[#26d4a0] group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-colors">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#26d4a0]/80 font-bold">{label}</p>
                <p className="text-white text-sm font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ====== MAIN GRID ====== */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-14 md:py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-12">
        {/* Brand block */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative">
              <img src={logo} alt="Bradeb" className="h-14 w-14 bg-white p-1.5 rounded-lg" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#26d4a0] animate-pulse shadow-[0_0_10px_#26d4a0]" />
            </div>
            <div>
              <span className="font-heading font-extrabold text-white tracking-wider text-lg block leading-tight">BRADEB</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#26d4a0]">Investment Limited</span>
            </div>
          </div>
          <p className="text-[14px] leading-relaxed mb-5 text-[#94a3b8] max-w-sm">
            Architects of Possibility. Builders of Dreams. Tanzania's trusted partner for construction, civil engineering and pest control.
          </p>

          {/* coordinates badge */}
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#c9a84c] border border-[#c9a84c]/30 rounded-full px-3 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
            6.7456° S · 39.2083° E · DAR
          </div>

          <div className="flex gap-2">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" className="h-10 w-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-[#26d4a0] hover:bg-[#157575] hover:text-white hover:border-[#157575] transition-all">
                <I size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-5 flex items-center gap-2">
            <span className="h-px w-6 bg-[#c9a84c]" /> Navigate
          </h4>
          <ul className="space-y-3 text-[13px]">
            {["Home","About","Services","Projects","Team","Reviews","Contact"].map(n => (
              <li key={n}>
                <Link to={n === "Home" ? "/" : `/${n.toLowerCase()}`} className="group inline-flex items-center gap-2 hover:text-white transition-colors">
                  <span className="h-px w-3 bg-[#26d4a0]/40 group-hover:w-5 group-hover:bg-[#26d4a0] transition-all" />
                  {n}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-5 flex items-center gap-2">
            <span className="h-px w-6 bg-[#c9a84c]" /> Capabilities
          </h4>
          <ul className="space-y-3 text-[13px]">
            {["Building Construction","Civil Engineering","Fumigation Services","Pest Control","Mechanical & Electrical","Renovation Works"].map(s => (
              <li key={s} className="flex items-start gap-2">
                <span className="text-[#26d4a0] mt-1 text-[10px]">◆</span>{s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c] font-bold mb-5 flex items-center gap-2">
            <span className="h-px w-6 bg-[#c9a84c]" /> Headquarters
          </h4>
          <ul className="space-y-4 text-[13px]">
            <li className="flex gap-3">
              <MapPin size={16} className="text-[#26d4a0] shrink-0 mt-0.5" />
              <span>P.O. Box 12390<br/>Mbezi Beach – Ndumbwi<br/>Dar es Salaam, Tanzania</span>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-[#26d4a0] shrink-0 mt-0.5" />
              <a href="mailto:boraentity20@gmail.com" className="hover:text-white transition-colors break-all">boraentity20@gmail.com</a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-[#26d4a0] shrink-0 mt-0.5" />
              <a href="tel:+255754230234" className="hover:text-white transition-colors">+255 754 230 234</a>
            </li>
          </ul>

          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#157575] hover:bg-[#c9a84c] hover:text-[#0a1628] text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors">
            Request a Quote <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      {/* ====== BOTTOM BAR ====== */}
      <div className="relative border-t border-white/5 bg-black/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between gap-3 text-[11px]">
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#26d4a0] animate-pulse" />
            © 2026 Bradeb Investment Limited — All Rights Reserved.
          </p>
          <p className="font-mono tracking-wider text-[#64748b]">
            CRB <span className="text-[#c9a84c]">B5/1722/01/2024</span> · TIN <span className="text-[#c9a84c]">142-322-722</span> · 🇹🇿 Tanzania
          </p>
        </div>
      </div>
    </footer>
  );
}