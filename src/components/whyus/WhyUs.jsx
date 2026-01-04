import "./WhyUs.css";

const reasons = [
  {
    title: "Experienced Team",
    text: "Our team consists of skilled professionals with hands-on industry experience.",
  },
  {
    title: "Client-Centric Approach",
    text: "We understand client needs and deliver customized digital solutions.",
  },
  {
    title: "Modern Technologies",
    text: "We use the latest tools and frameworks to build future-ready solutions.",
  },
  {
    title: "On-Time Delivery",
    text: "We follow agile processes to ensure timely and quality delivery.",
  },
];

const WhyUs = () => {
  return (
    <section className="whyus">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          We focus on delivering high-quality digital solutions that drive results.
        </p>

        <div className="whyus-grid">
          {reasons.map((item, index) => (
            <div className="whyus-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
