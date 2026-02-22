import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className="w-full z-50 max-w-7xl mx-auto px-4 py-3 fixed top-0 left-0 right-0"
    >
      {/* Glassmorphic Background Container */}
      <div className="px-6 py-3 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-slate-700/50 shadow-xl flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform">
          EMON
        </a>

        {/* Desktop Links - Hidden on Mobile */}
        

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors relative group"
            >
              {link.name}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
          {/* Hamburger (Mobile Only) */}
          <button 
            className="md:hidden text-slate-200 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 border-b border-slate-800 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}