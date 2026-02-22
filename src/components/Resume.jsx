import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaTrophy, FaPaperPlane } from 'react-icons/fa';

export default function Resume() {
  const resumeData = {
    summary: "Experienced software engineer with expertise in versatile IT sector, system architecture, and innovative solutions. Passionate about building high-performance applications and mentoring teams.",
    experience: [ // education
      {
        title: "Bachelor of Computer Science",
        company: "Metropolitan University",
        period: "2023 - 2026",
        description: ""
      },
      {
        title: "Department of Mathematics",
        company: "National University",
        period: "2020-2021",
        description: ""
      }
    ],
    education: [ // experience 
      {
        degree: "AI Enthusiast",
        school: "Versatile AI Bootcamp",
        year: "2024 - Present"
      }
    ],
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker", "TypeScript", "Next.js", "MongoDB"]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="resume"
      className="py-24 max-w-7xl mx-auto px-4 text-white min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-sky-500 font-mono text-sm tracking-[0.3em] uppercase underline decoration-2 underline-offset-8">Curriculum Vitae</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter italic">Professional <span className="text-slate-500 not-italic">Timeline</span></h3>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 bg-sky-500 hover:bg-sky-400 text-slate-950 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-sky-500/20"
          >
            <FaDownload className="group-hover:bounce" />
            Download Resume PDF
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Summary & Experience */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Summary Section */}
            <motion.div variants={itemVariants} className="relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
                <div className="absolute -top-4 -left-4 p-4 bg-sky-500 rounded-2xl text-slate-950 shadow-xl">
                    <FaPaperPlane size={20} />
                </div>
                <h4 className="text-xl font-bold mb-4 ml-6">Professional Summary</h4>
                <p className="text-slate-400 leading-relaxed text-lg ml-6">
                    {resumeData.summary}
                </p>
            </motion.div>

            {/* Experience Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-slate-800 text-sky-400"> <FaGraduationCap size={24} /></div>
                <h4 className="text-3xl font-black tracking-tight">Education</h4>
              </div>

              <div className="relative border-l-2 border-slate-800 ml-6 space-y-12">
                {resumeData.experience.map((exp, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative pl-10 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-800 border-2 border-slate-950 group-hover:bg-sky-500 group-hover:scale-125 transition-all duration-300" />
                    
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-sky-500 uppercase tracking-widest">{exp.period}</span>
                      <h5 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">{exp.title}</h5>
                      <h6 className="text-slate-300 font-semibold">{exp.company}</h6>
                      <p className="text-slate-400 max-w-2xl leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education & Skills Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 group hover:border-sky-500/30 transition-all">
                <div className="flex items-center gap-3 mb-6 text-sky-400">
                   
                    <FaBriefcase size={24} />
                    <h4 className="text-xl font-bold text-white">Experience</h4>
                </div>
                {resumeData.education.map((edu, index) => (
                    <div key={index} className="space-y-1">
                        <p className="text-sm font-bold text-sky-500">{edu.year}</p>
                        <p className="font-bold text-white">{edu.degree}</p>
                        <p className="text-slate-400 text-sm">{edu.school}</p>
                    </div>
                ))}
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-3 mb-6 text-sky-400">
                    <FaTrophy size={24} />
                    <h4 className="text-xl font-bold text-white">Technical Arsenal</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {resumeData.skills.map((skill, index) => (
                        <span 
                            key={index} 
                            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700 hover:border-sky-500 hover:text-white transition-all cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* CTA / Quick Contact Hint */}
            <motion.div 
                variants={itemVariants}
                className="p-8 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-700 text-slate-950 font-bold"
            >
                <p className="text-sm mb-4 opacity-80 uppercase tracking-tighter">Looking for a collaborator?</p>
                <h4 className="text-2xl leading-tight mb-6">Let's build something extraordinary together.</h4>
                <a href="#contact" className="inline-block px-6 py-3 bg-slate-950 text-white rounded-xl text-sm hover:bg-slate-900 transition-colors">
                    Get In Touch
                </a>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}