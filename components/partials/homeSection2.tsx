'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useEffect } from 'react'
import grayImg from '@/assets/images/gray-box.jpeg'

const HomeSectionTwo = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    return (
        <section className='home-section-2'>
            <div className='home-section-2-animation' >
                <Image className='home-scroll-img-1' alt='home-img-1' src={grayImg} data-aos='fade-left'/>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic saepe tenetur praesentium, optio incidunt, esse facere nulla odit vel accusamus ab.</h2>
            </div>
            <div className='home-section-2-animation' >
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic saepe tenetur praesentium, optio incidunt, esse facere nulla odit vel accusamus ab.</h2>
                <Image className='home-scroll-img' alt='home-img-2' src={grayImg} data-aos='fade-right'/>
            </div>
        </section>
    )
}

export default HomeSectionTwo