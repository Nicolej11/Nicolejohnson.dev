// Home.jsx
import React from 'react';
import './home.css';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Experience from '../components/experience';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
