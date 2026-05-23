import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#080f1d" }} className="border-t border-teal/40 text-[#64748b]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Bradeb" className="h-12 bg-white p-1 rounded" />
            <span className="font-heading font-extrabold text-white tracking-wider">BRADEB</span>
          </div>
          <p className="text-[13px] leading-relaxed mb-4">Architects of Possibility. Builders of Dreams.</p>
          <p className="text-[12px]">Bradeb Investment Limited — Registered in Tanzania.</p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full border border-teal/30 flex items-center justify-center text-teal hover:bg-teal hover:text-white transition-colors">
                <I size={15} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="label-cap text-white mb-5">Quick Links</h4>
          <ul className="space-y-2 text-[13px]">
            {["Home","About","Services","Projects","Certifications","Team","Contact"].map(n => (
              <li key={n}><Link to={n === "Home" ? "/" : `/${n.toLowerCase()}`} className="hover:text-teal transition-colors">{n}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="label-cap text-white mb-5">Our Services</h4>
          <ul className="space-y-2 text-[13px]">
            <li>Building Construction</li>
            <li>Civil Engineering</li>
            <li>Fumigation</li>
            <li>Pest Control</li>
            <li>Mechanical & Electrical</li>
          </ul>
        </div>
        <div>
          <h4 className="label-cap text-white mb-5">Contact</h4>
          <ul className="space-y-2 text-[13px]">
            <li>P.O. Box 12390</li>
            <li>Mbezi Beach – Ndumbwi, Dar es Salaam</li>
            <li><a href="mailto:boraentity20@gmail.com" className="hover:text-teal">boraentity20@gmail.com</a></li>
            <li><a href="tel:+255754230234" className="hover:text-teal">+255 754 230 234</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-teal/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col md:flex-row justify-between gap-2 text-[12px]">
          <p>© 2026 Bradeb Investment Limited. All Rights Reserved.</p>
          <p>CRB No. B5/1722/01/2024 · TIN: 142-322-722 · Incorporated in Tanzania</p>
        </div>
      </div>
    </footer>
  );
}