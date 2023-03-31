import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Shop, AboutUs, Accessibility, Artist, ContactUs, Faq, Gallery, LegalNotice, OurTeam, Privacy, TermsOfSale } from './pages';

const AppRouter = () => 
  <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/about' element={ <AboutUs/>} />
    <Route path='/artist' element={ <Artist />} />
    <Route path='/gallery' element={ <Gallery />} />
    <Route path='/team' element={ <OurTeam />} />
    <Route path='/shop' element={ <Shop />} />
  </Routes>

export default AppRouter; 