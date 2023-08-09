import React, {useState, useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../molecules/logo/Logo";
import NavLinks from "../../molecules/navlinks/NavLinks";
import DropNavLinks from "../../molecules/navlinks/DropNavLinks";
import links from '../../../assets/config/headerLinks.json';


const Header = () => {
  const [ isNavbarOpen, setIsNavbarOpen ] = useState(false);

  const [ areLinksVisible, setAreLinksVisible ] = useState(true)

  const handleResize = () => {

    if (window.innerWidth > 1024){
      setAreLinksVisible(true)
    }else{
      setAreLinksVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[])

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <header className="h-24 text-center bg-black  w-screen top-0 left-0 fixed z-10 flex justify-between items-center justify-end">
      <Logo />
      {isNavbarOpen ? (
        <nav className="fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center gap-6 bg-mainColor transition duration-1000 bg-black transform translate-y-0">
          
          <button  onClick={toggleNavbar}><DropNavLinks links={links} /></button>
          <button className="absolute top-2 right-2 nav-close-btn" onClick={toggleNavbar}>
            <FaTimes className="text-white" />
          </button>
        </nav>
      ) : null}


      { areLinksVisible ? (
        <nav>
          <NavLinks links={links} />
        </nav>
      ): (
      <button   className="block lg:block nav-btn" onClick={toggleNavbar}>
        <FaBars size={30} className="text-white mr-8" />
      </button>
      )}
    </header>
  )
}

export default Header;