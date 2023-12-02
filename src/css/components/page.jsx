import React from 'react';
import Header from './Header';
import Portfolio from './Aboutme';
// import GithubLogo from '../../images/github-logo.png'



const MyPage = () => {
  return (
    <div>
      <Header />
      
      {/* Your page content goes here */}

      {/* Example usage of the Portfolio component */}
      <Portfolio
        title="Portfolio 1"
        description="Description of Portfolio 1"
      />

      {/* Make the GitHub logo clickable */}
      <a href="https://github.com/ayorkster" target="_blank" rel="noopener noreferrer">
        {/* <img id='GitHubLogo' src={GithubLogo} alt="GitHub Logo" /> */}
      </a>

    </div>
  );
};

export default MyPage;