import './Projects.css';

const Projects = () => {
  const projects = [
    { 
      name: 'Library Management System',
      link: 'https://heroic-faloodeh-f3be09.netlify.app/',
      description: 'A web-based system for managing library books, borrowing, and user activity.'
    },
  ];

  return (
    <section className="projects-section projects-bg">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

