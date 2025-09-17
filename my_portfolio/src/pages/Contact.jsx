import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title fade-in">Get In Touch</h1>
        
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.8' }} className="fade-in">
          I'm always interested in hearing about new opportunities and projects. 
          Whether you have a question or just want to say hi, feel free to drop me a message!
        </p>
        
        <div className="contact-content fade-in">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Drop your message here!"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          
          <div className="contact-info">
            <h2 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Other Ways to Reach Me</h2>
            
            <div className="contact-item">
              <span>📧</span>
              <span>utsavrai66@gmail.com</span>
            </div>
            
            <div className="contact-item">
              <span>📞</span>
              <span>+977-9862707857</span>
            </div>
            
            <div className="contact-item">
              <span style={{display: "flex"}}><FaMapMarkerAlt></FaMapMarkerAlt></span>
              <span>Kathmandu, Nepal</span>
            </div>
            
            <div className="contact-item">
              <a 
                href="https://www.linkedin.com/in/utsav-rai" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2563eb', textDecoration: 'none' }}
              >
                <FaLinkedin size={20} color='#0A66C2' /> LinkedIn Profile
              </a>
            </div>
            
            <div className="contact-item">
              <a href="https://github.com/Utu8848" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>
                <FaGithub size={20} color='black'></FaGithub>GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;