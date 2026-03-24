import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className="app-container" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.8s ease' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <ProblemSolving />
          <Certificates />
          <Resume />
          <Contact />
        </main>
        <footer className="footer" style={{ backgroundColor: '#050505', borderTop: 'none', padding: '3rem 0', color: '#666', fontSize: '0.85rem' }}>
          <p>&copy; {new Date().getFullYear()} Girish Garg. Built with React.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
