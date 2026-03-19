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
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel rounded-[2rem] p-7 md:p-10"
      >
        <p className="section-kicker mb-4">About</p>
        <h2 className="max-w-xl text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
          Engineering logic underneath a cinematic creative process.
        </h2>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          <p>
            I am Rahat Bin Shaheed, based in Dhaka and studying Mechanical
            Engineering at Ahsanullah University of Science and Technology while
            working across video, content, and digital media.
          </p>
          <p>
            My best work happens where structure and storytelling meet:
            planning systems, refining pace, and building a visual identity that
            feels calm but still commands attention.
          </p>
          <p>
            That means stronger campaign thinking, cleaner editorial decisions,
            and brand content that feels intentional from first impression to
            final frame.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["Campaigns", "Concept to rollout"],
            ["Edits", "Short-form and editorial"],
            ["Systems", "Planning, pacing, consistency"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-white/75">
                {title}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 md:p-10"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker mb-4">Experience</p>
            <h2 className="text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
              Roles shaping the craft.
            </h2>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.24em] text-white/35 md:block">
            2014 to now
          </span>
        </div>

        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.org}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: 8 }}
              className="group rounded-[1.5rem] border border-white/10 bg-black/20 px-5 py-5 transition-colors duration-300 hover:border-primary/25 hover:bg-white/[0.04]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-xl">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {exp.org}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:max-w-[14rem] md:justify-end">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/65"
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
