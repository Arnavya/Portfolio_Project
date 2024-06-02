import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Typing from "./Typing";
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter} from 'react-icons/fa6';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
      </header>
      <div id="home" className="section">
        <div id="space_between_Nav_Name"></div>
        <h1>Arnavya Chettri</h1>
        <Typing 
          text={[
            "I am a Developer",
            "I like to code",
            "I like to build",
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          duration={1000}
          
        />
        <div className="social-icons"><a id = "size" href="https://www.linkedin.com/in/arnavya-chhetri-51380b2a3/" className="icon-link" style={{ color: 'red' }}>
            <FaLinkedin className="icon" />
        </a><a id = "size" href="https://github.com/Arnavya" className="icon-link" style={{ color: 'red' }}>
            <FaGithub className="icon" />
        </a>
        <a id = "size" href="https://x.com/" className="icon-link" style={{ color: 'red' }}>
            <FaXTwitter className="icon" />
        </a></div>
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="education" className="section">
        <Education />
      </div>
      <div id="experience" className="section">
        <Experience />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
    </div>
  );
}

export default App;
