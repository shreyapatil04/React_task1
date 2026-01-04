import "./Projects.css";

const projectsData = [
  {
    title: "E-Commerce Web App",
    description:
      "A full-stack e-commerce platform with product listings, cart, and checkout flow.",
    tech: "React, Node.js, MongoDB",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website with modern UI and smooth navigation.",
    tech: "React, CSS",
  },
  {
    title: "Internship Management System",
    description:
      "A web platform to manage internships, applications, and dashboards.",
    tech: "React, Spring Boot",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Some of the solutions we have built to help businesses and individuals.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
