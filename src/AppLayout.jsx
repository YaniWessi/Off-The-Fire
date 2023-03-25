import React from 'react'; 
import AppHeader from './components/templates/header/AppHeader';
import '../src/components/templates/header/appHeader.css'
// import './appLayout.css';

const AppLayout = ({ children }) => {
  return(
    <div className="app-layout">
      <AppHeader />
      { children }
    </div>
  )
}

export default AppLayout;