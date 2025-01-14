import jsLogo from './js.png';
import reactLogo from './reactjs.png';
import htmlLogo from './html5.png';
import cssLogo from './css.png';
import nodejsLogo from './nodejs.png';
import mongodbLogo from './mongodb.png';
import mysqlLogo from './mysql.png';
import gitLogo from './git.png';
import dockerLogo from './docker.png';
import postmanLogo from './postman.png';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills-bg skills-section">
      <h2 className="skills-heading">My Skills</h2>

      {/* Frontend Section */}
      <h3 className="skills-subheading">Frontend</h3>
      <div className="skills-group">
        <div className="skill-item">
          <img src={jsLogo} alt="JS Logo" className="logo-inside" />
          <p>Javascript - 75%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <img src={reactLogo} alt="React Logo" className="logo-inside" />
          <p>ReactJS - 75%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <img src={htmlLogo} alt="HTML Logo" className="logo-inside" />
          <p>HTML5 - 85%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '85%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <img src={cssLogo} alt="CSS Logo" className="logo-inside" />
          <p>CSS3 - 85%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>

      {/* Backend Section */}
      <h3 className="skills-subheading">Backend</h3>
      <div className="skills-group">
        <div className="skill-item">
          <img src={nodejsLogo} alt="NodeJS Logo" className="logo-inside" />
          <p>NodeJS - 75%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <img src={mongodbLogo} alt="MongoDB Logo" className="logo-inside" />
          <p>MongoDB - 75%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <img src={mysqlLogo} alt="MySQL Logo" className="logo-inside" />
          <p>MySQL - 65%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>

      {/* Tools & Others Section */}
      <h3 className="skills-subheading">Tools & Others</h3>
      <div className="skills-group">
        <div className="skill-item">
          <img src={gitLogo} alt="Git Logo" className="logo-inside" />
          <p>Git - 80%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <img src={dockerLogo} alt="Docker Logo" className="logo-inside" />
          <p>Docker - 75%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '75%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <img src={postmanLogo} alt="Postman Logo" className="logo-inside" />
          <p>Postman - 85%</p>
          <div className="progress-container">
            <div className="progress-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
