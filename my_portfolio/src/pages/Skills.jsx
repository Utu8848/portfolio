import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend Development", 
      skills: ["Node.js", "Python","Flask", "FastAPI"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["Google Cloud", "Docker", "GitHub Actions"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "TinkerCad", "Figma", "Canva", "Zotero"]
    },
    {
      category: "Soft Skills",
      skills: ["Documentation", "Presentation"]
    }
  ];

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">My Skills</h1>
        
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#64748b', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: '1.8' }} className="fade-in">
          Here are the technologies and tools I work with. I'm always learning and expanding my skill set 
          to stay current with the latest developments in web development and software engineering.
        </p>
        
        <div className="skills-grid fade-in">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '4rem', textAlign: 'center' }} className="fade-in">
          <h2 style={{ marginBottom: '2rem', color: '#1e293b' }}>Experience Level</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <div className="project-card" style={{ textAlign: 'center' }}>
              <h3 style={{ color: '#059669' }}>Basic</h3>
              <p>React, JavaScript, HTML5, CSS3, Node.js, Python, Flask, FastAPI, Google Cloud, Docker, GitHub Actions, Git, GitHub, VS Code, TinkerCad, Figma, Canva, Zotero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;