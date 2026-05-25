import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { ArrowRight, Check, Building2, HardHat, Bug, ArrowDown } from "lucide-react";
import { ReviewsSection } from "@/components/site/Reviews";
import { useEffect, useRef } from "react";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const dur = 1600;
          const step = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * to).toLocaleString() + suffix;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function Index() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Cinematic photo background — drop a real flagship-build photo into this slot */}
        <div className="absolute inset-0 z-0">
          <Media
            aspect="auto"
            rounded="rounded-none"
            imgClassName="animate-kenburns"
            className="h-full w-full"
            label="Flagship build — replace with hero photo"
          />
          {/* legibility scrims */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/30" />
          <span className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/40" />
          {/* blueprint grid overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="hgrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#2e9ca3" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hgrid)" />
          </svg>
        </div>

        <div className="container-bradeb relative z-10 pt-32 pb-28 md:pb-24 w-full">
          <div className="max-w-3xl">
            <p className="eyebrow text-teal-bright mb-6 animate-fade-up">
              CRB Class V · Est. 2020 · Dar es Salaam
            </p>
            <h1 className="display-1 text-white">
              <span className="block animate-clip-up">BUILD WITH</span>
              <span
                className="block text-stroke-white animate-clip-up"
                style={{ animationDelay: "0.25s" }}
              >
                CONFIDENCE.
              </span>
            </h1>
            <p
              className="mt-4 font-heading font-extrabold text-teal-bright text-2xl sm:text-3xl md:text-4xl animate-fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              Build with Bradeb.
            </p>
            <p
              className="mt-6 lead text-white/80 max-w-xl animate-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              Tanzania's trusted certified contractor since 2020 — delivering excellence across
              construction, civil engineering and fumigation.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Link to="/projects" className="btn btn-gold btn-shine magnetic">
                Explore Our Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline magnetic">
                Get a Quote
              </Link>
            </div>

            {/* Proof stats — baked above the fold (hidden on mobile; shown in the Performance Metrics section instead) */}
            <div
              className="mt-12 hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-white/15 pt-8 max-w-2xl animate-fade-up"
              style={{ animationDelay: "1s" }}
            >
              {[
                {
                  node: (
                    <>
                      <CountUp to={8} />
                      <span className="text-gold">+</span>
                    </>
                  ),
                  l: "Projects",
                },
                {
                  node: (
                    <>
                      TZS 1.38<span className="text-gold">B+</span>
                    </>
                  ),
                  l: "Value",
                },
                {
                  node: (
                    <>
                      <CountUp to={4} />
                      <span className="text-gold">+</span>
                    </>
                  ),
                  l: "Regions",
                },
                {
                  node: (
                    <>
                      <CountUp to={100} />
                      <span className="text-gold">%</span>
                    </>
                  ),
                  l: "Delivered",
                },
              ].map((s, i) => (
                <div key={i}>
                  <p className="font-heading font-black text-white text-2xl md:text-3xl">
                    {s.node}
                  </p>
                  <p className="text-white/55 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue (Desktop Only) */}
        <div className="hidden md:flex absolute bottom-20 left-1/2 -translate-x-1/2 text-white/80 text-[10px] md:text-[11px] tracking-[0.3em] uppercase flex-col items-center gap-3 animate-bounce z-10">
          <span className="bg-navy/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 shadow-[0_0_15px_rgba(46,156,163,0.3)] flex items-center gap-2">
            Scroll to explore <ArrowDown size={14} className="text-teal-bright" />
          </span>
        </div>

        {/* Marquee */}
        <div
          className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 z-10"
          style={{ backgroundColor: "#0d1f42" }}
        >
          <div className="flex whitespace-nowrap animate-marquee text-teal-bright font-semibold text-xs uppercase tracking-[0.25em]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 px-6 shrink-0">
                {[
                  "CRB Certified Class V",
                  "Building Contractor",
                  "Civil Contractor",
                  "VAT Registered",
                  "WCF Employer",
                  "Est. 2020",
                  "Dar es Salaam",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-12">
                    {t}
                    <span className="text-teal-bright/40">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A: Intro */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal variant="left" className="border-l-4 border-gold pl-8">
            <p className="eyebrow text-teal mb-4">Our Promise</p>
            <h2 className="font-heading font-extrabold text-navy text-3xl md:text-[2.2rem] leading-tight overflow-hidden">
              <SplitText text='"We don&apos;t just build structures. We build futures."' />
            </h2>
          </Reveal>
          <ul className="space-y-6">
            {[
              ["Integrity", "Honest work, transparent pricing, lasting partnerships."],
              ["Safety", "Every project meets the highest EHS standards."],
              ["Quality", "World-class delivery across every discipline."],
            ].map(([title, body], i) => (
              <Reveal as="li" delay={i * 120} key={title} className="flex gap-4">
                <div className="shrink-0 h-10 w-10 rounded-full bg-teal flex items-center justify-center text-white">
                  <Check size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-lg">{title}</h3>
                  <p className="text-[#4a5568]">{body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* B: Stats */}
      {/* B: Stats (Performance Dashboard) */}
      <section
        className="py-16 md:py-24 relative z-10 border-t border-white/10 shadow-2xl"
        style={{ backgroundColor: "#0a1628" }}
      >
        {/* Blueprint background pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#2e9ca3 1px, transparent 1px), linear-gradient(90deg, #2e9ca3 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-teal mb-3">Company Trajectory</p>
              <h2 className="font-heading font-extrabold text-white text-3xl md:text-4xl flex items-center gap-4">
                <span className="w-8 h-[2px] bg-gold"></span>
                PERFORMANCE METRICS
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              {
                v: 8,
                suf: "+",
                l: "Completed Projects",
                desc: "Delivered across sectors.",
                graph: (
                  <div className="flex items-end gap-1.5 h-10 mb-6">
                    <div className="w-2.5 bg-teal/20 h-[30%] rounded-t-sm"></div>
                    <div className="w-2.5 bg-teal/40 h-[50%] rounded-t-sm"></div>
                    <div className="w-2.5 bg-teal/60 h-[75%] rounded-t-sm"></div>
                    <div className="w-2.5 bg-gold h-[100%] rounded-t-sm shadow-[0_0_15px_rgba(46,156,163,0.4)]"></div>
                  </div>
                ),
              },
              {
                v: 1.38,
                suf: "B+",
                l: "Project Value",
                pre: "TZS ",
                desc: "Executed contract value.",
                graph: (
                  <div className="h-10 mb-6 w-24">
                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                      <path
                        d="M0,40 L0,25 L25,28 L50,15 L75,18 L100,0 L100,40 Z"
                        fill="url(#area-gradient)"
                        opacity="0.3"
                      />
                      <path
                        d="M0,25 L25,28 L50,15 L75,18 L100,0"
                        fill="none"
                        stroke="#2e9ca3"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <circle cx="100" cy="0" r="3" fill="#2e9ca3" className="animate-pulse" />
                      <defs>
                        <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2e9ca3" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                ),
              },
              {
                v: 4,
                suf: "+",
                l: "Years Operating",
                desc: "Building trust since 2020.",
                graph: (
                  <div className="h-10 w-10 mb-6 relative">
                    <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#17767c"
                        strokeWidth="3"
                        opacity="0.2"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#2e9ca3"
                        strokeWidth="3"
                        strokeDasharray="80 100"
                      />
                    </svg>
                  </div>
                ),
              },
              {
                v: 5,
                suf: "+",
                l: "Cities Served",
                desc: "Expanding our footprint.",
                graph: (
                  <div className="w-24 mb-6 flex flex-col justify-end h-10 pb-1">
                    <div className="flex justify-between text-[8px] text-teal mb-1.5 font-bold uppercase tracking-wider">
                      <span>0</span>
                      <span>Target</span>
                    </div>
                    <div className="h-1.5 w-full bg-teal/20 rounded-full overflow-hidden">
                      <div className="h-full bg-gold w-[85%] rounded-full relative">
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`bg-[#112340] border border-white/5 p-4 sm:p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition-transform duration-300 ${i % 2 === 1 ? "mt-8 lg:mt-0" : ""}`}
              >
                {s.graph}
                <div className="font-heading font-black text-white text-2xl sm:text-[2rem] md:text-4xl drop-shadow-md mb-1 flex flex-col xl:flex-row xl:items-baseline xl:gap-2">
                  {s.pre && (
                    <span className="text-xs md:text-sm text-teal tracking-widest uppercase">
                      {s.pre}
                    </span>
                  )}
                  <div className="flex items-baseline">
                    {i === 1 ? (
                      <>
                        1.38<span className="text-gold">B+</span>
                      </>
                    ) : (
                      <>
                        <CountUp to={s.v} suffix="" />
                        <span className="text-gold">{s.suf}</span>
                      </>
                    )}
                  </div>
                </div>
                <p className="font-heading text-white/90 mt-3 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase leading-snug">
                  {s.l}
                </p>
                <p className="hidden sm:block text-white/40 text-[11px] md:text-xs mt-2 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C: Services preview */}
      <section className="py-24 lg:py-32 bg-[#f8f9fa] relative overflow-hidden">
        {/* Subtle background pattern for construction feel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#17767c 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative">
          <Reveal className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-teal mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gold"></span> What We Offer
              </p>
              <h2 className="font-heading font-extrabold text-navy text-4xl md:text-5xl">
                End-to-End Building Solutions
              </h2>
            </div>
            <p className="text-navy/40 text-[10px] font-bold uppercase tracking-[0.2em] mt-2 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-navy/20"></span>
              Four core disciplines
            </p>
          </Reveal>

          <div className="flex flex-col gap-5 md:flex-row md:overflow-x-auto md:snap-x md:snap-mandatory md:gap-6 md:pb-12 md:pt-4 md:px-4 md:-mx-4 hide-scrollbar">
            {[
              {
                Icon: Building2,
                title: "Building Construction",
                body: "Residential, commercial and industrial buildings delivered turnkey with uncompromised quality.",
              },
              {
                Icon: HardHat,
                title: "Civil Engineering",
                body: "Structural works, robust foundations, concrete and long-lasting infrastructure solutions.",
              },
              {
                Icon: Bug,
                title: "Fumigation & Pest Control",
                body: "Pre/post-construction treatment, gaseous fumigation and comprehensive pest management.",
                green: true,
              },
              {
                Icon: Building2,
                title: "Renovation Works",
                body: "Transforming existing structures with modern designs, ensuring safety and aesthetics.",
              },
            ].map(({ Icon, title, body, green }, i) => (
              <Reveal
                as="article"
                delay={i * 100}
                key={i}
                className={`group hover-lift-glow md:tilt-3d relative bg-white border border-navy/5 shadow-xl shadow-navy/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between w-[88%] md:w-auto md:min-w-[400px] md:h-[380px] md:snap-center md:self-auto ${i % 2 === 1 ? "self-end" : "self-start"}`}
              >
                <span className="md:hidden absolute top-4 right-5 font-heading font-black text-navy/[0.06] text-7xl leading-none select-none">
                  0{i + 1}
                </span>
                <div>
                  <div
                    className={`h-16 w-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transition-transform group-hover:scale-110`}
                    style={{ backgroundColor: green ? "#17767c" : "#1d3c6b" }}
                  >
                    <Icon size={30} />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-2xl mb-4">{title}</h3>
                  <p className="text-[#4a5568] leading-relaxed text-[15px]">{body}</p>
                </div>
                <Link
                  to="/services"
                  className="text-teal font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                >
                  Explore Service <ArrowRight size={14} />
                </Link>
                <span className="absolute bottom-0 left-0 right-0 h-[4px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-b-2xl" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* D: Featured project */}
      <section
        className="section-y relative overflow-hidden"
        style={{ backgroundColor: "#07396c" }}
      >
        <div className="container-bradeb grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal variant="left" className="order-2 lg:order-1">
            <p className="eyebrow text-gold mb-4">Featured Project</p>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4 text-gradient-gold">
              Kijitonyama Residential Complex
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl">
              A 9-month residential build delivered to Safia & Mohamed Mnyau in Kinondoni —
              exemplifying Bradeb's signature quality and on-time delivery.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              <div>
                <p className="eyebrow text-teal-bright">Value</p>
                <p className="font-heading font-extrabold text-gold text-2xl">TZS 320M</p>
              </div>
              <div>
                <p className="eyebrow text-teal-bright">Duration</p>
                <p className="font-heading font-extrabold text-white text-2xl">9 Months</p>
              </div>
              <div>
                <p className="eyebrow text-teal-bright">Location</p>
                <p className="font-heading font-extrabold text-white text-2xl">Kinondoni</p>
              </div>
            </div>
            <Link to="/projects" className="btn btn-primary btn-shine">
              View All Projects <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal variant="scale" className="order-1 lg:order-2">
            <Media
              aspect="4/3"
              label="Kijitonyama Residential Complex — Kinondoni"
              scrim="soft"
              className="shadow-2xl"
            >
              <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-gold text-near-black text-[11px] font-bold uppercase tracking-wider">
                Completed 2024
              </span>
            </Media>
          </Reveal>
        </div>
      </section>

      {/* E: Reviews */}
      <ReviewsSection />

      {/* F: Contact teaser & Newsletter */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1d3c6b, #07396c)" }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* CTA Column */}
          <Reveal className="text-center md:text-left">
            <h2 className="font-heading font-extrabold text-white text-4xl lg:text-5xl mb-6 overflow-hidden leading-tight">
              <SplitText text="Ready to Start Your Project?" />
            </h2>
            <p className="text-white/80 mb-10 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Let's discuss how Bradeb can deliver your next construction, civil or fumigation
              project on time and on budget.
            </p>
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-near-black font-bold uppercase tracking-[0.15em] text-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(46,156,163,0.3)]"
            >
              Contact Us Today <ArrowRight size={16} />
            </Link>
          </Reveal>

          {/* Newsletter Column */}
          <Reveal
            delay={200}
            className="bg-[#0a1628]/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal blur-[80px] opacity-20 pointer-events-none" />
            <h3 className="font-heading font-bold text-white text-2xl lg:text-3xl mb-3">
              Stay Updated
            </h3>
            <p className="text-white/60 mb-8 text-sm lg:text-base leading-relaxed">
              Subscribe to our newsletter for the latest industry insights, project showcases, and
              company updates.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing!");
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-teal focus:bg-white/10 transition-all text-sm"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full bg-teal px-8 py-4 text-white font-bold uppercase tracking-[0.1em] text-sm hover:bg-white hover:text-navy transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-white/40 text-xs mt-2 ml-4">
                * We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
