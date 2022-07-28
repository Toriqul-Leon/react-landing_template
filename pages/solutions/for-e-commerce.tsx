import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  PresentationChartLineIcon,
  QrcodeIcon,
  ShoppingCartIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import CallsToAction from "../../lib/cta";
import Head from "next/head";
import ConnectorCount from "../../lib/connector_count";

const ForECommerce = () => (
  <>
    <Head>
      <title>Portable | For eCommerce</title>
      <meta
        name="title"
        property="og:title"
        content="Portable: For eCommerce"
      />
      <meta
        name="description"
        property="og:description"
        content="With Portable, you can combine data from all of your eCommerce tools to drive growth, streamline operations, and create remarkable shopper experiences"
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
    <FeatureDetails />
    <MoreFeatureDetails />
    <CTA />
    <Footer />
  </>
);

const features = [
  {
    name: "Build A Path To Accelerated Growth",
    icon: PresentationChartLineIcon,
    description:
      "Forecast demand, optimize SKUs, and invest in the right marketing channels to convert more shoppers into buyers. With a complete view into your omni-channel buyer experience, you'll have data to invest strategically in a path to accelerated growth",
  },
  {
    name: "Optimize The Shopping Experience",
    icon: ShoppingCartIcon,
    description:
      "Power the insights you need to optimize the shopping experience. By combining data from your eCommerce platform, 3PL, PIM tool, and marketing stack, you can finally optimize the end-to-end experience with a centralized view",
  },
  {
    name: "Streamline Shipment Operations",
    icon: QrcodeIcon,
    description:
      "With supply chain costs 2-4x prior years, it's critical to ruthlessly optimize where you store, ship, and sell your products. Unlock the insights you need to get your product where it needs to be just in time for buyers. Finally, a complete view of shipping operations",
  },
  {
    name: "Drive Referrals With Great Experiences",
    icon: EmojiHappyIcon,
    description:
      "Return buyers generate subscription revenue, referrals, and exponential growth. Make sure you have the data at your fingertips to support clients when they have problems, and convert customers into advocates when they have a great experience",
  },
];

const FeatureDetails = () => (
  <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
        For eCommerce
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        Portable powers brands that build on the cutting edge
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        With Portable, you can combine data from all of your eCommerce tools to
        drive growth, streamline operations, and create remarkable shopper
        experiences
      </p>
      <div className="mt-12 lg:mt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.name} className="pt-6">
              <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                    {feature.name}
                  </h3>
                  <p className="mt-5 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MoreFeatureDetails = () => (
  <div className="py-16 bg-gray-50 overflow-hidden">
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

      <div className="relative mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="relative">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            Get the full picture with {ConnectorCount.ecommerce} eCommerce
            specific connectors
          </h3>
          <p className="mt-3 text-lg text-gray-500">
            With our expansive collection of eCommerce connectors that grows
            every week, you can see deeper into your sales and fulfillment
            operations than ever before.
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
            src="/full_picture.svg"
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

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              We specialize in solving eCommerce problems with data
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              The applications you use, the data you need, and the insights your
              company is looking for. Stop trying to use generic data
              integrations tools to power your eCommerce operations.
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
              className="relative mx-auto max-w-lg"
              src="/ecommerce_data.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CTA = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">
          Centralize all of your eCommerce data for streamlined operations and
          remarkable customer experiences
        </span>
      </h2>
      <div className="mt-8 flex justify-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href={CallsToAction.GetStarted.href}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            {CallsToAction.GetStarted.text}
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ForECommerce;
