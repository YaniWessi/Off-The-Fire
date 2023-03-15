import React from 'react';
import './Carousel.css';
import leftArrow from '../../../assets/images/left-arrow.svg';
import rightArrow from '../../../assets/images/right-arrow.svg';

export default function CarouselButton({direction, moveSlide}) {
     console.log(direction, moveSlide);
    return (
        <button
        onClick={moveSlide}
        className= {direction === "next" ? 'btn-slide next' : "btn-slide prev"}
        >
            <img src={direction === "next" ? rightArrow : leftArrow} alt=''/>
        </button>
    )
}