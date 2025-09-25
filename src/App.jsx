import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About';
import './App.css';





function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className='nav-bar'>
          <Link to="/">#VANLIFE</Link>
          <div className="nav-right">
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
