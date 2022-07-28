import Footer from "../components/Footer";
import Header from "../components/Header";
import CallsToAction from "../lib/cta";
import CTA from "../components/CTA";
import Head from "next/head";

const Partners = () => (
  <>
    <Head>
      <title>Portable | Partners</title>
      <meta name="title" property="og:title" content="Portable: Partners" />
      <meta
        name="description"
        property="og:description"
        content="Learn about Portable's partner network to help accelerate your data strategy"
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
    <Footer />
  </>
);

const Hero = () => (
  <div className="relative bg-gray-50">
    <div className="w-full">
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
            Partner Network
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            We work with the best companies in the modern data ecosystem
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Technology and consulting partners to accelerate your data-driven
            ambitions
          </p>
          <div className="mt-10 sm:flex justify-center">
            <div className="rounded-md shadow">
              <a
                href={CallsToAction.BecomeAPartner.href}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-16"
              >
                {CallsToAction.BecomeAPartner.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Partners;
