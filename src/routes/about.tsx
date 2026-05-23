
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { Leaf, HeartPulse, ShieldCheck } from "lucide-react";



export default function AboutPage() {
  return (
    <PageShell>
      {/* HERO — diagonal split */}
      <section className="relative min-h-[85vh] flex pt-20">
        <div className="absolute inset-0 flex">
          <div className="w-full" style={{ background: "#1f4590", clipPath: "polygon(0 0, 92% 0, 78% 100%, 0 100%)" }} />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #157575, #0f6e56)", clipPath: "polygon(92% 0, 100% 0, 100% 100%, 78% 100%)" }} />
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-[3fr_2fr] items-center gap-12 py-20">
          <div>
            <p className="eyebrow text-teal mb-6 animate-fade-up">Our Story</p>
            <h1 className="font-heading font-black text-white text-6xl md:text-7xl lg:text-8xl leading-none">
              <span className="block animate-clip-up">Built</span>
              <span className="block animate-clip-up" style={{ animationDelay: "0.2s" }}>on</span>
              <span className="block animate-clip-up relative" style={{ animationDelay: "0.4s" }}>
                Trust.
                <span className="block h-1 w-32 bg-gold mt-2 origin-left" style={{ animation: "fade-up 0.8s ease 1s both" }} />
              </span>
            </h1>
            <p className="mt-8 text-white/80 max-w-xl text-lg animate-fade-up" style={{ animationDelay: "0.9s" }}>A Tanzanian company dedicated to excellence since 2020.</p>
          </div>
          <div className="relative h-[400px]">
            <div className="absolute right-0 top-0 font-heading font-black text-white/15 text-[10rem] leading-none select-none">2020</div>
            <div className="absolute inset-0 flex flex-col gap-4 justify-end">
              {["Incorporated 2020","Dar es Salaam","CRB Class V"].map((t, i) => (
                <div key={t} className="self-end bg-white text-navy rounded-lg px-5 py-3 font-semibold text-sm animate-scale-in-soft" style={{ animationDelay: `${0.5 + i * 0.15}s` }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are + Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="eyebrow text-teal mb-4">Who We Are</p>
            <h2 className="font-heading font-extrabold text-navy text-4xl mb-6">A trusted Tanzanian builder</h2>
            <div className="space-y-5 text-[#4a5568] leading-relaxed">
              <p>Bradeb Investment Limited is a wholly Tanzanian-owned company specialising in building construction, civil engineering, and professional fumigation services. Incorporated in 2020 in Dar es Salaam, we have grown into a CRB Class V certified contractor.</p>
              <p>Our team combines deep technical expertise with disciplined project management — delivering residential, commercial, institutional and industrial projects across Tanzania.</p>
              <p>From the first sketch to the final handover, we are accountable for quality, safety and outcomes.</p>
            </div>
          </div>
          <div className="relative pl-10 border-l-2 border-teal">
            {[
              { year: "2020", title: "Incorporated", body: "Founded in Dar es Salaam under the Companies Act 2002." },
              { year: "2022", title: "VAT Registered", body: "Tanzania Revenue Authority VAT registration secured; first major projects delivered." },
              { year: "2024", title: "CRB Class V Certified", body: "Awarded CRB Building & Civil Class V certifications." },
            ].map((m, i) => (
              <div key={m.year} className="relative mb-12 animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <span className="absolute -left-[3.25rem] top-1 h-6 w-6 rounded-full bg-teal border-4 border-white shadow" />
                <p className="font-heading font-black text-gold text-3xl">{m.year}</p>
                <h3 className="font-heading font-bold text-navy text-xl mt-1">{m.title}</h3>
                <p className="text-[#4a5568] mt-2">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-6">
          {[
            { t: "Mission", b: "Deliver world-class construction and fumigation services that exceed client expectations.", bg: "#1f4590", text: "white" },
            { t: "Vision", b: "To be a top-rated regional market leader in construction and pest control.", bg: "#157575", text: "white" },
            { t: "Values", b: "Integrity · Commitment · Safety First — in every project we touch.", bg: "#0a1628", text: "gold", accent: true },
          ].map((c, i) => (
            <Reveal as="article" delay={i * 140} key={c.t} className="group hover-lift-glow tilt-3d rounded-2xl p-10 h-[350px] flex flex-col justify-between" >
              <div style={{ position: "absolute", inset: 0, borderRadius: "inherit", backgroundColor: c.bg, zIndex: -1 }} />
              <div className="h-12 w-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-heading font-black">{c.t[0]}</div>
              <div className="transition-transform group-hover:-translate-y-2">
                <h3 className={`font-heading font-black text-3xl mb-3 ${c.accent ? "text-gold" : "text-white"}`}>{c.t}</h3>
                <p className="text-white/80 leading-relaxed">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24" style={{ backgroundColor: "#1f4590" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-teal mb-3">How We Deliver</p>
          <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl mb-12 overflow-hidden"><SplitText text="Our Objectives" /></h2>
          <div className="divide-y divide-white/10">
            {[
              "Create detailed project schedules",
              "Clear stakeholder communication",
              "Track project progress in real time",
              "Professional on-site supervision",
              "Cost minimisation without quality loss",
              "Reliable on-time delivery",
            ].map((o, i) => (
              <Reveal as="div" delay={i * 80} key={o} variant="left" className="group py-6 grid grid-cols-[80px_1fr] items-center cursor-default hover:bg-white/[0.03] -mx-4 px-4 rounded transition-colors">
                <span className="font-heading font-black text-gold text-4xl">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-white text-lg md:text-xl font-medium group-hover:translate-x-2 transition-transform">{o}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EHS */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #157575, #0f6e56)" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-white/80 mb-3 text-center">Policy</p>
          <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl text-center mb-16">Environment · Health · Safety</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Leaf, t: "Environment", b: "Sustainable methods and responsible material sourcing on every site." },
              { Icon: HeartPulse, t: "Health", b: "Worker wellbeing prioritised through training, PPE, and supervision." },
              { Icon: ShieldCheck, t: "Safety", b: "Zero-harm culture with documented procedures and on-site safety officers." },
            ].map(({ Icon, t, b }, i) => (
              <Reveal as="div" delay={i * 150} variant="scale" key={t} className="group bg-white/10 backdrop-blur rounded-2xl p-8 border-b-4 border-gold hover-lift-glow">
                <Icon className="text-white mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform" size={36} />
                <h3 className="font-heading font-bold text-white text-2xl mb-3">{t}</h3>
                <p className="text-white/85 leading-relaxed">{b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}