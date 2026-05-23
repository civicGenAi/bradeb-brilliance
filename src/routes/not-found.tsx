import { Link } from "react-router-dom";
import { HardHat, ArrowLeft, TriangleAlert } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a1628]">
      {/* Background blueprint pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Hazard stripes overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 20px)" 
        }} 
      />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
        {/* Animated Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gold blur-3xl opacity-20 rounded-full animate-pulse" />
          <div className="h-24 w-24 rounded-2xl bg-navy border border-gold/30 flex items-center justify-center relative tilt-3d">
            <TriangleAlert size={48} className="text-gold" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="font-heading font-black text-[120px] leading-none md:text-[180px] tracking-tighter mb-4 text-transparent bg-clip-text"
            style={{
              backgroundImage: "repeating-linear-gradient(-45deg, #c9a84c, #c9a84c 20px, #0a1628 20px, #0a1628 40px)",
              backgroundSize: "200% 200%",
              animation: "hazard-stripes 10s linear infinite"
            }}>
          404
        </h1>
        
        {/* Subtitle */}
        <h2 className="font-heading font-extrabold text-white text-2xl md:text-4xl uppercase tracking-widest mb-6 border-y border-white/10 py-4">
          Site Demolished
        </h2>
        
        <p className="text-white/70 mb-12 text-lg">
          The structural plans you're looking for don't exist. This sector is either under heavy construction or has been completely leveled.
        </p>
        
        <Link 
          to="/" 
          className="btn-shine inline-flex items-center gap-3 rounded-full bg-teal px-8 py-4 text-navy font-black uppercase text-sm tracking-[0.15em] hover:scale-105 transition-transform"
        >
          <ArrowLeft size={18} /> Return to Base
        </Link>
      </div>

      <style>{`
        @keyframes hazard-stripes {
          0% { background-position: 0 0; }
          100% { background-position: 100px 0; }
        }
      `}</style>
    </main>
  );
}
