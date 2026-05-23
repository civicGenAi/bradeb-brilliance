
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { useState } from "react";



type P = { n: string; name: string; client: string; value: string; duration: string; location: string; cat: string; pattern: number };
const projects: P[] = [
  { n:"01", name:"JKCI Pedestrian Bridge", client:"Jakaya Kikwete Cardiac Institute", value:"TZS 32,896,040", duration:"1 Month", location:"Dar es Salaam", cat:"Institutional", pattern:0 },
  { n:"02", name:"NHIF Re-roofing & Renovation", client:"National Health Insurance Fund", value:"TZS 97,221,500", duration:"6 Months", location:"Dar es Salaam", cat:"Institutional", pattern:1 },
  { n:"03", name:"Kijitonyama Residential", client:"Safia & Mohamed Mnyau", value:"TZS 320,000,000", duration:"9 Months", location:"Kinondoni", cat:"Residential", pattern:2 },
  { n:"04", name:"Habitat for Humanity Renovation", client:"Habitat for Humanity Tanzania", value:"TZS 105,750,131", duration:"2 Months", location:"Masaki", cat:"Commercial", pattern:3 },
  { n:"05", name:"Travis Baker Residence", client:"Mr. & Mrs. Travis Baker", value:"TZS 451,000,000", duration:"12 Months", location:"Machame, Moshi", cat:"Residential", pattern:0 },
  { n:"06", name:"ViaService FNB Fit-out", client:"ViaService", value:"TZS 70,000,000", duration:"1 Month", location:"FNB House, Dar es Salaam", cat:"Commercial", pattern:1 },
  { n:"07", name:"Geti Fonga Residence", client:"Erasto Focus Tarimo", value:"TZS 110,000,000", duration:"6 Months", location:"Moshi, Kilimanjaro", cat:"Residential", pattern:2 },
  { n:"08", name:"Mwanza Residence", client:"Baraka Mtamwega & Rahel Lyengi", value:"TZS 194,854,541", duration:"4 Months", location:"Ilemela, Mwanza", cat:"Residential", pattern:3 },
];

const patterns = [
  "linear-gradient(135deg, #1f4590 0%, #157575 100%)",
  "linear-gradient(135deg, #07396c 0%, #1f4590 100%)",
  "linear-gradient(135deg, #157575 0%, #0f6e56 100%)",
  "linear-gradient(135deg, #0a1628 0%, #115294 100%)",
];

const tabs = ["All","Residential","Commercial","Institutional"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20" style={{ backgroundColor: "#1f4590" }}>
        <span className="absolute -right-20 top-1/2 -translate-y-1/2 font-heading font-black text-white select-none pointer-events-none" style={{ fontSize: "40vw", lineHeight: 1, opacity: 0.04 }}>8</span>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 w-full">
          <p className="eyebrow text-teal mb-6 animate-fade-up">Project Portfolio</p>
          <h1 className="font-heading font-black text-white text-5xl md:text-7xl leading-[0.95] overflow-hidden">
            <SplitText text="8 Completed Projects." />
          </h1>
          <p className="font-heading font-bold text-xl md:text-2xl mt-4 animate-fade-up text-gradient-gold" style={{ animationDelay: "0.2s" }}>TZS 1.38 Billion+ in Construction Value</p>
          <p className="text-white/70 mt-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>Across Dar es Salaam, Moshi, Mwanza and Zanzibar</p>
          <div className="flex flex-wrap gap-2 mt-10">
            {tabs.map(t => (
              <button key={t} onClick={() => setFilter(t)} className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all ${filter === t ? "bg-teal text-white" : "bg-white/10 text-white hover:bg-white/20"}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <Reveal as="article" delay={i * 90} key={p.n} className="group hover-lift-glow tilt-3d rounded-2xl overflow-hidden border border-black/5 bg-white">
              <div className="h-20 relative overflow-hidden group-hover:h-24 transition-all duration-500" style={{ background: patterns[p.pattern] }}>
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 80" preserveAspectRatio="none">
                  {Array.from({ length: 12 }).map((_, k) => (
                    <rect key={k} x={k * 35} y={Math.random() * 30 + 10} width="20" height={80 - Math.random() * 30} fill="white" opacity={0.4} />
                  ))}
                </svg>
                <span className="absolute top-4 left-6 font-heading font-black text-white/90 text-2xl group-hover:text-gold transition-colors">[{p.n}]</span>
              </div>
              <div className="p-8">
                <h3 className="font-heading font-bold text-navy text-xl mb-1 group-hover:text-teal transition-colors">{p.name}</h3>
                <p className="text-[#4a5568] text-sm mb-5">{p.client}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-3 py-1 rounded-full bg-teal/15 text-teal text-xs font-semibold">{p.location}</span>
                  <span className="px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-semibold">{p.duration}</span>
                  <span className="px-3 py-1 rounded-full bg-gold/15 text-[#7c6420] text-xs font-semibold">{p.cat}</span>
                </div>
                <p className="font-heading font-extrabold text-2xl text-gradient-gold">{p.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Total banner */}
      <section className="py-12" style={{ backgroundColor: "#07396c" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <p className="font-heading font-extrabold text-gold text-2xl md:text-3xl">
            Total Portfolio Value: TZS 1,381,722,212
          </p>
          <p className="text-white/70 mt-2 label-cap">8 Projects · 4 Regions · 2020–2025</p>
        </div>
      </section>
    </PageShell>
  );
}