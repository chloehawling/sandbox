import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>Our Story</h2>
      <p className={styles.text}>
        Happy Tails began with a simple belief: every dog deserves a loving home.
        Founded by passionate animal advocates, we’ve helped hundreds of dogs find their forever families.
        Our mission is rooted in compassion, transparency, and heartfelt care—for both pups and people.
      </p>
      <h3 className={styles.subheading}>Our Values</h3>
      <ul className={styles.values}>
        <li>Kindness to all animals</li>
        <li>Matching the right dog to the right home</li>
        <li>Support for adopters every step of the way</li>
        <li>Promoting responsible pet ownership</li>
      </ul>
    </main>
  );
}