import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderWithCarousel from './components/HeaderWithCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <HeaderWithCarousel />
      <Footer/>
    </Router>
  );
}

export default App;