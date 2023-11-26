import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Drużyna">
      <div>
        <h1>Drużyna</h1>
        <Link href="/">go home</Link>
      </div>
    </Layout>
  );
}
