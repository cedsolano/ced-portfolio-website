import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Ordered from bottom of page to top of page for accurate scroll-spy
      const sections = [
        { id: 'contact', key: 'contact' },
        { id: 'certificates', key: 'credentials' },
        { id: 'projects', key: 'work' },
        { id: 'experience', key: 'experience' },
        { id: 'skills', key: 'skills' },
        { id: 'about', key: 'about' },
      ];

      const triggerLine = 220;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerLine) {
            setActiveSection(sec.key);
            return;
          }
        }
      }
      setActiveSection('about');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio_theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio_theme', newTheme);
  };

  // Ordered in exact top-to-bottom scroll sequence
  const navLinks = [
    { name: 'About', href: '#about', key: 'about' },
    { name: 'Skills', href: '#skills', key: 'skills' },
    { name: 'Experience', href: '#experience', key: 'experience' },
    { name: 'Work', href: '#projects', key: 'work' },
    { name: 'Credentials', href: '#certificates', key: 'credentials' },
    { name: 'Contact', href: '#contact', key: 'contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        <div className="navbar-left">
          <div className="logo">
            <a href="#home" onClick={() => setActiveSection('about')}>
              <span className="brand-name">Cedric Mark Solano</span>
            </a>
          </div>
        </div>

        <div className="navbar-right">
          <ul className={`nav-links ${mobileActive ? 'mobile-active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeSection === link.key ? 'active' : ''}
                  onClick={() => {
                    setActiveSection(link.key);
                    setMobileActive(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>

          <div className="menu-toggle" onClick={() => setMobileActive(!mobileActive)}>
            {mobileActive ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
      {mobileActive && <div className="drawer-backdrop" onClick={() => setMobileActive(false)}></div>}
    </header>
  );
};

export default Navbar;
