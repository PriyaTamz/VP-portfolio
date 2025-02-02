import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const projects = [
    {
      name: 'Library Management System',
      link: 'https://heroic-faloodeh-f3be09.netlify.app/',
      description: 'A web-based system for managing library books, borrowing, and user activity.',
      frontend: 'https://github.com/PriyaTamz/Frontend_LMS',
      backend: 'https://github.com/PriyaTamz/Backend_LMS'
    },
    {
      name: 'TravelTales',
      link: 'https://travelstoryapp.netlify.app/',
      description: 'A web-based system for sharing, editing, and managing travel stories with user authentication.',
      frontend: 'https://github.com/PriyaTamz/travel-story-frontend',
      backend: 'https://github.com/PriyaTamz/travel-story-backend'
    },
    {
      name: 'QuickPoll',
      link: 'https://pollapplication.netlify.app/',
      description: 'A web-based system for creating, managing, and analyzing polls with user-controlled options.',
      frontend: 'https://github.com/PriyaTamz/polling-frontend',
      backend: 'https://github.com/PriyaTamz/polling-backend'
    },
    {
      name: 'RecipeShare',
      link: 'https://zingy-maamoul-a3e285.netlify.app/',
      description: 'A web-based system for creating, sharing, and managing recipes with user authentication.',
      frontend: 'https://github.com/PriyaTamz/recipe-sharing-platform-frontend',
      backend: 'https://github.com/PriyaTamz/recipe-sharing-platform'
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title text-center">Projects</h2>
      <div id="projectsCarousel" className="carousel slide">
        <div className="carousel-inner">
          {projects.map((project, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <div className="project-card">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                  {project.frontend && (
                    <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="github-link">
                      Frontend Code
                    </a>
                  )}
                  {project.backend && (
                    <a href={project.backend} target="_blank" rel="noopener noreferrer" className="github-link">
                      Backend Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
