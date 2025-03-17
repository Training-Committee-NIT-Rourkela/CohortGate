import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>NIT, Rourkela</div>
      <div className="flex items-center gap-4">
        <div>
          Home
        </div>
        <div>
          About Us
        </div>
        <div>
          Form
        </div>
        <div>
          Contact
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
