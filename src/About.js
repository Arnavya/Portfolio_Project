import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-section">
      <h2>About</h2>
      <div id="para_img">
        <div>
        <p class="size">My name is Arnavya Chettri, and I am passionate about my work. Coding, building, and sports are my primary hobbies, and they each play a significant role in shaping my approach to life and work. </p>
      <p class="size">
      Because I love what I do, I have a steady source of motivation that drives me to do my best. This passion has led me to challenge myself daily and continuously learn new skills, which has helped me improve my work quality.

I love to read books, not to get something out of it but to get a different perspective to see things. This habit has enriched my creativity and problem-solving skills, making me more adaptable and innovative in my professional endeavors.

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
