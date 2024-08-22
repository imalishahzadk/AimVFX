import React from "react";
import Ellipse121 from "../../assets/images/Ellipse 121.png";
import Ellipse120 from "../../assets/images/Ellipse 120.png";
import Ellipse119 from "../../assets/images/Ellipse 119.png";
import Ellipse115 from "../../assets/images/Ellipse 115.png";

import Group469482 from "../../assets/images/Group 469482.png";
import Group469488 from "../../assets/images/Group 469488.png";
import Group469487 from "../../assets/images/Group 469487.png";
import Group469438 from "../../assets/images/Group 469438.png";
import Button from "../Button/Button";

const Mxine2 = () => {
  return (
    <div className="solution-page ">
      <div className="flex p-32 mx-auto max-w-7xl">
        <div className="">
          <img src={Group469438} alt="" />
        </div>
        <div className="flex flex-col gap-y-3 py-5">
          <span className="text-[40px] text-[#56BEC2] font-[400] ">
            what makes our promotional videos stand out?
          </span>
          <div className=" text-white">
            <p>
              We deliver speedy, high-quality promotional video services throuch
              a transparent subscription model. We are a tech-enabed company,
              developing its own proprietary software to brief, manage, and
              coordinate a high-volume of promotional video projects. making it
              possible to keep pace with teams at Amazon, Puma, Facebook and
              more.
              <br />
              <br />
              Learn how we can revolutionize the way your organization gets
              promotional videos done. Book a call today.
            </p>
          </div>
          <div className="hidden sm:flex sm:items-center  gap-x-3">
            <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-[#fff] rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Book A Call
            </Button>
            <Button className="px-8 py-2.5 text-sm font-semibold text-gray-200 bg-cyan-500 rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              CHOOSE A PLAN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mxine2;
