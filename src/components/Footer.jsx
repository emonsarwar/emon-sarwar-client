import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/emon-sarwar-78b853245", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/emonsarwardorjoy", label: "Facebook" },
    { icon: <FaEnvelope />, href: "mailto:emonsarwar110@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-slate-950 pt-20 pb-10 px-6 border-t border-slate-900 overflow-hidden">
      {/* Subtle Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none select-none">
        <h2 className="text-[12vw] font-black text-slate-900/40 uppercase leading-none">
          Emon Sarwar
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          
          {/* Logo/Name Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-black tracking-tighter text-white mb-2">
              EMON<span className="text-sky-500">SARWAR</span>
            </div>
            <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">
              
            </p>
          </motion.div>

          {/* Social Links Container */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-500 hover:border-sky-500/50 transition-all duration-300 group shadow-xl"
              >
                <span className="text-xl">{social.icon}</span>
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-sky-500 text-slate-950 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-5 rounded-full bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20 hover:bg-sky-400 transition-colors"
          >
            <FaArrowUp />
          </motion.button>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs font-bold tracking-widest uppercase">
          <p>&copy; 2026 Emon Sarwar. All Rights Reserved</p>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-white transition-colors">Work with me</a>
          </div>
        </div>
      </div>
    </footer>
  );
}