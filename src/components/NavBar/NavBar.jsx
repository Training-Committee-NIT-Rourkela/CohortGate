import { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/nitrkl-logo.png";
import "./navbar.css";
import "../../index.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Form", path: "/form" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="NIT Rourkela Logo" className="h-8 sm:h-10 w-auto mr-2" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-7">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 dark:hover:text-blue-400 transition ${
                  isActive ? "font-bold text-blue-700 dark:text-blue-300" : ""
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-lg cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "☀" : "🌙"}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? (
              <span className="text-l hover:scale-110 transition">✖</span>
            ) : (
              <span className="text-2xl hover:scale-110 transition">≡</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-900 absolute w-full left-0 shadow-lg py-3 space-y-2 transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            onClick={() => setIsOpen(false)}
            className="block py-3 px-4 rounded transition hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            <span className="inline-flex transform transition-transform origin-center hover:scale-105 hover:text-blue-700 dark:hover:text-blue-300">
              {name}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
