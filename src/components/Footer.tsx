import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
      &copy; {new Date().getFullYear()} All rights reserved  
    </footer>
  );
};

export default Footer;
