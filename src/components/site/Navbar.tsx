import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#1f4590" : "transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bradeb" className="h-12 w-auto bg-white rounded-md p-1" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading font-extrabold text-white text-sm tracking-wider">BRADEB</span>
            <span className="text-[10px] text-white/70 tracking-[0.2em]">INVESTMENT LIMITED</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `nav-link-underline text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-teal ${isActive ? 'text-[#26d4a0]' : 'text-white'}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-teal px-5 py-2.5 text-white text-xs font-semibold uppercase tracking-[0.15em] transition-all hover:bg-gold hover:scale-105"
          >
            Get Quote
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-screen w-[80%] max-w-sm transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ backgroundColor: "#0a1628" }}
      >
        <div className="pt-24 px-8 flex flex-col gap-2">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `border-l-2 pl-4 py-3 font-semibold uppercase tracking-[0.15em] text-sm transition-all hover:border-[#157575] hover:text-[#26d4a0] ${isActive ? 'border-[#157575] text-[#26d4a0]' : 'border-transparent text-white'}`}
              style={{ animation: open ? `fade-up 0.4s ease ${i * 0.06}s both` : undefined }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="mt-6 inline-flex w-fit rounded-full bg-teal px-6 py-3 text-white text-xs font-semibold uppercase tracking-[0.15em]">
            Get Quote →
          </Link>
        </div>
      </div>
    </header>
  );
}