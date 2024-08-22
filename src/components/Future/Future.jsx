import React from "react";
import Button from "../Button/Button";
import Arrow from "../../assets/images/arrow logo.png";
const Future = () => {
  return (
    <div className=" lg:px-56  px-3">
      <div className="grid xl:grid-cols-2  py-10 rounded-3xl bg-[#2EABAF] px-3 ">
        <div className="xl:block hidden relative">
          <div className=" absolute -inset-y-10 -top-16 ">
            <img src={Arrow} alt="" className="" />
          </div>
        </div>
        <div className=" flex flex-col w-full items-start gap-y-3">
          <h2 className="lg:text-[80px] text-[50px] text-white uppercase font-tek leading-tight">
            let’s create our future together
          </h2>
          <p className="text-[#fff] lg:mt-0 -mt-3">
            Don't forget to check out our careers page to see available
            ositions.
          </p>

          <Button className="px-8 py-2.5 mt-2 text-sm font-semibold text-[#100e0e] bg-[#fff] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            SEE OPENNINGS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Future;
