import { motion } from "framer-motion";

const experiences = [
  {
    title: "Chief Creative Officer",
    org: "Lobdhi",
    summary:
      "Leading creative vision, campaign ideation, and visual identity across media outputs.",
    tags: ["Creative Direction", "Brand Strategy"],
  },
  {
    title: "Video Editor",
    org: "Lobdhi",
    summary:
      "Producing narrative-driven edits and recurring editorial videos with a clean visual pace.",
    tags: ["Video Editing", "Post-Production"],
  },
  {
    title: "Content Executive",
    org: "MegaPrep",
    summary:
      "Designing educational content pipelines and managing cross-platform delivery.",
    tags: ["Content Strategy", "Educational Media"],
  },
  {
    title: "Assistant Video Editor",
    org: "Media Expert CY",
    summary:
      "Editing promotional reels and social visuals for restaurant and F&B clients.",
    tags: ["Video Editing", "Restaurant Content"],
  },
  {
    title: "Social Media Manager",
    org: "Mathaholics",
    summary:
      "Managing content calendars, brand presence, and community engagement.",
    tags: ["Social Media", "Community Management"],
  },
];

const About = () => (
  <section id="about" className="section-padding section-spacing">
    <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-kicker mb-4">About</p>
        <h2 className="max-w-xl text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
          A personal dossier shaped by atmosphere, structure, and visual calm.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, x: 26 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.78, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base"
      >
        This section stays focused on identity and working method rather than
        adding more visuals. The goal is a cleaner, more intentional reading
        rhythm.
      </motion.p>
    </div>

    <div className="motion-divider-animated mb-10" />

    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <motion.div
        initial={{ opacity: 0, x: -28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel rounded-[2rem] p-7 md:p-9"
      >
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.68, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="floating-label mb-6 inline-flex rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/54"
        >
          Personal file
        </motion.div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
          Identity note
        </p>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            I am Rahat Bin Shaheed, based in Dhaka and studying Mechanical
            Engineering at Ahsanullah University of Science and Technology while
            working across video, content, and digital media.
          </p>
          <p>
            My instincts lean toward restraint: making things feel intentional,
            paced, and composed rather than overloaded.
          </p>
          <p>
            That usually means sharper hierarchy, stronger editorial timing, and
            a clearer sense of atmosphere around the work.
          </p>
        </div>

        <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
          {[
            ["Campaigns", "Concept to rollout"],
            ["Edits", "Short-form and editorial"],
            ["Systems", "Planning, pacing, consistency"],
          ].map(([title, text]) => (
            <div key={title} className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                {title}
              </p>
              <p className="text-sm text-white/80">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.82, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 md:p-10"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker mb-4">Experience</p>
            <h2 className="text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
              Roles shaping the practice.
            </h2>
          </div>
          <span className="hidden text-[11px] uppercase tracking-[0.28em] text-white/30 md:block">
            Active stack
          </span>
        </div>

        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.org}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.62,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: 6 }}
              className="group rounded-[1.4rem] border border-white/10 bg-black/18 px-5 py-5 transition-colors duration-300 hover:border-white/16 hover:bg-white/[0.03]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      {exp.org}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-[15rem] md:justify-end">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
