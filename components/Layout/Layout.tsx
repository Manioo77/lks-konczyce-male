import Head from "next/head";
import styles from "./Layout.module.scss";

export default function Layout({ children, pageTitle = "LKS Kończyce Małe" }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Strona klubowa zespołu LKS Kończyce Małe dla piłkarzy i kibiców. Aktualności, ostatnie mecze, tabela i statystyki. "
        />
      </Head>
      {/* <Header/> */}
      <main className={styles.footballPitch}>{children}</main>
      {/* <Footer/> */}
    </>
  );
}
