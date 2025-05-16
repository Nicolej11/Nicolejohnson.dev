// Navbar.jsx
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link smooth to="/#home">Home</Link></li>
        <li><Link smooth to="/#about">About</Link></li>
        <li><Link smooth to="/#experience">Experience</Link></li>
        <li><Link smooth to="/#projects">Projects</Link></li>
        <li><Link smooth to="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
