import Layout from "@/components/Layout/Layout";
import { getSingleNewsData, getAllNewsBasicData } from "@/lib/utils";

export default function News({ newsData }) {
  const { title, date } = newsData;
  return (
    <Layout pageTitle="Galeria">
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const newsData = getAllNewsBasicData();
  const paths = newsData.map((news) => ({ params: { id: news.id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const newsData = getSingleNewsData(params.id);
  return {
    props: {
      newsData,
    },
  };
}
