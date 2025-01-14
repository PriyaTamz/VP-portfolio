import { useState } from 'react';
import './WorkExpereince.css';

const WorkExperience = () => {
  const [activeSection, setActiveSection] = useState('experience');

  return (
    <section id="work-bg work-education">
      <div className="toggle-buttons">
        <button
          className={activeSection === 'experience' ? 'active' : ''}
          onClick={() => setActiveSection('experience')}
        >
          Experience
        </button>
        <button
          className={activeSection === 'education' ? 'active' : ''}
          onClick={() => setActiveSection('education')}
        >
          Education
        </button>
      </div>
      <div className="content-wrapper">
        <div className={`work-content ${activeSection === 'experience' ? 'left' : ''}`}>
          {activeSection === 'experience' && (
            <div id="work-experience">
              <ul>
                <li>
                  <h3>Embedded Engineer Intern - AERQ, Hamburg, Germany</h3>
                  <p>March 2022 - December 2022</p>
                  <ul>
                    <li>
                      Developed and tested software for In-Flight Entertainment (IFE) systems, including stress-testing SD cards and SSDs using <em>stress-ng</em> with custom Yocto images.
                    </li>
                    <li>
                      Created Qualification Test Programs (QTP) for Line-Replaceable Units (LRUs) using <em>Embedded C</em> and Yocto Project to meet aviation standards.
                    </li>
                    <li>
                      Authored and automated test cases using <em>Robot Framework</em> with Python, integrating them into the <em>CI/CD</em> pipeline for seamless deployment.
                    </li>
                    <li>
                      Conducted <em>REST API</em> testing, ensuring functionality and security.
                    </li>
                    <li>
                      Customized Yocto images with <em>Docker</em> and integrated monitoring tools like Node Exporter and Grafana.
                    </li>
                  </ul>
                </li>
              </ul>
              <p>Python, Embedded C, Bash, Robot Framework, Yocto Project, Docker, GitLab CI/CD</p>
            </div>
          )}
        </div>
        <div className={`education-content ${activeSection === 'education' ? 'right' : ''}`}>
          {activeSection === 'education' && (
            <div id="education">
              <ul>
                <li>
                  <h3>M.Tech in Embedded System Technology,</h3>
                  <p>SRM Institute of Science and Technology, Chennai.</p>
                  <p>2018 - 2020</p>
                </li>
                <li>
                  <h3>B.E in Electronic and Communication Engineering,</h3>
                  <p>Kamaraj College of Engineering and Technology, Virudhunagar.</p>
                  <p>2013 - 2017</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
