import React from "react";
import Navigation from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import profilepic from "../images/profile pic2.png"
const Portfolio = ({ title, description, imageUrl }) => {
  return (
    <div>
      <Navigation/>
<img id="profile-pic" src= {profilepic} alt="an image of me" />
<Header/>
      <div>
<p class="aboutme"> A passionate and adaptable coding bootcamp graduate, born and raised in St. Louis, Mo, with a decade of digital art experience, a decade of dog training expertise, and over 15 years of animal care and customer service skills, seeking to leverage diverse talents and newly acquired technical skills.
</p>
      </div>
      <Footer/>
    </div>
  );
};

export default Portfolio;