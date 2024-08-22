import React from "react";
import "./FindYourTeam.css";
import bg1 from "../../../../assets/holographic_fluid_drop_shapes_illustration_02 copy 3 (1).png";
import { FaArrowRight } from 'react-icons/fa';
const FindYourTeam = () => {
  return (
    <div className="signin-page">
      <div className="flex w-full items-center justify-center lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:px-44 px-4 py-10">
          <div className="form-border text-white px-8 lg:px-16 py-20">
            <div className=" uppercase flex flex-col">
              <h1 className="font-tek text-[50px]">Find your team</h1>
              <span className="font-tek font-semibold">Welcome to Aim Fx, User!</span>
            </div>
            <div className="flex flex-col mt-6 gap-y-10">
              <span className="flex gap-x-2 items-center"><FaArrowRight /> Join your organization's team</span>
              <span className="text-[#A5A5A5] ml-8">Create new team</span>
              <p className="font-light text-sm w-2/3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores itaque sit, voluptate necessitatibus quo officia
                veritatis aliquid, ex quaerat laboriosam excepturi dignissimos
                iusto, eos officiis at doloremque? Dolorem, obcaecati aliquam.
              </p>
            </div>
            <div className="flex justify-end mt-10">
              <span className="underline text-[#00FFFF]">
                Skip this step
              </span>
            </div>
          </div>
        </div>
        <img
          src={bg1}
          alt="bg-image "
          className="bg-image absolute -z-10 bottom-0 hidden lg:block"
        />
        <div className="lg:w-1/2 w-full form-border-2 ">
          <div className="text-white  flex items-start justify-center flex-col mx-auto h-screen lg:px-40 px-4">
            <h1 className="uppercase text-[40px] font-tek leading-tight">
              Organizations Teams
            </h1>
            <span className="uppercase font-bold text-sm -mt-1 ml-0.5">For User@mail.com</span>
            <div className="mt-10 w-full flex flex-col gap-y-4">
            <div className="border-4 border-[#00FFFF] w-full flex justify-between items-end lg:pl-10 lg:pr-3 py-5 px-3 rounded-2xl card-background ">
              <div className="flex gap-x-4 items-center">
                <span className="bg-[#0B1A28] rounded-full w-16 h-16 flex items-center justify-center">
                  LT
                </span>
                <div className="flex flex-col items-start">
                  <span className="font-tek text-[40px] font-light uppercase leading-tight">
                    Lola
                    </span>
                    <span className="font-tek uppercase -mt-3">
                    Lola Tinikashvili
                    </span>
                </div>
              </div>
              <div>
                <span className="uppercase text-xs bg-[#2EABAF] rounded-full py-3 px-4">
                  Request to Join
                </span>
              </div>
            </div>
            <div className="border-4 border-[#00FFFF] w-full flex justify-between items-end lg:pl-10 lg:pr-3 py-5 px-3  rounded-2xl card-background ">
              <div className="flex gap-x-4 items-center">
                <span className="bg-[#3F6B93] rounded-full w-16 h-16 flex items-center justify-center">
                  LT
                </span>
                <div className="flex flex-col items-start">
                  <span className="font-tek text-[40px] font-light uppercase leading-tight">
                    Lola
                    </span>
                    <span className="font-tek uppercase -mt-3">
                    Lola Tinikashvili
                    </span>
                </div>
              </div>
              <div>
                <span className="uppercase text-xs bg-[#2EABAF] rounded-full py-3 px-4">
                  Request to Join
                </span>
              </div>
            </div>
            <div className="border-4 border-[#00FFFF] w-full flex justify-between items-end lg:pl-10 lg:pr-3 py-5 px-3  rounded-2xl card-background ">
              <div className="flex gap-x-4 items-center">
                <span className="bg-[#7C6296] rounded-full w-16 h-16 flex items-center justify-center">
                  LT
                </span>
                <div className="flex flex-col items-start">
                  <span className="font-tek text-[40px] font-light uppercase leading-tight">
                    Lola
                    </span>
                    <span className="font-tek uppercase -mt-3">
                    Lola Tinikashvili
                    </span>
                </div>
              </div>
              <div>
                <span className="uppercase text-xs bg-[#2EABAF] rounded-full py-3 px-4">
                  Request to Join
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourTeam;
