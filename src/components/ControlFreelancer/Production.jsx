import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import button1055007 from "../../assets/images/play-button_1055007 1.png";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const Production = () => {
  return (
    <div>
      <div className="bg-[#0B1A2880] px-5 py-3 my-3 rounded-lg ring-1 ring-gray-400">
        <div className=" flex gap-6 lg:flex-row flex-col justify-between items-center">
          <div className="box-border">
            <h1 className="text-[25px] sm:text-[35px] font-tek">
              789654 - LOREM_IPSUM_1200X628_SS
            </h1>
            <span className="flex items-center gap-3">
              <PlayCircleIcon className="h-6 w-6 text-white" />

              <p>vIDEO pRODUCTION</p>
            </span>
          </div>
          <button>
            <img src="src/assets/images/Frame 469370.png" alt="" />
          </button>
        </div>

        <div className=" flex justify-end gap-3 items-end">
          <PencilSquareIcon className="h-6 w-6 text-gray-400" />

          <TrashIcon className="h-6 w-6 text-gray-400" />

          <EllipsisHorizontalIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Production;
