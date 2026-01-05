import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>
          Career<span>Craft</span>
        </h3>
        <p>© {new Date().getFullYear()} CareerCraft. All rights reserved.</p>
        <div className="footer-social">
          <a
            href="https://linkedin.com/in/sakshinaik23"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
