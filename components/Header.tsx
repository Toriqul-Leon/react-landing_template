import {
  CurrencyDollarIcon,
  LightningBoltIcon,
  MenuIcon,
  SpeakerphoneIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import CallsToAction from "../lib/cta";
import Link from "next/link";

const solutions = [
  {
    name: "For eCommerce",
    href: "/solutions/for-e-commerce",
    description:
      "Drive growth, streamline operations, and create remarkable shopper experiences",
    icon: CurrencyDollarIcon,
  },
  {
    name: "For Marketing",
    href: "/solutions/for-marketing",
    description:
      "Build audiences, analyze campaigns, and create remarkable customer experiences",
    icon: SpeakerphoneIcon,
  },
  {
    name: "For People Analytics",
    href: "/solutions/for-people-analytics",
    description:
      "Hire and retain the best workforce with centralized data for people analytics",
    icon: UserCircleIcon,
  },
  {
    name: "To Power Your Product",
    href: "/solutions/to-power-your-product",
    description:
      "Close deals and streamline implementation with no-code connectors into your product",
    icon: LightningBoltIcon,
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => (
  <Popover className="relative bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/">
            <a>
              <span className="sr-only">Portable</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/portable_logo_black.png"
                alt="Portable Logo"
              />
            </a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 lg:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden lg:flex space-x-10">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-gray-900" : "text-gray-500",
                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-gray-400",
                      "ml-2 h-5 w-5 group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {solutions.map((item) => (
                          <Link href={item.href} key={item.name}>
                            <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-blue-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Link href="/pricing">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </a>
          </Link>

          <Link href="/partners">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Partners
            </a>
          </Link>

          <Link href="/security">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Security
            </a>
          </Link>

          <Link href="https://blog.portable.io">
            <a className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </a>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
          <Link href={CallsToAction.GetADemo.href}>
            <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              {CallsToAction.GetADemo.text}
            </a>
          </Link>
          <Link href={CallsToAction.GetStarted.href}>
            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              {CallsToAction.GetStarted.text}
            </a>
          </Link>
        </div>
      </div>
    </div>

    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right lg:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-16 w-auto"
                  src="/portable_icon_square.png"
                  alt="Portable"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {solutions.map((item) => (
                  <Link href={item.href} key={item.name}>
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-3 gap-y-4 gap-x-8">
              <Link href="/pricing">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Pricing
                </a>
              </Link>

              <Link href="/partners">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Partners
                </a>
              </Link>

              <Link href="/security">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Security
                </a>
              </Link>

              <Link href="https://blog.portable.io">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>
              </Link>
            </div>
            <div>
              <Link href={CallsToAction.StartFree.href}>
                <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                  {CallsToAction.StartFree.text}
                </a>
              </Link>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{" "}
                <Link href={CallsToAction.SignIn.href}>
                  <a className="text-blue-600 hover:text-blue-500">
                    {CallsToAction.SignIn.text}
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Header;
