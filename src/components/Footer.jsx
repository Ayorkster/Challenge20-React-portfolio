import React from "react";
import Github from "../images/github-mark.png";
import linkedin from "../images/LI-in-Bug.png"

const Footer = () => {
  return (
    <footer id="copyright">
 <a href="https://github.com/ayorkster" target="_blank" rel="noopener noreferrer">
        <img className="contact" src= { Github } alt="github logo" />
      </a>
      <a href="https://www.linkedin.com/in/alaina-york-7a1567243/" target="_blank" rel="noopener noreferrer">
        <img className="contact" src= { linkedin } alt="github logo" />
      </a>
      <p>&copy; 2023</p>
    </footer>
  );
};

export default Footer;