import Image from "next/image";
import styles from "./page.module.css";
import jungle  from "@/assets/images/jung.jpg"

const Home = () => {
  return (
   <main className={styles.main}>
      <section className="home-section-1">
        <Image className="home-first-image" alt="jgl" src={jungle} />
        <div>
          <h1>GNC GNC GNC</h1>
        </div>
      </section>
    </main>
  );
}

export default Home