import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled glass' : ''}`}>
      <nav className="navbar container">
        <div className="navbar-left">
          <div className="logo">
            <a href="#home">
              <h1>&lt;cms/&gt;</h1>
            </a>
          </div>

        </div>

        <ul className={`nav-links ${mobileActive ? 'mobile-active glass' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMobileActive(false)}>{link.name}</a>
            </li>
          ))}
          <li className="mobile-only">
            <a href="#contact" className="nav-btn" onClick={() => setMobileActive(false)}>Contact Me</a>
          </li>
        </ul>

        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <a href="#contact" className="nav-btn desktop-only">Contact Me</a>
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
