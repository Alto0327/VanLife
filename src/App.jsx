import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Review from './pages/Host/HostReview';
import Income from './pages/Host/HostIncome';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVan';

import HostVanIdLayout from './components/HostVanIdLayout'
import HostVansDetail from './pages/Host/HostVanDetails';
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'

import "./server"
import NotFound from './pages/NotFound';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          {/* Host page layout */}
          <Route  path="Host" element={ <HostLayout/> }>
            <Route index element={ <Dashboard/> } />
            <Route path="income" element={ <Income/> } />
            <Route path="reviews" element={ <Review/> } />
            <Route path="vans" element={<HostVans/>} />

            {/* host Van:id layout */}
            <Route path="vans/:id" element={<HostVanIdLayout/>}>
              <Route index element={<HostVansDetail/>}/>
              <Route path="pricing" element={<HostVanPricing/>}/>
              <Route path="Photos" element={<HostVanPhotos/>}/>
            </Route>
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
