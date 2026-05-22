import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="section container" style={{ position: 'relative' }}>
      <div className="edu-shape shape-1"></div>
      <div className="edu-shape shape-2"></div>
      <div className="edu-shape shape-3"></div>

      <h2 className="section-title">My <span>Education</span></h2>
      <div className="education-timeline">
        <div className="edu-item glass">
          <div className="edu-dot"></div>
          <div className="edu-content">
            <span className="edu-tag">College</span>
            <h3>Polytechnic University of the Philippines – Quezon City</h3>
            <p className="degree">Bachelor of Science in Information Technology</p>
            <p className="year">2022 — Present</p>
          </div>
        </div>

        <div className="edu-item glass">
          <div className="edu-dot"></div>
          <div className="edu-content">
            <span className="edu-tag">Senior High School</span>
            <h3>Commonwealth High School</h3>
            <p className="degree">Science, Technology, Engineering, and Mathematics (STEM)</p>
            <p className="year">2020 — 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
