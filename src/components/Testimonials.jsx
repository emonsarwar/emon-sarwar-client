import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sayed Imam Mahdi',
      role: 'Math Instructor, Metropolitan University',
      message: 'Emon is a talented linear programming expert and a great collaborator. Highly recommended for complex technical challenges!',
      avatar: '/mahdi.jpeg',
    },
    {
      name: 'Israr Nazah Choudhury',
      role: 'Lecturer, Metropolitan University',
      message: 'Amazing portfolio! The animations and design are top-notch. Natural and engaging work. You have a bright future ahead in development.',
      avatar: '/israr.jpeg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    },
  };

  return (
    <motion.section
      id="testimonials"
      className="relative py-24 px-6 bg-slate-950 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4"
          >
            Kind <span className="text-sky-500 italic">Words</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-sky-500 mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="relative p-8 md:p-12 rounded-[3rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl flex flex-col justify-between group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-8 right-10 text-slate-800/40 group-hover:text-sky-500/20 transition-colors duration-500">
                <FaQuoteLeft size={60} />
              </div>

              <div className="relative z-10">
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed italic mb-8">
                  "{testimonial.message}"
                </p>
                
                <div className="flex items-center gap-5 mt-auto">
                  {/* Avatar with Ring */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-sky-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="relative w-16 h-16 rounded-2xl object-cover border-2 border-slate-900 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-lg tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-sky-500 text-sm font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}