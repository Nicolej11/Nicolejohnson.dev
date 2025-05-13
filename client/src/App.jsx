// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
};

export default App;

