import { dogs } from "../data/dogs";
import DogCard from "../components/DogCard";
import styles from "./Adopt.module.css";

export default function Adopt() {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Meet Our Adoptable Dogs</h2>
      <div className={styles.grid}>
        {dogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </main>
  );
}