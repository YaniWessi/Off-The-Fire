import React from 'react';
import { Link } from 'react-router-dom';

const RouterLink = ({link: {path, label}}) => 
  <Link className="text-white m-9 font-normal text-base no-underline" to={path}>{label}</Link>

export default RouterLink;  
