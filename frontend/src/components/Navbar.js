import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Mechanical Engineering Portal</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/benefits">Benefits</Link></li>
        <li><Link to="/future">Future Scope</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
