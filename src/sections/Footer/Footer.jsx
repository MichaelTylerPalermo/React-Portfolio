import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; Michael Palermo LLC 2025. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
