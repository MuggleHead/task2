import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import GridProductPage from './pages/GridProductPage';
import PostPage from './pages/PostPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app-container">
        <div className="mobile-content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/2" element={<GridProductPage />} />
              <Route path="/3" element={<PostPage />} />
            </Routes>
            <Navbar />
          </BrowserRouter>
        </div>
        <div className="large-screen-message">
          <p>Please use a mobile phone for the best experience.</p>
        </div>
      </div>
    </>
  );
}

export default App;