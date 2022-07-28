import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Link from "next/link";

const Announcement = () => {
  const [show, setShow] = useState(false);

  if (!show) {
    return <></>;
  }

  return (
    <div className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">
              We launched a blog for data teams!
            </span>
            <span className="hidden md:inline">
              We launched a blog to share ideas for data teams!
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <Link href="https://blog.portable.io" passHref>
                <a className="text-white font-bold underline">
                  {" "}
                  Check it out <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setShow(false)}
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
