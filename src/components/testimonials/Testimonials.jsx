import "./Testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Startup Founder",
    feedback:
      "The team delivered a clean, scalable solution that exceeded our expectations.",
  },
  {
    name: "Ananya Patel",
    role: "Product Manager",
    feedback:
      "Professional approach, great communication, and timely delivery.",
  },
  {
    name: "Amit Verma",
    role: "Business Owner",
    feedback:
      "Their technical expertise helped us launch our product faster.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Trusted by startups and businesses worldwide.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="feedback">“{item.feedback}”</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
