import React from 'react';
import Carousel from '../components/templates/carousel/Carousel';
import carouselImages from '../assets/config/carouselArray.json';

const Home = () => {
  return(
    <>
      <Carousel carouselImages={carouselImages}/>
    </>
  )
}

export default Home;