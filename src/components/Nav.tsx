import Link from "next/link";
import styles from "../../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.active}>Dashboard</a>
      </Link>
      <Link href="/your-docs">
        <a>Your Documents</a>
      </Link>
      <Link href="/maintenance-requests">
        <a>Maintenance Requests</a>
      </Link>
    </nav>
  );
}
