import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 1. Background Visuals (The "Nice" Part) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            <span className="block text-slate-400 text-lg md:text-2xl font-medium mb-2 tracking-widest uppercase">
              Welcome to
            </span>
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
              Emon Sarwar's Portfolio
            </span>
          </h1>

          {/* Typewriter Container */}
          <div className="text-xl md:text-3xl font-light text-slate-300 mb-10 h-12">
            <Typewriter
              options={{
                strings: ['CSE 4th Year Student', 'AI Enthusiast', 'Problem Solver', 'Creative Designer'],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
              }}
            />
          </div>
        </motion.div>

        {/* 3. Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05, translateY: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all overflow-hidden"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-700 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
            <span className="relative">Download CV</span>
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-bold hover:bg-slate-900 hover:text-white hover:border-sky-500 transition-all"
          >
            Get In Touch
          </motion.button>
        </div>
      </div>

      {/* 4. Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-sky-500 rounded-full" />
        </div>
      </motion.div>
    </motion.section>
  );
}