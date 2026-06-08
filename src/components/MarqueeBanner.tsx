import React from 'react';
import './MarqueeBanner.css';

const WORDS_LEFT  = ['Create', 'Build', 'Design', 'Innovate', 'Evolve', 'Learn', 'Think', 'Develop', 'Adapt', 'Generate', 'Data', 'Analyze'];
const WORDS_RIGHT = ['Analyze', 'Data', 'Generate', 'Adapt', 'Develop', 'Think', 'Learn', 'Evolve', 'Innovate', 'Design', 'Build', 'Create'];

const MarqueeBanner: React.FC = () => (
  <div className="marquee-banner">
    {/* Row 1 — scrolls left */}
    <div className="marquee-track marquee-left">
      <div className="marquee-content">
        {[...WORDS_LEFT, ...WORDS_LEFT].map((word, i) => (
          <span key={i} className="marquee-item">
            {word}<span className="marquee-dot"> ·</span>
          </span>
        ))}
      </div>
    </div>

    {/* Row 2 — scrolls right */}
    <div className="marquee-track marquee-right">
      <div className="marquee-content">
        {[...WORDS_RIGHT, ...WORDS_RIGHT].map((word, i) => (
          <span key={i} className="marquee-item">
            {word}<span className="marquee-dot"> ·</span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default MarqueeBanner;
