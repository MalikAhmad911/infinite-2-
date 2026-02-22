import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Results", path: "/results" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 80);
      if (currentScroll > lastScrollRef.current && currentScroll > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollRef.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(107,143,212,0.12)] border-b border-gray-100"
            : "bg-transparent"
        }`}
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            <Link href="/">
              <div className="flex items-center gap-1.5 group">
                <img src="/logo.webp" alt="INFINITE RANKERS logo" className="h-8 w-8 sm:h-9 sm:w-9" />
                <span style={{ fontFamily: "'Inter', sans-serif", color: "#1A1A2E" }} className="text-xl sm:text-2xl font-bold tracking-tight">
                  INFINITE
                </span>
                <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-xl sm:text-2xl font-bold tracking-tight text-brand-blue">
                  RANKERS
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <span
                    className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-md ${
                      location === link.path
                        ? "text-brand-blue bg-brand-blue/5"
                        : "hover:bg-gray-50"
                    }`}
                    style={{ color: location === link.path ? undefined : "#4A4A6A" }}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white/60">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium" style={{ color: "#4A4A6A" }}>Google Partner</span>
              </div>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-lg group shadow-sm hover:shadow-md transition-shadow">
                  <span>Get Free Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            <button
              className="lg:hidden p-2"
              style={{ color: "#1A1A2E" }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-col items-center gap-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <Link href="/">
                  <div className="flex items-center gap-1.5">
                    <img src="/logo.webp" alt="INFINITE RANKERS logo" className="h-8 w-8" />
                    <div className="flex items-center gap-1">
                      <span style={{ fontFamily: "'Inter', sans-serif", color: "#1A1A2E" }} className="text-xl font-bold tracking-tight">
                        INFINITE
                      </span>
                      <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-xl font-bold tracking-tight text-brand-blue">
                        RANKERS
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i + 1) * 0.06 }}
                >
                  <Link href={link.path}>
                    <span
                      style={{ fontFamily: "'Inter', sans-serif", color: location === link.path ? "#6B8FD4" : "#1A1A2E" }}
                      className="text-3xl font-bold tracking-tight"
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.46 }}
              >
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 px-7 py-3 bg-brand-blue text-white font-semibold rounded-lg mt-4">
                    Get Free Audit
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
