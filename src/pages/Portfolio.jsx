import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header"
import movie from "../images/untitled_artwork2.png";
import Weather from "../images/Screenshot 2023-11-09 163357.png"
import Logo from "../images/logo-ex-triangle.png";
import Password from "../images/Screenshot (6)2.png";
import Planner from "../images/Screenshot 2023-11-30 143045.png";
import MTG from "../images/Screenshot 2023-10-13 at 12.15.55.png";
import Navigation from "../components/Nav";
import "../css/style.css";

const Project = ({ title, repoLink, deployedLink, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="col-md-6" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <p class="titles">{title}</p>
      <div>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <img class="thumbnails" src={image} alt={`${title} repo`} />
        </a>
        {isHovered && (
          <div className="links">
            <p>
              <a href={repoLink} class="link-text" target="_blank" rel="noopener noreferrer">
                Repo
              </a>{" "}
              |{" "}
              <a href={deployedLink} class="link-text" target="_blank" rel="noopener noreferrer">
                Deployed
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="container">
     
      <Navigation />
      <h2 class="page-titles">Highlighted Projects</h2>
      <p class="text">Here are six projects I have worked on. Included are links to each's GitHub repo and, for those who have them, a link to the deployed site. </p>

      <div class="profile" className="row">
      <div className="column"><Project title="Knockoff Gatherer" class="titles" repoLink="https://github.com/JacobCampa/Knockoff-Gatherer-2.0" deployedLink="https://mtg-search-engine-9599f588e5fc.herokuapp.com/" image={MTG} />
      <Project title="Weather Dashboard" class="titles" repoLink="https://github.com/Ayorkster/Challenge6-weather" deployedLink="https://ayorkster.github.io/Challenge6-weather/" image={Weather} /> <Project title="Password Generator" class="titles" repoLink="https://github.com/Ayorkster/challenge3-Password-generator" deployedLink="https://ayorkster.github.io/challenge3-Password-generator/" image={Password} /></div>
      <div className="column">
      <Project title="Quote This Movie" class="titles" repoLink= "https://github.com/Blakewb3/Quote-This-Movie" deployedLink="https://blakewb3.github.io/Quote-This-Movie/" image={movie} />
      <Project title="Logo Creator" class="titles" repoLink="https://github.com/Ayorkster/Challenge10-Logo-Maker" deployedLink="https://drive.google.com/file/d/1QPY4raj36cqj5gW4yVTywAE-00UadbTY/view" image={Logo} />
      <Project title="Work Planner" class="titles" repoLink="https://github.com/Ayorkster/challenge5-planner" deployedLink="https://ayorkster.github.io/challenge5-planner/" image={Planner} /></div>
      </div> 

      <Footer />
    </div>
  );
};

export default Portfolio;