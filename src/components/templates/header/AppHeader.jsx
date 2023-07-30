import React,{useState,useEffect,useRef } from "react";
import Logo from "../../molecules/logo/Logo";
import NavLinks from "../../molecules/navlinks/NavLinks";
import links from '../../../assets/config/headerLinks.json';
import { FaBars, FaTimes } from 'react-icons/fa';
import './appHeader.css';


const AppHeader = () => {

    const navRef = useRef()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const showNavbar = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    useEffect(() => {
        return () => setIsDropdownOpen(false);
    }, []);

    const [areLinksVisible, setAreLinksVisible] = useState(true)

    const handleResize = () => {
        if (window.innerWidth > 1024){
            setAreLinksVisible(true)
        }else{
            setAreLinksVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
    <div  className="h-24 text-center bg-black  w-screen top-0 left-0 fixed z-10 flex justify-between items-center justify-end">

       <Logo />
      {areLinksVisible? (

       <nav ref={navRef}>
       <NavLinks links={links} />
            {/* <button className="lg:hidden nav-close-btn" onClick={showNavbar}>
            <FaTimes size={30} />
            </button> */}
       </nav>

       ) : (

       <button className="color:white nav-btn" onClick={showNavbar} >
        <FaBars size={30} className="text-white mr-8"/>
       </button>
      )
      }

      {isDropdownOpen && (
          <nav ref={navRef} className="fixed top-0 left-0 h-screen w-screen flex flex-col item-center gap-6 bg-mainColor transition duration-500 -translate-y-full sm:translate-y-0">
              <NavLinks links={links} />
              <button className="absolute top-2 left-2" onClick={showNavbar}>
                <FaTimes className="text-textColor" />
              </button>
          </nav>
      )}
       
    </div>

    )
}  
export default AppHeader;


    //   <button className="fa-icons nav-close-btn" onClick={showNavbar}>
    //    <FaTimes size={30} />
    //    </button>