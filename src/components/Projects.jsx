import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaRocket } from 'react-icons/fa';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Full-stack portfolio using React & Node.js.',
      technologies: ['React', 'Node.js', 'Framer Motion', 'Tailwind'],
      github: '#',
      live: '#',
      color: 'from-blue-500 to-cyan-500',
      details: 'A modern, responsive portfolio website featuring smooth animations, 3D effects, and interactive elements. Built with React for the frontend and Node.js for the backend API.'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with payment integration.',
      technologies: ['React', 'Express', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      color: 'from-purple-500 to-pink-500',
      details: 'Complete e-commerce solution with user authentication, product catalog, shopping cart, and secure payment processing using Stripe API.'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      github: '#',
      live: '#',
      color: 'from-emerald-500 to-teal-500',
      details: 'Real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-sky-500 mb-2">My Work</h2>
          <div className="h-1 w-20 bg-sky-500 rounded-full mb-4"></div>
          <h3 className="text-4xl md:text-5xl font-black italic">Selected <span className="text-slate-500 not-italic">Projects</span></h3>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={project.title}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 h-full transition-all duration-500 group-hover:border-sky-500/50 group-hover:-translate-y-2">
                
                {/* Background Glow Effect */}
                <div className={`absolute -right-10 -top-10 h-32 w-32 bg-gradient-to-br ${project.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 p-3 w-fit rounded-2xl bg-slate-800 text-sky-400 group-hover:scale-110 transition-transform">
                    <FaRocket size={24} />
                  </div>

                  <h4 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-sm"
              />
              
              <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                <motion.div
                  layoutId={selectedProject.title}
                  className="pointer-events-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl shadow-sky-500/10"
                >
                  <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`} />
                  
                  <div className="p-8 md:p-12 relative">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      <FaTimes size={20} />
                    </button>

                    <h3 className="text-3xl font-black mb-4">{selectedProject.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-1.5 text-sm font-bold rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-10 text-lg">
                      {selectedProject.details}
                    </p>

                    <div className="flex gap-4">
                      <a href={selectedProject.github} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 font-bold transition-all">
                        <FaGithub /> Github
                      </a>
                      <a href={selectedProject.live} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-600 font-bold text-slate-950 transition-all">
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}