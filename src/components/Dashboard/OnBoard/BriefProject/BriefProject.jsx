import React from "react";
import "./BriefProject.css";
import bg1 from "../../../../assets/holographic_fluid_drop_shapes_illustration_02 copy 3 (1).png";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import Button from "../../../Button/Button";
const BriefProject = () => {
  return (
    <div className="brief-project">
      <div className="flex w-full items-center justify-center lg:flex-row flex-col lg:py-0 py-10">
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:px-44 px-3">
          <div className="brief-project-border text-white lg:px-16 px-4 py-20">
            <div className=" uppercase flex flex-col">
              <h1 className="font-tek text-[50px]">Find your team</h1>
              <span className="font-tek font-semibold">
                Welcome to Aim Fx, User!
              </span>
            </div>
            <div className="flex flex-col mt-6 gap-y-10">
              <span className="flex gap-x-2 items-center">
                <FaArrowRight /> Join your organization's team
              </span>
              <span className="text-[#A5A5A5] ml-8">Create new team</span>
              <p className="font-light text-sm w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores itaque sit, voluptate necessitatibus quo officia
                veritatis aliquid, ex quaerat laboriosam excepturi dignissimos
                iusto, eos officiis at doloremque? Dolorem, obcaecati aliquam.
              </p>
            </div>
            <div className="flex justify-end mt-10">
              <span className="underline text-[#00FFFF]">Skip this step</span>
            </div>
          </div>
        </div>
        <img
          src={bg1}
          alt="bg-image "
          className="bg-image absolute -z-10 bottom-0 lg:block hidden"
        />
        <div className="lg:w-1/2 w-full brief-project-border-2 lg:py-0 py-10">
          <div className="text-white  flex items-start justify-center flex-col mx-auto lg:h-screen lg:px-32 px-3">
            <h1 className=" right-side-heading uppercase text-[40px] font-tek leading-tight">
              Please fill in this brief
            </h1>
            <div className="mt-10 w-full flex flex-col gap-y-4">
              <div className="flex flex-col lg:gap-y-20 gap-y-6">
                <div className="w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm uppercase font-semibold  ml-3 text-[#D4E7F5] "
                  >
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="project_name"
                    placeholder="What should we name your project?"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="font-semibold uppercase text-sm">
                      Goals
                    </span>
                    <span className="text-sm font-light">
                      What would make your project a win?
                    </span>
                  </div>
                  <div className="text-white text-sm flex flex-wrap gap-2 mt-3">
                    <div className="bg-black w-44 px-3 py-1.5 rounded-full flex justify-between items-center">
                      <span>Lorem ipsum dolor </span>
                      <FaPlus />
                    </div>
                    <div className="bg-black w-48 px-3 py-1.5 rounded-full flex justify-between items-center">
                      <span>Lorem ipsum dolor </span>
                      <FaPlus />
                    </div>
                    <div className="bg-black w-44 px-3 py-1.5 rounded-full flex justify-between items-center">
                      <span>Lorem ipsum dolor </span>
                      <FaPlus />
                    </div>
                    <div className="bg-black w-44 px-3 py-1.5 rounded-full flex justify-between items-center">
                      <span>Lorem ipsum dolor </span>
                      <FaPlus />
                    </div>
                    <div className="bg-black w-44 px-3 py-1.5 rounded-full flex justify-between items-center">
                      <span>Lorem ipsum dolor </span>
                      <FaPlus />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="font-semibold uppercase text-sm">
                      Project Job
                    </span>
                    <span className="text-sm font-light">
                      How can we help you?
                    </span>
                  </div>
                  <div className="text-white text-sm flex flex-col gap-2 mt-3">
                    <div className="border border-white rounded-full p-2">
                      <label className="flex items-center gap-x-2">
                        <input type="radio" name="option" value="option1" />
                        Create new motion designs
                      </label>
                    </div>
                    <div className="border border-white rounded-full p-2">
                      <label className="flex items-center gap-x-2">
                        <input type="radio" name="option" value="option2" />
                        Revamp, refine, or edit existing motion
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-2 items-center justify-end w-full mt-3">
                <Button className="text-white bg-trasnparent border border-white rounded-full px-12 py-2">Back</Button>
                <Button className="text-black bg-white border border-white rounded-full px-12 py-2">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefProject;
