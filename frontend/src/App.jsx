import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import Resume from './components/Resume';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <ProblemSolving />
        <Resume />
        <Contact />
      </main>
      <footer className="footer" style={{ backgroundColor: '#050505', borderTop: 'none', padding: '3rem 0', color: '#666', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} Girish Garg. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
