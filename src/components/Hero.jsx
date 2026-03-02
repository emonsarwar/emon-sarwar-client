import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { HiDownload, HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-slate-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* 1. Background Layer: Grid + Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full">
        
        {/* Left Side: Typography & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-sky-400 text-xs md:text-sm font-mono font-bold tracking-widest uppercase">
              Available for Research & Projects
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.05]">
              Hi, I'm <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">Emon Sarwar</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200">
              Engineering the <span className="text-sky-500 italic font-serif">Future of AI & ML</span>
            </h2>
          </div>

          {/* Typewriter text */}
          <div className="text-xl md:text-2xl font-medium text-sky-400/80 mb-8 h-8 font-mono">
            <Typewriter
              options={{
                strings: ['> CSE 4th Year Student', '> AI & ML Enthusiast', '> Deep Learning Researcher'],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </div>

          {/* Academic Bio */}
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
            Undergraduate student at <span className="text-white border-b border-slate-700">Metropolitan University</span>. 
            Passionate about <span className="text-slate-200 underline decoration-sky-500/50 decoration-2 underline-offset-4">Computer Vision</span> and 
            Intelligent Automation. Bridging the gap between theoretical math and practical AI.
          </p>

          {/* Stats/Badges Row */}
          <div className="flex flex-wrap gap-6 mb-10 border-l-2 border-slate-800 pl-6">
            <div>
              <p className="text-white font-bold text-xl">4th Year</p>
              <p className="text-slate-500 text-sm">CSE Student</p>
            </div>
            <div>
              <p className="text-white font-bold text-xl">MU</p>
              <p className="text-slate-500 text-sm">Bangladesh</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-2xl shadow-xl hover:shadow-sky-500/20 transition-all"
            >
              Download CV <HiDownload className="group-hover:translate-y-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl border border-slate-800 text-white font-bold hover:bg-slate-900 transition-all"
            >
              Get In Touch <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Visual Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          {/* Decorative Rings */}
          <div className="absolute w-[120%] h-[120%] border border-slate-800 rounded-full animate-[spin_20s_linear_infinite] opacity-20" />
          <div className="absolute w-[140%] h-[140%] border border-slate-900 rounded-full animate-[spin_30s_linear_infinite_reverse] opacity-10" />

          <div className="relative group w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Spinning Gradient Border */}
            <div className="absolute inset-0 rounded-[3rem] p-[2px] bg-gradient-to-tr from-sky-400 via-blue-500 to-purple-600 animate-spin-slow shadow-[0_0_50px_-12px_rgba(56,189,248,0.5)]">
              <div className="w-full h-full bg-slate-950 rounded-[2.9rem]" />
            </div>

            {/* Profile Image */}
            <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden">
              <img 
                src="/img2.jpeg" 
                alt="Emon Sarwar"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}