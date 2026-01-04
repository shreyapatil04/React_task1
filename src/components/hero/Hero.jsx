import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          Building Digital Solutions <br />
          That Grow Your Business
        </h1>
        <p>
          We deliver scalable web, mobile, and cloud solutions for startups
          and enterprises.
        </p>
        <div className="hero-buttons">
          <button onClick={() => document.getElementById("services").scrollIntoView({behavior:"smooth"})}>
            Our Services
          </button>
          <button onClick={() => document.getElementById("contact").scrollIntoView({behavior:"smooth"})}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
