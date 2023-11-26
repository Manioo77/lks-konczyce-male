import Link from "next/link";
import Layout from "@/components/Layout";

export default function History() {
  return (
    <Layout pageTitle="Historia">
      <div>
        <h1>Historia</h1>
        <Link href="/">go home</Link>
      </div>
    </Layout>
  );
}
