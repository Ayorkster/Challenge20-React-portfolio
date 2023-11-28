import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import GithubLogo from '../../images/github-logo.png'



const MyPage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      
      {/* Your page content goes here */}

      {/* Example usage of the Portfolio component */}
      <Portfolio
        title="Portfolio 1"
        description="Description of Portfolio 1"
      />

      {/* Make the GitHub logo clickable */}
      <a href="https://github.com/anthonyciccone90" target="_blank" rel="noopener noreferrer">
        <img id='GitHubLogo' src={GithubLogo} alt="GitHub Logo" />
      </a>

      <Footer />
    </div>
  );
};

export default MyPage;