import "./CTA.css";

const CTA = () => {
  return (
    <section id="contact" className="cta">
      <div className="cta-content">
        <h2>Ready to Build Your Next Digital Product?</h2>
        <p>
          Let’s work together to create scalable and impactful solutions for
          your business.
        </p>
        <button onClick={() => alert("Contact form coming soon!")}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;
