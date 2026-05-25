
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";



export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      {/* HERO + floating form */}
      <section className="relative pt-24 pb-12 md:pb-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a1628 0%, #07396c 60%, #1d3c6b 100%)" }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="cdots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#fff" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#cdots)" />
        </svg>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="absolute h-1 w-1 rounded-full bg-teal animate-particle" style={{ left: `${(i * 47) % 100}%`, animationDelay: `${i * 0.7}s`, animationDuration: `${12 + (i % 5) * 2}s`, opacity: 0.4 }} />
        ))}
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 py-12 md:py-20 grid lg:grid-cols-[6fr_5fr] gap-12 items-start">
          {/* Left - intro */}
          <div>
            <p className="eyebrow text-gold mb-6 animate-fade-up flex items-center gap-3"><span className="h-px w-10 bg-gold" /> Get In Touch</p>
            <h1 className="font-heading font-black text-white text-[2.5rem] sm:text-5xl lg:text-7xl leading-[0.95]">
              <span className="block animate-clip-up">Let's Build</span>
              <span className="block text-gradient-gold animate-clip-up" style={{ animationDelay: "0.2s" }}>Something Great.</span>
            </h1>
            <p className="text-white/70 mt-6 max-w-lg animate-fade-up" style={{ animationDelay: "0.4s" }}>Tell us about your construction, civil or fumigation project — we'll respond within 24 hours.</p>

            {/* Contact tiles */}
            <div className="grid sm:grid-cols-3 gap-3 mt-10">
              {[
                { Icon: MapPin, label: "Visit", v: "Mbezi Beach, Dar es Salaam", href: "https://maps.google.com/?q=Mbezi+Beach" },
                { Icon: Phone, label: "Call", v: "+255 754 230 234", href: "tel:+255754230234" },
                { Icon: Mail, label: "Email", v: "boraentity20@gmail.com", href: "mailto:boraentity20@gmail.com" },
              ].map(({ Icon, label, v, href }, i) => (
                <a key={label} href={href} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/40 rounded-xl p-4 transition-all animate-fade-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  <div className="h-9 w-9 rounded-lg bg-teal/15 text-teal flex items-center justify-center mb-3 group-hover:bg-gold group-hover:text-navy transition-all"><Icon size={16} /></div>
                  <p className="text-white/50 text-[10px] uppercase tracking-[0.15em] mb-1">{label}</p>
                  <p className="text-white text-sm font-semibold leading-snug">{v}</p>
                </a>
              ))}
            </div>

            {/* Quick chips */}
            <div className="flex flex-wrap gap-2 mt-6 animate-fade-up" style={{ animationDelay: "0.9s" }}>
              <a href="https://wa.me/255754230234" className="inline-flex items-center gap-2 rounded-full bg-soft-green text-white px-4 py-2 text-xs font-semibold hover:scale-105 transition-transform"><MessageCircle size={13} /> WhatsApp Us</a>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 text-white/70 px-4 py-2 text-xs"><span className="h-1.5 w-1.5 rounded-full bg-soft-green animate-pulse" /> Open · Mon–Fri 8–5</span>
            </div>
          </div>

          {/* Right - floating form card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 to-teal/30 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-scale-in-soft">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-extrabold text-navy text-2xl">Request a Quote</h2>
                <span className="px-2 py-1 rounded-full bg-soft-green/15 text-soft-green text-[10px] font-bold uppercase tracking-wider">24h Reply</span>
              </div>
              {sent ? (
                <div className="p-8 rounded-xl bg-soft-green/10 border border-soft-green/40 text-center">
                  <div className="h-14 w-14 rounded-full bg-soft-green text-white flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                  <p className="font-heading font-bold text-navy text-lg">Message received!</p>
                  <p className="text-[#4a5568] text-sm mt-2">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input placeholder="Full Name" required className="bg-[#f5f6f8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal text-navy" />
                    <input placeholder="Phone" type="tel" required className="bg-[#f5f6f8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal text-navy" />
                  </div>
                  <input placeholder="Email Address" type="email" required className="w-full bg-[#f5f6f8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal text-navy" />
                  <input placeholder="Company / Organization" className="w-full bg-[#f5f6f8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal text-navy" />
                  <div className="grid grid-cols-2 gap-3">
                    <select className="bg-[#f5f6f8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal text-navy">
                      <option>Select Service</option>
                      {["Building Construction", "Civil Engineering", "Mechanical", "Electrical", "Fumigation", "Other"].map(s => <option key={s}>{s}</option>)}
                    </select>
                    <select className="bg-[#f5f6f8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal text-navy">
                      <option>Budget Range</option>
                      {["Under TZS 50M", "TZS 50M–200M", "TZS 200M–500M", "TZS 500M+", "Not Sure"].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-[#f5f6f8] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal text-navy resize-none" />
                  <button type="submit" className="btn-shine w-full inline-flex items-center justify-center gap-2 rounded-lg bg-navy text-white py-3.5 font-bold uppercase tracking-[0.15em] text-xs hover:bg-teal transition-all">
                    Send Message <ArrowRight size={14} />
                  </button>
                  <p className="text-[#94a3b8] text-[11px] text-center">By submitting you agree to be contacted by Bradeb.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE + MAP — overlap split */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <p className="eyebrow text-teal mb-3">Our Office</p>
            <h2 className="font-heading font-extrabold text-navy text-3xl md:text-4xl mb-8">Come visit us in Mbezi Beach.</h2>
            <div className="space-y-5">
              {[
                { Icon: MapPin, t: "Address", lines: ["P.O. Box 12390, Dar es Salaam, Tanzania", "Mbezi Beach – Ndumbwi, Kinondoni"] },
                { Icon: Phone, t: "Phone", lines: ["+255 754 230 234", "+255 785 050 215"] },
                { Icon: Mail, t: "Email", lines: ["boraentity20@gmail.com"] },
              ].map(({ Icon, t, lines }) => (
                <div key={t} className="group flex gap-4 p-4 rounded-xl hover:bg-[#f5f6f8] transition-colors">
                  <div className="h-11 w-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:text-white transition-all"><Icon size={18} /></div>
                  <div>
                    <p className="label-cap text-teal mb-1">{t}</p>
                    {lines.map(l => <p key={l} className="text-navy text-sm font-medium leading-relaxed">{l}</p>)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#f5f6f8] p-5">
                <p className="label-cap text-teal mb-2">Business Hours</p>
                <p className="text-navy font-semibold text-sm">Mon–Fri · 8am–5pm</p>
                <p className="text-navy font-semibold text-sm">Sat · 9am–1pm</p>
              </div>
              <div className="rounded-xl bg-near-black p-5">
                <p className="label-cap text-gold mb-2">Emergency</p>
                <p className="font-heading font-extrabold text-gold text-lg">+255 754 230 234</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
    </PageShell>
  );
}