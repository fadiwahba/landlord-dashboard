import styles from "../../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header_wrapper}>
      <div className={styles.logo}>
        <Image
          src="/landlord-studio-logo.png"
          alt="Landlord Studio"
          width={203}
          height={30}
        />
      </div>
      <div className={styles.account_text}>
        demo@landlord.com
      </div>
    </header>
  );
};

export default Header;
