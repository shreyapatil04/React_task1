import "./Services.css";

const servicesData = [
  {
    title: "Web Development",
    description:
      "We build fast, responsive, and scalable web applications using modern technologies.",
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance Android and iOS applications tailored to your business needs.",
  },
  {
    title: "UI / UX Design",
    description:
      "User-centric designs that enhance usability and create engaging digital experiences.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and scalable cloud infrastructure to support your growing applications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          <b>We offer a wide range of digital solutions to help businesses grow.</b>
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
