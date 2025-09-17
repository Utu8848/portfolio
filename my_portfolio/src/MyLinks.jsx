import React from 'react';
import { NavLink } from 'react-router-dom';

const MyLinks = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/skills" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MyLinks;