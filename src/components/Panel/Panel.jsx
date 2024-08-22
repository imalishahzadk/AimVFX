import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { Bars2Icon } from "@heroicons/react/24/outline";

import PanelLeft from "./PanelLeft";
import PanelRight from "./PanelRight";
import Production from "../ControlFreelancer/Production";
import ProductionVideo from "../ControlFreelancer/ProductionVideo";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Panel = () => {
  const data = [
    {
      num: +99,
      text: "All",
    },
    {
      num: 8,
      text: "Ongoing",
    },
    {
      num: 10,
      text: "Draft",
    },
    {
      num: 2,
      text: "Completed",
    },
    {
      num: 2,
      text: "In Review",
    },
  ];

  return (
    <div className="solution-page py-20">
      <div className="px-9 grid xl:grid-cols-8 text-white gap-4 lg:mt-10">
        <div className=" xl:col-span-2 ">
          <PanelLeft />
        </div>
        <div className=" col-span-full xl:col-span-4 ">
          <div className="w-full gap-y-4 bg-[#0B1A2880] flex md:flex-row flex-col  items-center justify-between px-3 py-5 rounded-lg ring-1 ring-gray-400">
            <div className="flex items-center gap-x-6 ">
              <span className="text-3xl uppercase sm:pl-14">Projects</span>

              <button className="uppercase bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-semibold py-1.5 px-3 rounded-full mr-2">
                Create project
              </button>
            </div>
            <div className="flex items-center border-[1px] rounded-full py-1 px-2">
              <MagnifyingGlassIcon className="h-6 w-6 text-white" />

              <input
                type="text"
                placeholder="Search for name"
                className="outline-none placeholder:text-[#FFFFFF] w-full bg-inherit "
              />
            </div>
          </div>
          <div className="py-2 lg:flex flex-wrap gap-4 justify-between items-center">
            <div className=" py-5 lg:py-2 grid grid-cols-2 lg:grid-cols-4  gap-5  xl:flex justify-between">
              {data?.map((item, ind) => {
                return (
                  <span className=" py-2.5 rounded-md bg-[#0B1A2880]">
                    <span className="px-3 py-3 rounded-md bg-gradient-to-bl from-[#02363a] to-[#2cb2b6]">
                      {item.num}
                    </span>
                    <span className="px-2">{item.text}</span>
                  </span>
                );
              })}
            </div>
            <div>
              {
                <div className="flex justify-between lg:justify-start items-center rounded-md bg-[#0B1A2880]">
                  <div className="px-2">
                    <Bars3Icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="px-3 py-2.5 rounded-md bg-gradient-to-bl from-[#02363a] to-[#2cb2b6]">
                    <Bars2Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="px-2">
                    <Squares2X2Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              }
            </div>
          </div>
          <Production />
          <ProductionVideo />
          <ProductionVideo />
          <ProductionVideo />
        </div>
        <div className="  xl:col-span-2">
          <PanelRight />
        </div>
      </div>
    </div>
  );
};

export default Panel;
