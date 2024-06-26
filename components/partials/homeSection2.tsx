'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { useEffect } from 'react'
import grayImg from '@/assets/images/gray-box.jpeg'
import woods from '@/assets/images/woods.jpg'

const HomeSectionTwo = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            disable: 'mobile',
        })
    }, [])

    return (
        <>
        <section className='home-section-2'>
            <div className='home-section-2-animation' >
                <Image className='home-scroll-img-1' alt='home-img-1' src={grayImg} data-aos='fade-up'/>
                <div data-aos='fade-down'>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic saepe tenetur praesentium, optio incidunt, esse facere nulla odit vel accusamus ab.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates ratione, repellendus dignissimos enim velit autem quibusdam sed delectus nesciunt animi optio? Doloremque odio culpa quae nisi facere sunt consequuntur.</p>
                </div>
            </div>
            <div className='home-section-2-animation' >
                <div data-aos='fade-up'>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae hic saepe tenetur praesentium, optio incidunt, esse facere nulla odit vel accusamus ab.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptates ratione, repellendus dignissimos enim velit autem quibusdam sed delectus nesciunt animi optio? Doloremque odio culpa quae nisi facere sunt consequuntur.</p>
                </div>
                <Image className='home-scroll-img' alt='home-img-2' src={grayImg} data-aos='fade-down'/>
            </div>
        </section>
        <section className="home-section-3">
            <Image alt="woods-home" src={woods} data-aos='fade-up'/>
        </section>
        </>
    )
}

export default HomeSectionTwo