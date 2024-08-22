import React, { useState } from "react";
import "./BriefProject2.css";
import bg1 from "../../../../assets/holographic_fluid_drop_shapes_illustration_02 copy 3 (1).png";
import {
  FaArrowRight,
  FaPlus,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGoogle,
  FaTiktok,
  FaGlobe,
  FaEllipsisH,
} from "react-icons/fa";
import Button from "../../../Button/Button";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BriefProject2 = () => {

    const [value, setValue] = useState('');
  const icons = [
    {
      icon: FaFacebook,
      name: "Facebook",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
    },
    {
      icon: FaYoutube,
      name: "YouTube",
    },
    {
      icon: FaGoogle,
      name: "Google",
    },
    {
      icon: FaTiktok,
      name: "TikTok",
    },
    {
      icon: FaGlobe,
      name: "Website Page",
    },
    {
      icon: FaEllipsisH,
      name: "Other",
    },
  ];

  return (
    <div className="brief-project2">
      <div className="flex w-full items-center justify-center lg:flex-row flex-col lg:py-0 py-10">
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:px-44 px-3">
          <div className="brief-project2-border text-white lg:px-16 px-4 py-20">
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
        <div className="lg:w-1/2 w-full brief-project2-border-2 ">
          <div className="text-white  flex items-start justify-center flex-col mx-auto h-auto lg:h-screen lg:pl-32 lg:pr-10 lg:py-0 py-10 px-3">
            <h1 className="right-side-heading-brief-project2 uppercase text-[40px] font-tek leading-tight">
              let’s create new motion designs!
            </h1>
            <div className="mt-10 w-full flex flex-col gap-y-4">
              <div className="flex flex-col lg:gap-y-10 gap-y-5">
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="font-semibold uppercase text-sm">
                      channels
                    </span>
                    <span className="text-sm font-light">
                      Where do you want people to see your motion designs?
                    </span>
                  </div>
                  <div className="text-white text-sm flex flex-wrap gap-x-2 gap-y-2 mt-3">
                    {icons?.map((icon) => (
                      <div className="flex flex-col items-center border border-white rounded-2xl text-xs w-40 py-5 card-background">
                        {<icon.icon className="w-5 h-5" />}
                        <span>{icon.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="font-semibold uppercase text-sm">
                      channels
                    </span>
                    <span className="text-sm font-light">
                    Where do you want people to see your motion  designs?
                    </span>
                  </div>
                  <div className="w-full mt-3">
                  <ReactQuill theme="snow" value={value} onChange={setValue} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <span className="font-semibold uppercase text-sm">
                      Scope
                    </span>
                    <span className="text-sm font-light">
                      What can we do for you?
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
              </div>
            </div>
            <div className="flex gap-x-2 items-center justify-end w-full mt-3">
              <Button className="text-white bg-trasnparent border border-white rounded-full px-12 py-2">
                Back
              </Button>
              <Button className="text-black bg-white border border-white rounded-full px-12 py-2">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefProject2;
