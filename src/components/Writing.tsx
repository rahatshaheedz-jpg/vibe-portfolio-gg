import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const entries = [
  {
    title: "Why Engineering Students Should Learn to Edit Video",
    date: "2025",
    summary:
      "A reflection on how sequencing, pacing, and visual attention map surprisingly well to engineering thinking.",
  },
  {
    title: "Building a Content Pipeline for Education Brands",
    date: "2025",
    summary:
      "Lessons from creating repeatable content systems that move from scripting to scheduling without losing quality.",
  },
  {
    title: "The Case for Quiet Branding in a Loud Feed",
    date: "2024",
    summary:
      "Why restraint, consistency, and visual calm can outperform trend-chasing in crowded social spaces.",
  },
];

const Writing = () => (
  <section id="writing" className="section-padding section-spacing">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <p className="section-kicker mb-4">Writing</p>
        <h2 className="max-w-2xl text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
          Notes on process, clarity, and how better pacing changes the work.
        </h2>
      </div>
      <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
        The animation treatment here is lighter on purpose. This section should
        glide in and breathe, not compete with the portfolio pieces above it.
      </p>
    </motion.div>

    <div className="grid gap-5 lg:grid-cols-3">
      {entries.map((entry, index) => (
        <motion.article
          key={entry.title}
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ y: -8 }}
          className="editorial-card group relative overflow-hidden rounded-[2rem] border border-white/10 p-6 md:p-7"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,214,102,0.10),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative">
            <span className="text-xs uppercase tracking-[0.24em] text-white/45">
              {entry.date}
            </span>
            <h3 className="mt-5 text-xl font-display font-semibold leading-tight text-foreground md:text-2xl">
              {entry.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              {entry.summary}
            </p>
            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.22em] text-white/60">
                Read note
              </span>
              <ArrowUpRight className="text-white/55 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Writing;
