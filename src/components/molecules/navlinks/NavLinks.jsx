import React from "react";
import AppLink from "../../atoms/applink/RouterLink";

const NavLinks = ({links}) =>
  <div className="nav-links">
    {links.map((link) => {
     return <AppLink key={link.id} link={link}/>
    })}
  </div>
  
export default NavLinks; 
