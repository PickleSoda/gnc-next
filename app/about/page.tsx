import styles from "@/app/page.module.css";
import Image from "next/image";
import grayImg from '@/assets/images/gray-box.jpeg'
import woods from '@/assets/images/woods.jpg'
import AboutPageSlider from "@/components/partials/slider";
import Accordion from "@/components/partials/accordion";

const AboutPage = () => {
    return (
        <div className={styles.main}>
                  <div className="about-page-container">
         <AboutPageSlider />
         <section className="about-section-1" >
            <Image alt="about-page-img" src={grayImg} />
            <div>
               <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore placeat deserunt ipsam tempora, veniam amet quam nobis ullam suscipit, eum excepturi quidem nam a ut, pariatur voluptates iure nisi ipsa.</p>
            </div>
         </section>
         <section className="about-section-2">
            <Image alt="woods" src={woods} />
         </section>
         <section className="about-section-3">
            <div className="accordion">
                <Accordion title="Section 1" content={<p>Content for section 1</p>} />
                <Accordion title="Section 2" content={<p>Content for section 2</p>} />
                <Accordion title="Section 3" content={<p>Content for section 3</p>} />
                <Accordion title="Section 4" content={<p>Content for section 4</p>} />
            </div>
            <div className="faq">
                <h2>Frequently Asked Questions</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut adipisci ipsam corporis cumque, necessitatibus nam. Maiores assumenda sapiente eveniet voluptatibus eligendi illum.</p>
            </div>
         </section>
      </div>
        </div>
    )
}

export default AboutPage