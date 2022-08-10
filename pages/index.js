import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Headers/Header";
import Hero from "../components/Sections/Hero/Hero";
import About from "../components/Sections/About/About";
import Faq from "../components/Sections/Faq/Faq";
import Footer from "../components/Footer";
import Community from "../components/Sections/Community/Community";
import RoadMap from "../components/Sections/RoadMap/RoadMap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpha apes</title>
        <meta name="description" content="Alpha apes" />
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
      <Layout header={<Header />} footer={<Footer />}>
        <Hero />
        <About />
        <RoadMap />
        <Faq />
        <Community />
      </Layout>
    </>
  );
}
