import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import './Projects.css';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="section container">
      {/* ── Premium 3D Floating Glass Spheres ── */}
      <div className="projects-3d-background">
        <div className="sphere sphere-1"></div>
        <div className="sphere sphere-2"></div>
        <div className="sphere sphere-3"></div>
        <div className="sphere sphere-4"></div>
        <div className="sphere sphere-5"></div>
        <div className="sphere sphere-6"></div>
        <div className="sphere sphere-7"></div>
        <div className="sphere sphere-8"></div>
        <div className="sphere sphere-9"></div>
        <div className="sphere sphere-10"></div>
        <div className="sphere sphere-11"></div>
        <div className="sphere sphere-12"></div>
      </div>
      <div className="section-header" style={{ textAlign: 'center' }}>
        <span className="section-label">Portfolio</span>
        <h2 className="section-main-title">Featured Projects</h2>
        <p className="section-description" style={{ margin: '1rem auto 0' }}>
          Here are some of my projects that show my skills and expertise in creating functional, modern, and user-centric applications.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((proj) => (
          <div key={proj.id} className="project-card glass" onClick={() => navigate(`/project/${proj.id}`)}>
            <div className="project-img-wrapper">
              <img src={proj.image} alt={proj.title} />
              <div className="project-overlay">
                <span>View Details</span>
              </div>
            </div>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p className="project-role">{proj.role}</p>
              <p className="project-desc-short">
                {proj.description.substring(0, 100)}...
              </p>
              <div className="project-tech-mini">
                {proj.tech.slice(0, 4).map((t, idx) => (
                  <span key={idx} className="tech-dot" title={t.name}>
                    {t.icon ? <i className={t.icon}></i> : t.name.charAt(0)}
                  </span>
                ))}
                {proj.tech.length > 4 && <span className="tech-dot more">+{proj.tech.length - 4}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
