import { AlignJustify } from "lucide-react";
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-full w-full mt-2">
        <nav className="fixed top-0 left-1/2 w-11/12 -translate-x-1/2 z-50 bg-amber-200 shadow-md py-2 mt-4 px-4 rounded-full">
          <div className="max-w-screen-xl flex items-center justify-between w-full p-2">

            {/* NITR Logo */}
            <div className="relative">
              <img src="/nitr-logo.png" alt="NITR Logo" className="h-12 w-12" />
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-900">Home</a>
              <a href="#" className="text-gray-900">About</a>
              <a href="#" className="text-gray-900">Contact</a>
            </div>

            {/* Hamburger */}
            <div className="relative md:hidden">
              <AlignJustify onClick={() => setIsOpen(!isOpen)} />
            </div>

          </div>

          {/* Mobile Nav Links */}
          {isOpen && (
            <div className="absolute top-22 left-0 w-full md:hidden">
              <ul className="flex flex-col items-center space-y-4 bg-amber-100 py-4 px-4 rounded-lg">
                <li>
                  <a href="#" className="text-gray-900">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-900">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-900">Contact</a>
                </li>
              </ul>
            </div>
          )}

        </nav>
      </div>
    </>  
  );
}

export default NavBar;
