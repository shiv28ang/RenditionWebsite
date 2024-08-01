import React from 'react'
import "./Achievements.css"
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';

import slide_image1 from "../../assets/img1.jpg";
import slide_image2 from "../../assets/img2.jpg";
import slide_image3 from "../../assets/img3.jpg";
import slide_image4 from "../../assets/img4.jpg";
import slide_image5 from "../../assets/img5.jpg";
import slide_image6 from "../../assets/img6.jpg";

const Achievements = () => {
  return (
    <div className='achievements'>
      <h1 className='heading stroke-text'>ACHIEVEMENTS</h1>
      <Swiper effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={
        {
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5,
        }
      }
      pagination={{el:'.swiper-pagination',clickable:true}}
      navigation={{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
        clickable:true,
      }}
      modules={[EffectCoverflow,Pagination,Navigation]}
      className='swiper_container'
      >
        <SwiperSlide>
            <figure>
                <img src={slide_image1}  alt='slide_image'/> 
                <figcaption>Earns Top Honors in Mime Play Performance!</figcaption>
            </figure>
        </SwiperSlide>
        <SwiperSlide>
        <figure>
                <img src={slide_image6}  alt='slide_image'/> 
                <figcaption> Best Monologue at MNIT Jaipur!</figcaption>
        </figure>        
        </SwiperSlide>
        <SwiperSlide>
        <figure>
                <img src={slide_image2}  alt='slide_image'/> 
                <figcaption> Bravo to Our Team! First Place Champions at the Stage Play Competition!</figcaption>
        </figure>        
        </SwiperSlide>
        <SwiperSlide>
        <figure>
                <img src={slide_image3}  alt='slide_image'/> 
                <figcaption>Best Monologue at Odeum's Intra-Club Event!</figcaption>
        </figure> 
        </SwiperSlide>
        <SwiperSlide>
            <figure>
                <img src={slide_image4} alt='slide_image'/>  
                <figcaption>Triumphs with Best Monoact at MNIT Jaipur</figcaption>  
            </figure>
        </SwiperSlide>
        <SwiperSlide>
            <figure>
                <img src={slide_image5} alt='slide_image'/>  
                <figcaption>Congratulations to Our Monoact Star—Winner at MNIT Jaipur!</figcaption>  
            </figure>
        </SwiperSlide>


        <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Achievements
