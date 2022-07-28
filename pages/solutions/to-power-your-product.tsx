import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  ClipboardListIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import CallsToAction from "../../lib/cta";
import Head from "next/head";
import ConnectorCount from "../../lib/connector_count";

const ToPowerYourProduct = () => (
  <>
    <Head>
      <title>Portable | To Power Your Product</title>
      <meta
        name="title"
        property="og:title"
        content="Portable: To Power Your Product"
      />
      <meta
        name="description"
        property="og:description"
        content="With Portable, you can offer clients no-code integrations that connect their systems to your product - stop creating friction, and start closing deals"
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
    name: "Increase Your Addressable Market",
    icon: SpeakerphoneIcon,
    description:
      "Stop disqualifying prospects based on the tools they use. By offering no-code connectors to more tools, you can increase your addressable market and provide clients with a seamless onboarding experience regardless of their tech stack",
  },
  {
    name: "Close Deals Faster By Removing Objections",
    icon: ThumbUpIcon,
    description:
      "If your solution doesn't integrate with the tools your prospects request, it introduces friction, cost, and more stakeholders to your prospect's plate. With Portable, you can close deals faster with no-code connectors to the systems they need",
  },
  {
    name: "Streamline Customer Implementation",
    icon: SparklesIcon,
    description:
      "The perfect time to gather referrals, case studies, and to expand client contracts is after a seamless implementation. But, when you ask clients to export data from other tools and load it into your platform, it causes pain, not happiness. Create remarkable first impressions with no-code implementations",
  },
  {
    name: "Inform Your Integrations Road Map",
    icon: ClipboardListIcon,
    description:
      "Your product and engineering team wants to build integrations, and you should. But do you know which integrations will be most valuable, most strategic, or most used? With Portable, you'll have perfect insight into which integrations are actually important before writing your first line of code",
  },
];

const FeatureDetails = () => (
  <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
        To Power Your Product
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        Offer clients a simple way to connect their tools to your product
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        With Portable, you can offer clients no-code integrations that connect
        their systems to your product - stop creating friction and start closing
        deals
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
            Power Your Product With {ConnectorCount.total} No-Code Connectors
          </h3>
          <p className="mt-3 text-lg text-gray-500">
            In addition to our unparalleled catalog of prebuilt connectors,
            we&apos;ll work with you to identify and then build the connectors
            your clients need. We&apos;ve been in your shoes, and we know that
            each business has it&apos;s own ecosystem of partners. We&apos;ll do
            the development work, so you can sell your product
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
            src="/embed_1.svg"
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
              Clean and packaged data - empowering you to build the products
              your clients will love
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Stop writing scripts, stop cleaning data, and start focusing on
              building core product. Portable extracts, schematizes, and loads
              the data, so you can focus on creating value for clients.
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
              src="/embed_2.svg"
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
          Offer clients unparalleled connectivity without the maintenance burden
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

export default ToPowerYourProduct;
