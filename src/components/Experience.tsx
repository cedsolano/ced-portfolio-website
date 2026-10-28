import React, { useState, useEffect, useRef } from 'react';
import './Experience.css';

interface SubExperience {
  id: string;
  title: string;
  period: string;
  projectsList?: string[];
  paragraphs: string[];
}

interface ExperienceItem {
  navLabel: string;
  subNavLabel?: string;
  role: string;
  company: string;
  period: string;
  projectsLabel?: string;
  projectsList?: string[];
  paragraphs: string[];
  subExperience?: SubExperience;
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    navLabel: 'Octal Philippines',
    subNavLabel: 'Internship',
    role: 'Freelance Frontend Developer',
    company: 'Octal Philippines, Inc.',
    period: 'Jun 2026 - Oct 2026',
    projectsList: [
      'Time Management System (TMS)',
      'Human Resources Information System (HRIS)',
    ],
    paragraphs: [
      'Collaborated on the frontend development of enterprise web solutions—including a Time Management System (TMS) and a Human Resources Information System (HRIS)—using React.js, TypeScript, Vite, NestJS, and Tailwind CSS.',
      'Translated complex business and HR workflows into intuitive, responsive user interfaces for attendance tracking, employee records, scheduling, and administrative dashboards.',
      'Ensured component consistency, clean state management, and cross-device usability while validating system functionality for reliable real-world operation.',
    ],
    subExperience: {
      id: 'octal-internship',
      title: 'Internship',
      period: 'Feb 2026 - May 2026',
      projectsList: ['Bulacan Pickleball Center Reservation System'],
      paragraphs: [
        'Developed responsive and user-friendly interfaces for a multi-service court reservation and rental management system using TypeScript, React.js, Vite, and NestJS.',
        'Implemented interactive dashboards, court scheduling modules, booking workflows, and membership management features for the Bulacan Pickleball Center Reservation System in collaboration with cross-functional teams.',
        'Optimized frontend performance, usability, and system responsiveness through debugging, interface enhancements, and user experience improvements, resulting in smoother navigation and more efficient transaction processing.',
      ],
    },
    tags: ['React.js', 'TypeScript', 'Vite', 'NestJS', 'Tailwind CSS'],
  },
  {
    navLabel: 'Capstone Project',
    role: 'Project Manager / Quality Assurance',
    company: 'PUP Quezon City Branch',
    period: 'Mar 2025 - Feb 2026',
    projectsLabel: 'Project:',
    projectsList: ['Web-Based Online Ordering System (OOS)'],
    paragraphs: [
      'Led the development and implementation of a Web-based Online Ordering System (OOS) for Capstone, ensuring the successful completion of technical milestones, system requirements, and project deliverables.',
      'Coordinated with stakeholders and team members to resolve technical issues, align project objectives, and improve collaboration throughout the system development lifecycle.',
      'Managed Quality Assurance processes through manual testing, test case documentation, defect reporting, and system validation to support continuous improvement and overall application reliability.',
    ],
    tags: ['React.js', 'FastAPI', 'Python', 'MSSQL', 'Quality Assurance', 'Manual Testing'],
  },
  {
    navLabel: 'Undergraduate Thesis',
    role: 'Researcher',
    company: 'PUP Quezon City Branch',
    period: 'Oct 2024 - Dec 2025',
    projectsLabel: 'Research Title:',
    projectsList: ['QR Code-Based Framework for Kiosk Cash-In & Bill Payment Systems'],
    paragraphs: [
      'Conducted data gathering and user research involving 300+ respondents to identify key challenges in kiosk-based transaction systems and payment workflows.',
      'Developed a QR code-based framework to streamline cash-in and bill payment processes, improving transaction efficiency and user accessibility.',
      'Contributed to analyzing findings and improving system efficiency for a more reliable, user-friendly payment experience.',
    ],
    tags: ['User Research', 'System Validation', 'QR Workflows', 'UI/UX Design'],
  },
  {
    navLabel: 'PUPQC',
    role: 'BS in Information Technology',
    company: 'Polytechnic University of the Philippines Quezon City',
    period: 'Sep 2022 - Oct 2026',
    paragraphs: [
      'Graduated with a Bachelor of Science in Information Technology from PUP Quezon City, building a strong foundation in full-stack web development, software quality assurance, and database management.',
      'Built and validated multiple academic web platforms, working closely with peers across frontend architecture, backend integration, and end-to-end system testing.',
    ],
    tags: ['BSIT Graduate', 'Full Stack Development', 'Software QA', 'MySQL', 'Python'],
  },
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [subActive, setSubActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const internshipRef = useRef<HTMLDivElement>(null);
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const section = sectionRef.current;
      if (!section || window.innerWidth <= 768) return;

      const rect = section.getBoundingClientRect();
      const stickyOffset = 120;
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const scrolled = stickyOffset - rect.top;
      const progress = Math.max(0, Math.min(0.999, scrolled / totalScrollable));
      const nextIndex = Math.floor(progress * experiences.length);

      setActiveIndex((prev) => {
        if (prev !== nextIndex) {
          setSubActive(false);
        }
        return nextIndex;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInnerScroll = () => {
    const box = scrollBoxRef.current;
    if (!box) return;
    if (box.scrollTop > 120) {
      setSubActive(true);
    } else {
      setSubActive(false);
    }
  };

  const handleSelect = (index: number, scrollToSub = false) => {
    setActiveIndex(index);
    setSubActive(scrollToSub);

    setTimeout(() => {
      const box = scrollBoxRef.current;
      if (box) {
        if (scrollToSub && internshipRef.current) {
          box.scrollTo({
            top: internshipRef.current.offsetTop - 16,
            behavior: 'smooth',
          });
        } else {
          box.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 50);

    const section = sectionRef.current;
    if (!section || window.innerWidth <= 768) return;

    const sectionTop = section.offsetTop;
    const totalScrollable = section.offsetHeight - window.innerHeight;

    if (totalScrollable > 0) {
      isClickScrolling.current = true;
      if (clickTimeoutRef.current) {
        window.clearTimeout(clickTimeoutRef.current);
      }

      const targetScroll =
        sectionTop - 120 + (index / experiences.length) * totalScrollable + 20;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });

      clickTimeoutRef.current = window.setTimeout(() => {
        isClickScrolling.current = false;
      }, 650);
    }
  };

  const activeExp = experiences[activeIndex];

  return (
    <section id="experience" ref={sectionRef} className="section exp-scroll-section">
      <div className="exp-sticky-wrapper container">
        <div className="exp-header-block">
          <h2 className="exp-main-heading">Experience</h2>
        </div>

        {/* DESKTOP VIEW: Interactive Left Line Rail + Right Detail Panel */}
        <div className="exp-interactive-grid exp-desktop-only">
          <nav className="exp-nav-rail" aria-label="Experience timeline navigation">
            {experiences.map((exp, idx) => {
              const isActive = idx === activeIndex;
              return (
                <React.Fragment key={exp.navLabel}>
                  <button
                    type="button"
                    className={`exp-nav-item ${isActive && !subActive ? 'active' : ''}`}
                    onClick={() => handleSelect(idx, false)}
                  >
                    <span className="exp-nav-line" />
                    <span className="exp-nav-label">{exp.navLabel}</span>
                  </button>

                  {exp.subNavLabel && (
                    <button
                      type="button"
                      className={`exp-nav-item exp-nav-subitem ${isActive && subActive ? 'active' : ''}`}
                      onClick={() => handleSelect(idx, true)}
                    >
                      <span className="exp-nav-line" />
                      <span className="exp-nav-label">{exp.subNavLabel}</span>
                    </button>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          <div className="exp-detail-panel" key={activeIndex}>
            <div
              className="exp-scrollable-description"
              ref={scrollBoxRef}
              onScroll={handleInnerScroll}
            >
              <span className="exp-detail-period">{activeExp.period}</span>
              <h3 className="exp-detail-role">{activeExp.role}</h3>
              <p className="exp-detail-company">{activeExp.company}</p>

              {activeExp.projectsList && activeExp.projectsList.length > 0 && (
                <div className="exp-projects-box">
                  <span className="exp-projects-label">{activeExp.projectsLabel || 'Projects:'}</span>
                  <ul className="exp-projects-list">
                    {activeExp.projectsList.map((proj, pIdx) => (
                      <li key={pIdx}>{proj}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="exp-detail-paragraphs">
                {activeExp.paragraphs.map((para, i) => (
                  <p key={i} className="exp-detail-paragraph">
                    {para}
                  </p>
                ))}
              </div>

              {activeExp.subExperience && (
                <div ref={internshipRef} className="exp-subrole-section">
                  <div className="exp-subrole-divider">
                    <span className="exp-subrole-line" />
                    <span className="exp-subrole-badge">{activeExp.subExperience.title}</span>
                  </div>

                  <span className="exp-detail-period">{activeExp.subExperience.period}</span>
                  <h4 className="exp-subrole-heading">{activeExp.subExperience.title}</h4>

                  {activeExp.subExperience.projectsList && (
                    <div className="exp-projects-box">
                      <span className="exp-projects-label">Project:</span>
                      <ul className="exp-projects-list">
                        {activeExp.subExperience.projectsList.map((proj, pIdx) => (
                          <li key={pIdx}>{proj}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="exp-detail-paragraphs">
                    {activeExp.subExperience.paragraphs.map((para, i) => (
                      <p key={i} className="exp-detail-paragraph">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {activeExp.tags.length > 0 && (
              <div className="exp-detail-tags">
                {activeExp.tags.map((tag, i) => (
                  <span key={i} className="exp-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* MOBILE VIEW: Clean Vertically Scrollable List (No Line Navigation Rail) */}
        <div className="exp-mobile-list exp-mobile-only">
          {experiences.map((exp, idx) => (
            <article key={idx} className="exp-mobile-card">
              <span className="exp-detail-period">{exp.period}</span>
              <h3 className="exp-detail-role">{exp.role}</h3>
              <p className="exp-detail-company">{exp.company}</p>

              {exp.projectsList && exp.projectsList.length > 0 && (
                <div className="exp-projects-box">
                  <span className="exp-projects-label">{exp.projectsLabel || 'Projects:'}</span>
                  <ul className="exp-projects-list">
                    {exp.projectsList.map((proj, pIdx) => (
                      <li key={pIdx}>{proj}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="exp-detail-paragraphs">
                {exp.paragraphs.map((para, i) => (
                  <p key={i} className="exp-detail-paragraph">
                    {para}
                  </p>
                ))}
              </div>

              {exp.subExperience && (
                <div className="exp-subrole-section">
                  <div className="exp-subrole-divider">
                    <span className="exp-subrole-line" />
                    <span className="exp-subrole-badge">{exp.subExperience.title}</span>
                  </div>

                  <span className="exp-detail-period">{exp.subExperience.period}</span>
                  <h4 className="exp-subrole-heading">{exp.subExperience.title}</h4>

                  {exp.subExperience.projectsList && (
                    <div className="exp-projects-box">
                      <span className="exp-projects-label">Project:</span>
                      <ul className="exp-projects-list">
                        {exp.subExperience.projectsList.map((proj, pIdx) => (
                          <li key={pIdx}>{proj}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="exp-detail-paragraphs">
                    {exp.subExperience.paragraphs.map((para, i) => (
                      <p key={i} className="exp-detail-paragraph">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {exp.tags.length > 0 && (
                <div className="exp-detail-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="exp-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
