import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
    <ul id="nav-items">
    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
    <li><NavLink to="/about">About me</NavLink></li>
    <li><NavLink to="/resume">Resume</NavLink></li>
</ul>
</nav>
  );
};

export default Navigation;