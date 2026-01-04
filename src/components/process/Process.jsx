import "./Process.css";

const steps = [
  {
    step: "01",
    title: "Requirement Analysis",
    text: "We understand your business goals and technical requirements.",
  },
  {
    step: "02",
    title: "Design & Planning",
    text: "We create wireframes and design systems before development.",
  },
  {
    step: "03",
    title: "Development",
    text: "Our team builds scalable and high-performance solutions.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    text: "We thoroughly test and deploy the solution for production.",
  },
];

const Process = () => {
  return (
    <section className="process">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <p className="section-subtitle">
          A structured and transparent workflow to ensure success.
        </p>

        <div className="process-grid">
          {steps.map((item, index) => (
            <div className="process-card" key={index}>
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
