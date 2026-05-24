import { Star, PenLine, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

const REVIEWS = [
  { name: "Safia Mnyau", role: "Residential Client", text: "Bradeb delivered our complex on time and exceeded expectations. Structural integrity is unmatched.", color: "teal" },
  { name: "Emmanuel S.", role: "Commercial Developer", text: "Civil works laid the perfect foundation. Professional, precise, and completely reliable team.", color: "gold" },
  { name: "Aisha T.", role: "Industrial Manager", text: "Industrial fumigation was outstanding. Strict safety protocols and zero disruption to operations.", color: "teal" },
  { name: "John K.", role: "Infrastructure", text: "Top-tier roadworks and drainage execution. The attention to detail is evident in the durability.", color: "gold" },
  { name: "Linda M.", role: "Property Manager", text: "Exceptional renovation work. They transformed our aging facility into a modern masterpiece safely.", color: "teal" },
  { name: "David R.", role: "Logistics Director", text: "Warehouse construction was flawless. Delivered exactly to spec with incredible communication throughout.", color: "gold" },
];

const MARQUEE_1 = [...REVIEWS.slice(0, 3), ...REVIEWS.slice(0, 3), ...REVIEWS.slice(0, 3)];
const MARQUEE_2 = [...REVIEWS.slice(3, 6), ...REVIEWS.slice(3, 6), ...REVIEWS.slice(3, 6)];

export function ReviewsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
      {/* Tech-giant style radial glows using strict brand colors */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#157575] rounded-full blur-[150px] opacity-[0.15] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#c9a84c] rounded-full blur-[150px] opacity-[0.08] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-20">
          <div>
            <p className="eyebrow text-gold mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gold"></span> Client Feedback
            </p>
            <h2 className="font-heading font-extrabold text-white text-3xl md:text-5xl leading-tight">Built on Trust<br className="hidden md:block"/> &amp; Reputation</h2>
          </div>

          {/* Creative compact CTA — pill with rotating sticker */}
          <Link
            to="/reviews"
            className="group relative inline-flex items-center gap-3 self-start md:self-end rounded-full bg-white/5 backdrop-blur-md border border-white/10 pl-2 pr-5 py-2 hover:bg-white/10 transition-colors"
          >
            <span className="relative h-10 w-10 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628] shadow-[0_0_20px_rgba(201,168,76,0.35)]">
              <PenLine size={16} />
              <span className="absolute inset-0 rounded-full border border-[#c9a84c]/60 animate-ping" />
            </span>
            <span className="text-white text-[12px] font-bold uppercase tracking-[0.18em]">Write a review</span>
            <ArrowUpRight size={16} className="text-[#26d4a0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </Reveal>

        {/* Marquee Wrapper */}
        <div className="flex flex-col gap-6 relative">
          {/* Fading edges for the marquee */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#0a1628] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#0a1628] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Moves Left */}
          <div className="flex w-max animate-marquee-left gap-6 hover:cursor-grab active:cursor-grabbing">
            {MARQUEE_1.map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
          
          {/* Row 2: Moves Right (Hidden on mobile) */}
          <div className="hidden md:flex w-max animate-marquee-right gap-6 hover:cursor-grab active:cursor-grabbing" style={{ transform: "translateX(-50%)" }}>
            {MARQUEE_2.map((r, i) => <ReviewCard key={i} review={r} />)}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function ReviewCard({ review }: { review: any }) {
  const isGold = review.color === "gold";
  return (
    <div className="w-[320px] md:w-[420px] shrink-0 p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
      <div className="bg-[#0a1628] h-full rounded-2xl p-8 flex flex-col justify-between border border-[#1f4590]/40 transition-all hover:border-[#157575] hover:bg-[#07396c]/30">
        <div>
          <div className="flex gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={14} className={isGold ? "text-[#c9a84c] fill-[#c9a84c]" : "text-[#26d4a0] fill-[#26d4a0]"} />
            ))}
          </div>
          <p className="text-white/80 leading-relaxed text-[15px] mb-8 font-light">
            "{review.text}"
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border ${isGold ? "bg-[#c9a84c]/10 text-[#c9a84c] border-[#c9a84c]/30" : "bg-[#157575]/20 text-[#26d4a0] border-[#26d4a0]/30"}`}>
            {review.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-heading font-semibold text-white text-sm">{review.name}</h4>
            <p className="text-white/50 text-[11px] tracking-wide uppercase mt-1">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
