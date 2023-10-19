import React from "react";
import Logo from "../../molecules/logo/Logo";
import NavLinks from "../../molecules/navlinks/NavLinks";
import links from '../../../assets/config/headerLinks.json';
import { Link } from "react-router-dom";
import MobileMenu from "../../atoms/MobileMenu";



const Header = () => 
    <header className="h-24 text-center bg-black  w-screen top-0 left-0 sticky z-10 flex justify-between items-center justify-end">

      <Link to="/" className="no-underline">
        <Logo />
      </Link>
      <NavLinks links={links} />

      <MobileMenu />
    </header>

export default Header;