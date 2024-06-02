import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-section">
      <h2>About</h2>
      <div id="para_img">
        <div>
        <p>This is where you can describe about yourself. The more you describe about yourself, the better it is!</p>
      <p>
        Extra Information about you, like hobbies and your goals.
        Example Paragraph: I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics. I soon became the go-to person for any design needs.
      </p>
        </div>
     
      <div className="about-image">
        <img src="portfolio2/src/about_img.png" alt="About" />
      </div>
      </div>
    </div>
  );
};

export default About;
