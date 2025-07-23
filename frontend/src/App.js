import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Benefits from './components/Benefits';
import FutureScope from './components/FutureScope';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/future" element={<FutureScope />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
