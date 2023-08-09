import React from "react";
import AppLink from "../../atoms/applink/RouterLink";

const DropNavLinks = ({links}) =>
  <div className="flex flex-col items-center">
    {links.map((link) => {
     return  <AppLink key={link.id} link={link} />;
    })}
  </div>
  
export default DropNavLinks;  