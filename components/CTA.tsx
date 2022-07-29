import Image from "next/image";
import techBg from "../public/resources/technology-bg.png";

const CTA = () => (
  <div className="bg-white lg:mt-12 lg:w-3/4 md:w-full mx-auto">
    <div
      className="flex flex-col items-center justify-center lg:w-full md text-center"
      style={{
        backgroundImage: `url(/resources/technology-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >
      <h6 className="font-medium leading-loose md:text-sm lg:text-lg ">
        WASTE LESS TIME, SPEND LESS MONEY, AND SCALE ANYTIME
      </h6>
      <h2 className="font-medium lg:text-2xl md:text-md leading-loose">
        DATA PIPELINES, REINVENTED.{" "}
      </h2>
      <p className="font-medium lg:text-base md:text-xs">
        With 100+ connectors and counting, we ensure the data in your warehouse{" "}
        <br />
        is always up to date and accessible by analysts.
      </p>
      <a
        className="underline font-semibold leading-loose lg:text-base md:text-xs"
        href="#"
      >
        VIEW DOCUMENTATION
      </a>
    </div>
  </div>
);

export default CTA;
