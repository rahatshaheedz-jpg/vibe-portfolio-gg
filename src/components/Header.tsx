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
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="section-padding pt-4">
        <div
          className={`mx-auto flex h-16 items-center justify-between rounded-full border px-4 transition-all duration-400 md:h-[4.5rem] md:px-6 ${
            scrolled
              ? "border-white/10 bg-black/55 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <button
            onClick={() => handleNav("#home")}
            className="text-sm font-display font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:text-primary"
          >
            Rahat
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="group relative text-xs uppercase tracking-[0.24em] text-white/65 transition-colors hover:text-white"
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
            transition={{ duration: 0.25 }}
            className="section-padding md:hidden"
          >
            <div className="mt-3 rounded-[1.75rem] border border-white/10 bg-black/80 p-5 backdrop-blur-2xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="text-left text-sm uppercase tracking-[0.24em] text-white/75 transition-colors hover:text-primary"
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
