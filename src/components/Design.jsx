import { motion } from 'framer-motion';
import { FaPalette, FaMagic, FaRocket } from 'react-icons/fa';

export default function Design() {
  const designs = [
    {
      title: 'UI/UX Designs',
      description: 'Modern user interfaces with smooth animations and intuitive interactions.',
      icon: <FaPalette />,
      color: 'from-pink-500 to-rose-500',
      shadow: 'shadow-rose-500/20'
    },
    {
      title: 'Logo Designs',
      description: 'Creative and memorable logos that represent brand identity and values.',
      icon: <FaMagic />,
      color: 'from-cyan-400 to-emerald-400',
      shadow: 'shadow-cyan-400/20'
    },
    {
      title: 'Motion Graphics',
      description: 'Animated graphics and visual effects for engaging digital presentations.',
      icon: <FaRocket />,
      color: 'from-sky-400 to-blue-600',
      shadow: 'shadow-blue-500/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.section
      id="design"
      className="py-24 max-w-7xl mx-auto bg-slate-950 text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto relative">
        
        {/* Background Decorative Blob */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sky-500 font-mono text-xs tracking-[0.4em] uppercase mb-4 block"
          >
            Creative Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
            Graphics <span className="text-slate-700 not-italic">Design</span>
          </h2>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Body */}
              <div className="relative z-10 h-full p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-md overflow-hidden flex flex-col items-center text-center transition-all duration-500 group-hover:border-slate-700">
                
                {/* Icon Container with Floating Animation */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`relative mb-8 p-6 rounded-2xl bg-gradient-to-br ${design.color} text-slate-950 shadow-2xl ${design.shadow} group-hover:scale-110 transition-transform duration-500`}
                >
                  <span className="text-3xl">{design.icon}</span>
                  
                  {/* Icon Glow Ring */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${design.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity`} />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                  {design.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-sm">
                  {design.description}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${design.color} group-hover:w-full transition-all duration-700`} />
              </div>

              {/* Background Glow Effect (Behind the card) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${design.color} opacity-0 blur-3xl group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}