import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-700 h-96 flex justify-center items-center lg:gap-40 gap-7 md:flex-col lg:flex-row flex-col ">
      <div className="text-white lg:text-left text-center">
        <h1 className="text-xl font-semibold ">START FOR FREE</h1>
        <p className="sm:w-96 lg:w-full">
          Join the thousands of companies using <br /> Fivertran to centralize
          and transform their data
        </p>
      </div>
      <div>
        <form>
          <div className="flex">
            <input
              className="rounded-full lg:py-4 lg:px-40 pr-24"
              type="email"
              name="mail"
              id=""
            />
            <a
              style={{
                marginLeft: "-50px",
              }}
              href="https://app.portable.io/login"
              className="px-8 py-2 lg:pt-4 bg-yellow-300 no-underline rounded-full text-white font-medium cursor-pointer"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
