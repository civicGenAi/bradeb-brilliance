
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Download, ShieldCheck } from "lucide-react";



const certs = [
  { t:"Certificate of Incorporation", body:"BRELA Tanzania", num:"No. 142322722", date:"Aug 7, 2020", color:"#1f4590" },
  { t:"CRB Building Contractor Class V", body:"Contractors Reg. Board", num:"B5/1722/01/2024", date:"Jan 6, 2024", color:"#157575" },
  { t:"CRB Civil Works Contractor Class V", body:"CRB Tanzania", num:"C5/1579/01/2024", date:"Jan 3, 2024", color:"#5b995a" },
  { t:"TIN Registration", body:"Tanzania Revenue Authority", num:"TIN 142-322-722", date:"Aug 7, 2020", color:"#1f4590" },
  { t:"VAT Registration", body:"Tanzania Revenue Authority", num:"VRN 40-044729-A", date:"Jan 13, 2022", color:"#157575" },
  { t:"Tax Clearance Certificate", body:"TRA", num:"521-0112-0635", date:"2022", color:"#5b995a" },
  { t:"Workers Compensation Fund", body:"WCF Tanzania", num:"Reg No. 041904", date:"Dec 20, 2023", color:"#1f4590" },
  { t:"Zanzibar Certificate of Incorporation", body:"Rev. Govt of Zanzibar", num:"Z0000152767", date:"Jun 1, 2022", color:"#157575" },
];

export default function CertsPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden pt-20" style={{ background: "radial-gradient(circle at center, #07396c 0%, #0a1628 100%)" }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="absolute h-24 w-20 rounded border border-teal/30 opacity-5" style={{ top: `${(i*97)%80 + 5}%`, left: `${(i*53)%85 + 5}%`, transform: `rotate(${i*30}deg)` }} />
        ))}
        <div className="relative mx-auto max-w-3xl px-6 py-20">
          <svg className="mx-auto mb-8 w-24 h-24 animate-spin-slow" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#c9a84c" strokeWidth="1" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="#157575" strokeWidth="1" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
            <ShieldCheck x="35" y="35" />
          </svg>
          <p className="eyebrow text-gold mb-6">Legal Compliance</p>
          <h1 className="font-heading font-black text-white text-4xl md:text-6xl leading-tight">
            {"Certified. Registered. Trusted.".split(" ").map((w,i) => (
              <span key={i} className="inline-block mr-3 animate-fade-up" style={{ animationDelay: `${i*0.15}s` }}>{w}</span>
            ))}
          </h1>
          <span className="block h-1 w-32 bg-gold mx-auto mt-6 animate-fade-up" style={{ animationDelay: "0.7s" }} />
          <p className="text-white/70 mt-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.8s" }}>
            Bradeb Investment Limited holds all required legal certifications under Tanzanian law for construction and business operations.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((c, i) => (
            <Reveal as="article" delay={i * 80} variant="scale" key={c.t} className="group hover-lift-glow tilt-3d bg-white rounded-xl overflow-hidden border border-black/5 transition-all hover:border-t-[3px] hover:border-gold">
              <div className="h-16 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: c.color }}>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <ShieldCheck className="text-white group-hover:scale-125 transition-transform" size={28} />
              </div>
              <div className="p-5 h-[200px] flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-navy text-sm leading-snug mb-2 group-hover:text-teal transition-colors">{c.t}</h3>
                  <p className="text-teal text-xs font-semibold">{c.body}</p>
                  <p className="text-[#4a5568] text-xs mt-2">{c.num}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94a3b8]">{c.date}</span>
                  <span className="px-2 py-1 rounded-full bg-soft-green/15 text-soft-green text-[10px] font-bold uppercase tracking-wider">Valid</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Licences */}
      <section className="py-20" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-teal mb-3">Business Licences</p>
          <h2 className="font-heading font-extrabold text-navy text-3xl md:text-4xl mb-10">Municipal Operating Licences</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Building Contractor Class V Licence", body: "Kinondoni Municipal Council", valid: "Valid to Feb 7, 2026" },
              { t: "Civil Contractor Class V Licence", body: "Kinondoni Municipal Council", valid: "Valid to Apr 4, 2026" },
            ].map(l => (
              <div key={l.t} className="rounded-2xl bg-white p-8 border-l-4 border-teal">
                <h3 className="font-heading font-bold text-navy text-xl mb-2">{l.t}</h3>
                <p className="text-[#4a5568] mb-3">{l.body}</p>
                <span className="px-3 py-1 rounded-full bg-gold/15 text-[#7c6420] text-xs font-bold uppercase">{l.valid}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24" style={{ backgroundColor: "#1f4590" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
            All operations comply with the Companies Act 2002, Contractors Registration Act No. 17 of 1997, and Tanzania Revenue Authority requirements.
          </p>
          <div className="h-px w-32 bg-gold mx-auto my-10" />
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-teal px-7 py-4 text-white font-semibold uppercase text-sm tracking-[0.15em]">
            <Download size={16} /> Download Company Profile
          </a>
        </div>
      </section>
    </PageShell>
  );
}