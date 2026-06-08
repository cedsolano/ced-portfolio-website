import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MarqueeBanner from './components/MarqueeBanner';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Handle scrolling to hash
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -60px 0px' }
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
        <MarqueeBanner />
        <Projects />
        <MarqueeBanner />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
