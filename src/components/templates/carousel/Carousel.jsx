import React from "react"; 
import { CarouselProvider } from "../../../utils/contexts/CarouselContext";
import './Carousel.css'; 
import CarouselButton from './CarouselButton';
import CarouselSlide from "./CarouselSlide";
import CarouselIndicators from "./CarouselIndicators";


export default function Carousel({carouselImages}) {

    return (
      <CarouselProvider carouselImages={carouselImages}>
            <div className="container-slider">
            {carouselImages.map((obj,index) => {
                return (
                   <CarouselSlide key={obj.id} id={obj.id} imgName={index + 1}/>
                )
            })}
            <CarouselButton direction={"next"}/>
            <CarouselButton direction={"prev"}/>
            <CarouselIndicators/>
            <h2 className="slider-header">Striaght out the Fire</h2>

        </div>
    
      </CarouselProvider>
    )   
}
