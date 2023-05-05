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

       <div onClick={() => setNav(!nav)} className="fa-icons">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
       </div>

       {nav && (
           <div className="second-links">
            <NavLinks links={links} classname={"media-links"}/>
           </div>
       )

       }
    </div>

    )
}  
export default AppHeader;