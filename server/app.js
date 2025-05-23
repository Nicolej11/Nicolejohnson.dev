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

app.get('/api/contact/test', (req, res) => {
  res.json({ message: 'Contact API is working!' });
});


// Import routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes); // This is important

// Serve static files from React
app.use(express.static(path.join(__dirname, '../client/build')));

//  Fallback to React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
