import React, {useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import DropNavLinks from "../molecules/navlinks/DropNavLinks"
import links from '../../assets/config/headerLinks.json';

const MobileMenu = () => {

const [isShowingMenu, setIsShowingMenu] = useState(false);


const showMenu = () => setIsShowingMenu(true);

const hideMenu = () => setIsShowingMenu(false)

  return(
    

    <div className="lg:hidden">
      {isShowingMenu ? 
    
        <nav className="fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center gap-6 bg-mainColor transition duration-1000 bg-black transform translate-y-0">
          
          <button  onClick={showMenu}><DropNavLinks links={links} /></button>
          <button className="absolute top-2 right-2 nav-close-btn" onClick={hideMenu}>
            <FaTimes className="text-white" />
          </button>
        </nav>
      : 
       <FaBars onClick={showMenu} size={30} className="text-white mr-8" />
      }
    </div>
  )
}

export default   MobileMenu;