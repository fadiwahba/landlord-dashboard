import Head from "next/head";
import styles from "../../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Landlord Studio</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <aside className={styles.nav_wrapper}>
            <Nav />
          </aside>
          <section className={styles.content_wrapper}>{children}</section>
        </main>
        <Footer />
      </div>
    </>
  );
}
