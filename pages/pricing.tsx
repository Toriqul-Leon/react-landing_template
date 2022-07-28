import Footer from "../components/Footer";
import Header from "../components/Header";
import { CheckIcon } from "@heroicons/react/outline";
import Head from "next/head";
import ConnectorCount from "../lib/connector_count";

const Pricing = () => (
  <>
    <Head>
      <title>Portable | Pricing</title>
      <meta name="title" property="og:title" content="Portable: Pricing" />
      <meta
        name="description"
        property="og:description"
        content={`With ${ConnectorCount.total} cloud-hosted, 24x7 monitored data warehouse connectors, you can focus on insight and leave the engineering to us.`}
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
    <PricingDetails />
    <Footer />
  </>
);

export default Pricing;

const tiers = [
  {
    title: "Manually triggered syncs",
    custom: "Free",
    description: "Start replicating data today",
    features: [
      "Free to try and free to use",
      "Load data when you need it",
      "From any source",
      "To any data warehouse",
    ],
    mostPopular: false,
    cta: "Start Free",
    href: "https://app.portable.io/login",
  },
  {
    title: "Automated data replication",
    price: 2000,
    frequency: "/year",
    description: "Run your data flows on a cadence",
    features: [
      "Priced per scheduled data flow",
      "Daily sync frequency",
      "From any source",
      "To any data warehouse",
    ],
    mostPopular: true,
    cta: "Get In Touch",
    href: "https://meetings.hubspot.com/ethan-aaron",
  },
  {
    title: "Tailored business solutions",
    custom: "Custom",
    description: "Let's chat through your needs",
    features: [
      "Enterprise requirements",
      "API interfaces",
      "Custom SLAs and support",
      "OEM and reseller solutions",
    ],
    mostPopular: false,
    cta: "Get In Touch",
    href: "https://meetings.hubspot.com/ethan-aaron",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const PricingDetails = () => (
  <div className="max-w-7xl mx-auto py-24 px-4 bg-white sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
      Find the plan that&apos;s right for you
    </h2>

    {/* Tiers */}
    <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
      {tiers.map((tier) => (
        <div
          key={tier.title}
          className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
        >
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {tier.title}
            </h3>
            {tier.mostPopular ? (
              <p className="absolute top-0 py-1.5 px-4 bg-blue-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                Most popular
              </p>
            ) : null}
            <p className="mt-4 flex items-baseline text-gray-900">
              {tier.custom ? (
                <span className="text-5xl font-extrabold tracking-tight">
                  {tier.custom}
                </span>
              ) : (
                <>
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${tier.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {tier.frequency}
                  </span>
                </>
              )}
            </p>
            <p className="mt-6 text-gray-500">{tier.description}</p>

            {/* Feature list */}
            <ul role="list" className="mt-6 space-y-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex">
                  <CheckIcon
                    className="flex-shrink-0 w-6 h-6 text-blue-500"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={tier.href}
            className={classNames(
              tier.mostPopular
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100",
              "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            )}
          >
            {tier.cta}
          </a>
        </div>
      ))}
    </div>
  </div>
);
