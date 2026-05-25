
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { Leaf, HeartPulse, ShieldCheck } from "lucide-react";



export default function AboutPage() {
  return (
    <PageShell>
      {/* HERO — architectural blueprint */}
      <section className="relative min-h-[92vh] flex items-end pt-24 pb-12 overflow-hidden" style={{ background: "radial-gradient(circle at 20% 0%, #1d3c6b 0%, #07396c 45%, #0a1628 100%)" }}>
        {/* Blueprint grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="abg" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#abg)" />
        </svg>
        {/* Floating skyline silhouette */}
        <svg className="absolute bottom-0 left-0 right-0 w-full opacity-25" viewBox="0 0 1200 200" preserveAspectRatio="none">
          {[60,120,80,160,100,140,90,180,110,150,70,130,95,165,85,145].map((h,i)=>(
            <rect key={i} x={i*78} y={200-h} width="60" height={h} fill="#17767c" />
          ))}
        </svg>
        {/* Gold compass orbit */}
        <svg className="absolute -right-32 top-12 w-[420px] h-[420px] opacity-30 animate-spin-slow hidden md:block" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#2e9ca3" strokeDasharray="3 6" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#2e9ca3" />
          <circle cx="100" cy="10" r="4" fill="#2e9ca3" />
        </svg>

        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8 animate-fade-up">
              <span className="h-px w-12 bg-gold" />
              <p className="eyebrow text-gold">Est. 2020 · Dar es Salaam</p>
            </div>
            <h1 className="font-heading font-black text-white text-[3.5rem] sm:text-7xl lg:text-[8.5rem] leading-[0.85] tracking-tight">
              <span className="block animate-clip-up">Built</span>
              <span className="block animate-clip-up text-stroke-white" style={{ animationDelay: "0.2s" }}>on</span>
              <span className="block animate-clip-up text-gradient-gold" style={{ animationDelay: "0.4s" }}>Trust.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 space-y-3">
            {[
              { k: "05", t: "Years Building", s: "Since incorporation" },
              { k: "08", t: "Major Projects", s: "Delivered nationwide" },
              { k: "V", t: "CRB Class", s: "Building & Civil" },
            ].map((c, i) => (
              <div key={c.k} className="group flex items-center gap-5 bg-white/[0.04] border border-white/10 backdrop-blur rounded-xl p-4 hover:bg-white/[0.08] hover:border-gold/40 transition-all animate-fade-up" style={{ animationDelay: `${0.6 + i*0.12}s` }}>
                <span className="font-heading font-black text-gold text-4xl w-12 text-center group-hover:scale-110 transition-transform">{c.k}</span>
                <div className="flex-1 border-l border-white/15 pl-4">
                  <p className="text-white font-semibold text-sm">{c.t}</p>
                  <p className="text-white/50 text-xs">{c.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are + Timeline */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-start">
          <Reveal variant="left">
            <p className="eyebrow text-teal mb-4">Who We Are</p>
            <h2 className="font-heading font-extrabold text-navy text-3xl md:text-5xl mb-8 leading-[1.05]">A <span className="text-teal">trusted</span> Tanzanian builder.</h2>
            <div className="space-y-5 text-[#4a5568] leading-relaxed text-[15px]">
              <p>Bradeb Investment Limited is a wholly Tanzanian-owned company specialising in building construction, civil engineering, and professional fumigation services.</p>
              <p>Incorporated in 2020 in Dar es Salaam, we have grown into a CRB Class V certified contractor — delivering residential, commercial, institutional and industrial projects across Tanzania.</p>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-3 rounded-full bg-navy/5 border border-navy/10">
              <span className="h-2 w-2 rounded-full bg-soft-green animate-pulse" />
              <span className="text-navy text-sm font-semibold">Accountable from sketch to handover</span>
            </div>
          </Reveal>

          {/* Horizontal scrollable timeline */}
          <div className="relative">
            <p className="eyebrow text-teal mb-6">Milestones</p>
            <div className="relative">
              <span className="absolute top-7 left-0 right-0 h-[2px] bg-gradient-to-r from-teal via-gold to-teal opacity-30" />
              <div className="grid grid-cols-3 gap-3 md:gap-5 relative">
                {[
                  { year: "2020", title: "Incorporated", body: "Founded under Companies Act 2002.", color: "#1d3c6b" },
                  { year: "2022", title: "VAT Registered", body: "TRA registration; first major projects.", color: "#17767c" },
                  { year: "2024", title: "CRB Class V", body: "Building & Civil certification awarded.", color: "#2e9ca3" },
                ].map((m, i) => (
                  <Reveal as="div" delay={i*150} variant="scale" key={m.year} className="group relative">
                    <span className="block mx-auto h-4 w-4 rounded-full ring-4 ring-white relative z-10 group-hover:scale-150 transition-transform" style={{ background: m.color, boxShadow: `0 0 0 6px ${m.color}22` }} />
                    <div className="mt-6 p-5 rounded-2xl border border-black/5 bg-white hover-lift-glow text-center md:text-left">
                      <p className="font-heading font-black text-3xl md:text-4xl" style={{ color: m.color }}>{m.year}</p>
                      <h3 className="font-heading font-bold text-navy text-base mt-2">{m.title}</h3>
                      <p className="text-[#4a5568] text-xs md:text-sm mt-2 leading-relaxed">{m.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      {/* Mission · Vision · Values — staggered bento */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="eyebrow text-teal mb-3">What Drives Us</p>
              <h2 className="font-heading font-extrabold text-navy text-3xl md:text-5xl">Mission · Vision · Values</h2>
            </div>
            <p className="text-[#4a5568] max-w-md text-sm">Three pillars that shape every brick we lay and every site we secure.</p>
          </div>

          <div className="grid md:grid-cols-12 gap-5">
            {[
              { t: "Mission", n:"01", b: "Deliver world-class construction and fumigation services that exceed client expectations.", bg: "#1d3c6b", span: "md:col-span-5 md:row-span-2 min-h-[380px]" },
              { t: "Vision",  n:"02", b: "To be a top-rated regional market leader in construction and pest control.", bg: "#17767c", span: "md:col-span-7 min-h-[180px]" },
              { t: "Values",  n:"03", b: "Integrity · Commitment · Safety First — in every project we touch.", bg: "#0a1628", accent: true, span: "md:col-span-7 min-h-[180px]" },
            ].map((c, i) => (
              <Reveal as="article" delay={i * 140} key={c.t} className={`group relative overflow-hidden hover-lift-glow rounded-3xl p-8 md:p-10 flex flex-col justify-between ${c.span}`} style={{ backgroundColor: c.bg }}>
                {/* corner ornament */}
                <span className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-700" />
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-700" />
                <div className="relative flex items-start justify-between">
                  <span className="font-heading font-black text-white/15 text-7xl leading-none">{c.n}</span>
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold border border-white/20 text-white/70">Pillar</span>
                </div>
                <div className="relative">
                  <h3 className={`font-heading font-black text-3xl md:text-4xl mb-3 ${c.accent ? "text-gold" : "text-white"}`}>{c.t}</h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-md">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ backgroundColor: "#1d3c6b" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(45deg, transparent 49%, #fff 49%, #fff 51%, transparent 51%)", backgroundSize: "20px 20px" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[5fr_7fr] gap-14">
          <div className="lg:sticky lg:top-32 self-start">
            <p className="eyebrow text-gold mb-3">How We Deliver</p>
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl mb-6 overflow-hidden"><SplitText text="Our Six Objectives" /></h2>
            <p className="text-white/70 leading-relaxed">A disciplined framework that turns plans into permanent structures, on time and on budget.</p>
            <span className="block h-1 w-20 bg-gold mt-8" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Create detailed project schedules",
              "Clear stakeholder communication",
              "Track project progress in real time",
              "Professional on-site supervision",
              "Cost minimisation without quality loss",
              "Reliable on-time delivery",
            ].map((o, i) => (
              <Reveal as="div" delay={i * 80} key={o} variant="scale" className="group relative p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.1] hover:border-gold/40 transition-all overflow-hidden">
                <span className="absolute right-0 top-0 font-heading font-black text-white/5 text-7xl leading-none group-hover:text-gold/20 transition-colors">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-heading font-black text-gold text-xs tracking-[0.2em]">OBJ {String(i + 1).padStart(2, "0")}</span>
                <p className="text-white text-base md:text-lg font-semibold mt-3 relative">{o}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EHS */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #17767c, #17767c)" }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="hex" width="50" height="44" patternUnits="userSpaceOnUse"><polygon points="25,2 47,15 47,40 25,42 3,40 3,15" fill="none" stroke="#fff"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <div className="text-center mb-14">
            <p className="eyebrow text-gold mb-3">Our Policy</p>
            <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl">Environment · Health · Safety</h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-4">Three commitments enforced on every Bradeb site, every day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-4">
            {[
              { Icon: Leaf, t: "Environment", b: "Sustainable methods and responsible material sourcing on every site.", num: "01" },
              { Icon: HeartPulse, t: "Health", b: "Worker wellbeing prioritised through training, PPE, and supervision.", num: "02" },
              { Icon: ShieldCheck, t: "Safety", b: "Zero-harm culture with documented procedures and on-site safety officers.", num: "03" },
            ].map(({ Icon, t, b, num }, i) => (
              <Reveal as="div" delay={i * 150} variant="scale" key={t} className="group relative bg-white/10 backdrop-blur rounded-2xl p-8 hover-lift-glow border-t-2 border-gold md:even:translate-y-8 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-xl bg-white/15 flex items-center justify-center group-hover:bg-gold group-hover:rotate-6 transition-all">
                    <Icon className="text-white group-hover:text-navy transition-colors" size={26} />
                  </div>
                  <span className="font-heading font-black text-white/20 text-3xl">{num}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-2xl mb-3">{t}</h3>
                <p className="text-white/85 leading-relaxed text-sm">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}