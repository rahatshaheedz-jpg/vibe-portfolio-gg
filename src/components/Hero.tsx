import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroLines = [
  "Creative direction,",
  "video storytelling,",
  "and quiet digital gravity.",
];

const marqueeItems = [
  "Creative Direction",
  "Video Editing",
  "Content Systems",
  "Brand Presence",
  "Editorial Strategy",
  "Visual Restraint",
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ySoft = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 110]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70]);
  const opacityAura = useTransform(scrollYProgress, [0, 1], [1, 0.32]);
  const yLabelLeft = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -22]);
  const yLabelRight = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 20]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden section-padding pt-24 pb-12"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: ySoft, opacity: opacityAura }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(112,183,235,0.10),transparent_28%),linear-gradient(180deg,rgba(7,9,12,0.96),rgba(5,6,8,1))]" />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 35, -18, 0],
                  y: [0, -28, 12, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-0 h-[24rem] w-[24rem] rounded-full bg-primary/8 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.88),transparent)]" />
      </motion.div>

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-between">
        <div className="grid min-h-[calc(100vh-10rem)] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div className="pb-4 lg:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/50"
            >
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-white/86">
                Dhaka, Bangladesh
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                Mechanical Engineering at AUST
              </span>
            </motion.div>

            <div className="space-y-2">
              {heroLines.map((line, index) => (
                <div key={line} className="mask-reveal">
                  <motion.h1
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.86,
                      delay: 0.08 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-4xl font-display font-semibold leading-[0.94] tracking-[-0.045em] text-foreground sm:text-5xl md:text-7xl lg:text-[5.3rem]"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.64, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I am Rahat Bin Shaheed, a creative professional building calm,
              high-contrast visual systems for brands, content, and digital
              media that need stronger presence without louder noise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={() => handleScroll("#work")}
                className="accent-glow min-w-[12rem] border border-primary/15 bg-white/[0.03] text-foreground hover:bg-white/[0.07]"
              >
                View selected work
                <ArrowRight />
              </Button>
              <Button
                onClick={() => handleScroll("#contact")}
                variant="outline"
                className="min-w-[10rem] border-white/10 bg-transparent hover:bg-white/[0.05]"
              >
                Inquire
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
              className="mt-16 grid gap-4 border-t border-white/10 pt-6 md:max-w-2xl md:grid-cols-3"
            >
              {[
                ["Operating across", "campaign direction, editing, and social strategy"],
                ["Working method", "measured, narrative, and systems-driven"],
                ["Current aim", "make brands feel sharper without feeling louder"],
              ].map(([label, value]) => (
                <div key={label} className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/38">
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed text-white/76">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.985, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -left-10 top-14 hidden h-28 w-28 rounded-full bg-primary/8 blur-3xl md:block" />
            <motion.div
              style={{ y: yLabelLeft }}
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="floating-label absolute -left-6 top-12 z-20 hidden rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/56 xl:block"
            >
              Quiet visuals
            </motion.div>
            <motion.div
              style={{ y: yLabelRight }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.72, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="floating-label absolute -right-4 bottom-16 z-20 hidden w-44 rounded-[1.25rem] p-4 lg:block"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/42">
                Signal
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/74">
                Directional edits, calm pacing, stronger visual gravity.
              </p>
            </motion.div>
            <figure className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0b0e]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.10),rgba(0,0,0,0.56))]" />
              <motion.img
                src="/orange-self-portrait.jpg"
                alt="Orange-lit self portrait of Rahat holding a camera"
                className="aspect-[4/5] w-full object-cover object-center opacity-[0.92]"
                loading="eager"
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className="absolute bottom-0 left-0 right-0 z-20 flex flex-col gap-6 p-6 md:p-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                    Opening frame
                  </p>
                  <p className="mt-3 max-w-[20rem] text-sm leading-relaxed text-white/80">
                    Quiet image-making, editorial control, and visual atmosphere
                    as the baseline.
                  </p>
                </div>
                <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                      Availability
                    </p>
                    <p className="mt-2 text-lg font-display text-foreground">
                      Selective
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-white/72">
                    Open to thoughtful collaborations, visual campaigns, and
                    editorial production.
                  </p>
                </div>
              </div>
            </figure>
          </motion.div>
        </div>

        <div className="mt-8">
          <div className="motion-divider-animated mb-6" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="overflow-hidden rounded-full border border-white/10 bg-white/[0.02]">
              <div className="motion-marquee">
                <div className="motion-marquee__track">
                  {[...marqueeItems, ...marqueeItems].map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="inline-flex items-center gap-4 px-6 py-3 text-[11px] uppercase tracking-[0.34em] text-white/58"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary/80" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleScroll("#work")}
              className="inline-flex items-center gap-2 self-start text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Scroll to work"
            >
              Scroll for projects
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
