import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://nicolejohnson.dev/api/contact', formData);
      setResponseMessage(response.data.message);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setResponseMessage('Failed to send the message. Please try again.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {responseMessage && (
        <p className={isSuccess ? 'success' : 'error'}>
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
