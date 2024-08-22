import React from "react";
import Holographic from "../../assets/images/holographic.png";
import Rectangle7561 from "../../assets/images/Rectangle 7561.png";
import Button from "../Button/Button";

const Future2 = () => {
  return (
    <div className="relative py-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 py-24 px-3   rounded-3xl bg-[#2EABAF]">
          <div className="px-7 flex flex-col items-start justify-center gap-y-4">
            <span className="lg:text-8xl text-5xl text-white uppercase font-tek leading-tight">
              dont miss out
            </span>
            <p className="font-light text-xl text-[#FFF]">
              Join our community of 30,000+ who receive the best in design and
              video development content weekly.
            </p>
            <div className=" xl:block hidden -z-10 absolute left-0">
              <img src={Holographic} alt="" className=" " />
            </div>
          </div>
          <div className="flex	lg:items-end gap-x-3 lg:justify-evenly lg:flex-row flex-col items-start gap-y-4 px-3 mt-4">
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Your base Email"
                className="px-4 py-2.5 outline-none text-sm w-full placeholder:text-blue-500 rounded-full text-blue-600 bg-[#D4E7F5] "
              />
            </div>
            <div className="w-full">
              <Button className="px-4 py-2.5 text-sm font-semibold text-[#100e0e] bg-[#fff] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                SEE OPENNINGS
              </Button>
            </div>
            <div className="xl:block hidden absolute right-24 rotate-90 -z-10 -top-28">
              <img alt="" src={Rectangle7561} className="  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future2;
