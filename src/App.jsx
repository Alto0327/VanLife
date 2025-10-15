import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail/VanDetail';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Review from './pages/Host/HostReview';
import Income from './pages/Host/HostIncome';
import HostLayout from './components/HostLayout';

import "./server"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route  element={ <HostLayout/> }>
            <Route path="/host" element={ <Dashboard/> } />
            <Route path="/host/income" element={ <Income/> } />
            <Route path="/host/reviews" element={ <Review/> } />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
