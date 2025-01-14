import './Certification.css';

const Certifications = () => {
  return (
    <section className="certification-section certification-bg">
      <h2 className="certification-title">Certifications</h2>
      <div>
        <ul className="certification-list">
          <li className="certification-item">
            <p className="certification-text"><span className='title'>Guvi-IIT</span>Zen Class Full Stack Developer Program</p><i>Bootstrap, CSS3, HTML5, JavaScript, Node.js,
            React.js, MongoDB, MYSQL, Full Stack Developer</i>
          </li>
          <li className="certification-item">
            <p className="certification-text"><span  className='title'>Udemy</span>User Experience Design Essentials - Adobe XD UI/UX Design</p>
          </li>
          <li className="certification-item">
            <p className="certification-text"><span  className='title'>Udemy</span>The Complete Sketch 5 Course - Design Apps & Websites</p>
          </li>
          <li className="certification-item">
            <p className="certification-text"><span  className='title'>Udemy</span>Python Mega Course</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
