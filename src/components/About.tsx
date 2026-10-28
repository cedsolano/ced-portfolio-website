import React from 'react';
import './About.css';

const About: React.FC = () => {
  const techStack: {
    category: string;
    highlight?: boolean;
    skills: string[];
  }[] = [
    {
      category: 'FRONTEND',
      skills: ['React.js', 'TypeScript', 'Next.js', 'NestJS', 'jQuery', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'BACKEND',
      skills: ['Node.js', 'Python'],
    },
    {
      category: 'DATABASES',
      skills: ['MySQL', 'MSSQL', 'SQLite'],
    },
    {
      category: 'TOOLS AND DESIGN',
      skills: ['Canva', 'Trello', 'Figma', 'FlutterFlow', 'Jira'],
    },
    {
      category: 'CLOUD AND DEVOPS',
      skills: ['Git', 'GitHub', 'Docker'],
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="about-container container">
        <div className="about-header-block">
          <span className="section-label" style={{ display: 'block', marginBottom: '0.4rem', textAlign: 'left' }}>
            About
          </span>
          <h2 className="about-heading">Meet Cedric</h2>
        </div>

        <div className="about-editorial-grid">
          {/* Left Column: Editorial Paragraphs */}
          <div className="about-bio-column">
            <p className="about-paragraph">
              I am a BS Information Technology graduate from PUP Quezon City and an aspiring Full Stack Web Developer and Quality Assurance professional, with a strong focus on user interface development. I work with React, TypeScript, and Next.js to build scalable component systems, manage dynamic application states, and create responsive layouts that deliver seamless experiences across mobile and desktop devices.
            </p>

            <p className="about-paragraph">
              Throughout my freelance work, I have collaborated with clients on diverse projects, adapting to different requirements, translating ideas into functional web solutions, and delivering user-focused interfaces. During my internship, I contributed to the development of a pickleball court reservation and rental system, working on frontend implementation and UI/UX design. My academic projects and leadership experiences have also allowed me to collaborate with teams in building multi-service reservation platforms, online ordering systems, and QR-based payment workflows.
            </p>

            <p className="about-paragraph">
              These experiences have shaped my approach to development: combining clean, maintainable code, thoughtful UI/UX design, and disciplined quality assurance to build reliable, scalable, and user-friendly applications ready for real-world use.
            </p>
          </div>

          {/* Right Column: Minimalist Stats & Currently Focused On */}
          <aside className="about-sidebar">
            <div className="about-metrics-list">
              <div className="about-metric-item">
                <span className="about-metric-value">3+</span>
                <span className="about-metric-label">Years experience</span>
              </div>

              <div className="about-metric-item">
                <span className="about-metric-value">4+</span>
                <span className="about-metric-label">Featured projects</span>
              </div>

              <div className="about-metric-item">
                <span className="about-metric-value">15+</span>
                <span className="about-metric-label">Technologies</span>
              </div>
            </div>

            <div className="about-focus-box">
              <h4 className="about-focus-title">Currently focused on</h4>
              <ul className="about-focus-list">
                <li>Full-stack &amp; frontend web apps</li>
                <li>Responsive UI/UX development</li>
                <li>Manual &amp; functional QA testing</li>
                <li>System validation &amp; reliability</li>
              </ul>
            </div>
          </aside>
        </div>

        <hr className="about-divider" />

        <div id="skills" className="about-techstack-block" style={{ scrollMarginTop: '100px' }}>
          <h2 className="skills-main-heading">Skills</h2>
          <div className="skills-rows-container">
            {techStack.map((group, gIndex) => (
              <div
                key={gIndex}
                className={`skills-row ${group.highlight ? 'skills-row-highlight' : ''}`}
              >
                <div className="skills-category-col">
                  <span className="skills-category-label">{group.category}</span>
                </div>
                <div className="skills-pills-col">
                  {group.skills.map((skillName, sIndex) => (
                    <span key={sIndex} className="skill-pill">
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
