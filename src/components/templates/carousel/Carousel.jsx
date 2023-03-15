import React, {useState} from "react"; 

import './Carousel.css'; 

import CarouselButton from './CarouselButton'



export default function Carousel({carouselImages}) {

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
        <div className="container-slider">
            {carouselImages.map((obj,index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                        alt='yo'/>
                    </div>
                )
            })}
            <CarouselButton moveSlide={nextSlide} direction={"next"}/>
            <CarouselButton moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}/>
                ))}
            </div>
            <h2 className="slider-header">Striaght out the Fire</h2>

        </div>
    )
}
