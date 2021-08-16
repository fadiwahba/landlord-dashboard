import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaEdit, FaTachometerAlt, FaWrench } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.active}><FaTachometerAlt /> Dashboard</a>
      </Link>
      <Link href="/your-docs">
        <a><FaEdit /> Your Documents</a>
      </Link>
      <Link href="/maintenance-requests">
        <a><FaWrench /> Maintenance Requests</a>
      </Link>
    </nav>
  );
}
