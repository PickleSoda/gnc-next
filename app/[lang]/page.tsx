import Image from "next/image";
import jungle  from "@/assets/images/jung.jpg"
import HomeSectionTwo from "../../components/partials/homeSection2";
import Button from "../../components/partials/button";
import Link from 'next/link';
import { getDictionary } from './dictionaries'

const Home = async ({params}: any) => {
  console.log(params);
  
  const { lang } = params 
  
  const dict = await getDictionary(lang) // en

  return (
   <main id='home-page-container'>
      <section className="home-section-1">
        <Image className="home-first-image" alt="jgl" src={jungle} />
        <div >
          <h1>{dict.title}</h1>
          <Link href='projects'><Button text={"Our Projects"}  /></Link>
        </div>
      </section>
      <HomeSectionTwo />
    </main>
  )
}

export default Home