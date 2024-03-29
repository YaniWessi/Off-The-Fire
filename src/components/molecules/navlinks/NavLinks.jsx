import React from "react";
import AppLink from "../../atoms/applink/RouterLink";
import '../../templates/header/appHeader.css'

const NavLinks = ({links}) =>
  <div className="hidden lg:flex">
    {links.map((link) => {
     return  <AppLink key={link.id} link={link} />;
    })}
  </div>
  
export default NavLinks; 
