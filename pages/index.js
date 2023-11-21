import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Read <Link href="/posts/first-post">this page!</Link>
        </h1>
      </div>
    </>
  );
}
