
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { ArrowRight, Building2, HardHat, Wrench, Zap, Bug, Bird, Snail, ShieldCheck, Download } from "lucide-react";
import { Link } from "react-router-dom";
import profilePdf from "@/assets/compay_profile.pdf";

const certs = [
  { t: "Certificate of Incorporation", body: "BRELA Tanzania", num: "No. 142322722", date: "Aug 7, 2020", color: "#1f4590" },
  { t: "CRB Building Contractor Class V", body: "Contractors Reg. Board", num: "B5/1722/01/2024", date: "Jan 6, 2024", color: "#157575" },
  { t: "CRB Civil Works Contractor Class V", body: "CRB Tanzania", num: "C5/1579/01/2024", date: "Jan 3, 2024", color: "#5b995a" },
  { t: "TIN Registration", body: "Tanzania Revenue Authority", num: "TIN 142-322-722", date: "Aug 7, 2020", color: "#1f4590" },
  { t: "VAT Registration", body: "Tanzania Revenue Authority", num: "VRN 40-044729-A", date: "Jan 13, 2022", color: "#157575" },
  { t: "Tax Clearance Certificate", body: "TRA", num: "521-0112-0635", date: "2022", color: "#5b995a" },
  { t: "Workers Compensation Fund", body: "WCF Tanzania", num: "Reg No. 041904", date: "Dec 20, 2023", color: "#1f4590" },
  { t: "Zanzibar Certificate of Incorporation", body: "Rev. Govt of Zanzibar", num: "Z0000152767", date: "Jun 1, 2022", color: "#157575" },
];

export default function ServicesPage() {
  return (
    <PageShell>
      {/* HERO — blueprint */}
      <section className="relative min-h-[75vh] flex items-center pt-20 overflow-hidden" style={{ backgroundColor: "#07396c" }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="bp" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bp)" />
        </svg>
        <svg className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#157575" className="animate-draw" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#157575" className="animate-draw" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#157575" />
          <path d="M100,10 L100,190 M10,100 L190,100" stroke="#157575" />
          <path d="M30,30 L170,170 M170,30 L30,170" stroke="#157575" strokeWidth="0.5" />
        </svg>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <p className="eyebrow text-teal mb-6 animate-fade-up">Our Expertise</p>
          <h1 className="font-heading font-black text-white text-5xl md:text-7xl leading-[0.95] max-w-3xl overflow-hidden">
            <span className="block animate-clip-up">Solutions That</span>
            <span className="block text-gradient-gold animate-clip-up" style={{ animationDelay: "0.25s" }}>Build Legacies</span>
          </h1>
          <p className="mt-8 max-w-2xl text-white/70 text-lg animate-fade-up" style={{ animationDelay: "0.5s" }}>
            From foundations to finishing — construction and pest control under one roof.
          </p>
          <Link to="/contact" className="btn-shine mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-near-black font-bold uppercase tracking-[0.15em] text-sm hover:scale-105 transition">
            Request a Service Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Construction services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="h-10 w-1.5 bg-teal" />
            <h2 className="font-heading font-extrabold text-navy text-3xl md:text-4xl">Construction Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Building2, t: "Building Construction", b: "Residential · commercial · industrial." },
              { Icon: HardHat, t: "Civil Works", b: "Structural, foundations, concrete." },
              { Icon: Wrench, t: "Mechanical Contracting", b: "HVAC, plumbing, systems installation." },
              { Icon: Zap, t: "Electrical Engineering", b: "LV/HV installations and certified wiring." },
            ].map(({ Icon, t, b }, i) => (
              <Reveal as="article" delay={i * 110} key={t} className="group hover-lift-glow bg-white border-t border-navy/30 p-6 h-[280px] flex flex-col justify-between transition-all hover:border-t-[3px] hover:border-teal rounded-md">
                <Icon className="text-teal group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" size={32} />
                <div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">{t}</h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <p className="eyebrow text-teal mb-4">General Supply To</p>
            <div className="flex flex-wrap gap-3">
              {["Industrial", "Commercial", "Residential", "Leisure", "Religious", "Educational"].map(s => (
                <span key={s} className="px-5 py-2 rounded-full bg-navy text-white text-sm font-semibold">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fumigation */}
      <section className="py-24" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl p-10" style={{ backgroundColor: "#1f4590" }}>
            <p className="eyebrow text-teal mb-3">Fumigation</p>
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl mb-10">Pest-Free.<br />Guaranteed.</h2>
            <ul className="space-y-5">
              {[
                { Icon: Bug, t: "Fumigation", b: "Gaseous treatment for warehouses and facilities." },
                { Icon: Snail, t: "Pest Control", b: "Crawling and flying insect management." },
                { Icon: ShieldCheck, t: "Pre/Post-Construction Treatment", b: "Termite barrier protection." },
                { Icon: Bug, t: "Snake Control", b: "Safe removal and prevention programs." },
                { Icon: Bird, t: "Bird Control", b: "Humane deterrent installations." },
              ].map(({ Icon, t, b }, i) => (
                <li key={t} className="flex gap-4 animate-fade-up" style={{ animationDelay: `${i * 0.07}s` }}>
                  <Icon className="text-teal shrink-0 mt-1" size={22} />
                  <div>
                    <h3 className="font-heading font-bold text-white">{t}</h3>
                    <p className="text-white/70 text-sm">{b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-10 bg-white border border-black/5">
            <h3 className="font-heading font-extrabold text-navy text-3xl mb-8">Why Choose Our Pest Services</h3>
            <ul className="space-y-5 text-[#4a5568]">
              {[
                "Certified, government-approved chemicals only.",
                "Trained technicians with safety protocols.",
                "Tailored treatment plans by site survey.",
                "Follow-up visits and warranties included.",
              ].map(b => (
                <li key={b} className="flex gap-3"><span className="h-2 w-2 mt-2.5 rounded-full bg-soft-green shrink-0" /> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ backgroundColor: "#0a1628" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-teal mb-3">Our Process</p>
          <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl mb-14 overflow-hidden"><SplitText text="How We Work" /></h2>
          <div className="grid md:grid-cols-5 gap-4">
            {["Consultation", "Site Survey", "Planning", "Execution", "Handover"].map((step, i) => (
              <Reveal as="div" delay={i * 120} variant="scale" key={step} className="group relative">
                <div className="rounded-xl border border-white/10 p-6 h-40 flex flex-col justify-between bg-white/5 transition-all hover:border-teal hover:bg-teal/10">
                  <span className="font-heading font-black text-gold text-3xl group-hover:scale-110 origin-left transition-transform inline-block">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-heading font-bold text-white">{step}</p>
                </div>
                {i < 4 && <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-teal" size={20} />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Integration */}
      <section className="py-24 bg-white relative overflow-hidden" id="certifications">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#157575 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
          <Reveal className="mb-14 text-center">
            <p className="eyebrow text-teal mb-3 justify-center flex items-center gap-2"><span className="w-8 h-[2px] bg-gold"></span> Legal & Compliance</p>
            <h2 className="font-heading font-extrabold text-navy text-4xl md:text-5xl">Certified & Registered</h2>
            <p className="mt-4 text-[#4a5568] max-w-2xl mx-auto">Operating fully under Tanzanian law with all necessary board registrations and municipal licenses.</p>
          </Reveal>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 px-4 -mx-4 hide-scrollbar">
            {certs.map((c, i) => (
              <Reveal as="article" delay={i * 80} key={c.t} className="group hover-lift-glow tilt-3d bg-white rounded-xl overflow-hidden border border-navy/5 shadow-xl shadow-navy/5 transition-all hover:border-b-[4px] hover:border-gold min-w-[280px] md:min-w-[320px] snap-center flex flex-col justify-between">
                <div className="h-16 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: c.color }}>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <ShieldCheck className="text-white group-hover:scale-125 transition-transform" size={28} />
                </div>
                <div className="p-6 h-[200px] flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-navy text-sm leading-snug mb-2 group-hover:text-teal transition-colors">{c.t}</h3>
                    <p className="text-teal text-[13px] font-semibold">{c.body}</p>
                    <p className="text-[#4a5568] text-xs mt-2">{c.num}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-navy/5 pt-3">
                    <span className="text-xs text-[#94a3b8]">{c.date}</span>
                    <span className="px-2 py-1 rounded-md bg-soft-green/15 text-soft-green text-[10px] font-bold uppercase tracking-wider">Valid</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {[
              { t: "Building Contractor Class V Licence", body: "Kinondoni Municipal Council", valid: "Valid to Feb 7, 2026" },
              { t: "Civil Contractor Class V Licence", body: "Kinondoni Municipal Council", valid: "Valid to Apr 4, 2026" },
            ].map(l => (
              <div key={l.t} className="rounded-xl bg-[#f8f9fa] p-8 border-l-4 border-teal flex flex-col justify-between items-start">
                <div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">{l.t}</h3>
                  <p className="text-[#4a5568] text-sm mb-4">{l.body}</p>
                </div>
                <span className="px-3 py-1.5 rounded-md bg-gold/15 text-[#7c6420] text-[11px] font-bold uppercase">{l.valid}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance CTA */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "#1f4590" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <ShieldCheck size={48} className="mx-auto text-gold mb-6" />
          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
            All operations strictly comply with the Companies Act 2002, Contractors Registration Act No. 17 of 1997, and Tanzania Revenue Authority requirements.
          </p>
          <div className="h-px w-24 bg-gold mx-auto my-10" />
          <a href={profilePdf} download="Bradeb_Company_Profile.pdf" className="btn-shine inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 text-white font-bold uppercase text-sm tracking-[0.15em] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(38,212,160,0.3)]">
            <Download size={18} /> Download Company Profile
          </a>
        </div>
      </section>
    </PageShell>
  );
}