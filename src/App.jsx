import Navar from './components/Navar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Design from './components/Design';
import Gallery from './components/Gallery';
import CodeSnippets from './components/CodeSnippets';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Toolbar from './components/Toolbar';
import './App.css';
import Contact from './components/Contact';
import Loading from './components/Loading';

function App() {
  return (
    <div className="relative bg-slate-950 text-white font-sans overflow-x-hidden scroll-smooth ">
      <Loading />
      <CustomCursor />
      <ScrollProgress />
      <ParticlesBackground />
      <Navar />
      <Hero />
      <Skills />
      <Projects />
      <Tools />
      <Experience />
      <Resume />
      <Design />
      <Gallery />
      <CodeSnippets />
      <Testimonials />
      <Contact />
      <Footer />
      <Toolbar />
    </div>
  );
}

export default App;
