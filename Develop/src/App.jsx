import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from './components/page';
import AboutMe from './components/Aboutme';
import PortfolioPage from './pages/Portfolio';
import Resume from './pages/resume';
import Footer from './components/Footer';
import Contact from './pages/constactme';
import CSS from './css/style.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<PortfolioPage />} /> {/* Use PortfolioPage */}
        <Route path="/footer" element={<Footer />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<MyPage />} />
      </Routes>
    </Router>
  );
};

export default App;