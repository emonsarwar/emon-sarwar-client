import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // useSpring creates that "rubbery" smooth filling effect 
  // rather than a stiff 1-to-1 movement.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* The Progress Bar Container */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 z-[10000] origin-[0%]"
        style={{ scaleX }}
      />

      {/* Optional: Add a subtle outer glow that follows the bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-sky-400 blur-sm opacity-50 z-[9999] origin-[0%]"
        style={{ scaleX }}
      />
    </>
  );
}