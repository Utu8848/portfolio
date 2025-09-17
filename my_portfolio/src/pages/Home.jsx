import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">Utsav Rai</h1>
          <p className="hero-subtitle fade-in">Computer Science with AI Student</p>
          <p className="hero-description fade-in">
            Passionate about exploring the intersection of computer science and artificial intelligence. Focused on developing skills in programming, machine learning, and data-driven innovation to create intelligent solutions and meaningful insights for real-world problems.
          </p>
          <Link to="/projects" className="cta-button fade-in">
            View My Work
          </Link>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="about-preview">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem', color: '#1e293b' }}>
              Welcome to My Portfolio
            </h2>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#64748b', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
              I’m a passionate Computer Science with AI student, eager to learn and grow in the fields of programming, machine learning, and artificial intelligence. I enjoy exploring data-driven solutions, building intelligent models, and applying computer science concepts to solve real-world challenges. Take a look around to see some of my projects and the skills I’m developing along the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;