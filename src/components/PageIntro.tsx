import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageIntro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-[#050505]"
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-primary/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] shadow-[0_0_80px_rgba(217,164,49,0.18)]">
                <span className="bg-[linear-gradient(135deg,#9C620F,#F3C74A,#FFF1B4,#D89720)] bg-clip-text text-6xl font-display font-bold text-transparent">
                  R
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-xs uppercase tracking-[0.4em] text-white/55"
            >
              Rahat Bin Shaheed
            </motion.p>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: "easeInOut" }}
              className="mt-5 h-px w-40 origin-left bg-gradient-to-r from-transparent via-primary/70 to-transparent"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PageIntro;
