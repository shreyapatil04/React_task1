import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Career<span>Craft</span></h2>

        <ul className="nav-links">
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
