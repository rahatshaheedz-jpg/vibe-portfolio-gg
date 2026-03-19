import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const MotionBackground = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [pointer, setPointer] = useState({ x: 50, y: 18 });

  const yBeam = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -180]);
  const yHalo = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);

  useEffect(() => {
    if (reduceMotion) return;

    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPointer({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduceMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: yBeam }}
        className="absolute left-1/2 top-[-15%] h-[70rem] w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle_at_top,rgba(255,214,102,0.16),transparent_38%)] opacity-80 blur-3xl"
      />
      <motion.div
        style={{ y: yHalo }}
        className="absolute right-[-12rem] top-[20%] h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_14%,transparent_84%,rgba(255,255,255,0.03))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] opacity-50" />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { rotate: [0, 4, -3, 0], scale: [1, 1.08, 0.98, 1] }
        }
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute left-[-14rem] top-[35%] h-[28rem] w-[28rem] rounded-full border border-white/6 bg-white/[0.03] blur-3xl"
      />

      <div
        className="absolute inset-0 opacity-60 transition-[background] duration-300"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(255, 245, 198, 0.12), transparent 18%)`,
        }}
      />
    </div>
  );
};

export default MotionBackground;
