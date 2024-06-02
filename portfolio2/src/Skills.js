import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <p>I love to learn new things and experiment with new technologies. These are some of the major languages, technologies, tools and platforms I have worked with:</p>
      
      <div className="skills-category">
        <h3>Languages & Databases</h3>
        <div className="skills-icons">
          <img src="path/to/java-logo.png" alt="Java" />
          <img src="path/to/php-logo.png" alt="PHP" />
          <img src="path/to/js-logo.png" alt="JavaScript" />
          <img src="path/to/python-logo.png" alt="Python" />
          <img src="path/to/mysql-logo.png" alt="MySQL" />
        </div>
      </div>

      <div className="skills-category">
        <h3>Frameworks & Technologies</h3>
        <div className="skills-icons">
          <img src="path/to/android-logo.png" alt="Android" />
          <img src="path/to/react-logo.png" alt="React" />
          <img src="path/to/nodejs-logo.png" alt="Node.js" />
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools & Platforms</h3>
        <div className="skills-icons">
          <img src="path/to/android-studio-logo.png" alt="Android Studio" />
          <img src="path/to/git-logo.png" alt="Git" />
          <img src="path/to/docker-logo.png" alt="Docker" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
