import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimeDetailsPage from './pages/AnimeDetailsPage';
import About from './pages/About';
import Navigation from './components/Navigation';

function App() {


  useEffect(() => {
    const handleScroll = () => {

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<AnimeDetailsPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
