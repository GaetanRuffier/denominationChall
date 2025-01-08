import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChangeDenomination from './pages/ChangeDenomination';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/change-denomination">Change Denomination</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/change-denomination" element={<ChangeDenomination />} />
    </Routes>
  </Router>
);

export default App;
