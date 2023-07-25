import React,{useState,useEffect } from "react";
import { useRef } from "react";
import Logo from "../../molecules/logo/Logo";
import NavLinks from "../../molecules/navlinks/NavLinks";
import links from '../../../assets/config/headerLinks.json';
import { FaBars, FaTimes } from 'react-icons/fa';
import './appHeader.css';


const AppHeader = () => {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const [areLinksVisible, setAreLinksVisible] = useState(false)

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
       </nav>

       ) : (

       <button className="color:white" onClick={showNavbar} >
        <FaBars size={30} className="text-white mr-8"/>
       </button>
      )
      }
       
    </div>

    )
}  
export default AppHeader;


// <button className="fa-icons nav-close-btn" onClick={showNavbar}>
//        <FaTimes size={30} />
//        </button>