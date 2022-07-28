import Link from "next/link";

const navigation = {
  solutions: [
    { name: "For eCommerce", href: "/solutions/for-e-commerce" },
    { name: "For Marketing", href: "/solutions/for-marketing" },
    { name: "For People Analytics", href: "/solutions/for-people-analytics" },
    {
      name: "To Power Your Product",
      href: "/solutions/to-power-your-product",
    },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "https://blog.portable.io" },
    { name: "Security", href: "/security" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

const Footer = () => (
  <footer className="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="xl:col-span-1">
          <Link href="/" passHref>
            <button>
              <img
                className="h-16"
                src="/portable_icon_square.png"
                alt="Portable"
              />
            </button>
          </Link>
          <p className="text-gray-500 text-base mt-8">
            244 5th Avenue, Suite #B43
          </p>
          <p className="text-gray-500 text-base">New York, NY 10001</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
          <div className="md:grid md:grid-cols-3 md:gap-6 col-span-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Company
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 pt-8">
        <p className="text-base text-gray-400 xl:text-center">
          &copy; {new Date().getFullYear()} Portable, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
