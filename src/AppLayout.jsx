import React from 'react'; 
import AppHeader from './components/templates/header/AppHeader';

const AppLayout = ({ children }) => {
  return(
    <div className="app-layout">
      <AppHeader />
      { children }
    </div>
  )
}

export default AppLayout;