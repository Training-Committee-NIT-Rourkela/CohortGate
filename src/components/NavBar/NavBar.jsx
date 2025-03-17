import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; 
import logo from "/src/assets/images.png";  // Corrected Path
 // Importing the logo

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <img src={logo}  alt="NIT Rourkela Logo" className="logo-img" />
          <h1>NIT Rourkela</h1>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/form" onClick={() => setIsOpen(false)}>Form</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        {/* Dark Mode Toggle */}
        <button className="dark-mode-btn" onClick={toggleDarkMode}>
          {darkMode ? "🌞" : "🌙"}
        </button>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
