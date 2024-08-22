import React from "react";
import Search from "../../assets/images/search.png";
import FooterForm from "../Footer/Footer";
import Screenshot from "../../assets/images/Screenshot 2025.png";
import Rectangle7583 from "../../assets/images/Rectangle 7583.png";
import TurnAround from "./TurnAround";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import FooterWithForm from "../Footer/FooterWithForm";

const HelpTutorial = () => {
  return (
    <div className="solution-page">
      <div className="max-w-4xl mx-auto px-6  py-28 text-white">
        <h1 className="text-5xl font-medium font-[Teko] py-6">
          Advice and answers from the AIM-FX Team
        </h1>
        <div className="flex justify-between p-2 px-4 bg-[#fff] rounded-full">
          <input
            className="w-full  outline-0 placeholder:text-[#1666B0] font-[Inter]"
            type="text"
            placeholder="Search for articles"
          />
          <img src={Search} alt="" />
        </div>
      </div>
      <div className="promotional-section">
        <div className="max-w-7xl grid mx-auto py-28 md:py-5 px-6  md:grid-cols-5 md:gap-x-10 md:px-12 sm:px-16  lg:gap-x-20 lg:px-28 gap-y-10  ">
          <div className="col-span-full md:col-span-4 ">
            <div className="text-[#fff] ">
              <div className="flex flex-wrap font-tek font-normal text-lg py-4">
                <span>All Collections</span>
                <ChevronRightIcon className="h-6 w-6 text-white" />

                <span>AIM-FX Tutorials and FAQ</span>
                <ChevronRightIcon className="h-6 w-6 text-[#00ffff]" />

                <span className="text-[#00FFFF] ">
                  All in One AIM-FX Tutorial
                </span>
              </div>
              <h1 className=" lg:text-8xl text-5xl  max-w-xl  py-2 font-[Teko] font-normal uppercase">
                all in one aim-fx tutorial
              </h1>
              <p className="font-normal font-tek text-lg py-5">
                Lorem ipsum dolor sit amet consectetur. Nunc sit amet rutrum
                ullamcorper lacinia consequat.
              </p>
            </div>
            <div>
              <div className="w-full relative overflow-hidden ">
                <video
                  controls
                  poster={Screenshot}
                  className="object-cover w-full rounded-3xl   "
                >
                  <source src="video-file.mp4" type="video/mp4" />
                </video>
                <div className="play-icon"></div>
              </div>
              <div className="flex justify-between items-center gap-2 pt-3">
                <div className="flex items-center gap-2 ">
                  <span className="flex flex-wrap">
                    <img src={Rectangle7583} alt="" />
                  </span>
                  <span>
                    <span className="italic text-[#fff] font-[700]">
                      Dean Collins
                    </span>
                    <p className="font-[300] text-[#00FFFF] text-[18px]">
                      Director of Brand Design
                    </p>
                  </span>
                </div>
                <p className="text-[#fff] lg:pr-28">Postes 2 weeks ago</p>
              </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 md:border-l-2 text-[#fff] pl-4">
            <ul className="flex md:flex-col flex-wrap gap-8 gap-y-4">
              <li>Chapter 01</li>
              <li>Chapter 02</li>
              <li>Chapter 03</li>
              <li>Chapter 04</li>
              <li>Chapter 05</li>
              <li>Chapter 06</li>
              <li>Chapter 07</li>
              <li>Chapter 08</li>
              <li>Chapter 09</li>
              <li>Chapter 10</li>
              <li>Chapter 11</li>
            </ul>
          </div>
        </div>
      </div>
      <TurnAround />
      <FooterWithForm/>
    </div>
  );
};

export default HelpTutorial;
