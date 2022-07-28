import CallsToAction from "../lib/cta";

const CTA = () => (
  <div className="bg-blue-700">
    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        <span className="block">Stop waiting for your data.</span>
        <span className="block">Start using Portable today.</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-blue-200">
        Pioneer insights and streamline operations with data from all your
        business applications.
      </p>
      <a
        href={CallsToAction.GetStarted.href}
        className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
      >
        {CallsToAction.GetStarted.text}
      </a>
    </div>
  </div>
);

export default CTA;
