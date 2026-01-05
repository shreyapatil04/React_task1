import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Career<span>Craft</span></h2>

        
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <button className="nav-btn" onClick={() => scrollToSection("contact")}>
          Let’s Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
