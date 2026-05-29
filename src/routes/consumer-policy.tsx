import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ShieldCheck } from "lucide-react";

const sections: { h: string; body: string[] }[] = [
  {
    h: "1. Introduction",
    body: [
      'This Consumer Policy explains how Bradeb Investment Limited ("Bradeb", "we", "us") engages with clients and handles the information you share with us when you request a quote, contract our services, or use this website.',
      "By engaging our construction, civil engineering or fumigation and pest-control services, you agree to the practices described below.",
    ],
  },
  {
    h: "2. Our Commitment to Clients",
    body: [
      "We are committed to delivering every project to the agreed scope, quality, timeline and budget, in line with our CRB Class V certification and Tanzanian law.",
      "Clients receive transparent pricing, clear communication, professional on-site supervision and accountability from first sketch to final handover.",
    ],
  },
  {
    h: "3. Quotations, Contracts & Pricing",
    body: [
      "Quotations are provided in writing and remain valid for the period stated on the quote. A signed contract or work order defines the binding scope, price and schedule for each engagement.",
      "Any change to scope is documented and agreed in writing before additional work proceeds. Payment terms are set out in the contract for each project.",
    ],
  },
  {
    h: "4. Information We Collect",
    body: [
      "We collect the information you provide directly, such as your name, organisation, phone number, email address, project location and project details, when you contact us, request a quote, or submit a review.",
      "We may also keep records relating to contracts, site visits, correspondence and payments for the duration required by law.",
    ],
  },
  {
    h: "5. How We Use Your Information",
    body: [
      "We use your information to respond to enquiries, prepare quotations, deliver and manage projects, issue invoices, meet our legal and regulatory obligations, and improve our services.",
      "We do not sell your personal information. We share it only with our staff and trusted sub-contractors or authorities where necessary to deliver a project or comply with the law.",
    ],
  },
  {
    h: "6. Data Protection & Confidentiality",
    body: [
      "We treat client and project information as confidential and apply reasonable organisational measures to protect it against loss, misuse or unauthorised access.",
      "Project drawings, designs and commercial terms are handled with discretion and shared only with parties involved in delivering the work.",
    ],
  },
  {
    h: "7. Your Rights",
    body: [
      "You may request access to the personal information we hold about you, ask us to correct inaccurate details, or request deletion where we are not required by law to retain it.",
      "To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    h: "8. Health, Safety & Environment",
    body: [
      "Every Bradeb site operates under our Environment, Health & Safety policy. We apply documented safety procedures, provide trained personnel and PPE, and use government-approved chemicals for all fumigation and pest-control work.",
    ],
  },
  {
    h: "9. Warranties & Complaints",
    body: [
      "Workmanship and treatment warranties are provided as set out in your contract. If you are not satisfied with any service, please contact us promptly so we can investigate and resolve the matter.",
      "We aim to acknowledge complaints within a reasonable time and to work with you towards a fair resolution.",
    ],
  },
  {
    h: "10. Website & Cookies",
    body: [
      "This website may use basic cookies and analytics to operate correctly and understand usage. You can control cookies through your browser settings.",
      "Forms on this site are used solely to contact you about your enquiry or review.",
    ],
  },
  {
    h: "11. Governing Law",
    body: [
      "Our operations comply with the Companies Act 2002, the Contractors Registration Act No. 17 of 1997, and Tanzania Revenue Authority requirements. This policy is governed by the laws of the United Republic of Tanzania.",
    ],
  },
  {
    h: "12. Contact Us",
    body: [
      "Bradeb Investment Limited. P.O. Box 12390, Mbezi Beach, Ndumbwi, Kinondoni, Dar es Salaam, Tanzania.",
      "Email: info@bradebinvestmentltd.com · Phone: +255 754 230 234.",
    ],
  },
];

export default function ConsumerPolicyPage() {
  return (
    <PageShell>
      {/* Header */}
      <section
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #07396c 60%, #1d3c6b 100%)",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <pattern id="cppat" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0 L0 0 0 48" fill="none" stroke="#2e9ca3" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cppat)" />
        </svg>
        <div className="container-bradeb relative">
          <Reveal>
            <p className="eyebrow text-teal-bright mb-4 flex items-center gap-2">
              <ShieldCheck size={16} /> Legal
            </p>
            <h1 className="display-2 text-white">Consumer Policy</h1>
            <p className="lead text-white/70 mt-5 max-w-2xl">
              How we work with our clients and handle the information you share with Bradeb
              Investment Limited.
            </p>
            <p className="mt-6 text-white/40 text-xs uppercase tracking-[0.2em]">
              Last updated · May 2026
            </p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="section-y bg-white">
        <div className="container-bradeb max-w-3xl">
          <div className="space-y-10">
            {sections.map((s) => (
              <Reveal as="article" key={s.h}>
                <h2 className="font-heading font-bold text-navy text-xl md:text-2xl mb-3">{s.h}</h2>
                <div className="space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-[#4a5568] leading-relaxed text-[15px]">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
