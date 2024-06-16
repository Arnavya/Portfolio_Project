import React from 'react';
import './Skills.css';
import { FaJava, FaJs, FaPhp, FaPython , FaAndroid, FaReact, FaNodeJs, FaGitAlt, FaDocker} from 'react-icons/fa';
import { SiMysql , SiAndroidstudio} from 'react-icons/si';

function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <p>I love to learn new things and experiment with new technologies. These are some of the major languages, technologies, tools and platforms I have worked with:</p>
      
      <div className="skills-category">
        <h3>Languages & Databases</h3>
        <div className="skills-icons">
          {/* <img src="/Users/arnavya/Desktop/VS_Code/React/portflio2/src/javalogo.png" alt="Java" />
          <img src="/Users/arnavya/Desktop/VS_Code/React/portflio2/src/phplogo.png" alt="PHP" />
          <img src="/Users/arnavya/Desktop/VS_Code/React/portflio2/src/jslogo.png" alt="JavaScript" />
          <img src="/Users/arnavya/Desktop/VS_Code/React/portflio2/src/pythonlogo.png" alt="Python" />
          <img src="/Users/arnavya/Desktop/VS_Code/React/portflio2/src/mysqllogo.pngl" alt="MySQL" /> */}
        <FaJava className="icon" />
        <FaJs className="icon" />
        <FaPhp className="icon" />
        <SiMysql className="icon" />
        <FaPython className="icon" />
        </div>
      </div>

      <div className="skills-category">
        <h3>Frameworks & Technologies</h3>
        <div className="skills-icons">
          {/* <img src="path/to/android-logo.png" alt="Android" />
          <img src="path/to/react-logo.png" alt="React" />
          <img src="path/to/nodejs-logo.png" alt="Node.js" /> */}
           <FaAndroid className="icon" />
      <FaReact className="icon" />
      <FaNodeJs className="icon" />
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools & Platforms</h3>
        <div className="skills-icons">
          {/* <img src="path/to/android-studio-logo.png" alt="Android Studio" />
          <img src="path/to/git-logo.png" alt="Git" />
          <img src="path/to/docker-logo.png" alt="Docker" /> */}
          <SiAndroidstudio className="icon" />
      <FaGitAlt className="icon" />
      <FaDocker className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
