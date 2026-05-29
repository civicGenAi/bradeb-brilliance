import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { Mail, Linkedin, ShieldCheck, Target, Users, Award } from "lucide-react";

const team = [
  { name: "Bradley C. Muro", role: "Managing Director", init: "BCM", bg: "#1d3c6b" },
  { name: "Amry Kavunja", role: "Head of Operations", init: "AK", bg: "#17767c" },
  { name: "Cuthbert M. Muro", role: "Director", init: "CMM", bg: "#1d3c6b" },
  { name: "Dennis Cuthbert", role: "Head of Site Works", init: "DC", bg: "#17767c" },
];

export default function TeamPage() {
  return (
    <PageShell>
      {/* HERO — editorial */}
      <section
        className="relative min-h-[75vh] flex items-center pt-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #07396c 50%, #1d3c6b 100%)" }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="tg" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tg)" />
        </svg>
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-[6fr_5fr] gap-12 items-center py-16">
          <div>
            <p className="eyebrow text-gold mb-6 animate-fade-up flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> The People
            </p>
            <h1 className="font-heading font-black text-white text-[3rem] sm:text-6xl lg:text-8xl leading-[0.9] tracking-tight">
              <span className="block animate-clip-up">Driven by</span>
              <span
                className="block text-gradient-gold animate-clip-up"
                style={{ animationDelay: "0.25s" }}
              >
                Expertise.
              </span>
            </h1>
            <p
              className="text-white/70 text-base md:text-lg mt-6 animate-fade-up max-w-xl"
              style={{ animationDelay: "0.5s" }}
            >
              Construction veterans, project managers and pest control specialists, committed to
              excellence on every site.
            </p>
            <div
              className="flex gap-3 mt-8 flex-wrap animate-fade-up"
              style={{ animationDelay: "0.7s" }}
            >
              {[
                { n: "04", t: "Leaders" },
                { n: "15+", t: "Years Combined" },
                { n: "100%", t: "In-House" },
              ].map((s) => (
                <div key={s.n} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <span className="font-heading font-black text-gold text-lg">{s.n}</span>
                  <span className="text-white/60 text-xs ml-2">{s.t}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Floating avatar stack */}
          <div className="relative h-[380px] hidden lg:block">
            {team.map((m, i) => {
              const pos = [
                { top: "0%", right: "20%", size: 140, delay: 0 },
                { top: "10%", right: "55%", size: 110, delay: 0.5 },
                { bottom: "5%", right: "10%", size: 130, delay: 1 },
                { bottom: "15%", right: "45%", size: 100, delay: 1.5 },
              ][i];
              return (
                <div
                  key={m.init}
                  className="absolute rounded-2xl flex items-center justify-center font-heading font-black text-gold border border-white/20 backdrop-blur animate-float shadow-2xl"
                  style={{
                    ...pos,
                    height: pos.size,
                    width: pos.size,
                    backgroundColor: m.bg,
                    animationDelay: `${pos.delay}s`,
                    fontSize: pos.size / 5,
                  }}
                >
                  {m.init}
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-white text-navy text-[10px] font-bold whitespace-nowrap shadow">
                    {m.name.split(" ")[0]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Org chart */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <p className="eyebrow text-teal text-center mb-3">Organizational Structure</p>
          <h2 className="font-heading font-extrabold text-navy text-3xl md:text-4xl text-center mb-16">
            How We're Organized
          </h2>
          <div className="flex flex-col items-center gap-10">
            <div
              className="px-8 py-4 rounded-xl bg-navy text-white font-heading font-bold border-2 border-teal shadow-lg"
              style={{ boxShadow: "0 0 0 4px rgba(23,118,124,0.15)" }}
            >
              MANAGING DIRECTOR
            </div>
            <div className="w-px h-10 bg-teal" />
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {[
                "Technical Director",
                "Director of Finance and Administration",
                "Director of Fumigation and Pest Control Services",
              ].map((t) => (
                <div
                  key={t}
                  className="px-6 py-5 rounded-xl bg-navy text-white text-center font-heading font-bold text-sm leading-snug"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cards — staggered editorial */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow text-teal mb-3">Leadership</p>
            <h2 className="font-heading font-extrabold text-navy text-3xl md:text-5xl">
              Meet the people behind Bradeb
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <Reveal
                as="article"
                delay={i * 120}
                variant="scale"
                key={m.init}
                className={`group relative bg-white rounded-2xl overflow-hidden border border-black/5 hover-lift-glow ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}
              >
                {/* Portrait — drop a real headshot into this slot */}
                <Media
                  aspect="3/4"
                  rounded="rounded-none"
                  scrim="strong"
                  label={`${m.name} · headshot`}
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                >
                  <span className="absolute top-4 left-4 px-2 py-1 rounded-md bg-white/20 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider">
                    0{i + 1}
                  </span>
                  <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-soft-green animate-pulse" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-heading font-bold text-white text-lg leading-tight">
                      {m.name}
                    </h3>
                    <p className="text-teal-bright text-xs font-bold uppercase tracking-wider mt-1">
                      {m.role}
                    </p>
                  </div>
                </Media>
                <div className="p-6">
                  <p className="text-[#4a5568] text-sm leading-relaxed mb-5">
                    Bringing years of dedicated expertise to Bradeb's mission.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="h-8 w-8 rounded-full bg-teal/10 text-teal flex items-center justify-center hover:bg-teal hover:text-white transition-all"
                      >
                        <Mail size={14} />
                      </a>
                      <a
                        href="#"
                        className="h-8 w-8 rounded-full bg-teal/10 text-teal flex items-center justify-center hover:bg-teal hover:text-white transition-all"
                      >
                        <Linkedin size={14} />
                      </a>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#94a3b8] font-semibold">
                      Bradeb · {2020 + i}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24" style={{ backgroundColor: "#1d3c6b" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl leading-tight overflow-hidden">
            <SplitText text="&ldquo;Our team's expertise spans every field of civil and building construction.&rdquo;" />
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: ShieldCheck, t: "Safety First" },
              { Icon: Target, t: "Results Driven" },
              { Icon: Users, t: "Team Spirit" },
              { Icon: Award, t: "Excellence" },
            ].map(({ Icon, t }, i) => (
              <Reveal
                as="div"
                delay={i * 100}
                variant="scale"
                key={t}
                className="group flex items-center gap-3 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-gold hover:bg-white/10 transition-all"
              >
                <Icon
                  className="text-teal group-hover:scale-125 group-hover:text-gold transition-all"
                  size={20}
                />
                <span className="text-white font-semibold">{t}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
