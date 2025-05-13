// About.jsx
import React, {useEffect} from 'react';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  
    return (
        <div className="about-container" id="about">
        <h2>About Me</h2>
        <p>
          I'm Nicole, I'm Nicole, a recent Cum Laude graduate from Florida State University with a Bachelor's degree in 
          Computer Science. As a dedicated innovator, I'm thrilled to begin my career and dive deeper into the world of technology. 
        </p>
        <p>
          I have experience in full-stack development, data analytics, artificial intelligence, machine learning, and API integration. 
          My focus is on creating technology that not only solves problems but also enhances everyday interactions. 
          I'm particularly passionate about data science—gathering and cleaning data to train machine learning models that can drive smart decision-making. 
          Using statistical analysis and Python libraries, I evaluate model performance, identify areas for refinement, and ensure the data is optimized for accurate predictions. 
          I'm fascinated by how AI is transforming traditional software engineering, and I'm eager to be part of that change.
          When I'm not coding, you can find me exploring hiking trails, relaxing at the beach, or spending time with my cat, Pumpkin. 
          I'm always eager to learn new technologies, explore innovative ideas, and connect with others who share my passion for tech.

        </p>
      </div>
    );
  };
  
  export default About;