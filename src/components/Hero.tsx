import React, { useState, useEffect, useCallback } from 'react';
import './Hero.css';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const roles = [
  'An Aspiring Quality Assurance Engineer',
  'A Frontend Developer',
  'A Learner',
  'A Creator',
  'A Dreamer',
];

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 70;
  const deleteSpeed = 40;
  const pauseAfterType = 2000;
  const pauseAfterDelete = 400;

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      // Typing forward
      const nextText = currentRole.substring(0, displayText.length + 1);
      setDisplayText(nextText);

      if (nextText === currentRole) {
        // Finished typing — pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseAfterType);
        return;
      }
    } else {
      // Deleting
      const nextText = currentRole.substring(0, displayText.length - 1);
      setDisplayText(nextText);

      if (nextText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTimeout(() => {}, pauseAfterDelete);
        return;
      }
    }
  }, [displayText, roleIndex, isDeleting]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        {/* Open to Work badge */}
        <div className="open-to-work">
          <span className="otw-dot"></span>
          Open to Work
        </div>

        <h2 className="hero-greeting">Hello, I'm <span className="shimmer-text">Cedric Solano</span></h2>
        <p className="hero-subtitle">
          A fourth-year BS Information Technology student at PUP Quezon City, eager to learn while building reliable systems and ensuring software quality.
        </p>

        {/* Typewriter */}
        <div className="typewriter-wrapper">
          <span className="typewriter-text heading-gradient">{displayText}</span>
          <span className="typewriter-cursor">|</span>
        </div>
        
        <div className="social-links">
          <a href="mailto:ced.solano22@gmail.com" className="social-icon" title="Email Me"><FaEnvelope /></a>
          <a href="https://github.com/cedsolano" target="_blank" rel="noreferrer" className="social-icon" title="GitHub"><FaGithub /></a>
          <a href="https://linkedin.com/in/cedric-mark-solano-6309122b9" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Gallery Carousel outside hero-content to span wider */}
      <div className="gallery-container">
        <div className="gallery-track">
          {/* Using index as key is fine here since it's static, duplicating to create infinite scroll effect */}
          {[11, 22, 33, 44, 66, 77, 88, 11, 22, 33, 44, 66, 77, 88].map((num, i) => (
            <img key={i} src={`/pic/${num}.jpg`} alt={`Gallery item ${num}`} className="gallery-img" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
