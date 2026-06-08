import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { FaTimes, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Projects.css';

interface Tech {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  role: string;
  description: string;
  image: string;
  link: string;
  tech: Tech[];
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  const projects: Project[] = [
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

      <div className="projects-carousel">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {projects.map((proj) => (
            <SwiperSlide key={proj.id} onClick={() => setSelectedProject(proj)}>
              <div className="carousel-item glass">
                <img src={proj.image} alt={proj.title} />
                <div className="carousel-title-overlay">
                  <h3>{proj.title}</h3>
                  <p>Click for details</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FaChevronLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FaChevronRight />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-img-wrapper">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-img" />
            </div>
            <div className="modal-info">
              <h2>{selectedProject.title}</h2>
              <span className="role-tag">{selectedProject.role}</span>
              <p>{selectedProject.description}</p>
              <div className="tech-stack">
                {selectedProject.tech.map((t) => (
                  <span key={t.name} className="tech-pill">
                    {t.icon && <i className={t.icon}></i>} {t.name}
                  </span>
                ))}
              </div>
              <a href={selectedProject.link} target="_blank" rel="noreferrer" className="modal-btn">
                View Project <FaExternalLinkAlt style={{ marginLeft: '8px' }} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
