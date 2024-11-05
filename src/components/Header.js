import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Techible</div>
      <nav className="nav">
        <a href="#learn">Learn</a>
        <a href="#projects">Projects</a>
        <a href="#mentorship">Mentorship</a>
        <a href="#internships">Internships</a>
        <a href="#careers">Careers</a>
      </nav>
      <div className="user-icon">👤</div>
    </header>
  );
}

export default Header;
