import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import Screenshot from "../../assets/images/Screenshot 2024-01-29 at 12.00 1.png";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
const ProductionVideo = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col mt-2 gap-3">
        <div className="">
          <img src={Screenshot} alt="" className="sm:h-full :w-full" />
        </div>
        <div className="w-full bg-[#0B1A2880] px-5 py-3  rounded-lg ring-1 ring-gray-400">
          <div className="flex sm:flex-row flex-col justify-between items-center">
            <div className="box-border">
              <h1 className="text-3xl sm:text-4xl font-tek">
                789654 - LOREM_IPSUM_1200X628_SS
              </h1>
              <span className="flex items-center gap-3">
                <PlayCircleIcon className="h-6 w-6 text-white" />

                <p>vIDEO pRODUCTION</p>
              </span>
              <div className="flex pt-3 font-tek">
                <span>
                  <button className="px-4 py-3 rounded-[50%] bg-[#D55757] font-medium">
                    GF
                  </button>
                </span>
                <span>
                  <button className="px-4 py-3 rounded-[50%] bg-[#00ffff] font-medium">
                    AI
                  </button>
                </span>

                <span>
                  <button className="px-4 py-3 rounded-[50%] bg-[#57D5CE] font-medium">
                    TJ
                  </button>
                </span>
              </div>
            </div>
            <div className="py-5 sm:py-0">
              <button className="py-1 px-2 rounded-xl bg-[#D7B14F] opacity-90">
                In Review
              </button>
              <p className="text-base font-light font-tek">Due in 2 days</p>
            </div>
          </div>

          <div className=" flex justify-end gap-3 items-end">
            <PencilSquareIcon className="h-6 w-6 text-gray-400" />

            <TrashIcon className="h-6 w-6 text-gray-400" />

            <EllipsisHorizontalIcon className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionVideo;
