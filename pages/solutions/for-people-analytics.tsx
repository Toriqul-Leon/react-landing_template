import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
  ChartPieIcon,
  DesktopComputerIcon,
  EmojiHappyIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import CallsToAction from "../../lib/cta";
import Head from "next/head";
import ConnectorCount from "../../lib/connector_count";

const ForPeopleAnalytics = () => (
  <>
    <Head>
      <title>Portable | For People Analytics</title>
      <meta
        name="title"
        property="og:title"
        content="Portable: For People Analytics"
      />
      <meta
        name="description"
        property="og:description"
        content="With Portable, you can combine data from all of your human resources tools to retain talent, plan your workforce, and invest in your most critical asset"
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
    name: "See A Unified View Of Your Workforce",
    icon: DesktopComputerIcon,
    description:
      "Centralize data from all of your human resources applications. Portable has no-code connectors to your HRIS system, ATS solution, employee engagement platform, collaboration tools, and more",
  },
  {
    name: "Optimize Your Hiring Funnel",
    icon: SearchCircleIcon,
    description:
      "It's time for you to have the complete picture of hiring. Pull in data from your ATS system, email platform, skills platform, and HRIS system to optimize your job descriptions, and turn more applicants into accepted offers",
  },
  {
    name: "Measure Employee Engagement & Retention",
    icon: EmojiHappyIcon,
    description:
      "You've invested time and money in hiring the best people, now you need to retain them! Centralize data from your collaboration tools and engagement platforms to understand what drives engagement and what indicates a potential departure, so you can keep your best employees",
  },
  {
    name: "Put Your D&I Goals Front And Center",
    icon: ChartPieIcon,
    description:
      "Use data to put your D&I goals front and center. Whether it's representation, training, or talent development, you can't improve what you don't measure. With Portable, you can pull in data from your various tools and platforms to build scorecards and dashboards that truly drive change",
  },
];

const FeatureDetails = () => (
  <div className="relative bg-white py-16 sm:py-24 lg:py-32">
    <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
        For People Analytics
      </h2>
      <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
        Create a unified view of your employees to drive business outcomes
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        With Portable, you can combine data from all of your human resources
        tools to retain talent, plan your workforce, and invest in your most
        critical asset
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
            Unlock the power of data with {ConnectorCount.hr} HR and
            collaboration connectors
          </h3>
          <p className="mt-3 text-lg text-gray-500">
            See a complete picture of your workforce and how each employee
            impacts your business by connecting HR data with collaboration data
            and productivity metrics from across your organization. Empower your
            people analytics team with the data they need.
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
            src="/hr_icons.svg"
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
              Secure, enterprise connectors built for people analytics teams
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Start answering questions with data on the employee lifecycle,
              workforce and labor markets. Drive change by centralizing and
              monitoring diversity and inclusion metrics in an automated way.
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
              src="/people_analytics.svg"
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
          Centralize all of your workforce data to find, engage, and retain
          diverse talent
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

export default ForPeopleAnalytics;
