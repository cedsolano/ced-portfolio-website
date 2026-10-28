import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section container projects-section">
      <div className="projects-header-block">
        <span className="section-label" style={{ textAlign: 'left' }}>Work</span>
        <h2 className="projects-main-heading">Selected Projects</h2>
      </div>

      <div className="projects-grid">
        {projectsData.map((proj) => (
          <article
            key={proj.id}
            className="project-card"
            onClick={() => navigate(`/project/${proj.id}`)}
          >
            <div className="project-img-wrapper">
              <img src={proj.image} alt={proj.title} />
            </div>

            <div className="project-info">
              <span className="project-role">{proj.role}</span>
              <h3>{proj.title}</h3>
              <p className="project-desc-short">
                {proj.description.length > 115
                  ? `${proj.description.substring(0, 115)}...`
                  : proj.description}
              </p>

              <div className="project-tech-mini">
                {proj.tech.slice(0, 4).map((t, idx) => (
                  <span key={idx} className="project-tech-tag">
                    {t.name}
                  </span>
                ))}
                {proj.tech.length > 4 && (
                  <span className="project-tech-tag more">
                    +{proj.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
