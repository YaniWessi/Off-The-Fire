import React from 'react';
import Carousel from '../components/templates/carousel/Carousel';
import carouselImages from '../assets/config/carouselArray.json';
import AppVideo from '../components/atoms/app-media/app-video/AppVideo';
import ProductImage from '../components/molecules/product-image/ProductImage';
import IMAGEJSON from '../assets/config/carouselImages.json';
import './home.css';

const Home = () => {

  return(
    <div className="home-container">
      <div>     
       <Carousel carouselImages={carouselImages} />
      </div>
 
      <AppVideo  src="https://www.youtube.com/embed/xpcVZVtZPKI" title="Resume" />

      <div className="products-container">
      {IMAGEJSON.map(img => {
        return (
          <ProductImage classname={"product-image"} key={img.id} imgName={img.imgKey} alt={img.alt} />
        )
      })}
      </div>
      <AppVideo  src="https://www.youtube.com/embed/Y9HsRzWT76w" title="Resume" />
    </div>
  )
}

export default Home;