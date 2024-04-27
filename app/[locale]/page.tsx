import Image from "next/image";
import jungle  from "@/assets/images/jung.jpg"
import HomeSectionTwo from "../../components/partials/homeSection2";
import Button from "../../components/partials/button";
import Link from 'next/link';

const Home = ({params}: any) => {

  const { lang } = params 

  

  return (
   <main id='home-page-container'>
      <section className="home-section-1">
        <Image className="home-first-image" alt="jgl" src={jungle} />
        <div >
          <h1>hi</h1>
          <Link href='projects'><Button text={"Our Projects"}  /></Link>
        </div>
      </section>
      <HomeSectionTwo />
    </main>
  )
}

export default Home