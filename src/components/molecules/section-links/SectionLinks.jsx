import React from 'react';
import RouterLink from '../../atoms/applink/RouterLink';

const SectionLinks = ({sectionTitle, sectionId, links}) => 
 <section id={sectionId}>
    <h3>{sectionTitle}</h3>
    {links?.map((link) => <RouterLink key={link.id} link={link} />)}
  </section>

export default SectionLinks; 