
import { motion } from 'framer-motion';
import { FaCode, FaJava, FaHtml5, FaJs, FaPython, FaCalculator } from 'react-icons/fa';
import SkillsChart from './SkillsChart';

export default function Skills() {
  const skills = [
    { name: 'C / C++', icon: <FaCode />, percentage: 85, color: 'from-blue-400 to-cyan-400' },
    { name: 'Java', icon: <FaJava />, percentage: 80, color: 'from-orange-400 to-red-500' },
    { name: 'HTML & CSS', icon: <FaHtml5 />, percentage: 90, color: 'from-orange-300 to-yellow-500' },
    { name: 'JavaScript', icon: <FaJs />, percentage: 85, color: 'from-yellow-300 to-yellow-500' },
    { name: 'Python', icon: <FaPython />, percentage: 75, color: 'from-blue-500 to-green-400' },
    { name: 'Linear Programming', icon: <FaCalculator />, percentage: 70, color: 'from-purple-400 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="skills"
      className="py-24 bg-slate-950 text-white overflow-hidden max-w-7xl mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="">
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-sky-500 mb-2">My Expertise</h2>
          <div className="h-1 w-20 bg-sky-500 rounded-full mb-4"></div>
          <h3 className="text-4xl md:text-5xl font-black">Skills & <span className="text-slate-500 italic font-light">Proficiency</span></h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          
          {/* 1. Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:border-sky-500/50 hover:bg-slate-900/60 transition-all duration-300 shadow-xl"
              >
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/0 to-blue-500/0 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500" />

                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-4xl transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110 text-sky-400`}>
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">{skill.name}</h4>
                </div>

                {/* Progress Section */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-slate-400 group-hover:text-sky-400 transition-colors">Proficiency</span>
                    <span className="text-slate-200">{skill.percentage}%</span>
                  </div>
                  
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ delay: 0.6, duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. Chart Section */}
          <motion.div
            className="p-8 rounded-3xl bg-slate-900/20 border border-slate-800/50 backdrop-blur-md flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <SkillsChart />
            <p className="mt-8 text-white text-sm text-center italic">
              Interactive visualization of skill distribution and core strengths.
            </p>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}