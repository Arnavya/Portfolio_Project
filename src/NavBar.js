import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul className="NavBar"> 
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#skills">Skills</a></li>
        <li className="nav-item"><a href="#education">Education</a></li>
        <li className="nav-item"><a href="#experience">Experience</a></li>
        <li className="nav-item"><a href="#projects">Projects</a></li>
        <li className="nav-item"><a href="https://www.linkedin.com/in/arnavya-chhetri-51380b2a3/" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
