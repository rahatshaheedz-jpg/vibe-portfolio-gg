import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Camera, Clapperboard, Gamepad2, Keyboard } from "lucide-react";

const ambientObjects = [
  {
    Icon: Camera,
    className: "left-[7%] top-[22%] hidden xl:flex",
    duration: 18,
    x: 10,
    y: -12,
    tone: "text-[#c8a35d]/45",
  },
  {
    Icon: Keyboard,
    className: "right-[9%] top-[26%] hidden lg:flex",
    duration: 20,
    x: -8,
    y: 10,
    tone: "text-primary/40",
  },
  {
    Icon: Gamepad2,
    className: "left-[10%] bottom-[16%] hidden lg:flex",
    duration: 17,
    x: 12,
    y: 10,
    tone: "text-primary/36",
  },
  {
    Icon: Clapperboard,
    className: "right-[7%] bottom-[22%] hidden xl:flex",
    duration: 21,
    x: -10,
    y: -10,
    tone: "text-[#c8a35d]/40",
  },
];

const MotionBackground = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const yWarm = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);
  const yCool = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 20]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,17,0.96),rgba(7,8,9,1)_42%,rgba(4,5,7,1))]" />

      <motion.div
        style={{ y: yWarm }}
        className="absolute left-[-10%] top-[-8%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(195,154,84,0.18),rgba(195,154,84,0.06)_40%,transparent_70%)] blur-3xl"
      />
      <motion.div
        style={{ y: yCool }}
        className="absolute right-[-12%] top-[10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(126,178,214,0.12),rgba(126,178,214,0.04)_42%,transparent_70%)] blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.08)_62%,rgba(0,0,0,0.24)_100%)]" />

      <motion.div
        style={{ y: yGrid }}
        className="absolute inset-[-8%] opacity-[0.035]"
      >
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:110px_110px]" />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_84%,rgba(255,255,255,0.025))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.02)_50%,transparent)] opacity-40" />
      <div className="noise-overlay absolute inset-0 opacity-[0.06]" />

      {ambientObjects.map(({ Icon, className, duration, x, y, tone }, index) => (
        <motion.div
          key={index}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, x, -x / 2, 0],
                  y: [0, y, -y / 2, 0],
                  opacity: [0.18, 0.26, 0.18],
                }
          }
          transition={{
            duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className={`ambient-icon absolute items-center justify-center rounded-full p-3 ${className}`}
        >
          <Icon size={14} className={tone} />
        </motion.div>
      ))}
    </div>
  );
};

export default MotionBackground;
