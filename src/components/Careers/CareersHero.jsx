import React from "react";
import Holographic1 from "../../assets/images/holographic1.png";
import Rectangle7549 from "../../assets/images/Rectangle 7549.png";
import Rectangle7550 from "../../assets/images/Rectangle 7550.png";
import Rectangle7553 from "../../assets/images/Rectangle 7553.png";
import Rectangle7554 from "../../assets/images/Rectangle 7554.png";
import Bolb from "../../assets/images/blob.png";
import Bolb1 from "../../assets/images/blob (1).png";

import Button from "../Button/Button";
import Arrow from "../../assets/images/arrow logo.png";

const CareersHero = () => {
  return (
    <div className=" lg:relative">
      <div className="lg:block hidden max-h-[70vh]">
        <img className="" src={Holographic1} alt="" />
      </div>
      <div className=" grid md:grid-cols-5  lg:absolute top-10 pt-12">
        <div className="md:block col-span-1 hidden  ">
          <img src={Bolb} alt="" />
        </div>
        <div className="col-span-full md:col-span-3 pt-11">
          <div className=" lg:max-w-3xl mx-auto text-center">
            <span className="team-hero-heading ">join the future of work</span>
            <p className="font-[300] text-[20px] text-[#FFF]">
              Lorem ipsum dolor sit amet consectetur. Egestas id rhoncus morbi
              commodo auctor. Nulla imperdiet porttitor sollicitudin vitae
              varius semper in tortor integer. Quis nulla consequat ac ut
              consequat. Lorem sem lectus eu eros varius. Quis urna fringilla
              sed.
            </p>
            <div className="pt-10">
              <Button className="px-11 py-2.5 text-sm font-semibold text-gray-200  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                join us
              </Button>
            </div>
          </div>
        </div>
        <div className="md:block hidden col-span-1">
          <img src={Bolb1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CareersHero;
