import { createContext, useState } from "react";

const carouselContext = createContext(null);

export const CarouselProvider = ({children, carouselImages}) => {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
      if(slideIndex !== carouselImages.lenght){
          setSlideIndex(slideIndex + 1)
      }
      else if (slideIndex === carouselImages.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(carouselImages.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  return (
    <carouselContext.Provider value={{ nextSlide, prevSlide, moveDot, slideIndex }}>
      { children }
    </carouselContext.Provider>
  )
}

export default carouselContext;
