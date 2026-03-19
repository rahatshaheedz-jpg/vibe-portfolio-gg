import { motion } from "framer-motion";

const Footer = () => (
  <footer className="section-padding pb-12 pt-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="motion-divider pt-8"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">
            Rahat Bin Shaheed
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Creative professional focused on sharper motion, stronger edits, and
            thoughtful digital presentation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.22em] text-white/55">
          <a
            href="mailto:rahatbinshaheed@gmail.com"
            className="transition-colors hover:text-primary"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/rahat-bin-shaheed-56b858388/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/Rahatbinshaheed/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Facebook
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 text-[11px] uppercase tracking-[0.22em] text-white/35 md:flex-row md:items-center md:justify-between">
        <p>Copyright {new Date().getFullYear()} Rahat Bin Shaheed</p>
        <p>Calm, cinematic, and more alive on scroll.</p>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
