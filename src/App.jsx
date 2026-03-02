import Navbar from './components/Navbar';
import ActivitiesSection from './components/ActivitiesPage';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Design from './components/Design';
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

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-slate-950 text-white font-sans overflow-x-hidden scroll-smooth ">
        <Loading />
        <CustomCursor />
        <ScrollProgress />
        <ParticlesBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Projects />
              <Tools />
              <Experience />
              <ActivitiesSection />
              <Resume />
              <Design />
              <CodeSnippets />
              <Testimonials />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
        <Toolbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
