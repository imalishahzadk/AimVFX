import React from "react";
import doubts from "../../assets/doubts.png";
import Button from "../Button/Button";
import "./StillHaveDoubts.css"
const StillHaveDoubts = () => {
  return (
    <div className="pt-[120px] lg:px-0 px-4">
      <div className="stillhavedoubts mx-auto max-w-5xl rounded-3xl flex lg:flex-row flex-col  pt-10">
        <div className="-mt-40">
          <img src={doubts} className="" alt="doubts" />
        </div>
        <div className="flex flex-col gap-y-6 items-stat lg:px-0 px-3 lg:py-0 pt-3 pb-6">
          <h1 className="lg:text-[80px] text-[60px] text-white font-tek leading-tight uppercase">
            Still Have Doubts?
          </h1>
          <span className="text-white font-light text-sm -mt-6 ">
            Customer support is our highest priority. We're here to answer all
            your questions via our Support Docs, Video Demos, and 24/7 Live
            Chat.
          </span>
          <div className="flex items-center gap-x-3">
            <Button className="px-8 py-2.5 text-[16px] font-bold bg-transparent text-white hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Book a call
            </Button>
            <Button className="px-8 py-2.5 uppercase text-[16px] bg-white rounded-full font-medium text-black hover:bg-gray-200 hover:text-black transition-colors duration-300">
              Choose a Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StillHaveDoubts;
