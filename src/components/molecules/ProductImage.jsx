import React, { useEffect, useState } from 'react';
import AppImage from '../atoms/applink/app-image/AppImage';

const ProductImage = ({ imgName, alt }) => {
  
  const [imgSrc, setImgSrc] = useState('');


  const getUrl = (filename) => new URL(`../../assets/images/store-images/${filename}.png`, import.meta.url).href;


  // const loadImage = (filename) => {
  //   if (!!filename) {
  //     const imageSrc = getUrl(filename);
  //     setImgSrc(imageSrc);
  //     setIsloadingImage(false);
  //   } else {
  //     setIsloadingImage(true);
  //   };
  // };

  // useEffect(() => {
  //   loadImage(imgName);
  // },[imgName]);
  
  return <AppImage source={imgSrc} alt={alt} />
}

export default ProductImage;