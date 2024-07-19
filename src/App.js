import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderWithCarousel from './components/HeaderWithCarousel';
import Footer from './components/Footer';
{/*}
import HomePage from './pages/HomePage';
import StudioPage from './pages/StudioPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
*/}

function App() {
  return (
    <Router>
      <HeaderWithCarousel />
      <Footer/>
      {/*
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      */}
    </Router>
  );
}

export default App;