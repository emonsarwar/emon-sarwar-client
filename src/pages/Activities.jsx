import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const activitiesData = [
  {
    title: 'Cultural Secretary – MU CSE Society',
    organization: 'Metropolitan University CSE Society',
    period: '2024 – Present',
    description: 'Organized national-level university tech and cultural fest, managed events with 500+ participants.',
    achievements: [
      'Successfully organized Technovation 2024',
      'Led a team of 20 volunteers',
      'Coordinated with sponsors and guest speakers'
    ],
    tags: ['Leadership', 'Event Management'],
    link: '#'
  },
  {
    title: 'Campus Ambassador – ICT olimpics',
    organization: 'ICT olimpics',
    period: '2024 – present',
    description: 'Conducted workshops and promoted tech learning initiatives across multiple universities.',
    achievements: [
      'Reached 1000+ students through workshops',
      'Top 10 ambassador in quarterly performance',
      'Facilitated hands-on sessions on app development'
    ],
    tags: ['Workshops', 'Outreach'],
    link: '#'
  },
  {
    title: 'EXECUTIVE MEMBER',
    organization: 'Metropolitan Research Society',
    period: '2023 – Present',
    description: 'Involved in strategy and policy research discussions, contributed to policy briefs.',
    achievements: [
      'Co-authored a policy brief on digital education',
      'Participated in national-level policy dialogues'
    ],
    tags: ['Research', 'Policy'],
    link: '#'
  },
  {
    title: 'Disaster Response Volunteer – Sylhet Flood',
    organization: 'Voluntary Association',
    period: '2022-present',
    description: 'Participated in humanitarian flood response operations, distributed relief goods.',
    achievements: [
      'Assisted in relief distribution to 300+ families',
      'Coordinated with local NGOs for efficient response'
    ],
    tags: ['Volunteering', 'Relief'],
    link: '#'
  },
  // Add more activities as needed
];

const Activities = () => {
  return (
    <div className="min-h-screen bg-dark text-gray-200" id="activities">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/" className="inline-block text-sm text-purple border border-purple px-4 py-2 rounded hover:bg-purple hover:text-dark transition-colors">
            ← Back to Home
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-4">#activities</h1>
        <p className="text-gray-400 mb-12">A detailed look at my extracurricular and leadership experiences</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activitiesData.map((activity, idx) => (
            <div
              key={idx}
              className="border border-gray-700 p-6 hover:border-purple transition-colors group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-purple">{activity.title}</h3>
                <span className="text-sm text-gray-500">{activity.period}</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{activity.organization}</p>
              <p className="text-gray-300 mb-4">{activity.description}</p>

              {activity.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple mb-2">Key Achievements</h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {activity.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {activity.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs border border-gray-600 text-gray-300 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {activity.link && activity.link !== '#' && (
                <a
                  href={activity.link}
                  className="inline-block text-purple border border-purple px-4 py-2 text-sm hover:bg-purple hover:text-dark transition-colors"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
      {/* <Footer /> removed to avoid duplicate footer */}
    </div>
  );
};

export default Activities;
