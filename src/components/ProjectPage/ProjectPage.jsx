import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const ProjectPage = () => {
  return (
    <div className=" solution-page">
      <div className="max-w-6xl px-4 mx-auto text-white py-24">
        {/*----------------------------Top bar of Project Section --------------------------*/}
        <div className="px-4 py-3 flex flex-wrap gap-y-5  lg:mt-10 border-setting items-center justify-between bg-[#0B1A2880] rounded-lg">
          <div className="flex items-center gap-x-4">
            <ChevronLeftIcon className="h-4 w-4 text-white" />

            <div>
              <div className="flex items-center gap-5">
                <h1 className="font-tek text-[50px] leading-10 font-normal uppercase ">
                  lorem ipsum
                </h1>
                <button className="px-2.5 py-1 rounded-[10px]  bg-[#9C9C9C]  font-medium">
                  Draft
                </button>
              </div>
              <p className="text-base  font-light">
                133641 | DIGITAL ADS & SOCIAL MEDIA
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="py-1 px-2 font-medium rounded-full bg-[#15B8C7]">
              TJ
            </span>
            <button className="py-1 px-5 rounded-full border-[3px] border-[#15B8C7] font-medium text-base ">
              INVITE
            </button>
            <button className="py-1.5 px-5 text-nowrap rounded-full bg-[#15B8C7] font-medium text-base  uppercase">
              SUBMIT project
            </button>
            <EllipsisHorizontalIcon className="h-8 w-8 text-white" />
          </div>
        </div>
        {/*----------------------------links Project Section --------------------------*/}
        <div className="flex py-9 justify-center">
          <div className="project flex gap-x-12 text-white text-base font-bold  uppercase">
            <NavLink to="projectinfo">bRIEF & INFO</NavLink>
            <NavLink to="messages">MESSAGES</NavLink>
            <NavLink to="designs">DESIGNS</NavLink>
          </div>
        </div>
        {/*----------------------------Project prief  Section --------------------------*/}
        <Outlet />
      </div>
      <Footer />/
    </div>
  );
};

export default ProjectPage;