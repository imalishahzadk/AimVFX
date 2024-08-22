import React from "react";
import Group from "../../assets/images/Group1.png";
import Screenshot2024 from "../../assets/images/Screenshot2024.png";
import Button from "../Button/Button";

const Vfx = () => {
  return (
    <div>
      <div className="flex items-center mx-auto max-w-6xl">
        <div className="relative">
          <div>
            <img src={Group} alt="img" className=" hidden md:block" />
          </div>
          <div className=" absolute left-3 md:left-30 top-[170px] w-[350px] md:w-[80%] lg:w-[80%]">
            <img src={Screenshot2024} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="team-hero-heading text-white uppercase mt-10 text-4xl font-tek">
            find out how we can help you
          </span>
          <div className="w-96">
            <p className="font-light text-[16px] md:text-[20px] lg:text-[20px] text-white">
              We have worked together with a ton of different companies from
              around the world, providing top quality videos and creatives.
            </p>
          </div>
          <div className=" sm:flex flex-col sm:flex-row sm:items-center sm:ml-6 gap-x-3">
            <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-[#fff] rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Book A Call
            </Button>
            <Button
              onClick={() => navigate("/signin")}
              className="px-8 py-2.5 text-sm font-semibold text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
            >
              CHOOSE A PLAN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vfx;
