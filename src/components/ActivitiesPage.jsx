import { motion } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaMicroscope, FaHandsHelping } from 'react-icons/fa';

const activitiesData = [
  {
    title: 'EXECUTIVE MEMBER',
    organization: 'Metropolitan University CSE Society',
    period: '2023 – Present',
    icon: <FaUsers />,
    description: 'Organized national-level university tech and cultural fest, managed events with 500+ participants.',
    achievements: [
      'Successfully organized Technovation 2024',
      'Lead a team of 20 volunteers',
      'Coordinated with sponsors and guest speakers'
    ],
    tags: ['Leadership', 'Event Management'],
  },
  {
    title: 'Campus Ambassador',
    organization: 'ICT Olympiad',
    period: '2024 – Present',
    icon: <FaGraduationCap />,
    description: 'Conducted workshops and promoted tech learning initiatives across multiple universities.',
    achievements: [
      'Reached 1000+ students through workshops',
      'Top 10 ambassador in quarterly performance',
      'Facilitated hands-on sessions on IT development'
    ],
    tags: ['Workshops', 'Outreach'],
  },
  {
    title: 'EXECUTIVE MEMBER',
    organization: 'Metropolitan Research Society',
    period: '2025 – Present',
    icon: <FaMicroscope />,
    description: 'Involved in strategy and policy research discussions, contributed to policy briefs.',
    achievements: [
      'Co-authored a policy brief on digital education',
      'Participated in national-level policy dialogues'
    ],
    tags: ['Research', 'Policy'],
  },
  {
    title: 'Disaster Response Volunteer',
    organization: 'Voluntary Association',
    period: '2022 – Present',
    icon: <FaHandsHelping />,
    description: 'Participated in humanitarian flood response operations in Sylhet, distributed relief goods.',
    achievements: [
      'Assisted in relief distribution to 300+ families',
      'Coordinated with local NGOs for efficient response'
    ],
    tags: ['Volunteering', 'Relief'],
  }
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 max-w-7xl mx-auto px-4 min-h-screen bg-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Styled to match Resume.jsx */}
        <div className="mb-16 space-y-2">
          <h2 className="text-sky-500 font-mono text-sm tracking-[0.3em] uppercase underline decoration-2 underline-offset-8">
            Beyond the Code
          </h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter italic text-white">
            Community <span className="text-slate-500 not-italic">& Leadership</span>
          </h3>
          <p className="text-slate-400 max-w-xl pt-4">A detailed look at my extracurricular and leadership experiences</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activitiesData.map((activity, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 transition-all group shadow-xl"
            >
              {/* Icon & Period */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-500 group-hover:bg-sky-500 group-hover:text-slate-950 transition-all duration-300">
                  {activity.icon}
                </div>
                <span className="text-xs font-bold text-sky-500/70 uppercase tracking-widest bg-slate-800 px-3 py-1 rounded-full">
                  {activity.period}
                </span>
              </div>

              {/* Title & Org */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-sky-500/80 font-medium text-sm">{activity.organization}</p>
              </div>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {activity.description}
              </p>

              {/* Achievements */}
              <div className="mb-8 space-y-3">
                <h4 className="text-xs font-black uppercase tracking-tighter text-slate-500">Key Achievements</h4>
                <ul className="space-y-2">
                  {activity.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-sky-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {activity.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-slate-400 rounded-lg border border-slate-700 group-hover:border-sky-500/30 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;