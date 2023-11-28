import Link from "next/link";
import Image from "next/image";
import styles from "styles/404.module.scss";
import logo from "public/icons/logo.svg";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>Uppps! Strona nie istnieje</h1>
      <Image src={logo} alt="Logo LKS Kończyce Małe" className={styles.logo} />
      <Link href="/">wróć na główną</Link>
    </div>
  );
}
