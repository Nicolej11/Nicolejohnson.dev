/*
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// Serve static files from React
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

// ✅ New API route for Vercel - Test Route
app.get('/api/contact', (req, res) => {
  res.status(200).json({ message: "API is working" });
});

// Serve static files from React
app.use(express.static(path.join(__dirname, '../client/build')));

// ❌ CATCH ALL should be LAST
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
