import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for toggle menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo/Brand Name */}
        <Link to="/" className="text-xl font-bold">CohortGate</Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul className={`md:flex md:items-center md:space-x-6 absolute md:relative bg-gray-900 w-full md:w-auto left-0 md:flex-row flex-col text-center transition-all duration-300 ease-in ${isOpen ? "top-16" : "top-[-400px]"}`}>
          <li><Link to="/" className="block py-2 px-4 hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="block py-2 px-4 hover:text-gray-400">About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

