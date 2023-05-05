import React, {useState} from "react";
import Logo from "../../molecules/logo/Logo";
import NavLinks from "../../molecules/navlinks/NavLinks";
import links from '../../../assets/config/headerLinks.json';
import { FaBars, FaTimes } from 'react-icons/fa';
import './appHeader.css';


const AppHeader = () => {

   const [ nav, setNav] = useState(false)

    return (
    <div  className="app-header">
       <Logo />
       <div className="all-links">
       <NavLinks links={links} />
       </div>
    </div>

    )
}  
export default AppHeader;