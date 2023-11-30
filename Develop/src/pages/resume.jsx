import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Nav";
import Header from "../components/Header"



const Resume = () => {
  return (
    <div>
      <Navigation />
      <br />
      <h2 class="page-titles">Resume</h2>
      <div class="resum"><div class="resumetext"> <p class="text">
        Front-End Proficiencies:
        <ul class="proficiencies">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
      </p>
      <p class="text">
        Back-End Proficiencies:
        <ul class="proficiencies">
          <li>Node</li>
          <li>Express</li>
          <li>MySQL/Sequelize</li>
          <li>MongoDB/Mongoose</li>
          <li>APIs</li>
        </ul>
      </p>
      </div>
      
      <p id="blurb" class="text">A passionate and adaptable coding bootcamp graduate with a decade of digital art experience, a decade of dog training expertise, and over 15 years of animal care and customer service skills, seeking to leverage diverse talents and newly acquired technical skills.
      <br />
      <br />
      <h3 >Experiance:</h3>
      </p>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;