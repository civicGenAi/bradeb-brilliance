import { useState, ChangeEvent, FormEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Camera, Quote, Send, Sparkles, CheckCircle2, PenLine } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

// Preloaded avatar set — DiceBear (no auth required)
const STYLES = ["adventurer", "avataaars", "bottts", "fun-emoji", "lorelei", "micah", "notionists", "personas", "pixel-art", "thumbs"];
const SEEDS = ["Hassan", "Amina", "Joseph", "Neema", "Faraja", "Zainab", "Baraka", "Imani", "Mwanaisha", "Salim", "Tumaini", "Rehema", "Issa", "Subira", "Kito"];
const PRELOADED = SEEDS.map((seed, i) => ({
  id: `p-${i}`,
  url: `https://api.dicebear.com/9.x/${STYLES[i % STYLES.length]}/svg?seed=${seed}&backgroundType=gradientLinear`,
}));

type Review = {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
};

const INITIAL_REVIEWS: Review[] = [
  { name: "Safia Mnyau", role: "Residential Client · Kinondoni", text: "Bradeb delivered our complex on time and exceeded expectations. Structural integrity is unmatched and the team kept us informed every single week.", avatar: PRELOADED[1].url, rating: 5 },
  { name: "Emmanuel S.", role: "Commercial Developer", text: "Civil works laid the perfect foundation. Professional, precise, and completely reliable from day one to handover.", avatar: PRELOADED[3].url, rating: 5 },
  { name: "Aisha T.", role: "Industrial Manager", text: "Industrial fumigation was outstanding. Strict safety protocols and zero disruption to operations across two shifts.", avatar: PRELOADED[5].url, rating: 5 },
  { name: "John K.", role: "Infrastructure Lead", text: "Top-tier roadworks and drainage execution. The attention to detail is evident in the durability after the first rainy season.", avatar: PRELOADED[7].url, rating: 4 },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [form, setForm] = useState<Review>({ name: "", role: "", text: "", avatar: PRELOADED[0].url, rating: 5 });
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setForm((p) => ({ ...p, avatar: URL.createObjectURL(file) }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.text) return;
    setReviews((prev) => [{ ...form }, ...prev]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2400);
    setForm({ name: "", role: "", text: "", avatar: PRELOADED[0].url, rating: 5 });
  };

  return (
    <PageShell>
      {/* ====================== HERO ====================== */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28" style={{ background: "radial-gradient(ellipse at 20% 0%, #1f4590 0%, #07396c 50%, #0a1628 100%)" }}>
        {/* blueprint grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rgrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0 L0 0 0 48" fill="none" stroke="#26d4a0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rgrid)" />
        </svg>
        {/* glow orbs */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30" style={{ background: "#157575" }} />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20" style={{ background: "#c9a84c" }} />

        {/* floating avatar badges */}
        <div className="hidden md:block absolute top-32 right-[8%] animate-float">
          <img src={PRELOADED[2].url} alt="" className="w-16 h-16 rounded-full border-2 border-[#c9a84c] shadow-2xl bg-white" />
        </div>
        <div className="hidden md:block absolute top-1/2 right-[22%] animate-float" style={{ animationDelay: "0.8s" }}>
          <img src={PRELOADED[6].url} alt="" className="w-12 h-12 rounded-full border-2 border-[#26d4a0] shadow-2xl bg-white" />
        </div>
        <div className="hidden md:block absolute bottom-24 right-[14%] animate-float" style={{ animationDelay: "1.4s" }}>
          <img src={PRELOADED[9].url} alt="" className="w-20 h-20 rounded-full border-2 border-white/40 shadow-2xl bg-white" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6">
          <Reveal>
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-[#26d4a0] text-xs uppercase tracking-[0.2em] mb-8">
              <ArrowLeft size={14} /> Back home
            </Link>
            <p className="eyebrow text-[#c9a84c] mb-4 flex items-center gap-2"><Sparkles size={14}/> Voices of Bradeb</p>
            <h1 className="font-heading font-black text-white text-5xl md:text-7xl leading-[0.95] max-w-3xl">
              Stories from the<br/>
              <span className="text-[#26d4a0]">people we build for.</span>
            </h1>
            <p className="mt-6 text-white/70 max-w-xl leading-relaxed">
              Honest words from clients across Dar es Salaam and beyond. Add yours below — pick an avatar or upload your own.
            </p>

            <div className="mt-10 flex flex-wrap gap-8">
              {[["4.9","Average Rating"],["120+","Happy Clients"],["8+","Major Projects"]].map(([v,l]) => (
                <div key={l} className="border-l-2 border-[#c9a84c]/60 pl-4">
                  <p className="font-heading font-black text-white text-3xl">{v}</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mt-1">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: "#f5f6f8", clipPath: "polygon(0 100%, 100% 100%, 100% 50%, 0 100%)" }} />
      </section>

      {/* ====================== BODY ====================== */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f5f6f8" }}>
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[420px_1fr] gap-10 lg:gap-16 items-start">

          {/* ============ FORM CARD ============ */}
          <Reveal variant="left" className="lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl border border-[#1f4590]/10 shadow-[0_20px_60px_-20px_rgba(31,69,144,0.25)] overflow-hidden">
              {/* header strip */}
              <div className="px-6 py-5 flex items-center gap-3" style={{ background: "linear-gradient(135deg,#1f4590,#07396c)" }}>
                <div className="h-9 w-9 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628]"><PenLine /></div>
                <div>
                  <h2 className="font-heading font-extrabold text-white text-base">Share Your Story</h2>
                  <p className="text-white/60 text-[10px] uppercase tracking-[0.2em]">Takes 30 seconds</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <Field label="Full Name">
                  <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className="bradeb-input" />
                </Field>
                <Field label="Role / Company">
                  <input name="role" value={form.role} onChange={handleChange} placeholder="Property Owner" required className="bradeb-input" />
                </Field>

                {/* Avatar picker */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1f4590] block mb-3">Choose Avatar</label>
                  <div className="bg-[#f5f6f8] rounded-2xl p-3 border border-[#1f4590]/10">
                    <div className="grid grid-cols-5 gap-2 max-h-[180px] overflow-y-auto pr-1">
                      {PRELOADED.map((a) => {
                        const sel = form.avatar === a.url;
                        return (
                          <button type="button" key={a.id} onClick={() => setForm((p) => ({ ...p, avatar: a.url }))}
                            className={`relative aspect-square rounded-full overflow-hidden border-2 transition-all ${sel ? "border-[#c9a84c] ring-2 ring-[#c9a84c]/30 scale-105" : "border-transparent hover:border-[#157575]"}`}>
                            <img src={a.url} alt="" className="w-full h-full object-cover bg-white" />
                            {sel && <span className="absolute -bottom-1 -right-1 bg-[#c9a84c] rounded-full text-[#0a1628]"><CheckCircle2 size={14}/></span>}
                          </button>
                        );
                      })}
                      <button type="button" onClick={() => fileRef.current?.click()}
                        className="aspect-square rounded-full border-2 border-dashed border-[#1f4590]/30 flex items-center justify-center text-[#1f4590] hover:border-[#157575] hover:text-[#157575] transition-colors">
                        <Camera size={14}/>
                      </button>
                      <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-3 bg-[#1f4590]/5 rounded-xl p-2.5">
                    <img src={form.avatar} alt="" className="w-10 h-10 rounded-full bg-white border border-[#c9a84c]" />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#157575] font-bold">Selected</p>
                      <p className="text-[11px] text-[#4a5568]">Looking good!</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1f4590] block mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((n) => (
                      <button type="button" key={n} onClick={() => setForm((p) => ({ ...p, rating: n }))} className="p-1 transition-transform hover:scale-110">
                        <Star size={26} className={n <= form.rating ? "fill-[#c9a84c] text-[#c9a84c]" : "text-[#1f4590]/20"} />
                      </button>
                    ))}
                  </div>
                </div>

                <Field label="Your Review">
                  <textarea name="text" value={form.text} onChange={handleChange} placeholder="Tell us about your experience…" rows={4} required className="bradeb-input resize-none" />
                </Field>

                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1f4590] hover:bg-[#157575] text-white font-bold uppercase tracking-[0.15em] text-xs py-4 transition-colors shadow-[0_10px_30px_-10px_rgba(31,69,144,0.6)]">
                  {submitted ? <><CheckCircle2 size={16}/> Posted!</> : <><Send size={14}/> Publish Review</>}
                </button>
              </form>
            </div>
          </Reveal>

          {/* ============ REVIEWS GRID ============ */}
          <div>
            <Reveal className="flex items-end justify-between mb-8">
              <div>
                <p className="eyebrow text-[#157575] mb-2">{reviews.length} Reviews</p>
                <h2 className="font-heading font-extrabold text-[#0a1628] text-2xl md:text-3xl">What clients are saying</h2>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {reviews.map((r, i) => (
                <Reveal as="article" delay={i * 80} key={i}
                  className="group relative bg-white rounded-2xl p-6 border border-[#1f4590]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                  <Quote className="absolute top-4 right-4 text-[#1f4590]/8 group-hover:text-[#c9a84c]/30 transition-colors" size={56} strokeWidth={1.2} />
                  <div className="flex gap-1 mb-4">
                    {Array.from({length:5}).map((_,k)=>(
                      <Star key={k} size={14} className={k < r.rating ? "fill-[#c9a84c] text-[#c9a84c]" : "text-[#1f4590]/15"} />
                    ))}
                  </div>
                  <p className="text-[#4a5568] leading-relaxed text-[14px] mb-6 relative z-10">"{r.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[#1f4590]/10">
                    <img src={r.avatar} alt={r.name} className="w-11 h-11 rounded-full bg-[#f5f6f8] border-2 border-[#c9a84c]/40" />
                    <div>
                      <h4 className="font-heading font-bold text-[#0a1628] text-sm">{r.name}</h4>
                      <p className="text-[#157575] text-[10px] uppercase tracking-[0.15em] mt-0.5">{r.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .bradeb-input {
          width: 100%;
          background: #f5f6f8;
          border: 1px solid rgba(31,69,144,0.12);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 14px;
          color: #0a1628;
          transition: all 0.2s;
        }
        .bradeb-input:focus {
          outline: none;
          border-color: #157575;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(21,117,117,0.12);
        }
        .bradeb-input::placeholder { color: rgba(10,22,40,0.35); }
      `}</style>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1f4590] block mb-2">{label}</label>
      {children}
    </div>
  );
}
