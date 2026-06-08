import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      {/* Animated smoke background */}
      <div className="smoke-bg">
        <div className="smoke smoke-1"></div>
        <div className="smoke smoke-2"></div>
        <div className="smoke smoke-3"></div>
        <div className="smoke smoke-4"></div>
      </div>

      <div className="hero-content container">
        {/* Top Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Open to Work
        </div>

        <h1 className="hero-heading">
          Hello, I'm <br /> Cedric Solano
        </h1>

        <p className="hero-description">
          A fourth-year BS Information Technology student at PUP Quezon City, eager to learn <br className="hidden-mobile" />
          while building reliable systems and ensuring software quality.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Get Started Now</a>
          <a href="#projects" className="btn btn-secondary">See Projects</a>
        </div>
      </div>

      <div className="hero-bottom-bar">
        <span className="scroll-text">Scroll down</span>
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
        <span className="scroll-text">to see projects</span>
      </div>
    </section>
  );
};

export default Hero;
