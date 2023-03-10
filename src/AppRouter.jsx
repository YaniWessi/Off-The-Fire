import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Artist from './pages/Artist';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import Shop from './pages/Shop';

const AppRouter = () => 
  <Routes>
    <Routes path='/' element={ <Home/>} />
    <Routes path='/about' element={ <AboutUs/>} />
    <Routes path='/artist' element={ <Artist />} />
    <Routes path='/gallery' element={ <Gallery />} />
    <Routes path='/team' element={ <OurTeam />} />
    <Routes path='/shop' element={ <Shop />} />
  </Routes>

export default AppRouter; 