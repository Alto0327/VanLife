import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail/VanDetail';
import './App.css';
import Layout from './components/Layout';
import Host from './pages/Host/Host';
import HostReview from './pages/Host/HostReview';
import HostIncome from './pages/Host/HostIncome';

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
          <Route path="/host" element={ <Host/> } />
          <Route path="/host/income" element={ <HostIncome/> } />
          <Route path="/host/reviews" element={ <HostReview/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
