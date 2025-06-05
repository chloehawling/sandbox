import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div>
        © {year} Happy Tails
      </div>
      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          Instagram
        </a>
        <span>·</span>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          Facebook
        </a>
      </div>
    </footer>
  );
}