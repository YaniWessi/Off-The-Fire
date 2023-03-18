import React from 'react';
import Carousel from '../components/templates/carousel/Carousel';
import carouselImages from '../assets/config/carouselArray.json';
import AppVideo from '../components/atoms/app-vidoe/AppVideo';

const Home = () => {

  return(
    <>
      <Carousel carouselImages={carouselImages}/>
      <AppVideo source="https://www.youtube.com/embed/xpcVZVtZPKI" title="Resume"/>

    </>
  )
}

export default Home;