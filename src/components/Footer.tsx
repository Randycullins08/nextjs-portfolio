// components/Footer.tsx
import React from "react";
import styles from "../styles/footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {/* Add more social links if needed */}
      </div>
    </footer>
  );
};

export default Footer;
