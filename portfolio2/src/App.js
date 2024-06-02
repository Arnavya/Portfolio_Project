import logo from './logo.svg';
import './App.css';
import NavBar from "./NavBar";
import Typing from "./Typing";
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

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
            "Hi There",
            "How Are You",
            "I Am Fine",
          ]}
          typingSpeed={100}
          deletingSpeed={50}
          duration={1000}
          className="typing-text"
        />
        <div className="social-icons"></div>
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
