// Import Dependencies
/*
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

// @route   GET /api/contact/test
// @desc    Test Route
// @access  Public
router.get('/test', (req, res) => {
  res.json({ message: "Contact route is working!" });
});

// @route   POST /api/contact
// @desc    Send an email from the contact form
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Set up the transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });

  } catch (error) {
    console.error('Error Sending Message:', error.message);
    res.status(500).json({ error: 'Failed to send the message.' });
  }
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;

