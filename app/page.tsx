import HomePageSlider from "@/components/partials/slider";
import styles from "./page.module.css";

const Home = () => {
  return (
   <main className={styles.main}>
      <HomePageSlider />
    </main>
  );
}

export default Home