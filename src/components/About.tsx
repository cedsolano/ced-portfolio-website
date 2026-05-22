import React from 'react';
import './About.css';
import { FaUserAstronaut, FaLaptopCode, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'Laravel', icon: 'devicon-laravel-original colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'MSSQL', icon: 'devicon-microsoftsqlserver-plain colored' },
    { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },
    { name: 'Docker', icon: 'devicon-docker-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Trello', icon: 'devicon-trello-plain colored' },
    { name: 'Figma', icon: 'devicon-figma-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'C', icon: 'devicon-c-plain colored' }
  ];

  return (
    <section id="about" className="section about-section container">
      <div className="section-header">
        <span className="section-label">About Me</span>
        <h2 className="section-main-title">Think. Build. Achieve.</h2>
      </div>
      <div className="about-flex">
        <div className="about-image-wrapper">
          <img src="/pic/SOLANO PHOTO.jpeg" alt="Cedric Mark Solano" className="about-image" />
          <div className="image-glow"></div>
        </div>
        
        <div className="about-content glass">
          <div className="about-text">
            <div className="about-card">
              <h3><FaUserAstronaut className="about-icon" /> Introduction</h3>
              <p>
                I am a fourth-year Information Technology student and an aspiring Quality Assurance professional with a strong interest in system validation and user-centered problem solving. Outside of academics, I enjoy playing basketball and watching anime and K-dramas.
              </p>
            </div>
            
            <div className="about-card">
              <h3><FaLaptopCode className="about-icon" /> Practical Experience</h3>
              <p>
                I have hands-on experience in frontend development and mobile application projects through academic coursework. As I progressed, I gained experience serving as a Project Manager and Quality Assurance member.
              </p>
            </div>
            
            <div className="about-card">
              <h3><FaRocket className="about-icon" /> Goals & Interests</h3>
              <p>
                I am dedicated to continuous learning and the ongoing improvement of my technical and communication skills, with a particular interest in Quality Assurance. I aim to contribute to creating reliable, user-focused systems while expanding my expertise in testing methodologies, process optimization, and ensuring software excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-wrapper glass">
        <div className="section-header" style={{ marginBottom: '2rem', textAlign: 'left' }}>
          <span className="section-label">Technologies and Skills</span>
          <h3 className="section-main-title">Tech Stack</h3>
        </div>
        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill.name} className="skill-card">
              <i className={`${skill.icon} skill-icon`}></i>
              <span>{skill.name}</span>
            </div>
          ))}
          <div className="skill-card">
            <img src="/pic/Fluterflow.png" alt="FlutterFlow" className="skill-img" />
            <span>FlutterFlow</span>
          </div>
          <div className="skill-card">
            <img src="/pic/canva.png" alt="Canva" className="skill-img" />
            <span>Canva</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
