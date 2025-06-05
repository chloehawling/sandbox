import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h2>404 – Page Not Found</h2>
      <p>Oops, looks like you wandered off the path!</p>
      <Link className={styles.link} to="/">Go Home</Link>
    </main>
  );
}