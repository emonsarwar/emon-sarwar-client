import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"

export default function Experience() {
  const [selectedItem, setSelectedItem] = useState(null)

  // 🔒 ARRAY KEPT EXACTLY THE SAME
  const experiences = [
    {
      title: 'Projects',
      description: 'Developing innovative software solutions and applications.',
      details: 'Led multiple full-stack projects using React, Node.js, and modern web technologies. Implemented CI/CD pipelines and collaborated with cross-functional teams.'
    },
    {
      title: 'Codebase',
      description: 'Maintaining and optimizing large-scale codebases.',
      details: 'Managed codebase architecture, implemented code reviews, and ensured high code quality standards across development teams.'
    },
    {
      title: 'Repositories',
      description: 'Managing version control and collaboration platforms.',
      details: 'Utilized Git for version control, managed GitHub repositories, and implemented branching strategies for efficient team collaboration.'
    },
    {
      title: 'Solutions',
      description: 'Designing and implementing technical solutions.',
      details: 'Analyzed business requirements and designed scalable technical solutions using modern frameworks and best practices.'
    },
    {
      title: 'Systems',
      description: 'Building robust and scalable systems.',
      details: 'Developed distributed systems, microservices architecture, and high-performance applications serving thousands of users.'
    },
    {
      title: 'Applications',
      description: 'Creating user-friendly applications.',
      details: 'Built responsive web and mobile applications with focus on user experience, performance, and accessibility.'
    },
    {
      title: 'Builds',
      description: 'Automating build and deployment processes.',
      details: 'Implemented automated build pipelines, containerization with Docker, and cloud deployment strategies.'
    },
    {
      title: 'Deployments',
      description: 'Managing production deployments.',
      details: 'Handled production deployments, monitoring, scaling, and maintenance of live applications in cloud environments.'
    },
    {
      title: 'Modules',
      description: 'Developing reusable code modules.',
      details: 'Created modular, reusable components and libraries that can be shared across multiple projects and teams.'
    },
    {
      title: 'Components',
      description: 'Building UI components and libraries.',
      details: 'Developed comprehensive component libraries, ensuring consistency and maintainability across applications.'
    },
    {
      title: 'Frameworks',
      description: 'Working with modern development frameworks.',
      details: 'Expertise in React, Vue.js, Angular, Node.js, Express, and other modern web development frameworks.'
    },
    {
      title: 'Algorithms',
      description: 'Implementing efficient algorithms.',
      details: 'Designed and optimized algorithms for data processing, search, sorting, and complex computational problems.'
    },
    {
      title: 'Designs',
      description: 'Creating beautiful and functional designs.',
      details: 'Collaborated with designers to implement pixel-perfect UI designs, ensuring great user experience.'
    },
    {
      title: 'Architecture',
      description: 'Designing system architectures.',
      details: 'Planned and designed scalable system architectures, considering performance, security, and maintainability.'
    },
    {
      title: 'Documentation',
      description: 'Creating comprehensive documentation.',
      details: 'Wrote technical documentation, API guides, and user manuals for better knowledge sharing.'
    },
    {
      title: 'Testing',
      description: 'Implementing testing strategies.',
      details: 'Developed comprehensive testing suites including unit tests, integration tests, and end-to-end testing.'
    },
    {
      title: 'Debugging',
      description: 'Troubleshooting and fixing issues.',
      details: 'Expert debugging skills for identifying and resolving complex software issues and performance bottlenecks.'
    },
    {
      title: 'Innovations',
      description: 'Driving technological innovations.',
      details: 'Explored emerging technologies, implemented proof-of-concepts, and drove innovation in software development.'
    }
  ]

  return (
    <section
      id="experience"
      className="relative py-28 max-w-7xl mx-auto text-white"
    >
      <div className="">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Experience &{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-400">
            A curated overview of my professional capabilities and technical strengths.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelectedItem(exp)}
              className="cursor-pointer rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all
                         hover:border-sky-400/40 hover:bg-white/10
                         hover:shadow-[0_0_40px_rgba(56,189,248,0.25)]"
            >
              <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                {exp.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            />

            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="relative w-full max-w-xl rounded-[3rem] border border-white/10
                           bg-gradient-to-br from-slate-900 to-slate-950 p-10 shadow-2xl"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-6 right-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
                >
                  <FaTimes />
                </button>

                <h3 className="text-4xl font-extrabold uppercase tracking-tight mb-6">
                  {selectedItem.title}
                </h3>

                <p className="text-lg leading-relaxed text-slate-300">
                  {selectedItem.details}
                </p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}