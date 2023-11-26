import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Strona główna</h1>
        <ul>
          <li>
            <Link href="/news">/news</Link>
          </li>
          <li>
            <Link href="/team">/team</Link>
          </li>
          <li>
            <Link href="/gallery">/gallery</Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
