import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Nav";
import Header from "../components/Header"
import  ResumeFile  from "../images/Alaina-York resume 4_16.pdf";


const Resume = () => {
  return (
    <div>
      <Navigation />
      <br />
      <h2 class="page-titles">Resume</h2>
     <div class="resumetext"> <p class="text">
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
      <p className="text">
        You can download my résumé{" "}
        <a href={ResumeFile} download>
          here
        </a>
        {""}.
      </p>
      

      <Footer />
    </div>
  );
};

export default Resume;