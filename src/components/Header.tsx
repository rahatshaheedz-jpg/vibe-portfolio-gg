import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="section-padding pt-4">
        <div
          className={`mx-auto flex h-15 items-center justify-between rounded-full border px-4 transition-all duration-400 md:h-[4.25rem] md:px-6 ${
            scrolled
              ? "border-white/10 bg-[#090b0e]/78 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <button
            onClick={() => handleNav("#home")}
            className="text-[11px] font-display font-semibold uppercase tracking-[0.34em] text-foreground transition-colors hover:text-primary"
          >
            RBS
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="group relative text-[11px] uppercase tracking-[0.28em] text-white/60 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <Button
            onClick={() => setMobileOpen((open) => !open)}
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="section-padding md:hidden"
          >
            <div className="mt-3 rounded-[1.75rem] border border-white/10 bg-[#090b0e]/92 p-5 backdrop-blur-2xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="text-left text-sm uppercase tracking-[0.28em] text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
