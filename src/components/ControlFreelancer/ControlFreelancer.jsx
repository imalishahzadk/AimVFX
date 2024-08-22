import React from "react";
import ControlLeftDiv from "./ ControlLeftDiv";
import ControlRightDiv from "./ControlRightDiv";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Production from "./Production";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { Bars2Icon } from "@heroicons/react/24/outline";
const ControlFreelancer = () => {
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
    <div className="solution-page py-20 text-white">
      <div className="px-10 grid lg:grid-cols-8 gap-6 text-white lg:mt-10">
        <div className=" col-span-full md:col-span-6 sm:col-span-full lg:col-span-2">
          <ControlLeftDiv />
        </div>
        <div className="col-span-full lg:col-span-4">
          <div className="w-full gap-y-4 bg-[#0B1A2880] flex md:flex-row flex-col  items-center justify-between px-3 py-5 rounded-lg ring-1 ring-gray-400">
            <div className="flex items-center gap-x-5 ">
              <span className="text-[35px] uppercase">Projects</span>
            </div>
            <div className="flex gap-x-3 items-center">
              <p>Hide Filters</p>
              <div className="flex items-center border-[1px] rounded-full py-2 px-3">
                <MagnifyingGlassIcon className="h-6 w-6 text-white" />

                <input
                  type="text"
                  placeholder="Search for name"
                  className="outline-none placeholder:text-[#FFFFFF] w-full bg-inherit "
                />
              </div>
            </div>
          </div>
          <div className="py-2 lg:flex flex-wrap gap-4 justify-between items-center">
            <div className=" py-5 lg:py-2 grid grid-cols-2 lg:grid-cols-4  gap-5  xl:flex justify-between">
              {data.map((item, ind) => {
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

          <div>
            <Production />
            <Production />
            <Production />
          </div>
          <p>+ New Project</p>
        </div>
        <div className="w-full col-span-full lg:col-span-2">
          <ControlRightDiv />
        </div>
      </div>
    </div>
  );
};

export default ControlFreelancer;
