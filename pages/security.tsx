import Footer from "../components/Footer";
import Header from "../components/Header";
import CallsToAction from "../lib/cta";
import {
  KeyIcon,
  ShieldExclamationIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";
import Info from "../components/Info";
import Head from "next/head";

const Security = () => (
  <>
    <Head>
      <title>Portable | Security</title>
      <meta name="title" property="og:title" content="Portable: Security" />
      <meta
        name="description"
        property="og:description"
        content="Built from the ground up with enterprise security, privacy, and compliance"
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
    <Footer />
  </>
);

const Hero = () => (
  <div className="relative bg-gray-50">
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:pt-36 lg:pb-20 lg:text-left">
        <div className="px-4 sm:px-8 xl:pr-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">
              Built from the ground up with enterprise security, privacy, and
              compliance
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            We have robust policies, procedures, and controls to ensure your
            data is managed securely. Reach out for our InfoSec summary, or
            schedule a deep dive into our controls
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href={CallsToAction.TalkToAnExpert.href}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-16"
              >
                {CallsToAction.TalkToAnExpert.text}
              </a>
            </div>
          </div>
        </div>
        <div className="h-full lg:-mt-8">
          <img className="w-md lg:w-full" src="/security.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
);

const features = [
  {
    name: "We Build For A Zero Trust World",
    description:
      "Architected on top of Google Cloud Platform, we're building towards a world of zero trust. We implement role-based access control, multi-factor authentication, and other best practices",
    icon: ShieldExclamationIcon,
  },
  {
    name: "Robust Policies, Procedures, Controls",
    description:
      "As part of our Information Security Management System (ISMS), we have a security manual, employee manual, employee lifecycle processes, IT asset management procedures, and detailed controls to protect your data",
    icon: KeyIcon,
  },
  {
    name: "Ephemeral Pipes For Data",
    description:
      "Data is only in our system as long as it is needed to accomplish your goals. If you're syncing data to a warehouse, we load the data, and it's gone from our system",
    icon: SwitchHorizontalIcon,
  },
];

const Features = () => (
  <div className="py-24 bg-white">
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">A better way to send money.</h2>
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        {features.map((feature) => (
          <div key={feature.name}>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                {feature.name}
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              {feature.description}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
);

export default Security;
