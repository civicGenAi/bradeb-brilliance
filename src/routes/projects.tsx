import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { Media } from "@/components/site/Media";
import { MapPin, Clock } from "lucide-react";
import { useState } from "react";

type P = {
  n: string;
  name: string;
  client: string;
  value: string;
  duration: string;
  location: string;
  cat: string;
  pattern: number;
};
const projects: P[] = [
  {
    n: "01",
    name: "JKCI Pedestrian Bridge",
    client: "Jakaya Kikwete Cardiac Institute",
    value: "TZS 32,896,040",
    duration: "1 Month",
    location: "Dar es Salaam",
    cat: "Institutional",
    pattern: 0,
  },
  {
    n: "02",
    name: "NHIF Re-roofing & Renovation",
    client: "National Health Insurance Fund",
    value: "TZS 97,221,500",
    duration: "6 Months",
    location: "Dar es Salaam",
    cat: "Institutional",
    pattern: 1,
  },
  {
    n: "03",
    name: "Kijitonyama Residential",
    client: "Safia & Mohamed Mnyau",
    value: "TZS 320,000,000",
    duration: "9 Months",
    location: "Kinondoni",
    cat: "Residential",
    pattern: 2,
  },
  {
    n: "04",
    name: "Habitat for Humanity Renovation",
    client: "Habitat for Humanity Tanzania",
    value: "TZS 105,750,131",
    duration: "2 Months",
    location: "Masaki",
    cat: "Commercial",
    pattern: 3,
  },
  {
    n: "05",
    name: "Travis Baker Residence",
    client: "Mr. & Mrs. Travis Baker",
    value: "TZS 451,000,000",
    duration: "12 Months",
    location: "Machame, Moshi",
    cat: "Residential",
    pattern: 0,
  },
  {
    n: "06",
    name: "ViaService FNB Fit-out",
    client: "ViaService",
    value: "TZS 70,000,000",
    duration: "1 Month",
    location: "FNB House, Dar es Salaam",
    cat: "Commercial",
    pattern: 1,
  },
  {
    n: "07",
    name: "Geti Fonga Residence",
    client: "Erasto Focus Tarimo",
    value: "TZS 110,000,000",
    duration: "6 Months",
    location: "Moshi, Kilimanjaro",
    cat: "Residential",
    pattern: 2,
  },
  {
    n: "08",
    name: "Mwanza Residence",
    client: "Baraka Mtamwega & Rahel Lyengi",
    value: "TZS 194,854,541",
    duration: "4 Months",
    location: "Ilemela, Mwanza",
    cat: "Residential",
    pattern: 3,
  },
];

const tabs = ["All", "Residential", "Commercial", "Institutional"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <PageShell>
      {/* HERO — magazine */}
      <section
        className="relative min-h-[80vh] flex items-end overflow-hidden pt-24 pb-12"
        style={{ background: "linear-gradient(135deg, #07396c 0%, #1d3c6b 60%, #1d3c6b 100%)" }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="pgrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pgrid)" />
        </svg>
        <span
          className="absolute -right-12 top-12 font-heading font-black text-white select-none pointer-events-none leading-none"
          style={{ fontSize: "min(48vw, 600px)", opacity: 0.06 }}
        >
          08
        </span>
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-gold mb-6 animate-fade-up flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> Project Portfolio
            </p>
            <h1 className="font-heading font-black text-white text-[2.75rem] sm:text-6xl lg:text-8xl leading-[0.9] overflow-hidden">
              <SplitText text="Eight builds." />
              <span
                className="block text-gradient-gold animate-clip-up mt-2"
                style={{ animationDelay: "0.3s" }}
              >
                One standard.
              </span>
            </h1>
            <p
              className="text-white/70 mt-6 max-w-xl animate-fade-up text-sm md:text-base"
              style={{ animationDelay: "0.5s" }}
            >
              Spanning Dar es Salaam, Moshi, Mwanza & Zanzibar — every project carries the same
              Bradeb signature: on time, on budget, on standard.
            </p>
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            {[
              { k: "08", t: "Projects" },
              { k: "TZS 1.38B+", t: "Total Value" },
              { k: "04", t: "Regions" },
              { k: "100%", t: "Delivered" },
            ].map((s, i) => (
              <div
                key={s.k}
                className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-4 hover:bg-white/10 hover:border-gold/40 transition-all animate-scale-in-soft"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                <p className="font-heading font-black text-gold text-xl md:text-2xl">{s.k}</p>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.15em] mt-1">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter rail */}
      <section className="sticky top-20 z-20 backdrop-blur bg-white/90 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-4 flex items-center gap-3 overflow-x-auto hide-scrollbar">
          <span className="eyebrow text-teal shrink-0 hidden md:block">Filter</span>
          {tabs.map((t) => {
            const count =
              t === "All" ? projects.length : projects.filter((p) => p.cat === t).length;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em] transition-all flex items-center gap-2 ${filter === t ? "bg-navy text-white shadow-lg shadow-navy/20" : "bg-[#f5f6f8] text-navy hover:bg-navy/10"}`}
              >
                {t}{" "}
                <span
                  className={`px-1.5 rounded-full text-[10px] ${filter === t ? "bg-gold text-navy" : "bg-white text-teal"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* GRID — magazine masonry */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => {
            // every 5th item spans larger
            const featured = i % 5 === 0;
            return (
              <Reveal
                as="article"
                delay={i * 80}
                key={p.n}
                className={`group relative overflow-hidden hover-lift-glow rounded-2xl border border-black/5 bg-white flex flex-col ${featured ? "lg:col-span-2 lg:row-span-1" : ""}`}
              >
                <Media
                  aspect="auto"
                  rounded="rounded-none"
                  scrim="strong"
                  label={`${p.name} — ${p.location}`}
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                  className={featured ? "h-56 md:h-72" : "h-44 md:h-48"}
                >
                  <span className="absolute top-4 left-4 px-2 py-1 rounded-md bg-white/95 text-navy text-[10px] font-bold uppercase tracking-wider">
                    {p.cat}
                  </span>
                  <span className="absolute top-4 right-4 font-heading font-black text-white/90 text-xl group-hover:text-teal-bright transition-colors">
                    [{p.n}]
                  </span>
                  {featured && (
                    <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-gold text-navy text-[10px] font-bold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                </Media>
                <div className="p-6 flex-1 flex flex-col">
                  <h3
                    className={`font-heading font-bold text-navy ${featured ? "text-xl md:text-2xl" : "text-base"} mb-1 group-hover:text-teal transition-colors leading-tight`}
                  >
                    {p.name}
                  </h3>
                  <p className="text-[#4a5568] text-xs mb-4">{p.client}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4 text-[10px]">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-teal/10 text-teal font-semibold">
                      <MapPin size={11} /> {p.location}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-navy/5 text-navy font-semibold">
                      <Clock size={11} /> {p.duration}
                    </span>
                  </div>
                  <div className="mt-auto pt-3 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[10px] text-[#94a3b8] uppercase tracking-wider">
                      Contract Value
                    </span>
                    <p className="font-heading font-extrabold text-base text-gradient-gold">
                      {p.value}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
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
