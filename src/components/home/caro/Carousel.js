import React from 'react'
import Avatar from './Avatar';
import '../styles/carousel.css';
import { statusCarousel } from './data';

const Carousel = () => {
    const handleSlide = (direction)=>{
        const slider = document.getElementsByClassName('carousel-body')[0];
        if (direction === "left")
            slider.scrollBy(-400, 0);
        else 
            slider.scrollBy(400,0);
    }

    return (
        <section className='check w-128 ml-28 mt-2 bg-[#FFFADD]'>
            {/* <div className='arrow-btn left-icon' onClick={()=>handleSlide('left')}>
                <img src="./images/angle-left-solid.svg" alt="left-angle" />
            </div>
            <div className='arrow-btn right-icon' onClick={()=>handleSlide('right')} >
                <img src="./images/angle-right-solid.svg" alt="left-angle" />
            </div> */}
            <div className="carousel-body bg-[#FFFADD]">
                {
                    statusCarousel.map((item)=>{
                        return <Avatar key={item} image={item} />
                    })
                }
            </div>
        </section>
    )
}

export default Carousel