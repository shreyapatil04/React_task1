import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>CareerCraft</h3>
        <p>© {new Date().getFullYear()} CareerCraft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
