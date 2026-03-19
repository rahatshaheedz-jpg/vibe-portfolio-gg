import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkItem {
  title: string;
  category: string;
  role: string;
  description: string;
  highlights: string[];
  tools: string[];
  year: string;
  outcome: string;
  mood: string;
  accent: string;
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
    year: "2025",
    outcome: "A more cinematic campaign language with sharper recall across digital touchpoints.",
    mood: "Bold, premium, launch-focused",
    accent:
      "radial-gradient(circle at top right, rgba(124,196,238,0.22), transparent 34%), linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 60%)",
  },
  {
    title: "MegaPrep - Exam Series Content Pipeline",
    category: "Educational Content",
    role: "Content Executive",
    description:
      "Built a structured content engine for exam-prep media, from scripting short-form lessons to coordinating release cadence and engagement loops.",
    highlights: ["Content system design", "Short-form scripting", "Publishing ops"],
    tools: ["Canva", "Premiere Pro", "Meta Business Suite"],
    year: "2025",
    outcome: "A repeatable publishing rhythm that improved consistency and production speed.",
    mood: "Systematic, clear, scalable",
    accent:
      "radial-gradient(circle at 20% 25%, rgba(120,188,214,0.20), transparent 30%), linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 65%)",
  },
  {
    title: "Media Expert CY - Restaurant Showcase Reels",
    category: "Video Editing",
    role: "Assistant Video Editor",
    description:
      "Edited food and restaurant reels with stronger pacing, cleaner color, and mobile-first framing tailored for social-first audiences.",
    highlights: ["Reels editing", "Color grade", "Platform-native formats"],
    tools: ["Premiere Pro", "After Effects", "Lightroom"],
    year: "2024",
    outcome: "Sharper hooks and more appetizing motion designed for fast-scroll environments.",
    mood: "Fast, flavorful, social-native",
    accent:
      "radial-gradient(circle at bottom right, rgba(154,169,182,0.18), transparent 28%), linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01) 70%)",
  },
  {
    title: "Mathaholics - Social Media Growth Strategy",
    category: "Social Media",
    role: "Social Media Manager",
    description:
      "Managed content planning, branded post design, and social voice to build a more consistent and trusted presence around math education.",
    highlights: ["Content calendar", "Brand consistency", "Community voice"],
    tools: ["Canva", "Meta Business Suite", "CapCut"],
    year: "2024",
    outcome: "A more coherent visual and editorial identity across recurring content.",
    mood: "Clean, educational, community-first",
    accent:
      "radial-gradient(circle at 80% 20%, rgba(110,148,176,0.18), transparent 30%), linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 70%)",
  },
  {
    title: "Lobdhi - Weekly Editorial Video Series",
    category: "Video Editing",
    role: "Video Editor",
    description:
      "Produced recurring episodes that blended interviews, motion graphics, and tight editorial polish while keeping up with fast weekly turnarounds.",
    highlights: ["Editorial cadence", "Motion graphics", "Fast turnaround"],
    tools: ["Premiere Pro", "After Effects", "Audition"],
    year: "2025",
    outcome: "A sustainable weekly format with stronger pacing and brand consistency.",
    mood: "Editorial, steady, high-output",
    accent:
      "radial-gradient(circle at center, rgba(118,140,162,0.18), transparent 32%), linear-gradient(150deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 70%)",
  },
];

const SelectedWork = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeWork = works[activeIndex];
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yPreview = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 20]);

  return (
    <section ref={sectionRef} id="work" className="section-padding section-spacing">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div>
          <p className="section-kicker mb-4">Selected work</p>
          <h2 className="max-w-3xl text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
            Featured projects presented like a moving portfolio wall, not a
            flat list.
          </h2>
        </div>
        <p className="max-w-md self-end text-sm leading-relaxed text-muted-foreground md:text-base">
          Hovering through the projects now drives a live preview panel, giving
          the section more presence and a stronger sense of editorial pacing.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          {works.map((work, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={work.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onFocusCapture={() => setActiveIndex(index)}
                whileHover={reduceMotion ? undefined : { x: 8 }}
                className={`group cursor-pointer rounded-[1.8rem] border px-5 py-5 transition-all duration-400 md:px-6 md:py-6 ${
                  isActive
                    ? "border-primary/20 bg-white/[0.05] shadow-[0_24px_80px_rgba(0,0,0,0.2)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-xl">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-primary/90">
                        {work.category}
                      </span>
                      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {work.role}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-2xl">
                      {work.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {work.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-white/50 transition-colors duration-300 group-hover:text-primary">
                    <span className="text-xs uppercase tracking-[0.24em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.78, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="lg:sticky lg:top-28"
        style={{ y: yPreview }}
      >
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="floating-label mb-4 hidden max-w-[12rem] rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/54 xl:inline-flex"
          >
            Curated preview
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWork.title}
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.985 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="editorial-card relative overflow-hidden rounded-[2.2rem] border border-white/10 p-6 md:p-8"
            >
              <div
                className="absolute inset-0 opacity-90"
                style={{ background: activeWork.accent }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.32))]" />

              <div className="relative">
                <div className="rounded-[1.7rem] border border-white/10 bg-black/20 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-primary/85">
                        Live project preview
                      </p>
                      <div className="mask-reveal mt-4">
                        <motion.h3
                          initial={{ y: 26, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                          className="max-w-md text-2xl font-display font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-3xl"
                        >
                          {activeWork.title}
                        </motion.h3>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.22em] text-white/45">
                      {activeWork.year}
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                        Outcome
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        {activeWork.outcome}
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                        Mood
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        {activeWork.mood}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                      Highlights
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeWork.highlights.map((highlight) => (
                        <span
                          key={highlight}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/70"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {activeWork.tools.map((tool) => (
                        <div
                          key={tool}
                          className="rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                        >
                          <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                            Tool
                          </p>
                          <p className="mt-2 text-sm text-white/80">{tool}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedWork;
