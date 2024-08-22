import React from "react";
import Illustration from "../../assets/images/Illustration.png";
import Rectangle3 from "../../assets/images/Rectangle 7562.png";
import Button from "../Button/Button";

const Helpus = () => {
  return (
    <div className="bg-gradient-to-br from-[#013b49] to-[#29b6bd] p-4 sm:p-6 lg:p-32">
      <div className="flex flex-col-reverse lg:flex-row items-center mx-auto max-w-7xl">
        <div className="flex flex-col gap-y-4 lg:gap-y-3 lg:w-1/2 text-center lg:text-left">
          <span className="text-[28px] sm:text-[35px] lg:text-[100px] font-tek text-white uppercase">
            Find Out How We Can Help You
          </span>
          <div className="w-full lg:w-96">
            <p className="text-white text-[14px] sm:text-[16px] lg:text-[18px]">
              We have worked together with a ton of different companies from
              around the world, providing top quality videos and creatives.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-4 sm:gap-x-3">
            <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-[#fff] rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Book A Call
            </Button>
            <Button
              onClick={() => navigate("/signin")}
              className="px-4 py-2.5 text-sm font-semibold text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
            >
              Choose A Plan
            </Button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={Rectangle3}
            alt="img"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Helpus;
