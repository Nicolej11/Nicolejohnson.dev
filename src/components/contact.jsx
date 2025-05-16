// Contact.jsx
import React from 'react';
import './contact.css';
import { FaLinkedin } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <p>Let's get in touch! Fill out the form below or reach out to me on LinkedIn.</p>
      
      {/* Contact Form */}
      <ContactForm />

      {/* LinkedIn Link */}
      <div className="social-links">
      <a href="https://www.linkedin.com/in/nicoletjohnson/" className="linkedin-link">
          <FaLinkedin style={{ marginRight: "5px" }} />
          Connect with me on LinkedIn
      </a>
      </div>
    </div>
  );
};

export default Contact;
