import { Dog } from "../data/dogs";
import styles from "./DogCard.module.css";

interface Props {
  dog: Dog;
}

export default function DogCard({ dog }: Props) {
  const handleAdoptClick = () => {
    console.log(`Adopt Me clicked for ${dog.name} (id: ${dog.id})`);
  };

  return (
    <div className={styles.card}>
      <img className={styles.image} src={dog.image} alt={dog.name} />
      <div className={styles.info}>
        <h3>{dog.name}</h3>
        <div className={styles.meta}>
          <span className={styles.breed}>{dog.breed}</span>
          <span className={styles.age}>{dog.age}</span>
        </div>
        <p className={styles.desc}>{dog.description}</p>
        <button className={styles.button} onClick={handleAdoptClick}>Adopt Me</button>
      </div>
    </div>
  );
}