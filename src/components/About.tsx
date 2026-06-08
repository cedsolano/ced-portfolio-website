import React, { useState, useEffect } from 'react';
import './About.css';

const About: React.FC = () => {
  const techStack = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
        { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
      ],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'C', icon: 'devicon-c-plain colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-plain colored' },
      ],
    },
    {
      category: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
        { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },
      ],
    },
    {
      category: 'Tools & Design',
      icon: '🛠️',
      skills: [
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Git', icon: 'devicon-git-plain colored' },
        { name: 'GitHub', icon: 'devicon-github-original colored' },
        { name: 'Trello', icon: 'devicon-trello-plain colored' },
        { name: 'Figma', icon: 'devicon-figma-plain colored' },
        { name: 'FlutterFlow', img: '/pic/Fluterflow.png' },
        { name: 'Canva', img: '/pic/canva.png' },
      ],
    },
  ];
  const typewriterWords = [
    "An Aspiring Quality Assurance Engineer.",
    "A Frontend Developer.",
    "A Creator.",
    "A Learner.",
    "A Dreamer.",
    "A Baller."
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && text === currentWord) {
      typeSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typeSpeed);
      return;
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typewriterWords.length);
      typeSpeed = 500;
    }

    const timer = setTimeout(() => {
      setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="about" className="section about-section">
      <div className="about-container container">
        
        {/* Left Column: Text, Skills, Experience */}
        <div className="about-left">
          <span className="section-label" style={{ display: 'block', marginBottom: '0.5rem' }}>About Me</span>
          <h2 className="about-heading">Meet Cedric</h2>
          <p className="about-description">
            I am a fourth-year graduating Information Technology student and an aspiring Quality Assurance professional and Front-End Developer based in Quezon City. I specialize in system validation, frontend development, and user-centered problem-solving, combining technical expertise with a strong commitment to software quality and usability. Throughout my academic and internship experiences, I have worked on various projects involving the development of modern, responsive web applications, software testing, and system improvement initiatives. I am passionate about creating intuitive digital experiences, identifying areas for enhancement, and contributing to the delivery of reliable, high-quality software solutions.
          </p>

          <hr className="about-divider" />

          <h3 className="techstack-heading">Tech Stack</h3>
          <div className="techstack-container">
            {techStack.map((group, gIndex) => (
              <div key={gIndex} className="techstack-category-group">
                <div className="techstack-row-label">
                  <span className="techstack-label-text">{group.category}</span>
                </div>
                <div className="techstack-marquee-wrapper">
                  <div className={`techstack-marquee-track ${gIndex % 2 === 0 ? 'scroll-left' : 'scroll-right'}`}>
                    {[...group.skills, ...group.skills, ...group.skills].map((skill, sIndex) => (
                      <div key={sIndex} className="skill-card">
                        <div className="skill-icon-wrapper">
                          {skill.icon ? (
                            <i className={skill.icon}></i>
                          ) : (
                            <img src={skill.img} alt={skill.name} className="skill-img" />
                          )}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Large Portrait & Dynamic Info */}
        <div className="about-right">
          <img src="/pic/SOLANO PHOTO.jpeg" alt="Cedric Mark Solano" className="about-portrait" />
          
          <div className="about-dynamic-section">
            <h3 className="about-typewriter">
              {text}<span className="cursor">|</span>
            </h3>
            
            <div className="about-stats-grid">
              <div className="stat-card">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">Focus</span>
                <span className="stat-label">Code. Create. Innovate.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

