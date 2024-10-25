// components/Navbar.tsx
import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => (
  <nav className={styles.navbar}>
    <Link href="/">Home</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/contact">Contact</Link>
  </nav>
);

export default Navbar;
