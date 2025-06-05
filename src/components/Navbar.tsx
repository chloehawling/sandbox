import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link to="/" className={styles.logo}>
          Happy Tails
        </Link>
      </div>
      <div className={styles.links}>
        <NavLink to="/adopt" className={({isActive}) => isActive ? styles.active : ""}>
          Adopt
        </NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ""}>
          About
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? styles.active : ""}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}