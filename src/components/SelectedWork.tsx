import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkItem {
  title: string;
  category: string;
  role: string;
  description: string;
  highlights: string[];
  tools: string[];
}

const works: WorkItem[] = [
  {
    title: "Lobdhi Brand Campaign - Season 2 Launch",
    category: "Creative Direction",
    role: "Chief Creative Officer",
    description:
      "Led the full visual refresh and rollout plan for Lobdhi's second season, shaping concept development, campaign execution, and cross-platform storytelling.",
    highlights: ["Creative direction", "Campaign rollout", "Cross-platform delivery"],
    tools: ["Premiere Pro", "After Effects", "Figma"],
  },
  {
    title: "MegaPrep - Exam Series Content Pipeline",
    category: "Educational Content",
    role: "Content Executive",
    description:
      "Built a structured content engine for exam-prep media, from scripting short-form lessons to coordinating release cadence and engagement loops.",
    highlights: ["Content system design", "Short-form scripting", "Publishing ops"],
    tools: ["Canva", "Premiere Pro", "Meta Business Suite"],
  },
  {
    title: "Media Expert CY - Restaurant Showcase Reels",
    category: "Video Editing",
    role: "Assistant Video Editor",
    description:
      "Edited food and restaurant reels with stronger pacing, cleaner color, and mobile-first framing tailored for social-first audiences.",
    highlights: ["Reels editing", "Color grade", "Platform-native formats"],
    tools: ["Premiere Pro", "After Effects", "Lightroom"],
  },
  {
    title: "Mathaholics - Social Media Growth Strategy",
    category: "Social Media",
    role: "Social Media Manager",
    description:
      "Managed content planning, branded post design, and social voice to build a more consistent and trusted presence around math education.",
    highlights: ["Content calendar", "Brand consistency", "Community voice"],
    tools: ["Canva", "Meta Business Suite", "CapCut"],
  },
  {
    title: "Lobdhi - Weekly Editorial Video Series",
    category: "Video Editing",
    role: "Video Editor",
    description:
      "Produced recurring episodes that blended interviews, motion graphics, and tight editorial polish while keeping up with fast weekly turnarounds.",
    highlights: ["Editorial cadence", "Motion graphics", "Fast turnaround"],
    tools: ["Premiere Pro", "After Effects", "Audition"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const SelectedWork = () => (
  <section id="work" className="section-padding section-spacing">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]"
    >
      <div>
        <p className="section-kicker mb-4">Selected work</p>
        <h2 className="max-w-3xl text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
          Project snapshots with stronger rhythm, sharper edits, and systems
          that keep content moving.
        </h2>
      </div>
      <p className="max-w-md self-end text-sm leading-relaxed text-muted-foreground md:text-base">
        Inspired by studio-style portfolio pacing, each block now lands with
        more intent: reveal, hover, contrast, and motion that helps the work
        feel presented rather than just listed.
      </p>
    </motion.div>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="space-y-5"
    >
      {works.map((work, index) => (
        <motion.article
          key={work.title}
          variants={item}
          whileHover={{ y: -6 }}
          className="editorial-card group relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-7 md:px-8 md:py-9"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,102,0.12),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="hidden pt-1 md:block">
                <span className="text-xs uppercase tracking-[0.28em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="max-w-2xl">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary/90">
                    {work.category}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {work.role}
                  </span>
                </div>
                <h3 className="max-w-2xl text-2xl font-display font-semibold leading-tight tracking-[-0.03em] text-foreground transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
                  {work.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {work.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-5 lg:items-end">
              <div className="flex items-center gap-3 text-white/55 transition-colors duration-300 group-hover:text-primary">
                <span className="text-xs uppercase tracking-[0.24em]">
                  View case
                </span>
                <ArrowUpRight size={18} />
              </div>

              <div className="flex max-w-sm flex-wrap gap-2 lg:justify-end">
                {work.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="flex max-w-sm flex-wrap gap-2 lg:justify-end">
                {work.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </section>
);

export default SelectedWork;
