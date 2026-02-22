import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }} // Slides up on exit
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Subtle Background Glow */}
          <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Name */}
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Emon Sarwar
            </motion.h1>

            {/* Modern Loading Bar Container */}
            <div className="w-48 h-[2px] bg-white/10 overflow-hidden relative rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </div>

            {/* Percentage or Status */}
            <motion.p 
              className="mt-4 text-xs uppercase tracking-[0.3em] text-white/40 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              System Initializing
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}