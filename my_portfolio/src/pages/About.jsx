import React from 'react';

const About = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">About Me</h1>
        
        <div className="about-content fade-in">
          <div>
            <img 
              src="./image.jpeg" 
              alt="Profile" 
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h2>Hello, I'm Utsav Rai</h2>
            <p>
              I’m a passionate Computer Science with AI student, driven by curiosity to understand how technology and intelligence come together to shape the world. What began as an interest in problem-solving and technology has grown into a journey of learning programming, machine learning, artificial intelligence, and data-driven innovation.
            </p>
            <p>
              I enjoy working with tools like Python, Pandas, and machine learning libraries, while constantly exploring new concepts in computer science and AI. Beyond coding, I spend time learning from research, experimenting with projects, and keeping up with the latest trends in technology.
            </p>
            <p>
              My goal is to apply computer science and AI to create solutions that make a real impact. I believe in continuous learning, critical thinking, and building projects that are not only innovative but also practical and meaningful.
            </p>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem' }} className="fade-in">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#1e293b' }}>My Journey</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="project-card">
              <h3>🎓 Education</h3>
              <p>Pursuing BSc. (Hons) Computer Science with Artificial Intelligence at Birmingham City University. Focused on developing knowledge in programming, algorithms, machine learning, artificial intelligence, and software development.</p>
            </div>
            <div className="project-card">
              <h3>💼 Professional Experience</h3>
              <p>Currently gaining academic experience and building practical knowledge through university coursework and personal projects in computer science and artificial intelligence.</p>
            </div>
            <div className="project-card">
              <h3>🚀 Continuous Learning</h3>
              <p>Actively exploring new trends in artificial intelligence, data science, and computer science. Committed to expanding skills through academic studies, self-learning, and hands-on projects.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;