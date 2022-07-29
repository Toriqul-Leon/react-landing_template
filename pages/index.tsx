import Footer from "../components/Footer";
import Head from "next/head";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import CallsToAction from "../lib/cta";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import ConnectorCount from "../lib/connector_count";
import bannerImage from "../public/resources/banner-image.png";
import Image from "next/image";
import logo1 from "../public/resources/hubspot.png";
import logo2 from "../public/resources/snowflake.png";
import bannerBg from "../public/resources/banner-bg-images.png";

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
    <Announcement />
    <Header />
    <Hero />
    <Features />
    {/* <CTA /> */}
    <Contact></Contact>
    <Footer />
  </>
);

const Hero = () => (
  <div className="relative bg-gray-50 lg:flex ">
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-5xl pt-16 text-center lg:pt-36 lg:pb-20 lg:text-left gap-x-1.5 justify-between">
        <div className="  mx-auto">
          <h1 className="text-2xl tracking-tight  text-gray-500 sm:text-3xl md:text-1xl lg:text-2xl xl:text-4xl max-w-md font-semibold uppercase">
            <span className="   text-gray-600 font-bold">Hubspot </span> To
            <span className="block text-gray-600  font-bold">
              Snoflake{" "}
              <span className="sm:text-3xl md:text-1xl lg:text-2xl xl:text-4xl font-semibold text-gray-500">
                Data
              </span>
            </span>
            <span className="block text-gray-600  font-bold">Cloud ETL</span>
            <span className="block ">Intergration With</span>
            <span className="block text-gray-600 font-bold">Fivertran</span>
          </h1>
        </div>
        <div className="w-full max-w-md  mx-auto  mt-4 lg:-mt-8 px-10">
          <Image src={bannerImage} alt="" className="object-cover" />
        </div>
      </div>
    </div>
    <div className="hidden lg:block absolute top-5 right-80">
      <Image height={400} src={bannerBg} alt="" />
    </div>
  </div>
);

const Features = () => (
  <div className=" bg-gray-50 overflow-hidden lg:pt-12 lg:pb-20 pb-10">
    <div className=" max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl mt-8">
      <div className="flex flex-col">
        <div>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            WHAT WE DO
          </h2>
          {/* <div className="flex w-full align-center justify-center">
          <img className="max-w-xl" src="hero.svg" alt="" />
        </div> */}
          <p className="mt-4 lg:w-2/5 md:w-3/5 mx-auto text-center lg:text-xl text-gray-700 font-semibold px-6 lg:px-0">
            Connect all your data sources to a data warehouse in minutes not
            months
          </p>
        </div>

        <div className="flex lg:flex-row md:flex-col flex-col  justify-center gap-14 items-center mt-5">
          {" "}
          <div className="max-w-sm bg-white rounded-2xl border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-600 w-96">
            <div className="flex flex-col justify-center items-center h-80 ">
              <div>
                <Image width={90} height={50} src={logo1} alt="hubspot logo" />
              </div>

              <small className="text-center w-64 font-medium mt-4">
                HubSpot is an inbound marketing and sales platform that helps
                companies attract visitors and convert, convert leaders and
                close customers.
              </small>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-2xl border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-600 w-96 ">
            <div className="flex flex-col justify-center items-center h-80">
              <div>
                <Image
                  width={90}
                  height={60}
                  src={logo2}
                  alt="snowflake logo"
                />
              </div>

              <small className="text-center w-64 font-medium mt-4">
                HubSpot is an inbound marketing and sales platform that helps
                companies attract visitors and convert, convert leaders and
                close customers.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
