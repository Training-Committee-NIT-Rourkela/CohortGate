import { AlignJustify as Hamburger } from "lucide-react";
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", url: "#" },
    { name: "About Us", url: "#" },
    { name: "Form", url: "#" },
    { name: "Contact", url: "#" },
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full mt-2">
        <nav className="fixed top-0 left-1/2 w-11/12 -translate-x-1/2 z-50 bg-white shadow-md py-2 mt-4 px-4 rounded-full border-b border-black">
          <div className="max-w-screen-xl flex items-center justify-between w-full p-2">

            {/* NITR Logo */}
            <div className="relative">
              <img src="/nitr-logo.png" alt="NITR Logo" className="h-12 w-12" />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-6">
              {links.map((link, index) => (
                <a key={index} href={link.url} className="relative text-gray-900 hover:scale-110 duration-300 group">
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Hamburger */}
            <div className="relative md:hidden">
              <Hamburger onClick={() => setIsOpen(!isOpen)} />
            </div>

          </div>

          {/* Mobile Nav Links */}
          <div className={`absolute top-22 left-0 w-full md:hidden transition-all duration-300 ease-in-out transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}>
            <ul className="flex flex-col items-center space-y-4 bg-white shadow-md border-b border-black py-4 px-4 rounded-lg">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="relative text-gray-900 hover:scale-110 duration-300 group">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </nav>
      </div>
    </>  
  );
}

export default NavBar;
