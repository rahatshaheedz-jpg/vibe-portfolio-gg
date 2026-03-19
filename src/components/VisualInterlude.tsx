import { motion } from "framer-motion";

const VisualInterlude = () => (
  <section className="section-padding py-10 md:py-16">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/30"
    >
      <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
        <figure className="relative min-h-[26rem]">
          <img
            src="/ferris-wheel-night.jpg"
            alt="Ferris wheel at night with bright lights and a silhouette below"
            className="h-full w-full object-cover object-center opacity-[0.9]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,5,8,0.18),rgba(3,5,8,0.58))]" />
        </figure>

        <div className="flex flex-col justify-between gap-8 p-7 md:p-10 lg:p-12">
          <div>
            <p className="section-kicker mb-4">Visual interlude</p>
            <h2 className="max-w-lg text-3xl font-display font-semibold leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
              Atmosphere matters before the message is even read.
            </h2>
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              This break section is intentionally sparse. It gives the site a
              darker narrative pause and makes the content that follows feel more
              selected and deliberate.
            </p>
            <p>
              The goal is not to turn the portfolio into a gallery, but to let
              a few personal frames shape the tone around the work.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default VisualInterlude;
