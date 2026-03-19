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
  "Creative direction",
  "video storytelling",
  "and calm digital presence.",
];

const marqueeItems = [
  "Creative Direction",
  "Video Editing",
  "Content Systems",
  "Brand Storytelling",
  "Social Media Strategy",
  "Editorial Motion",
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ySoft = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);
  const yPortrait = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 80],
  );
  const opacityAura = useTransform(scrollYProgress, [0, 1], [1, 0.35]);

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,102,0.18),transparent_28%),radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_25%),linear-gradient(180deg,rgba(13,13,13,0.92),rgba(9,9,9,1))]" />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 60, -30, 0],
                  y: [0, -40, 25, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-32 right-[8%] h-[26rem] w-[26rem] rounded-full bg-primary/12 blur-3xl"
        />
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, -40, 40, 0],
                  y: [0, 35, -25, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-white/8 blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.9),transparent)]" />
      </motion.div>

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-between">
        <div className="grid min-h-[calc(100vh-11rem)] items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
            >
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/90">
                Dhaka, Bangladesh
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                Mechanical Engineering at AUST
              </span>
            </motion.div>

            <div className="space-y-2">
              {heroLines.map((line, index) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "115%", rotate: 2, opacity: 0 }}
                    animate={{ y: 0, rotate: 0, opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.08 * index,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-4xl font-display font-semibold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-5xl md:text-7xl lg:text-[5.5rem]"
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              I am Rahat Bin Shaheed, a creative professional shaping campaign
              ideas, edits, and content systems for brands that want a sharper,
              more memorable presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={() => handleScroll("#work")}
                className="accent-glow min-w-[12rem]"
              >
                View selected work
                <ArrowRight />
              </Button>
              <Button
                onClick={() => handleScroll("#contact")}
                variant="outline"
                className="min-w-[10rem] border-border/70 bg-white/[0.03] hover:bg-white/[0.08]"
              >
                Start a project
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14 grid gap-4 md:max-w-2xl md:grid-cols-3"
            >
              {[
                ["5+", "Active roles across video, strategy, and social media"],
                ["Weekly", "Editorial delivery rhythm with fast post-production"],
                ["Calm", "Visual language built around precision, restraint, and pace"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="glass-panel rounded-2xl p-4 md:p-5"
                >
                  <p className="text-2xl font-display font-semibold text-foreground">
                    {value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ y: yPortrait }}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 lg:justify-self-end"
          >
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-primary/30 bg-primary/10 blur-2xl md:block" />
            <motion.figure
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8, rotate: -1.2, scale: 1.01 }
              }
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="glass-panel group relative w-full max-w-[430px] overflow-hidden rounded-[2rem] border border-white/10 p-3"
            >
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,214,102,0.14),transparent_35%,rgba(255,255,255,0.06))]" />
              <div className="relative overflow-hidden rounded-[1.45rem]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/45"
                />
                <motion.img
                  src="/rahat-portrait.png"
                  alt="Portrait of Rahat Bin Shaheed"
                  className="aspect-[4/5] w-full object-cover object-center saturate-[0.92]"
                  loading="eager"
                  whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="absolute bottom-8 right-0 max-w-[14rem] rounded-l-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-xl"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary/85">
                  Current focus
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/85">
                  Editorial video systems, campaign storytelling, and brand
                  rhythm for digital-first teams.
                </p>
              </motion.div>
            </motion.figure>
          </motion.div>
        </div>

        <div className="mt-8">
          <div className="motion-divider mb-6" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="overflow-hidden rounded-full border border-white/10 bg-white/[0.03]">
              <div className="motion-marquee">
                <div className="motion-marquee__track">
                  {[...marqueeItems, ...marqueeItems].map((item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="inline-flex items-center gap-4 px-6 py-3 text-xs uppercase tracking-[0.34em] text-white/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleScroll("#work")}
              className="inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
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
