import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/projects" element={<Projects></Projects>} />
      <Route path="/skills" element={<Skills></Skills>} />
      <Route path="/contact" element={<Contact></Contact>} />
    </Routes>
  );
};

export default MyRoutes;