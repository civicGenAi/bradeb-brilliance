import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
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

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "#1d3c6b" : "transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bradeb" className="h-12 w-auto logo-on-dark" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-heading font-extrabold text-white text-sm tracking-wider">
              BRADEB
            </span>
            <span className="text-[10px] text-white/70 tracking-[0.2em]">INVESTMENT LIMITED</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav-link-underline text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-teal ${isActive ? "text-[#2e9ca3]" : "text-white"}`
              }
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

      {/* Mobile full-screen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[1001] transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <div
          className={`absolute top-0 right-0 h-[100dvh] w-full sm:max-w-md overflow-y-auto transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"}`}
          style={{
            background: "linear-gradient(160deg, #1d3c6b 0%, #0a1628 100%)",
            transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* blueprint grid */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <defs>
              <pattern id="navgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0 L0 0 0 40" fill="none" stroke="#2e9ca3" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#navgrid)" />
          </svg>

          <div className="relative flex flex-col min-h-full px-8 pt-6 pb-10">
            {/* panel header */}
            <div className="flex items-center justify-between">
              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                <img src={logo} alt="Bradeb" className="h-10 w-auto logo-on-dark" />
                <span className="font-heading font-extrabold text-white text-sm tracking-wider">
                  BRADEB
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* links */}
            <nav className="mt-10 flex flex-col">
              {links.map((l, i) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `group flex items-baseline gap-4 py-4 border-b border-white/10 ${isActive ? "text-teal-bright" : "text-white"}`
                  }
                  style={{
                    animation: open ? `fade-up 0.5s ease ${0.1 + i * 0.07}s both` : undefined,
                  }}
                >
                  <span className="font-heading font-black text-sm text-teal-bright/50 w-7">
                    0{i + 1}
                  </span>
                  <span className="font-heading font-extrabold text-3xl tracking-tight transition-transform group-hover:translate-x-2">
                    {l.label}
                  </span>
                </NavLink>
              ))}
            </nav>

            {/* footer */}
            <div className="mt-auto pt-10">
              <Link to="/contact" className="btn btn-primary w-full">
                Get a Quote <ArrowUpRight size={16} />
              </Link>
              <a
                href="tel:+255754230234"
                className="mt-5 flex items-center gap-3 text-white/80 hover:text-teal-bright transition-colors"
              >
                <Phone size={16} className="text-teal-bright" />
                <span className="text-sm font-semibold tracking-wide">+255 754 230 234</span>
              </a>
              <p className="mt-2 text-white/40 text-xs">
                Mbezi Beach, Dar es Salaam · Mon to Fri, 8 to 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
