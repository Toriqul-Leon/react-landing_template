const { default: Image } = require("next/image");
import bannerBg from "../public/resources/banner-bg-images.png";
import bannerImage from "../public/resources/banner-image.png";

const Hero = () => (
  <div className="relative bg-gray-50 lg:flex ">
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-5xl pt-16 text-center lg:pt-36 lg:pb-20 lg:text-left gap-x-1.5 justify-between">
        <div className="  mx-auto">
          <h1 className="text-2xl tracking-tight  text-gray-500 sm:text-3xl md:text-1xl lg:text-2xl xl:text-4xl max-w-md font-semibold uppercase">
            <span className="   text-gray-600 font-bold">Hubspot </span> To
            <span className="block text-gray-600  font-bold">
              Snoflake{" "}
              <span className="sm:text-3xl md:text-1xl lg:text-2xl xl:text-4xl font-semibold text-gray-500">
                Data
              </span>
            </span>
            <span className="block text-gray-600  font-bold">Cloud ETL</span>
            <span className="block ">Intergration With</span>
            <span className="block text-gray-600 font-bold">Fivertran</span>
          </h1>
        </div>
        <div className="w-full max-w-md  mx-auto  mt-4 lg:-mt-8 px-10">
          <Image src={bannerImage} alt="" className="object-cover" />
        </div>
      </div>
    </div>
    <div className="hidden lg:block absolute top-0.5 right-0">
      <Image height={400} src={bannerBg} alt="" />
    </div>
  </div>
);

export default Hero;
