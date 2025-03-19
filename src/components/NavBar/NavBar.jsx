import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import Logo from "../../assets/NITRLOGO-.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="NIT Rourkela Logo" className="h-10" />
        </Link>

        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Form", path: "/form" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                  location.pathname === item.path
                    ? "font-semibold text-blue-600"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {menuOpen && (
          <ul className="absolute top-14 left-0 w-full bg-white dark:bg-gray-900 text-center shadow-md md:hidden">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Form", path: "/form" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li
                key={item.path}
                className="py-3 border-b border-gray-200 dark:border-gray-700"
              >
                <Link
                  to={item.path}
                  className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <button
          className="ml-4 text-gray-700 dark:text-white"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
