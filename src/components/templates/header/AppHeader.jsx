import React from "react";
import Logo from "../../molecules/logo/Logo";
import NavLinks from "../../molecules/navlinks/NavLinks";
import links from '../../../assets/config/headerLinks.json';
import './appHeader.css';


const AppHeader = () => 
    <div  className="app-header">
       <Logo />
       <NavLinks links={links} />
    </div>

export default AppHeader;