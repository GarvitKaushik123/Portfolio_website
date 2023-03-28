import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'

const Portfolio = ()=>{
    return (
        <div className='portfolio'>
            {/*heading*/}
            <span>Recent Projets</span>
            <span>Portfolio</span>
            {/*slider>*/}
            <Swiper spaceBetween={30} 
            slidesPerView={2}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt=""></img>
                </SwiperSlide>
                <SwiperSlide>
                <img src={HOC} alt=""></img>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio;