import Layout from "@/components/Layout/Layout";
import { getNewsData, getAllNewsIds } from "@/lib/utils";

export default function News({ postData }) {
  const { title, date } = postData;
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
  const ids = getAllNewsIds();
  const paths = ids.map((id) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getNewsData(params.id);
  return {
    props: {
      postData,
    },
  };
}
