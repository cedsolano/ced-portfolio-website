import React, { useEffect, useRef } from 'react';
import './Experience.css';

interface ExperienceItem {
  tag: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    tag: 'Internship',
    role: 'Frontend Developer Intern',
    company: 'Octal Philippines, Inc.',
    location: 'Quezon City',
    period: 'February 2026 – May 2026',
    bullets: [
      'Developed responsive and user-friendly interfaces for a multi-service reservation and management system using TypeScript, React, Vite, and NestJS.',
      'Implemented interactive dashboards, scheduling modules, booking workflows, and membership management features for the Bulacan Pickleball Center Reservation System in collaboration with cross-functional teams.',
      'Optimized frontend performance, usability, and system responsiveness through debugging, interface enhancements, and user experience improvements, resulting in smoother navigation and more efficient transaction processing.',
    ],
  },
  {
    tag: 'Capstone Project',
    role: 'Project Manager / Quality Assurance',
    company: 'PUP Quezon City Branch',
    location: 'Quezon City',
    period: 'March 2025 – February 2026',
    bullets: [
      'Led the development and implementation of a Web-based Online Ordering System (OOS) for Capstone, ensuring the successful completion of technical milestones, system requirements, and project deliverables.',
      'Coordinated with stakeholders and team members to resolve technical issues, align project objectives, and improve collaboration throughout the system development lifecycle.',
      'Managed Quality Assurance processes through manual testing, test case documentation, defect reporting, and system validation to support continuous improvement and overall application reliability.',
    ],
  },
  {
    tag: 'Undergraduate Thesis',
    role: 'Researcher',
    company: 'PUP Quezon City Branch',
    location: 'Quezon City',
    period: 'October 2024 – December 2025',
    bullets: [
      'Conducted data gathering and user research involving 300+ respondents to identify key challenges in kiosk-based transaction systems and payment workflows.',
      'Developed a QR code-based framework to streamline cash-in and bill payment processes, improving transaction efficiency and user accessibility.',
      'Contributed to analyzing findings and improving system efficiency for a more user-friendly payment experience.',
    ],
  },
  {
    tag: 'Education',
    role: 'Bachelor of Science in Information Technology',
    company: 'Polytechnic University of the Philippines',
    location: 'Quezon City',
    period: 'September 2022 – October 2026',
    bullets: [],
  },
];

const Experience: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const line = lineRef.current;
    if (!timeline || !line) return;

    const items = timeline.querySelectorAll<HTMLElement>('.exp-item');
    const dots = timeline.querySelectorAll<HTMLElement>('.exp-dot');

    const handleScroll = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;

      // Calculate how far the "reveal point" (middle of viewport) has traveled into the timeline
      const revealPoint = windowHeight * 0.65;
      const progress = (revealPoint - timelineTop) / timelineHeight;
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Animate the glowing line height
      line.style.height = `${clampedProgress * 100}%`;

      // Reveal each item and dot when the line reaches them
      items.forEach((item, index) => {
        const dot = dots[index];
        const itemRect = item.getBoundingClientRect();
        const itemMiddle = itemRect.top + itemRect.height / 3;

        if (itemMiddle < windowHeight * 0.75) {
          item.classList.add('exp-visible');
          dot?.classList.add('dot-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="section container" style={{ position: 'relative' }}>
      {/* ── Premium 3D Animated Smoke & Fog Background ── */}
      <div className="experience-smoke-background">
        <div className="smoke-puff smoke-puff-1"></div>
        <div className="smoke-puff smoke-puff-2"></div>
        <div className="smoke-puff smoke-puff-3"></div>
        <div className="smoke-puff smoke-puff-4"></div>
        <div className="smoke-puff smoke-puff-5"></div>
      </div>

      <div className="section-header">
        <span className="section-label">Timeline</span>
        <h2 className="section-main-title">My Experience</h2>
      </div>

      <div className="experience-timeline" ref={timelineRef}>
        {/* Background track line */}
        <div className="timeline-track"></div>
        {/* Animated glowing progress line */}
        <div className="timeline-progress" ref={lineRef}></div>

        {experiences.map((exp, index) => (
          <div className="exp-item glass" key={index}>
            <div className="exp-dot">
              <div className="dot-ring"></div>
              <div className="dot-core"></div>
              <div className="dot-glow"></div>
            </div>
            <div className="exp-content">
              <span className="exp-tag">{exp.tag}</span>
              <h3>{exp.role}</h3>
              <p className="exp-company">{exp.company} — {exp.location}</p>
              <p className="exp-period">{exp.period}</p>
              {exp.bullets.length > 0 && (
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
