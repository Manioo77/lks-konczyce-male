import Link from "next/link";
import Layout from "@/components/Layout/Layout";
import { getAllNewsBasicData } from "@/lib/utils";

export default function News({ newsData }) {
  console.log("🚀 newsData:", newsData);
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
  const newsData = getAllNewsBasicData();
  return {
    props: {
      newsData,
    },
  };
}
