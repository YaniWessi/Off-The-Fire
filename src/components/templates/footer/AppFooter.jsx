import React from 'react';
import SectionLinks from '../../molecules/section-links/SectionLinks';
import footer1 from '../../../assets/config/footerLinks.json';
import footer2 from '../../../assets/config/footerLinks2.json';


const AppFooter = () => 
<footer>
  <SectionLinks sectionId='footer-one' sectionTitle="A Section" links={footer1} />
  <SectionLinks sectionId='footer-two' sectionTitle="Another Section" links={footer2} />
</footer>

export default AppFooter;