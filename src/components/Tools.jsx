import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, FaGitAlt, FaLinux, FaChrome, FaReact, FaNodeJs, 
  FaServer, FaPython, FaFigma, FaTimes 
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedTool(null);
    };
    window.addEventListener('keydown', handleEsc);
    
    if (selectedTool) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedTool]);

  const tools = [
    { name: 'VS Code', icon: <FaCode />, category: 'Editor', desc: 'Primary code editor with extensive extensions for optimized workflow.' },
    { name: 'Git', icon: <FaGitAlt />, category: 'VCS', desc: 'Distributed version control system for tracking changes in source code.' },
    { name: 'Linux', icon: <FaLinux />, category: 'OS', desc: 'Proficient in terminal usage and server-side environment management.' },
    { name: 'Chrome', icon: <FaChrome />, category: 'Debug', desc: 'Advanced usage of DevTools for performance profiling and debugging.' },
    { name: 'React', icon: <FaReact />, category: 'Frontend', desc: 'Building dynamic, high-performance user interfaces with modern React hooks.' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend', desc: 'Scalable server-side development using asynchronous JavaScript.' },
    { name: 'Express', icon: <FaServer />, category: 'Backend', desc: 'Minimalist web framework for building robust API architectures.' },
    { name: 'Python', icon: <FaPython />, category: 'Language', desc: 'Used for automation scripts, data processing, and backend logic.' },
    { name: 'Figma', icon: <FaFigma />, category: 'Design', desc: 'Collaborative interface design and prototyping tool.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section id="tools" className="py-24 max-w-7xl mx-auto px-4 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent"
          >
            Tools & Technologies
          </motion.h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The core stack I use to bring ideas to life.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedTool(tool)}
              className="group relative cursor-pointer p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all flex flex-col items-center justify-center gap-4 shadow-xl"
            >
              <div className="absolute inset-0 bg-sky-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-4xl text-slate-400 group-hover:text-sky-400 group-hover:rotate-12 transition-all duration-300">
                {tool.icon}
              </div>
              
              <span className="text-sm font-bold tracking-wide text-slate-300 group-hover:text-white">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedTool && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTool(null)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedTool(null)}
                  className="absolute top-5 right-5 p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                >
                  <FaTimes size={18} />
                </button>

                <div className="flex items-center gap-5 mb-6">
                  <div className="text-5xl text-sky-400 bg-sky-500/10 p-4 rounded-2xl">
                    {selectedTool.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedTool.name}</h3>
                    <span className="inline-block mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-sky-500 px-2 py-1 bg-sky-500/10 rounded-md">
                      {selectedTool.category}
                    </span>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed text-lg italic border-l-2 border-sky-500/30 pl-4">
                  "{selectedTool.desc}"
                </p>
                
                <div className="mt-8 pt-6 border-t border-slate-800/50">
                  <button 
                    onClick={() => setSelectedTool(null)}
                    className="w-full py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl font-bold transition-all"
                  >
                    Got it
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}