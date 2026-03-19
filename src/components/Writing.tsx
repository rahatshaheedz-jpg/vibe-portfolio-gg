import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const entries = [
  {
    title: "Why Engineering Students Should Learn to Edit Video",
    date: "2025",
    summary:
      "On sequencing, pacing, and why editorial judgement belongs in technical thinking too.",
  },
  {
    title: "Building a Content Pipeline for Education Brands",
    date: "2025",
    summary:
      "Notes on making repeatable systems without flattening tone, quality, or clarity.",
  },
  {
    title: "The Case for Quiet Branding in a Loud Feed",
    date: "2024",
    summary:
      "Why control, restraint, and consistency often outperform noise in social spaces.",
  },
];

const Writing = () => (
  <section id="writing" className="section-padding section-spacing">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div>
        <p className="section-kicker mb-4">Writing</p>
        <h2 className="max-w-xl text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
          Notes, fragments, and process signals.
        </h2>
      </div>
      <p className="max-w-xl self-end text-sm leading-relaxed text-muted-foreground md:text-base">
        This section is intentionally quieter. It should read like selected
        notes from the practice, not a content feed.
      </p>
    </motion.div>

    <div className="motion-divider-animated mb-8" />

    <div className="rounded-[2rem] border border-white/10 bg-white/[0.02]">
      {entries.map((entry, index) => (
        <motion.article
          key={entry.title}
          initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.62,
            delay: index * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`group grid gap-5 px-6 py-7 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[0.16fr_0.64fr_0.2fr] md:px-8 ${
            index !== entries.length - 1 ? "border-b border-white/10" : ""
          }`}
        >
          <div className="text-[11px] uppercase tracking-[0.26em] text-white/40">
            {entry.date}
          </div>
          <div>
            <h3 className="text-xl font-display font-semibold leading-tight text-foreground md:text-2xl">
              {entry.title}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {entry.summary}
            </p>
          </div>
          <div className="flex items-start justify-between gap-3 md:justify-end">
              <span className="text-[11px] uppercase tracking-[0.22em] text-white/50">
              Read
            </span>
            <ArrowUpRight className="text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Writing;
