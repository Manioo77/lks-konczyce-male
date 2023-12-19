import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import { getAllNewsIds } from "@/lib/utils";

export default function News({ urls }) {
  return (
    <Layout pageTitle="Aktualności">
      <div>
        <h1>Aktualności</h1>
        <Link href="/">go home</Link>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const ids = getAllNewsIds();
  const urls = ids.map((id) => `/news/${id}`);
  return {
    props: {
      urls,
    },
  };
}
