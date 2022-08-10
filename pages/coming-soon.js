import Head from "next/head";
import styles from "../styles/ComingSoon/ComingSoon.module.scss";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/Layout";
import ComingSoonHeader from "../components/Headers/ComingSoonHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha apes - Coming Soon</title>
        <meta name="description" content="Alpha apes - Coming Soon" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Layout header={<ComingSoonHeader />}>
        <ComingSoon />
      </Layout>
    </>
  );
}
