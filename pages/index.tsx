import Footer from "../components/Footer";
import Head from "next/head";
import Info from "../components/Info";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Hero from "../components/Hero";
import ConnectorCount from "../lib/connector_count";
import data from "../data/data.json";

const Home = () => (
  <>
    <Head>
      <title>Portable | ELT Tool for your long tail systems</title>
      <meta
        name="title"
        property="og:title"
        content="Portable: ELT Tool for your long tail systems"
      />
      <meta
        name="description"
        property="og:description"
        content={`With ${ConnectorCount.total} cloud-hosted, 24x7 monitored data warehouse connectors, you can focus on insights and leave the engineering to us.`}
      />
      <meta
        name="image"
        property="og:image"
        content="https://portable.io/og_logo.png"
      />
      <meta name="type" property="og:type" content="website" />
      <meta name="locale" property="og:locale" content="en_US" />
    </Head>
    <Header />
    <Hero />
    <Features />
    <Info />
    <Contact />
    <Footer />
  </>
);

export default Home;
