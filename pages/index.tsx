import Footer from "../components/Footer";
import Head from "next/head";
import Announcement from "../components/Announcement";
import Header from "../components/Header";
import CallsToAction from "../lib/cta";
import CTA from "../components/CTA";
import ConnectorCount from "../lib/connector_count";

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
    <DropletteTestimonial />
    <CTA />
    <Footer />
  </>
);

const Hero = () => (
  <div className="relative bg-gray-50">
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:pt-36 lg:pb-20 lg:text-left">
        <div className="px-4 sm:px-8 xl:pr-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">ELT connectors</span>{" "}
            <span className="block text-blue-600 xl:inline">built on-demand</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Access {ConnectorCount.total} fully-managed connectors and lightning fast custom development. {" "}
            <span className="text-gray-800 font-bold">Stop searching for the connector you need.</span> We&apos;ll build it for you in less than 24 hours.<br></br><br></br>
            Hands on support. Flat rate pricing. No credit card required.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href={CallsToAction.ExploreTheProduct.href}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-16"
                >
                {CallsToAction.ExploreTheProduct.text}
              </a>           
           </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href={CallsToAction.RequestAConnector.href}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-700 hover:text-white md:py-4 md:text-lg md:px-16"
                >
                {CallsToAction.RequestAConnector.text}
              </a>           
            </div>
          </div>
        </div>
        <div className="h-full mt-4 lg:-mt-8">
          <iframe
            src="https://www.loom.com/embed/84f78dcb72e6493393c8f869082149e4"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </div>
);

const Features = () => (
  <div className="py-16 bg-gray-50 overflow-hidden lg:pt-24 lg:pb-2">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div className="flex flex-col">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Finally, an ELT tool that supports the long tail of business applications
        </h2>
        <div className="flex w-full align-center justify-center">
          <img className="max-w-xl" src="hero.svg" alt="" />
        </div>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
          We specialize in tough to find ELT connectors for analytics teams. No
          more scripts, infrastructure, or missing data. We offer the most
          comprehensive coverage, fastest development, and a catalog of{" "}
          {ConnectorCount.total} ELT connectors to help you get insights fast.
        </p>
      </div>

      <div className="relative mt-16 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Stop reading API documentation, focus on business insights instead
          </h3>
          <p className="mt-3 text-lg text-gray-500">
            Get the data you need at your fingertips, without the hassle. We
            focus on helping analytics teams access and analyze data from
            bespoke systems across the organization.
          </p>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={784}
              height={404}
              fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
            />
          </svg>
          <img
            className="relative mx-auto max-w-lg"
            src="/business_insights.svg"
            alt=""
          />
        </div>
      </div>

      <svg
        className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div className="relative mt-36 lg:mt-12">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              24x7 monitoring, alerting and support
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              We have dedicated resources ready to help with any problems. No
              need to rely on a Slack community for troubleshooting.
            </p>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
              />
            </svg>
            <img
              className="relative mx-auto max-w-md"
              src="/monitoring.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DropletteTestimonial = () => (
  <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <blockquote className="mt-10">
          <svg
            className="absolute top-0 left-0 transform translate-x-12 -translate-y-24 h-36 w-36 text-blue-200 opacity-50"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 144 144"
            aria-hidden="true"
          >
            <path
              strokeWidth={2}
              d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
            />
          </svg>
          <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <p>
              We use Portable for the no-code integrations we couldn&apos;t find
              anywhere else. They built them in a matter of days, and
              proactively monitor our pipelines so I can focus on analytics.
              Portable is reliable, extremely intuitive & super easy to use.
            </p>
          </div>
          <footer className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div className="text-base font-medium text-gray-900">
                  Ryan Nicholas
                </div>

                <svg
                  className="hidden md:block mx-1 h-5 w-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div className="text-base font-medium text-gray-500">
                  Head of Analytics, Droplette
                </div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
);

export default Home;
