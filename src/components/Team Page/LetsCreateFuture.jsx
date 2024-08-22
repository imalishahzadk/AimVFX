import React from "react";
import shape4 from "../../assets/holographic_fluid_drop_shapes_illustration_02 copy 4.png";

import Button from "../Button/Button";


const LetsCreateFuture = () => {
  return (
    <div className="py-48 lg:px-0 px-4 overflow-hidden">
      <div className="stillhavedoubts mx-auto max-w-5xl rounded-3xl flex lg:flex-row flex-col">
        <div className="-mt-40">
          <img src={shape4} className="max-w-lg h-full" alt="doubts" />
        </div>
        <div className="flex flex-col gap-y-6 items-stat py-6">
          <h1 className="lg:text-[90px] text-[60px] text-white font-tek leading-tight uppercase">
            Let’s create our future together
          </h1>
          <span className="text-white font-light text-sm -mt-6 ">
            Customer support is our highest priority. We're here to answer all
            your questions via our Support Docs, Video Demos, and 24/7 Live
            Chat.
          </span>
          <div className="flex items-center gap-x-3">
            <Button className="px-8 py-2.5 uppercase  text-sm border border-white text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white font-semibold active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Available positions
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsCreateFuture;
