import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Mail, Linkedin, ShieldCheck, Target, Users, Award } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Bradeb Investment Limited" },
      { name: "description", content: "Meet the leadership behind Bradeb's success." },
      { property: "og:title", content: "Bradeb Team" },
      { property: "og:description", content: "Driven by expertise. Meet our leadership." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name:"Bradley C. Muro", role:"Managing Director", init:"BCM", bg:"#1f4590" },
  { name:"Amry Kavunja", role:"Head of Operations", init:"AK", bg:"#157575" },
  { name:"Cuthbert M. Muro", role:"Director", init:"CMM", bg:"#1f4590" },
  { name:"Dennis Cuthbert", role:"Head of Site Works", init:"DC", bg:"#157575" },
];

function TeamPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center pt-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #1f4590 0%, #07396c 100%)" }}>
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-[3fr_2fr] gap-12 items-center py-20">
          <div>
            <p className="eyebrow text-gold mb-6 animate-fade-up">The People</p>
            <h1 className="font-heading font-black text-white text-5xl md:text-7xl leading-[0.95] animate-clip-up">Driven by Expertise.</h1>
            <p className="text-white/80 text-lg md:text-xl mt-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>Meet the leadership behind Bradeb's success.</p>
            <p className="text-white/60 mt-3 max-w-xl animate-fade-up" style={{ animationDelay: "0.3s" }}>A team of construction veterans, project managers and pest control specialists committed to delivering excellence on every site.</p>
          </div>
          <div className="relative h-80">
            <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 300">
              <line x1="75" y1="75" x2="225" y2="75" stroke="#157575" />
              <line x1="75" y1="75" x2="75" y2="225" stroke="#157575" />
              <line x1="225" y1="75" x2="225" y2="225" stroke="#157575" />
              <line x1="75" y1="225" x2="225" y2="225" stroke="#157575" />
              <line x1="75" y1="75" x2="225" y2="225" stroke="#157575" strokeDasharray="4 4" />
            </svg>
            {team.map((m, i) => {
              const positions = [
                { top: "10%", left: "10%" },
                { top: "10%", right: "10%" },
                { bottom: "10%", left: "10%" },
                { bottom: "10%", right: "10%" },
              ];
              return (
                <div key={m.init} className="absolute h-24 w-24 rounded-full flex items-center justify-center font-heading font-black text-gold text-xl border-4 border-white/20 animate-scale-in-soft" style={{ ...positions[i], backgroundColor: m.bg, animationDelay: `${0.3 + i*0.12}s` }}>
                  {m.init}
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-teal" />
      </section>

      {/* Org chart */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="eyebrow text-teal text-center mb-3">Organizational Structure</p>
          <h2 className="font-heading font-extrabold text-navy text-3xl md:text-4xl text-center mb-16">How We're Organized</h2>
          <div className="flex flex-col items-center gap-10">
            <div className="px-8 py-4 rounded-xl bg-navy text-white font-heading font-bold border-2 border-teal shadow-lg" style={{ boxShadow: "0 0 0 4px rgba(21,117,117,0.15)" }}>
              MANAGING DIRECTOR
            </div>
            <div className="w-px h-10 bg-teal" />
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {["Head of Construction","Head of Fumigation & Fire","Head of Finance"].map(t => (
                <div key={t} className="px-6 py-4 rounded-xl bg-navy text-white text-center font-heading font-bold text-sm">{t}</div>
              ))}
            </div>
            <div className="w-px h-10 bg-teal" />
            <div className="px-6 py-4 rounded-xl bg-teal text-white font-heading font-bold">Site Works</div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <article key={m.init} className="group rounded-2xl overflow-hidden bg-white border border-black/5 transition-all hover:-translate-y-2 hover:border-t-[3px] hover:border-gold animate-fade-up" style={{ animationDelay: `${i*0.1}s` }}>
              <div className="h-32 flex items-end justify-center relative" style={{ backgroundColor: m.bg }}>
                <div className="h-20 w-20 rounded-full bg-gold text-navy font-heading font-black flex items-center justify-center text-xl translate-y-10 border-4 border-white">
                  {m.init}
                </div>
              </div>
              <div className="pt-14 pb-6 px-6 text-center">
                <h3 className="font-heading font-bold text-navy text-lg">{m.name}</h3>
                <p className="text-teal text-sm font-semibold mb-3">{m.role}</p>
                <p className="text-[#4a5568] text-sm mb-5">Personal description goes here — bringing years of dedicated expertise to Bradeb's mission.</p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="text-teal hover:text-navy"><Mail size={16} /></a>
                  <a href="#" className="text-teal hover:text-navy"><Linkedin size={16} /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="py-24" style={{ backgroundColor: "#1f4590" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl leading-tight">"Our team's expertise spans every field of civil and building construction."</h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: ShieldCheck, t: "Safety First" },
              { Icon: Target, t: "Results Driven" },
              { Icon: Users, t: "Team Spirit" },
              { Icon: Award, t: "Excellence" },
            ].map(({ Icon, t }) => (
              <div key={t} className="flex items-center gap-3 bg-white/5 rounded-xl p-5 border border-white/10">
                <Icon className="text-teal" size={20} />
                <span className="text-white font-semibold">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}