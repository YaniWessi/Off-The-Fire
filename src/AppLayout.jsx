import React from 'react'; 
// import AppHeader from './components/templates/header/AppHeader';
import Header from './components/templates/header/Header';
import AppFooter from './components/templates/footer/AppFooter';
import '../src/components/templates/header/appHeader.css'
// import './appLayout.css';

const AppLayout = ({ children }) => {
  return(
    <div className="app-layout">
      <Header />
      { children }
      <AppFooter />
    </div>
  )
}

export default AppLayout;