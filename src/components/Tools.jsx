import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, FaGitAlt, FaLinux, FaChrome, FaReact, FaNodeJs, 
  FaServer, FaDatabase, FaPython, FaDocker, FaAws, FaFigma, FaTimes 
} from 'react-icons/fa';
import { useState } from 'react';

export default function Tools() {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    { name: 'VS Code', icon: <FaCode />, category: 'Editor', desc: 'Primary code editor with extensive extensions.' },
    { name: 'Git', icon: <FaGitAlt />, category: 'VCS', desc: 'Version control for collaboration.' },
    { name: 'Linux', icon: <FaLinux />, category: 'OS', desc: 'Development and server environments.' },
    { name: 'Chrome', icon: <FaChrome />, category: 'Debug', desc: 'Browser tools for performance analysis.' },
    { name: 'React', icon: <FaReact />, category: 'Frontend', desc: 'UI library for modern web apps.' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend', desc: 'JavaScript runtime for servers.' },
    { name: 'Express', icon: <FaServer />, category: 'Backend', desc: 'API framework for Node.js.' },
    { name: 'MongoDB', icon: <FaDatabase />, category: 'Database', desc: 'NoSQL storage solutions.' },
    { name: 'Python', icon: <FaPython />, category: 'Language', desc: 'Web, Data Science, and Automation.' },
    { name: 'Docker', icon: <FaDocker />, category: 'DevOps', desc: 'Containerization platform.' },
    { name: 'AWS', icon: <FaAws />, category: 'Cloud', desc: 'Scalable cloud infrastructure.' },
    { name: 'Figma', icon: <FaFigma />, category: 'Design', desc: 'UI/UX prototyping and design.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="tools" className="py-24 max-w-7xl mx-auto bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent"
          >
            Tools & Technologies
          </motion.h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            The modern stack I use to bring ideas to life, from design to deployment.
          </p>
        </div>

        {/* Tools Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedTool(tool)}
              className="group relative cursor-pointer p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-900 transition-all flex flex-col items-center justify-center gap-4"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-sky-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-3xl text-slate-400 group-hover:text-sky-400 group-hover:rotate-12 transition-all duration-300">
                {tool.icon}
              </div>
              
              <span className="text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Tool Details Modal */}
        <AnimatePresence>
          {selectedTool && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTool(null)}
                className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative w-full max-w-md bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl"
                >
                  <button 
                    onClick={() => setSelectedTool(null)}
                    className="absolute top-4 right-4 p-2 text-slate-500 hover:text-white"
                  >
                    <FaTimes size={20} />
                  </button>

                  <div className="flex items-center gap-5 mb-6">
                    <div className="text-5xl text-sky-400 bg-sky-500/10 p-4 rounded-2xl">
                      {selectedTool.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedTool.name}</h3>
                      <span className="text-xs font-bold uppercase tracking-widest text-sky-500 px-2 py-1 bg-sky-500/10 rounded-md">
                        {selectedTool.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed italic">
                    "{selectedTool.desc}"
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <button 
                      onClick={() => setSelectedTool(null)}
                      className="w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold transition-colors"
                    >
                      Close Details
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}