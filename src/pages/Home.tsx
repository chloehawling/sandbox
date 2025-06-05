import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero} style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className={styles.overlay}>
          <h1 className={styles.headline}>Find Your New Best Friend</h1>
          <p className={styles.mission}>
            At Happy Tails, we’re dedicated to matching loving dogs with wonderful humans. Start your journey to a happier, furrier life today!
          </p>
          <Link className={styles.cta} to="/adopt">
            See Adoptable Dogs
          </Link>
        </div>
      </div>
    </main>
  );
}