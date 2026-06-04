import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="logo-box">
        <div className="logo-icon"><img src="src\assets\Logo.png" alt="Logo" /></div>
        <h2 className="logo-text">
          Uni <span>Explorer</span>
        </h2>
      </div>

      <ul className="nav-links">
        <li className="active">Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>

    </nav>
  );
}

export default Navbar;