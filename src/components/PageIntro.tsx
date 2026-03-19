import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PageIntro = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.42, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-[#040506]"
        >
          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] uppercase tracking-[0.42em] text-white/40"
            >
              Rahat Bin Shaheed
            </motion.p>
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 h-px w-32 origin-left bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default PageIntro;
