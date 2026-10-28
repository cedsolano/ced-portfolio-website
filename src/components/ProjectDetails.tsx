import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import './ProjectDetails.css';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === parseInt(id || '0'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 250);
  };

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button className="pd-back-link" onClick={handleBack}>
          <FaArrowLeft /> Back to Work
        </button>
      </div>
    );
  }

  const isGithub = project.link.includes('github.com');

  return (
    <div className="project-details-page">
      <div className="container pd-container">
        {/* Minimalist Top Bar */}
        <div className="pd-top-nav">
          <button className="pd-back-link" onClick={handleBack}>
            <FaArrowLeft /> <span>Back to Work</span>
          </button>
        </div>

        {/* Editorial Header */}
        <header className="pd-editorial-header">
          <div className="pd-header-text">
            <span className="pd-role-eyebrow">{project.role}</span>
            <h1 className="pd-main-title">{project.title}</h1>
          </div>

          <div className="pd-header-action">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="pd-action-btn"
            >
              {isGithub ? (
                <>
                  <FaGithub /> <span>View Source</span>
                </>
              ) : (
                <>
                  <span>Visit Live Site</span> <FaExternalLinkAlt className="pd-ext-icon" />
                </>
              )}
            </a>
          </div>
        </header>

        {/* Project Image Showcase (Preserved) */}
        <div className="pd-image-showcase">
          <img src={project.image} alt={project.title} />
        </div>

        {/* Two-Column Editorial Content */}
        <div className="pd-editorial-grid">
          <div className="pd-main-column">
            <div className="pd-block">
              <h2 className="pd-section-label">Overview</h2>
              <p className="pd-overview-text">{project.description}</p>
            </div>

            {project.features && project.features.length > 0 && (
              <div className="pd-block">
                <h2 className="pd-section-label">Key Features</h2>
                <ul className="pd-features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="pd-feature-index">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="pd-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="pd-sidebar-column">
            <div className="pd-meta-group">
              <span className="pd-meta-label">Role</span>
              <p className="pd-meta-value">{project.role}</p>
            </div>

            <div className="pd-meta-group">
              <span className="pd-meta-label">Technologies</span>
              <div className="pd-tech-list">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="pd-tech-item">
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
