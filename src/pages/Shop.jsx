import React from 'react';
// import { Card, Button } from 'react-bootstrap';
import ProductImage from '../components/molecules/product-image/ProductImage';
import IMAGEJSON  from '../assets/config/carouselImages.json';
import './shop.css';


const Shop = () => {
  const images = [...IMAGEJSON]
  return(
    <div className="product-card-in-shop">
      {images.map(img => {
        const {id, imgKey, alt, name} = img;
        return (
          
            <div>
              <ProductImage classname={"shop-image"} key={id} imgName={imgKey} alt={alt} />
              <h3>{name}</h3>
              <p>
                This is a short description of the product.
              </p>
              <button variant="primary">Buy Now</button>
            </div>
        
        )
      })

      }
    </div>
  )
}

export default Shop;