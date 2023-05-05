import React from "react";
import AppLink from "../../atoms/applink/RouterLink";

const NavLinks = ({links, classname}) =>
  <div className="nav-links">
    {links.map((link) => {
     return <AppLink key={link.id} link={link} classname={classname} />;
    })}
  </div>
  
export default NavLinks; 
