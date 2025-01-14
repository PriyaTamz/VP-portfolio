import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section>
      <h1>
        <span>I'M</span> VishnuPriya
      </h1>
      <h3>Full-Stack Developer</h3>

      <div>
        <a href="https://www.linkedin.com/in/vishnupriya-thamilarasan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/PriyaTamz" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vishnupriyatk1996@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>

      <a href="/Vishnu Priya Resume.pdf" className='icon' download>
        Get Resume
      </a>

      <div>
        <p className="mb-0">
          <i className="fas fa-phone-alt text-danger me-2"></i> +91 9940995669
        </p>
        <p className="mb-0">
          <i className="fas fa-map-marker-alt text-success me-2"></i> Chennai, India
        </p>
        <p className="mb-0">
          <i className="fas fa-envelope text-primary me-2"></i> vishnupriyatk1996@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Hero;
