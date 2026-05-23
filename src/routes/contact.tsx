
import { PageShell } from "@/components/site/PageShell";
import { Reveal, SplitText } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";



export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden" style={{ backgroundColor: "#07396c" }}>
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="absolute h-1 w-1 rounded-full bg-teal animate-particle" style={{ left: `${(i*47)%100}%`, animationDelay: `${i*0.7}s`, animationDuration: `${12 + (i%5)*2}s`, opacity: 0.4 }} />
        ))}
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 py-20">
          <p className="eyebrow text-teal mb-6 animate-fade-up">Get In Touch</p>
          <h1 className="font-heading font-black text-white text-5xl md:text-7xl leading-[0.95]">
            <span className="block animate-clip-up">Let's Build Something</span>
            <span className="block text-teal animate-clip-up" style={{ animationDelay: "0.25s" }}>Extraordinary Together.</span>
          </h1>
          <p className="text-white/70 mt-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Contact Bradeb Investment Limited for construction, civil or fumigation inquiries.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { Icon: MapPin, t: "Mbezi Beach, Dar es Salaam" },
              { Icon: Phone, t: "+255 754 230 234" },
              { Icon: Mail, t: "boraentity20@gmail.com" },
            ].map(({ Icon, t }, i) => (
              <div key={t} className="flex items-center gap-3 bg-white/5 border-l-2 border-teal rounded-r-lg px-5 py-3 animate-fade-up" style={{ animationDelay: `${0.6 + i*0.15}s` }}>
                <Icon className="text-teal" size={16} /> <span className="text-white text-sm">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[11fr_9fr] gap-12">
          <div>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-10">Send Us a Message</h2>
            {sent ? (
              <div className="p-8 rounded-xl bg-soft-green/10 border border-soft-green/40 text-soft-green">Thanks — we'll be in touch shortly.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-7">
                {[
                  ["Full Name","text"], ["Email Address","email"], ["Phone Number","tel"], ["Company / Organization","text"],
                ].map(([label, type], i) => (
                  <label key={label} className="block animate-fade-up" style={{ animationDelay: `${i*0.06}s` }}>
                    <span className="label-cap text-[#94a3b8] block mb-2">{label}</span>
                    <input type={type} className="w-full bg-transparent border-b border-black/15 py-2 focus:outline-none focus:border-teal text-navy text-base" />
                  </label>
                ))}
                <label className="block">
                  <span className="label-cap text-[#94a3b8] block mb-2">Service Interest</span>
                  <select className="w-full bg-transparent border-b border-black/15 py-2 focus:outline-none focus:border-teal text-navy">
                    {["Building Construction","Civil Engineering","Mechanical","Electrical","Fumigation","Other"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="label-cap text-[#94a3b8] block mb-2">Project Budget Range</span>
                  <select className="w-full bg-transparent border-b border-black/15 py-2 focus:outline-none focus:border-teal text-navy">
                    {["Under TZS 50M","TZS 50M–200M","TZS 200M–500M","TZS 500M+","Not Sure"].map(s => <option key={s}>{s}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="label-cap text-[#94a3b8] block mb-2">Message</span>
                  <textarea rows={5} className="w-full bg-transparent border-b border-black/15 py-2 focus:outline-none focus:border-teal text-navy resize-none" />
                </label>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal text-white py-4 font-semibold uppercase tracking-[0.15em] text-sm hover:bg-navy hover:scale-[1.02] transition-all">
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>

          <aside>
            <h3 className="font-heading font-bold text-navy text-2xl mb-8">Our Office</h3>
            <div className="space-y-6">
              {[
                { Icon: MapPin, lines: ["P.O. Box 12390, Dar es Salaam, Tanzania","Mbezi Beach – Ndumbwi, Kinondoni"] },
                { Icon: Phone, lines: ["+255 754 230 234","+255 785 050 215"] },
                { Icon: Mail, lines: ["boraentity20@gmail.com"] },
              ].map(({ Icon, lines }, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-teal/15 text-teal flex items-center justify-center shrink-0"><Icon size={18} /></div>
                  <div>{lines.map(l => <p key={l} className="text-[#4a5568] leading-relaxed">{l}</p>)}</div>
                </div>
              ))}
            </div>
            <div className="my-8">
              <p className="text-[#4a5568] text-sm mb-2">Business Hours</p>
              <p className="text-navy font-semibold">Mon–Fri 8:00am–5:00pm EAT</p>
              <p className="text-navy font-semibold">Sat 9:00am–1:00pm</p>
            </div>
            <div className="h-0.5 w-10 bg-teal mb-6" />
            <div className="rounded-xl bg-near-black p-6">
              <p className="label-cap text-gold mb-2">Emergency Contact</p>
              <p className="font-heading font-extrabold text-gold text-2xl">+255 754 230 234</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="https://wa.me/255754230234" className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-5 py-2.5 text-sm font-semibold"><MessageCircle size={14} /> WhatsApp</a>
              <a href="tel:+255754230234" className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-5 py-2.5 text-sm font-semibold"><Phone size={14} /> Call Now</a>
              <a href="mailto:boraentity20@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-teal text-white px-5 py-2.5 text-sm font-semibold"><Mail size={14} /> Email</a>
            </div>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="relative">
        <iframe
          title="Bradeb Office Map"
          src="https://www.google.com/maps?q=Mbezi+Beach+Ndumbwi+Dar+es+Salaam&output=embed"
          width="100%" height="420" loading="lazy"
          style={{ border: 0, display: "block" }}
        />
        <div className="absolute top-6 left-6 bg-white rounded-xl shadow-2xl p-5 max-w-xs">
          <p className="font-heading font-bold text-navy">Bradeb Investment Limited</p>
          <p className="text-soft-green text-sm font-semibold mt-1">● Open · Mon–Fri 8am–5pm</p>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-16" style={{ backgroundColor: "#1f4590" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-3 gap-8 text-center">
          {[
            { Icon: Phone, t: "Phone", v: "+255 754 230 234", href: "tel:+255754230234" },
            { Icon: Mail, t: "Email", v: "boraentity20@gmail.com", href: "mailto:boraentity20@gmail.com" },
            { Icon: MapPin, t: "Location", v: "Mbezi Beach, Dar es Salaam", href: "https://maps.google.com/?q=Mbezi+Beach" },
          ].map(({ Icon, t, v, href }, i) => (
            <Reveal key={t} delay={i * 120} variant="scale" className="block">
              <a href={href} className="group block">
                <Icon className="mx-auto text-teal mb-4 group-hover:scale-125 group-hover:text-gold transition-all duration-300" size={32} />
                <p className="label-cap text-teal mb-2">{t}</p>
                <p className="text-white font-semibold group-hover:text-gold transition-colors">{v}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}