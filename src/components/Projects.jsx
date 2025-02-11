import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const projects = [
    {
      name: 'Library Management System',
      link: 'https://heroic-faloodeh-f3be09.netlify.app/',
      description: 'A web-based system for managing library books, borrowing, and user activity.',
      frontend: 'https://github.com/PriyaTamz/Frontend_LMS',
      backend: 'https://github.com/PriyaTamz/lms-backend',
      techStack: 'HTML, CSS, JavaScript, Node.js, MongoDB, Express.js'
    },
    {
      name: 'TravelTales',
      link: 'https://travelstoryapp.netlify.app/',
      description: 'A web-based system for sharing, editing, and managing travel stories with user authentication.',
      frontend: 'https://github.com/PriyaTamz/travel-story-frontend',
      backend: 'https://github.com/PriyaTamz/travel-story-backend',
      techStack: 'React.js, Node.js, MongoDB, Express.js, JWT Authentication'
    },
    {
      name: 'QuickPoll',
      link: 'https://pollapplication.netlify.app/',
      description: 'A web-based system for creating, managing, and analyzing polls with user-controlled options.',
      frontend: 'https://github.com/PriyaTamz/polling-frontend',
      backend: 'https://github.com/PriyaTamz/polling-backend',
      techStack: 'React.js, Node.js, Express.js, MongoDB'
    },
    {
      name: 'RecipeShare',
      link: 'https://zingy-maamoul-a3e285.netlify.app/',
      description: 'A web-based system for creating, sharing, and managing recipes with user authentication.',
      frontend: 'https://github.com/PriyaTamz/recipe-sharing-platform-frontend',
      backend: 'https://github.com/PriyaTamz/recipe-sharing-platform',
      techStack: 'React.js, Node.js, Express.js, MongoDB, JWT Authentication'
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title text-center">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 project-card">
              <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">{project.description}</p>
                <p className="card-techStack"><strong>Tech Stack: </strong>{project.techStack}</p>
                <div className="d-flex flex-row">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link mb-2">
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
