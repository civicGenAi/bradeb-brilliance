import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import logo from "@/assets/logo.png";
import { ArrowRight, Check, Building2, HardHat, Bug } from "lucide-react";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bradeb Investment Limited — Build With Confidence" },
      { name: "description", content: "Tanzania's premier certified contractor: construction, civil engineering and fumigation. 8+ delivered projects, TZS 1.3B+ value." },
      { property: "og:title", content: "Bradeb — Build With Confidence" },
      { property: "og:description", content: "Construction · Civil Engineering · Fumigation Services in Tanzania." },
    ],
  }),
  component: Index,
});

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
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
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

function Index() {
  // Mouse parallax on hero logo
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const hero = heroRef.current;
    const img = logoRef.current;
    if (!hero || !img) return;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 18;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 18;
      img.style.transform = `perspective(900px) rotateY(${-12 + x}deg) rotateX(${-y}deg) translateZ(0)`;
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <PageShell>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "radial-gradient(ellipse at center, #1f4590 0%, #07396c 70%, #0a1628 100%)" }}>
        {/* Layer 2: grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#26d4a0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Layer 3: rotating shield */}
        <svg className="absolute -right-32 -top-32 w-[600px] h-[600px] opacity-20 animate-spin-slow" viewBox="0 0 200 200">
          <polygon points="100,10 180,50 180,150 100,190 20,150 20,50" fill="none" stroke="#157575" strokeWidth="1" />
          <polygon points="100,30 160,60 160,140 100,170 40,140 40,60" fill="none" stroke="#157575" strokeWidth="0.5" />
        </svg>
        {/* Skyline */}
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-[0.12]" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path className="animate-draw" d="M0,200 L0,120 L60,120 L60,80 L120,80 L120,140 L180,140 L180,60 L240,60 L240,100 L300,100 L300,40 L360,40 L360,90 L420,90 L420,70 L480,70 L480,120 L540,120 L540,50 L600,50 L600,110 L660,110 L660,80 L720,80 L720,30 L780,30 L780,90 L840,90 L840,130 L900,130 L900,70 L960,70 L960,110 L1020,110 L1020,60 L1080,60 L1080,140 L1140,140 L1140,90 L1200,90 L1200,200 Z" fill="none" stroke="#26d4a0" strokeWidth="1" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 grid lg:grid-cols-[3fr_2fr] gap-12 items-center w-full">
          <div>
            <p className="eyebrow text-teal mb-6 animate-fade-up">Tanzania's Premier Partner</p>
            <h1 className="font-heading font-black text-white leading-[0.95] text-5xl md:text-7xl lg:text-[5.5rem]">
              <span className="block animate-clip-up">BUILD WITH</span>
              <span className="block text-stroke-white animate-clip-up" style={{ animationDelay: "0.3s" }}>CONFIDENCE</span>
              <span className="block text-teal animate-clip-up" style={{ animationDelay: "0.6s" }}>BUILD WITH BRADEB.</span>
            </h1>
            <p className="mt-8 text-white/70 text-base label-cap" style={{ letterSpacing: "0.15em" }}>Construction · Civil Engineering · Fumigation Services</p>
            <p className="mt-4 text-white/80 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.8s" }}>
              Tanzania's trusted certified contractor since 2020 — delivering excellence across construction, civil engineering and pest control.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "1s" }}>
              <Link to="/projects" className="magnetic inline-flex items-center gap-2 rounded-full bg-teal px-7 py-4 text-white text-sm font-semibold uppercase tracking-[0.15em]">
                Explore Our Work <ArrowRight size={16} />
              </Link>
              <Link to="/certifications" className="magnetic inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-white text-sm font-semibold uppercase tracking-[0.15em] hover:border-teal hover:text-teal">
                View Certifications
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full animate-pulse-ring" />
              <img ref={logoRef} src={logo} alt="Bradeb shield" className="relative w-[320px] md:w-[420px] bg-white rounded-2xl p-8 transition-transform duration-300 ease-out" style={{ transform: "perspective(900px) rotateY(-12deg)" }} />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-[11px] tracking-[0.3em] uppercase flex flex-col items-center gap-2 animate-scroll-bounce">
          <span>Scroll to explore</span>
          <span className="block w-px h-8 bg-teal" />
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4" style={{ backgroundColor: "#0d1f42" }}>
          <div className="flex whitespace-nowrap animate-marquee text-teal font-semibold text-xs uppercase tracking-[0.25em]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12 px-6 shrink-0">
                {["CRB Certified Class V", "Building Contractor", "Civil Contractor", "VAT Registered", "WCF Employer", "Est. 2020", "Dar es Salaam"].map(t => (
                  <span key={t} className="flex items-center gap-12">{t}<span className="text-teal/40">◆</span></span>
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
                <div className="shrink-0 h-10 w-10 rounded-full bg-teal flex items-center justify-center text-white"><Check size={18} /></div>
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
      <section className="py-20 border-b-2 border-teal" style={{ backgroundColor: "#1f4590" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-teal/40">
          {[
            { v: 8, suf: "+", l: "Completed Projects" },
            { v: 1.38, suf: "B+", l: "TZS Project Value", pre: "TZS " },
            { v: 4, suf: "+", l: "Years Operating" },
            { v: 5, suf: "+", l: "Cities Served" },
          ].map((s, i) => (
            <div key={i} className="px-6 text-center">
              <div className="font-heading font-black text-gold text-5xl md:text-6xl">
                {s.pre || ""}{i === 1 ? <>1.38<span>B+</span></> : <CountUp to={s.v} suffix={s.suf} />}
              </div>
              <p className="label-cap text-white/80 mt-3">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* C: Services preview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="mb-14">
            <p className="eyebrow text-teal mb-3">What We Offer</p>
            <h2 className="font-heading font-extrabold text-navy text-4xl md:text-5xl">End-to-End Building Solutions</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Building2, title: "Building Construction", body: "Residential, commercial and industrial buildings delivered turnkey." },
              { Icon: HardHat, title: "Civil Engineering", body: "Structural works, foundations, concrete and infrastructure." },
              { Icon: Bug, title: "Fumigation & Pest Control", body: "Pre/post-construction treatment, gaseous fumigation and more.", green: true },
            ].map(({ Icon, title, body, green }, i) => (
              <Reveal as="article" delay={i * 140} key={i} className="group hover-lift-glow tilt-3d relative bg-white border border-black/5 rounded-2xl p-8 h-[360px] flex flex-col justify-between">
                <div>
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center text-white mb-6`} style={{ backgroundColor: green ? "#5b995a" : "#157575" }}>
                    <Icon size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-2xl mb-3">{title}</h3>
                  <p className="text-[#4a5568] leading-relaxed">{body}</p>
                </div>
                <Link to="/services" className="text-teal font-semibold text-sm inline-flex items-center gap-2">See more <ArrowRight size={14} /></Link>
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-teal scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-teal font-semibold uppercase tracking-[0.15em] text-sm border-b-2 border-teal pb-1">View All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* D: Featured project */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#07396c" }}>
        <svg className="absolute right-0 top-0 h-full opacity-20" viewBox="0 0 400 600" fill="none">
          <path d="M50 550 L50 100 L350 100 L350 130 L80 130 L80 550 Z" stroke="#157575" strokeWidth="1" />
          <path d="M80 130 L300 250" stroke="#157575" strokeWidth="1" />
          <path d="M50 100 L50 60 L320 60" stroke="#157575" strokeWidth="1" />
          <rect x="280" y="240" width="20" height="20" stroke="#157575" />
        </svg>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
          <Reveal variant="left">
            <p className="eyebrow text-gold mb-4">Featured Project</p>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl mb-4 text-gradient-gold">Kijitonyama Residential Complex</h2>
            <p className="text-white/70 mb-8 max-w-2xl">A 9-month residential build delivered to Safia & Mohamed Mnyau in Kinondoni — exemplifying Bradeb's signature quality and on-time delivery.</p>
            <div className="flex flex-wrap gap-6 mb-10">
              <div><p className="eyebrow text-teal">Value</p><p className="font-heading font-extrabold text-gold text-2xl">TZS 320M</p></div>
              <div><p className="eyebrow text-teal">Duration</p><p className="font-heading font-extrabold text-white text-2xl">9 Months</p></div>
              <div><p className="eyebrow text-teal">Location</p><p className="font-heading font-extrabold text-white text-2xl">Kinondoni</p></div>
            </div>
            <Link to="/projects" className="btn-shine inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3.5 text-white text-sm font-semibold uppercase tracking-[0.15em] hover:bg-gold hover:text-near-black transition-colors">View All Projects <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* E: Trust */}
      <section className="py-20" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <p className="text-[#4a5568] mb-8">Fully certified and legally compliant in Tanzania</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["BRELA", "CRB Building Class V", "CRB Civil Class V", "TRA VAT", "WCF Registered"].map(t => (
              <span key={t} className="px-5 py-2.5 rounded-full bg-white border border-navy/20 text-navy font-semibold text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* F: Contact teaser */}
      <section className="py-28" style={{ background: "linear-gradient(135deg, #1f4590, #07396c)" }}>
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading font-extrabold text-white text-4xl md:text-5xl mb-6 overflow-hidden">
            <SplitText text="Ready to Start Your Project?" />
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">Let's discuss how Bradeb can deliver your next construction, civil or fumigation project on time and on budget.</p>
          <Link to="/contact" className="btn-shine inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-near-black font-bold uppercase tracking-[0.15em] text-sm hover:scale-105 transition-transform">
            Contact Us Today <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </PageShell>
  );
}
