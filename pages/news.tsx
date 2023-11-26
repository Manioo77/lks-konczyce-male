import Link from "next/link";
import Layout from "@/components/Layout/Layout";

export default function News() {
  return (
    <Layout pageTitle="Aktualności">
      <div>
        <h1>Aktualności</h1>
        <Link href="/">go home</Link>
      </div>
    </Layout>
  );
}
