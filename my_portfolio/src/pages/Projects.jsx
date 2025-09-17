import React from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "🛒 E-Commerce Platform (Static Website)",
      description: "A static 5-page e-commerce website designed in Figma and built with HTML and CSS. Features include a product catalog, category pages, and a shopping cart layout, with a responsive and user-friendly interface to simulate an online shopping experience.",
      technologies: ["HTML5", "CSS3", "Figma"],
      github: "https://github.com/Utu8848/monarch-menswear-website",
      demo: "https://drive.google.com/file/d/1_gQy41Poi64m29KvvbAZ7hccFnJtW5WB/view?usp=sharing"
    },
    {
      title: "🌱 Smart Garden System (Prototype)",
      description: "A Tinkercad prototype using Arduino Uno and sensors to monitor temperature, humidity, soil moisture, and light. Features automated watering, pest detection, and light tracking to optimize plant care, demonstrating IoT-based smart gardening.",
      technologies: ["Tinkercad", "C++"],
      github: "https://github.com/Utu8848/iot-smart-garden",
    },
    {
      title: "🏥 Hospital Management System (Python)",
      description: "A Python-based console application to manage hospital operations. Features include patient record management, doctor scheduling, appointment tracking, and billing. Data is stored and managed using text files with Python's file handling.",
      technologies: ["Python"],
      github: "https://github.com/Utu8848/hospital-management-system",
      demo: "https://www.youtube.com/watch?v=6aeKdWtUS3E"
    },
    {
      title: "$ Unveiling Patterns in Medical Premiums: A Random Forest Study",
      description: "A Python-based exploratory analysis using Random Forest to identify patterns and factors influencing medical insurance premiums. The project includes data preprocessing, feature analysis, and predictive modeling to provide insights into premium determinants.",
      technologies: ["Python", "Pandas", "Numpy", "Scikit-learn", "SciPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/Utu8848/Unveiling-Patterns-in-Medical-Premiums-A-Random-Forest-Study",
    },
    {
      title: "🖥️ TraceOn – A Work Monitoring System",
      description: "TraceOn is an MVP for remote workforce monitoring that balances accountability with privacy. It captures screenshots at intervals or based on activity, uses OCR to filter sensitive data, and provides managers a secure web dashboard with organized screenshots stored on Google Drive.",
      technologies: ["Python", "Flask", "Tkinter", "SQLite", "Tesseract OCR", "HTML5", "CSS3", "Javascript", "Google Drive API", "Figma"],
      github: "https://github.com/Utu8848/TraceOn-Work-Monitoring-System",
      demo: "https://www.youtube.com/watch?v=6dVB4X0S9Oc"
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">My Projects</h1>
        
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#64748b', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }} className="fade-in">
          Here are some of the projects I've worked on recently. Each project represents a unique challenge 
          and demonstrates different aspects of my technical skills and problem-solving abilities.
        </p>
        
        <div className="projects-grid fade-in">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub></FaGithub>GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaPlay></FaPlay>Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;