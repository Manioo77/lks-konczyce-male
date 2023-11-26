import Head from "next/head";

export default function Layout({ children, pageTitle = "LKS Kończyce Małe" }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Strona klubowa zespołu LKS Kończyce Małe dla piłkarzy i kibiców. Aktualności, ostatnie mecze, tabela i statystyki. "
        />
      </Head>
      <main>{children}</main>
    </div>
  );
}
