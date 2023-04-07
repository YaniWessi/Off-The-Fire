import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ProductImage from '../components/molecules/product-image/ProductImage';
import IMAGEJSON  from '../assets/config/carouselImages.json';


const Shop = () => {
  const images = [...IMAGEJSON]
  return(
    <>
    {images.map(img => {
      const {id, imgKey, alt, name} = img;
      return (
        <Card>
        <ProductImage classname={"product-image"} key={id} imgName={imgKey} alt={alt} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          This is a short description of the product.
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
        </Card.Body>
        </Card>
      )
    })

    }
    </>
  )
}

export default Shop;