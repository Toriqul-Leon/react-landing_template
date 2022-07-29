import Image from "next/image";
import techBg from "../public/resources/technology-bg.png";

const CTA = () => (
  <div className="relative mt-36 lg:mt-12 lg:w-3/4 md:w-full mx-auto ">
    <Image className="w-full h-full object-cover " src={techBg} alt="" />

    <div
      className="text-center absolute top-2/4 left-2/4  leading-relaxed"
      style={{
        transform: "translate(-50%, -50%)",
      }}
    >
      <h6 className="font-medium leading-loose md:text-xs lg:text-lg">
        WASTE LESS TIME, SPEND LESS MONEY, AND SCALE ANYTIME
      </h6>
      <h2 className="font-medium lg:text-2xl md:text-md leading-loose">
        DATA PIPELINES, REINVENTED.{" "}
      </h2>
      <p className="font-medium lg:text-base md:text-xs">
        With 100+ connectors and counting, we ensure the data in your warehouse
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
