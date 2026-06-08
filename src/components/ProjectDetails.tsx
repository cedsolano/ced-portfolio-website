import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaStar } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import PixelBlast from './PixelBlast';
import './ProjectDetails.css';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(id || '0'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button className="back-btn" onClick={() => {
          navigate('/');
          setTimeout(() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }}>
          <FaArrowLeft /> Back to Projects
        </button>
      </div>
    );
  }

  // Determine if it's a github link or live demo based on url
  const isGithub = project.link.includes('github.com');

  return (
    <div className="project-details-page">
      {/* PixelBlast full-screen background */}
      <div className="pd-pixel-bg">
        <PixelBlast
          variant="square"
          color="#7c9cbf"
          pixelSize={6}
          patternScale={2}
          patternDensity={1.5}
          speed={0.25}
          pixelSizeJitter={0.2}
          enableRipples={true}
          rippleSpeed={0.25}
          rippleIntensityScale={1.5}
          rippleThickness={0.12}
          edgeFade={0.3}
          transparent={true}
        />
      </div>
      {/* Background elements */}
      <div className="bg-gradients">
        <div className="cloud-3"></div>
      </div>
      
      <div className="container">
        {/* Breadcrumb / Back button */}
        <div className="pd-header">
          <button className="back-btn glass-btn" onClick={() => {
            navigate('/');
            setTimeout(() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }}>
            <FaArrowLeft /> Back to Projects
          </button>
          <div className="pd-breadcrumbs">
            <span>Projects</span> <span className="separator">&gt;</span> <span className="active">{project.title}</span>
          </div>
        </div>

        {/* Title */}
        <div className="pd-title-section">
          <h1 className="pd-main-title">{project.title}</h1>
        </div>

        <div className="pd-content-grid">
          {/* Left Column */}
          <div className="pd-left">
            <div className="pd-description glass">
              <p>{project.description}</p>
            </div>

            <div className="pd-stats">
              <div className="pd-stat-box glass">
                <div className="stat-icon">&lt;/&gt;</div>
                <div className="stat-info">
                  <h3>{project.tech.length}</h3>
                  <p>Total Technology</p>
                </div>
              </div>
              <div className="pd-stat-box glass">
                <div className="stat-icon"><FaStar /></div>
                <div className="stat-info">
                  <h3>{project.features ? project.features.length : 0}</h3>
                  <p>Key Features</p>
                </div>
              </div>
            </div>

            <div className="pd-actions">
              {isGithub ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="pd-btn primary">
                  <FaGithub /> GitHub Repository
                </a>
              ) : (
                <a href={project.link} target="_blank" rel="noreferrer" className="pd-btn primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>

            <div className="pd-tech-section">
              <h3>&lt;/&gt; Technologies Used</h3>
              <div className="pd-tech-grid">
                {project.tech.map((t, idx) => (
                  <div key={idx} className="pd-tech-pill glass">
                    {t.icon && <i className={t.icon}></i>}
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="pd-right">
            <div className="pd-image-wrapper glass">
              <img src={project.image} alt={project.title} />
            </div>

            {project.features && project.features.length > 0 && (
              <div className="pd-features-box glass">
                <h3><FaStar className="feature-icon-star" /> Key Features</h3>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
