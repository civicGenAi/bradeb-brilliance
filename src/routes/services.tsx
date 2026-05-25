
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

      {/* Construction services — bento */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-teal mb-3 flex items-center gap-2"><span className="h-px w-8 bg-gold" /> Core Capabilities</p>
              <h2 className="font-heading font-extrabold text-navy text-3xl md:text-5xl leading-tight">Construction <span className="text-teal">Services</span></h2>
            </div>
            <p className="text-[#4a5568] max-w-md text-sm">From the first survey peg to the final coat of paint — we deliver every discipline in-house.</p>
          </div>

          <div className="grid md:grid-cols-6 gap-4">
            {[
              { Icon: Building2, t: "Building Construction", b: "Residential · commercial · industrial structures built to spec.", span: "md:col-span-3 md:row-span-2", big: true },
              { Icon: HardHat, t: "Civil Works", b: "Structural, foundations, concrete.", span: "md:col-span-3" },
              { Icon: Wrench, t: "Mechanical Contracting", b: "HVAC, plumbing, systems installation.", span: "md:col-span-3" },
              { Icon: Zap, t: "Electrical Engineering", b: "LV/HV installations and certified wiring.", span: "md:col-span-6" },
            ].map(({ Icon, t, b, span, big }, i) => (
              <Reveal as="article" delay={i * 110} key={t} className={`group relative overflow-hidden hover-lift-glow bg-gradient-to-br from-white to-[#f8f9fa] border border-black/5 rounded-2xl p-7 transition-all hover:border-teal/30 ${span} ${big ? "min-h-[320px]" : "min-h-[180px]"} flex flex-col justify-between`}>
                <span className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-teal/5 group-hover:bg-teal/10 group-hover:scale-150 transition-all duration-700" />
                <div className="relative flex items-start justify-between">
                  <div className={`${big ? "h-16 w-16" : "h-12 w-12"} rounded-2xl bg-teal/10 flex items-center justify-center group-hover:bg-teal group-hover:rotate-[-6deg] transition-all`}>
                    <Icon className="text-teal group-hover:text-white transition-colors" size={big ? 32 : 22} />
                  </div>
                  <span className="font-heading font-black text-navy/10 text-2xl">0{i+1}</span>
                </div>
                <div className="relative mt-6">
                  <h3 className={`font-heading font-bold text-navy ${big ? "text-2xl md:text-3xl" : "text-lg"} mb-2 group-hover:text-teal transition-colors`}>{t}</h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Supply chips */}
          <div className="mt-14 rounded-2xl border border-black/5 bg-[#f8f9fa] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
            <p className="eyebrow text-teal shrink-0 md:border-r md:border-black/10 md:pr-6">General Supply To</p>
            <div className="flex flex-wrap gap-2">
              {["Industrial", "Commercial", "Residential", "Leisure", "Religious", "Educational"].map(s => (
                <span key={s} className="px-4 py-2 rounded-full bg-white border border-navy/15 text-navy text-xs font-semibold hover:bg-navy hover:text-white hover:border-navy transition-all cursor-default">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fumigation */}
      {/* Fumigation — staggered cards on dark canvas */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white to-transparent" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-teal mb-3">Fumigation Division</p>
              <h2 className="font-heading font-extrabold text-navy text-3xl md:text-5xl">Pest-Free. <span className="text-teal">Guaranteed.</span></h2>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-soft-green/15 border border-soft-green/30 self-start">
              <span className="h-2 w-2 rounded-full bg-soft-green animate-pulse" />
              <span className="text-soft-green text-sm font-semibold">Certified chemicals · Insured operations</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[
              { Icon: Bug, t: "Fumigation", b: "Gaseous treatment for warehouses." },
              { Icon: Snail, t: "Pest Control", b: "Crawling & flying insects." },
              { Icon: ShieldCheck, t: "Termite Barrier", b: "Pre / post-construction." },
              { Icon: Bug, t: "Snake Control", b: "Safe removal programs." },
              { Icon: Bird, t: "Bird Control", b: "Humane deterrents." },
            ].map(({ Icon, t, b }, i) => (
              <Reveal as="article" delay={i*90} variant="scale" key={t} className="group relative bg-white rounded-2xl p-6 border border-black/5 hover-lift-glow lg:[&:nth-child(even)]:translate-y-6 transition-all">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal to-forest-teal flex items-center justify-center mb-5 group-hover:rotate-6 transition-transform shadow-lg shadow-teal/20">
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="font-heading font-bold text-navy text-base mb-1.5 group-hover:text-teal transition-colors">{t}</h3>
                <p className="text-[#4a5568] text-xs leading-relaxed">{b}</p>
              </Reveal>
            ))}
          </div>

          {/* Why choose strip */}
          <div className="rounded-3xl overflow-hidden grid md:grid-cols-2" style={{ background: "linear-gradient(135deg, #1f4590, #07396c)" }}>
            <div className="p-8 md:p-12">
              <p className="eyebrow text-gold mb-4">Why Choose Our Pest Services</p>
              <h3 className="font-heading font-extrabold text-white text-2xl md:text-3xl mb-6 leading-tight">Built on protocols, not promises.</h3>
              <p className="text-white/70 text-sm">Every treatment plan begins with a site survey and ends with documented follow-ups.</p>
            </div>
            <ul className="bg-white/5 backdrop-blur p-8 md:p-12 divide-y divide-white/10">
              {[
                "Certified, government-approved chemicals only.",
                "Trained technicians with safety protocols.",
                "Tailored treatment plans by site survey.",
                "Follow-up visits and warranties included.",
              ].map((b, i) => (
                <li key={b} className="flex items-start gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="font-heading font-black text-gold text-sm w-6 shrink-0">0{i+1}</span>
                  <span className="text-white/90 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      {/* Process — roadmap */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="text-center mb-16">
            <p className="eyebrow text-gold mb-3">Our Process</p>
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl overflow-hidden inline-block"><SplitText text="How We Work" /></h2>
            <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm">Five disciplined steps from first conversation to final handover.</p>
          </div>

          <div className="relative">
            {/* connector line */}
            <span className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-teal via-gold to-teal opacity-30" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5 relative">
              {[
                { t: "Consultation", b: "Listen, scope and define goals." },
                { t: "Site Survey", b: "On-ground assessment & checks." },
                { t: "Planning", b: "Design, schedule and budget." },
                { t: "Execution", b: "Build with supervision." },
                { t: "Handover", b: "Final inspection & warranty." },
              ].map((step, i) => (
                <Reveal as="div" delay={i * 120} variant="scale" key={step.t} className="group relative">
                  <span className="block mx-auto h-14 w-14 rounded-full bg-navy border-2 border-gold flex items-center justify-center font-heading font-black text-gold text-lg relative z-10 group-hover:bg-gold group-hover:text-navy transition-all shadow-lg shadow-gold/20">
                    <span className="absolute inset-0 flex items-center justify-center">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center h-32 flex flex-col justify-center group-hover:border-teal group-hover:bg-teal/10 transition-all">
                    <p className="font-heading font-bold text-white text-base mb-1">{step.t}</p>
                    <p className="text-white/60 text-xs leading-relaxed">{step.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
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