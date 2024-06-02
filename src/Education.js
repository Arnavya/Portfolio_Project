import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="timeline">
        <div className="container left">
          <div className="content">
            <h3>Bachelor’s+Master’s Computer Science</h3>
            <p>Scaler School Of Technology, Bangalore</p>
            <p>CGPA - 11</p>
            <span className="date">July 2024 - July 2027</span>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h3>High School</h3>
            <p>KV NO.2 Kharagpur , West Bengal</p>
            <p>Marks - 95%</p>
            <span className="date">Jun 2018 - Jun 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
