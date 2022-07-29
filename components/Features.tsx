import Image from "next/image";
import data from "../data/data.json";

const Features = () => (
  <div className=" bg-gray-50 overflow-hidden lg:pt-12 lg:pb-20 pb-10">
    <div className=" max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl mt-8">
      <div className="flex flex-col">
        <div>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
            WHAT WE DO
          </h2>

          <p className="mt-4 lg:w-2/5 md:w-3/5 mx-auto text-center lg:text-xl text-gray-700 font-semibold px-6 lg:px-0">
            Connect all your data sources to a data warehouse in minutes not
            months
          </p>
        </div>

        <div className="flex lg:flex-row md:flex-col flex-col  justify-center gap-14 items-center mt-5">
          {" "}
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-sm bg-white rounded-2xl border border-gray-100 shadow-md dark:bg-gray-800 dark:border-gray-600 w-96"
              >
                <div className="flex flex-col justify-center items-center h-80 ">
                  <div>
                    <Image width={90} height={40} src={item.logo} alt="logo" />
                  </div>

                  <small className="text-center w-64 font-medium ">
                    {item["description"]}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export default Features;
