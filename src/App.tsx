import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('section');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="bg-gradients">
        <div className="cloud-3"></div>
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
