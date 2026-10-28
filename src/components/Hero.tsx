import React, { useState, useEffect } from 'react';
import './Hero.css';

const rotatingPhrases = [
  'scalable web apps',
  'verified systems',
  'intuitive UI/UX',
  'bug-free releases',
  'smooth user flows',
  'reliable software',
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = rotatingPhrases[phraseIndex];
    let timeoutDuration = isDeleting ? 45 : 85;

    if (!isDeleting && text === currentPhrase) {
      timeoutDuration = 2200;
      const pauseTimer = setTimeout(() => setIsDeleting(true), timeoutDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setText(
        currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1))
      );
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-content container">
        <p className="hero-eyebrow">
          ASPIRING FULL STACK DEVELOPER &nbsp;&middot;&nbsp; QUALITY ASSURANCE
        </p>

        <h1 className="hero-heading">
          <span className="hero-line">
            I build{' '}
            <span className="hero-highlight">
              {text}
              <span className="hero-cursor">|</span>
            </span>
          </span>
          <span className="hero-line">that help teams ship faster.</span>
        </h1>

        <p className="hero-description">
          Bachelor of Science in Information Technology graduate from PUP Quezon City,
          dedicated to turning ideas into reliable, production-ready products.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn hero-btn-primary">
            See my work
          </a>
          <a href="#contact" className="hero-btn hero-btn-secondary">
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
