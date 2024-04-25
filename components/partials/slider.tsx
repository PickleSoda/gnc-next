'use client'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import elepant from '@/assets/images/elephant.jpg'
import shrkSmith from '@/assets/images/shrek-smith.webp'
import shrek from '@/assets/images/shrek.jpg'
import rock from '@/assets/images/the-rock.jpg'
import Image from 'next/image';


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
                    <SwiperSlide className='swiper-slide'><Image className='slider-images' alt='elepant' src={elepant}/></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Image className='slider-images' alt='shrkSmith' src={shrkSmith}/></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Image className='slider-images' alt='shrek' src={shrek}/></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Image className='slider-images' alt='rock' src={rock}/></SwiperSlide>
                </Swiper>
           </div>
    )
}

export default AboutPageSlider