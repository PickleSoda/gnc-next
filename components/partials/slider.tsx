'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';


const AboutPageSlider = () => {
    return ( 
        <div style={{width: '80vw', margin: '0'}}>
                <Swiper
                    className='swiper'
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    navigation
                    slidesPerView={1}
                    loop={true}
                    pagination={{ type: 'fraction' }}
                >
                    <SwiperSlide className='swiper-slide'><h1>Slide 1</h1></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><h1>Slide 2</h1></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><h1>Slide 3</h1></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><h1>Slide 4</h1></SwiperSlide>
                </Swiper>
           </div>
    )
}

export default AboutPageSlider