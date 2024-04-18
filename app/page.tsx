'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import Image from "next/image";
import styles from "./page.module.css";
import jungle  from "@/assets/images/jung.jpg"
import HomeSectionTwo from "@/components/partials/homeSection2";
import Button from "@/components/partials/button";
import Link from 'next/link';

const Home = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])


  return (
   <main className={styles.main}>
      <section className="home-section-1">
        <Image className="home-first-image" alt="jgl" src={jungle} />
        <div >
          <h1>GNC GNC GNC</h1>
          <Link href='projects'><Button text={"Our Projects"}  /></Link>
        </div>
      </section>
      <HomeSectionTwo />
    </main>
  )
}

export default Home