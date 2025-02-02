import './styles/App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Certification from './components/Certification';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <Certification />
    </div>
  );
}

export default App;
