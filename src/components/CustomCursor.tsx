import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const interactiveSelector =
  "a, button, input, textarea, [role='button'], .cursor-hover, img";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const x = useSpring(position.x, { stiffness: 520, damping: 38, mass: 0.28 });
  const y = useSpring(position.y, { stiffness: 520, damping: 38, mass: 0.28 });
  const glowX = useSpring(position.x, { stiffness: 180, damping: 24, mass: 0.9 });
  const glowY = useSpring(position.y, { stiffness: 180, damping: 24, mass: 0.9 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(media.matches);

    updateEnabled();
    media.addEventListener("change", updateEnabled);

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as Element | null;
      setHovering(Boolean(target?.closest(interactiveSelector)));
    };

    const handleDown = () => setPressed(true);
    const handleUp = () => setPressed(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      media.removeEventListener("change", updateEnabled);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: glowX, y: glowY }}
        animate={{
          scale: pressed ? 0.9 : hovering ? 1.35 : 1,
          opacity: hovering ? 0.55 : 0.34,
        }}
        transition={{ duration: 0.16 }}
        className="pointer-events-none fixed left-0 top-0 z-[138] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(85,210,255,0.18),rgba(85,210,255,0.06)_42%,transparent_72%)] blur-lg"
      />
      <motion.div
        aria-hidden="true"
        style={{ x, y }}
        animate={{
          scale: pressed ? 0.85 : hovering ? 1.85 : 1,
          opacity: hovering ? 1 : 0.92,
        }}
        transition={{ duration: 0.12 }}
        className="pointer-events-none fixed left-0 top-0 z-[139] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#96EAFF] shadow-[0_0_10px_rgba(150,234,255,1),0_0_24px_rgba(87,207,255,0.95),0_0_42px_rgba(87,207,255,0.55)]"
      />
    </>
  );
};

export default CustomCursor;
