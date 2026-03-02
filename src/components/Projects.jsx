import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaRocket, FaMicrochip, FaChartLine, FaCloudSun } from 'react-icons/fa';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectslist = [
    {
      title: 'Face Recognition Attendance System',
      subtitle: 'Biometric Automation',
      description: 'An automated attendance marking system using real-time facial recognition technology to eliminate manual errors.',
      problem: 'Manual attendance systems are inefficient and prone to proxy-marking/human error.',
      methodology: 'Face detection using Haar Cascades, feature encoding via dlib, and real-time comparison against a local database.',
      dataset: 'Custom dataset with 100+ unique labeled faces.',
      evaluation: 'Achieved 98.5% recognition accuracy in controlled lighting.',
      futureScope: 'Integration with deep learning FaceNet models and cloud-based SQL deployment.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Dlib'],
      icon: <FaMicrochip />,
      live: '#',
      github: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Financial Loan Prediction',
      subtitle: 'Machine Learning Classifier',
      description: 'A predictive model that determines loan eligibility based on customer credit profiles.',
      problem: 'Manual loan processing is subjective and slow, leading to high operational costs.',
      methodology: 'Data preprocessing, handling imbalanced classes with SMOTE, and Decision Tree classification.',
      dataset: 'Kaggle Credit Risk dataset with 10,000+ records.',
      evaluation: '85% accuracy with high precision for high-risk profiles.',
      futureScope: 'Implementing Random Forest ensembles and real-time API integration for banking apps.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn'],
      icon: <FaChartLine />,
      live: '#',
      github: '#',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: ' Air Quality Predictions (AQI)',
      subtitle: 'Environmental Analytics',
      description: 'Predicts Air Quality Index (AQI) by analyzing pollutant concentrations like PM2.5 and NO2.',
      problem: 'Predicting atmospheric pollutants to provide health warnings for urban populations.',
      methodology: 'Outlier detection, feature scaling, and comparative analysis between Linear Regression and KNN.',
      dataset: 'Multi-City AQI Dataset (EPA Standards).',
      evaluation: 'Achieved an R² score of 0.88 on daily fluctuations.',
      futureScope: 'Integrating IoT sensor data for real-time localized forecasting.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      icon: <FaCloudSun />,
      live: 'https://colab.research.google.com/drive/1v1_2As-IjCoNyh8aqINI9GXSueDTNkW2',
      github: '#',
      color: 'from-sky-500 to-indigo-500'
    },
    {
      title: 'Handwritten Digits Recognition',
      subtitle: 'Deep Learning / CNN',
      description: 'A Neural Network trained to identify handwritten digits with high precision.',
      problem: 'Automating digit recognition for digitized forms and postal services.',
      methodology: 'Convolutional Neural Network (CNN) architecture with Dropout layers to prevent overfitting.',
      dataset: 'MNIST Handwritten Digit Database.',
      evaluation: '99.2% accuracy on the test validation set.',
      futureScope: 'Expanding to alphanumeric character recognition (EMNIST).',
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN'],
      icon: <FaRocket />,
      live: '#',
      github: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Smart PC Security Cam',
      subtitle: 'Computer Vision',
      description: 'Transforms a standard webcam into a motion-detecting security system.',
      problem: 'Affordable home security solutions using existing hardware.',
      methodology: 'Frame differencing for motion detection and automated video stream buffering.',
      dataset: 'Live webcam stream processing.',
      evaluation: 'Successful real-time motion triggering and local storage recording.',
      futureScope: 'Adding SMTP email notifications and cloud backup integration.',
      technologies: ['Python', 'OpenCV', 'DateTime'],
      icon: <FaMicrochip />,
      live: '#',
      github: '#',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Retro Ping Pong',
      subtitle: 'Game Engine Logic',
      description: 'A classic 2-player arcade game recreation focusing on collision physics.',
      problem: 'Learning real-time state management and vector-based collision detection.',
      methodology: 'Object-oriented game loop and coordinate-based boundary physics.',
      dataset: 'N/A',
      evaluation: 'Stable 60 FPS performance with zero frame-drop during collisions.',
      futureScope: 'Adding AI-opponent logic using basic heuristic algorithms.',
      technologies: ['Python', 'Pygame'],
      icon: <FaRocket />,
      live: '#',
      github: '#',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white max-w-7xl mx-auto px-4">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-sky-500 mb-2">My Work</h2>
          <div className="h-1 w-20 bg-sky-500 rounded-full mb-4"></div>
          <h3 className="text-4xl md:text-5xl font-black italic">Selected <span className="text-slate-500 not-italic">Projects</span></h3>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectslist.map((project, index) => (
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
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 h-full transition-all duration-500 group-hover:border-sky-500/50 group-hover:-translate-y-2">
                <div className={`absolute -right-10 -top-10 h-32 w-32 bg-gradient-to-br ${project.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 p-3 w-fit rounded-2xl bg-slate-800 text-sky-400 group-hover:scale-110 transition-transform">
                    {project.icon || <FaRocket size={24} />}
                  </div>

                  <h4 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">{project.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
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
                className="fixed inset-0 z-[60] bg-slate-950/90 backdrop-blur-md"
              />

              <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                <motion.div
                  layoutId={selectedProject.title}
                  className="pointer-events-auto w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl custom-scrollbar"
                >
                  <div className={`h-2 bg-gradient-to-r ${selectedProject.color}`} />

                  <div className="p-8 md:p-12 relative">
                    <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors">
                      <FaTimes size={20} />
                    </button>

                    <header className="mb-8">
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{selectedProject.title}</h3>
                      <p className="text-sky-400 font-mono text-sm tracking-wide uppercase">{selectedProject.subtitle}</p>
                    </header>

                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-2 space-y-8">
                        <div>
                          <h4 className="text-sm font-bold text-sky-500 uppercase tracking-widest mb-4">Project Overview</h4>
                          <p className="text-slate-300 text-lg leading-relaxed">{selectedProject.description}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                            { label: 'Problem', val: selectedProject.problem },
                            { label: 'Methodology', val: selectedProject.methodology },
                            { label: 'Dataset', val: selectedProject.dataset },
                            { label: 'Evaluation', val: selectedProject.evaluation }
                          ].map((item) => (
                            <div key={item.label} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                              <h5 className="text-[10px] font-bold text-sky-400 uppercase mb-1">{item.label}</h5>
                              <p className="text-sm text-slate-400 leading-tight">{item.val}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 rounded-2xl bg-sky-500/5 border border-sky-500/20">
                          <h4 className="text-xs font-bold text-sky-400 uppercase mb-4">Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.technologies.map(tech => (
                              <span key={tech} className="px-2 py-1 text-[10px] bg-slate-800 rounded border border-slate-700">{tech}</span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <a href={selectedProject.github} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-bold transition-all"><FaGithub /> Source</a>
                          <a href={selectedProject.live} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"><FaExternalLinkAlt /> Live Demo</a>
                        </div>
                      </div>
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