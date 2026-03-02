import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTools, FaTimes, FaCode, FaPalette, FaRocket, FaDownload } from 'react-icons/fa';

export default function Toolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const quickTools = [
    { icon: <FaCode />, label: 'Code', action: () => scrollToSection('code-snippets') },
    { icon: <FaPalette />, label: 'Design', action: () => scrollToSection('design') },
    { icon: <FaRocket />, label: 'Projects', action: () => scrollToSection('projects') },
    { 
      icon: <FaDownload />, 
      label: 'CV', 
      action: () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf'; 
        link.download = 'Emon_Sarwar_Resume.pdf';
        link.click();
      } 
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          // Fixed to bottom-right, flex-col-reverse stacks items vertically above the button
          className="fixed bottom-8 right-8 z-[5000] flex flex-col-reverse items-center gap-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          {/* Main Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative p-5 rounded-full shadow-2xl transition-colors duration-500 border-4 border-slate-950 z-20 ${
              isOpen ? 'bg-rose-500 text-white' : 'bg-sky-500 text-slate-950'
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 135 : 0 }}
          >
            {isOpen ? <FaTimes size={24} /> : <FaTools size={24} />}
            
            {!isOpen && (
              <span className="absolute inset-0 rounded-full bg-sky-500 animate-ping opacity-20 -z-10" />
            )}
          </motion.button>

          {/* Expanded Menu (Vertical stack above the button) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex flex-col items-center gap-3 p-2 rounded-full bg-slate-900/60 border border-white/10 backdrop-blur-2xl shadow-2xl"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {quickTools.map((tool, index) => (
                  <motion.button
                    key={index}
                    onClick={tool.action}
                    className="group relative p-4 rounded-full bg-white/5 hover:bg-sky-500 text-white hover:text-slate-950 transition-all duration-300"
                    whileHover={{ x: -5 }} // Slides slightly left on hover
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="text-lg">{tool.icon}</span>
                    
                    {/* Tooltip (Positioned to the LEFT of the icon) */}
                    <span className="absolute top-1/2 -left-3 -translate-x-full -translate-y-1/2 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-white/10 uppercase tracking-widest mr-2">
                      {tool.label}
                      {/* Small arrow pointing to the icon */}
                      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 border-t border-r border-white/10" />
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}