import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'BorrowEase - Library Management System',
      role: 'FrontEnd Developer',
      description: 'A digital library management system developed to enable efficient book borrowing, tracking, and record management, helping maintain organized library transactions and borrower histories.',
      image: '/pic/borrow.PNG',
      link: 'https://github.com/cedsolano/LIBRARY-MANAGEMENT-SYSTEM',
      tech: [
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'Tkinter', icon: '' },
        { name: 'SQLite3', icon: 'devicon-sqlite-plain' },
      ],
    },
    {
      id: 2,
      title: 'TuklasPH Mobile App',
      role: 'Full Stack Developer',
      description: 'Designed to promote Filipino wisdom and accessible learning. The platform provides digital access to reading materials and supports an engaging user experience aligned with Sustainable Development Goal 4 (Quality Education).',
      image: '/pic/TuklasPH.jpg',
      link: 'https://app.flutterflow.io/share/tuklasph-uttwd6?page=onboardingPage',
      tech: [
        { name: 'FlutterFlow', icon: '' },
        { name: 'Firebase', icon: 'devicon-firebase-plain' },
      ],
    },
    {
      id: 3,
      title: 'Convert MO’TO – Finance Management System',
      role: 'FrontEnd Developer, Documentation Analyst',
      description: 'A finance management and currency conversion system featuring real-time exchange rate integration, designed to support accurate currency conversion and basic financial tracking.',
      image: '/pic/finance-management.png',
      link: 'https://github.com/HydroX04/exchange-system',
      tech: [
        { name: 'Laravel', icon: 'devicon-laravel-original' },
        { name: 'PHP', icon: 'devicon-php-plain' },
        { name: 'SQLite', icon: 'devicon-sqlite-plain' },
      ],
    },
    {
      id: 4,
      title: 'Online Ordering System',
      role: 'QA, Document Analyst, Project Manager',
      description: 'An online ordering system designed to streamline customer orders and improve café operations. Integrated with POS and IMS to ensure accurate processing and transaction management.',
      image: '/pic/oos.png',
      link: 'https://bleu-oos-rouge.vercel.app/',
      tech: [
        { name: 'ReactJS', icon: 'devicon-react-original' },
        { name: 'FastAPI', icon: 'devicon-python-plain' },
        { name: 'MS SQL', icon: 'devicon-microsoftsqlserver-plain' },
      ],
    },
    {
      id: 5,
      title: 'InspiroAI',
      role: 'Full Stack Developer',
      description: 'An AI-powered inspiration platform that generates creative essays and poems using artificial intelligence. Leverages modern frontend technologies and AI integration.',
      image: '/pic/InspiroAI.jpg',
      link: 'https://inspiroai.vercel.app/',
      tech: [
        { name: 'TypeScript', icon: 'devicon-typescript-plain' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
        { name: 'Gemini AI', icon: '' },
      ],
    },
    {
      id: 6,
      title: '7 EVELYN – Inventory Management System',
      role: 'FrontEnd Developer, Project Manager',
      description: 'An inventory management system for a sari-sari store designed to track products, manage stock levels, and support daily business operations.',
      image: '/pic/ims.png',
      link: 'https://github.com/HydroX04/IMSPUP',
      tech: [
        { name: 'C#', icon: 'devicon-csharp-plain' },
        { name: 'ASP.NET MVC', icon: '' },
        { name: 'MSSQL', icon: 'devicon-microsoftsqlserver-plain' },
      ],
    },
    {
      id: 7,
      title: 'ReserveEase – Hotel Management System',
      role: 'Frontend Developer',
      description: 'A comprehensive hotel reservation and management system that handles bookings, room assignments, and guest records, improving operational efficiency.',
      image: '/pic/hotel.PNG',
      link: 'https://github.com/HydroX04/ReserveEasev2',
      tech: [
        { name: 'WinForms', icon: 'devicon-dot-net-plain' },
        { name: 'SQLite', icon: 'devicon-sqlite-plain' },
      ],
    },
  ];

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <h2 className="section-main-title">Featured Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card glass">
            <a href={proj.link} target="_blank" rel="noreferrer" className="project-img-wrapper">
              <img src={proj.image} alt={proj.title} className="project-img" />
              <div className="project-overlay">
                <span>View Project</span>
              </div>
            </a>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <span className="role-tag">{proj.role}</span>
              <p>{proj.description}</p>
              <div className="tech-stack">
                {proj.tech.map((t) => (
                  <span key={t.name} className="tech-pill">
                    {t.icon && <i className={t.icon}></i>} {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
