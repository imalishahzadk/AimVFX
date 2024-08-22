// when it comes to moible screen, image col span 2 div should be completely hidden. bolb graphic should be hidden, holographic should be there please do that
import React from "react";
import Holographic1 from "../../assets/images/holographic1.png";
import Rectangle7549 from "../../assets/images/Rectangle 7549.png";
import Rectangle7550 from "../../assets/images/Rectangle 7550.png";
import Rectangle7553 from "../../assets/images/Rectangle 7553.png";
import Rectangle7554 from "../../assets/images/Rectangle 7554.png";
import Bolb from "../../assets/images/blob.png";
import Button from "../Button/Button";
import Arrow from "../../assets/images/arrow logo.png";

const Hero = () => {
  return (
    <div className="relative">
      <img
        className="h-[20%] w-[90%] pl-[10%] hidden md:block"
        src={Holographic1}
        alt="Holographic background"
      />
      <div className="absolute top-0 w-full h-full grid grid-cols-5 pt-12">
        <div className="col-span-1 hidden md:block">
          <img src={Bolb} alt="Blob graphic" />
        </div>
        <div className="col-span-4 md:col-span-2 pt-[18%] px-8">
          <div>
            <span className="team-hero-heading text-[35px] font-tek lg:text-[100px] md:text-[100px] text-white">
              promotional videos
            </span>
            <p className="font-light text-[16px] md:text-[20px] lg:text-[20px] text-white mt-4">
              Get on-brand promotional videos designed to enhance your website,
              digital campaigns, presentation and ads. Plug a fully-stacked
              design team into your marketing and creative teams and level up
              your efforts with next-gen videos.
            </p>
          </div>
          <div className="flex py-2 md:py-7 lg:py-7 items-center justify-between mt-8 space-x-2 md:space-x-4 lg:space-x-4">
            <input
              type="email"
              name="email"
              placeholder="Your base Email"
              className="flex-grow px-4 py-2.5 text-sm rounded-full text-gray-700 bg-[#D4E7F5] focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <Button className="px-6 py-1.5 md:py-2.5 lg:py-2.5 md:text-sm text-[10px] lg:text-sm lg:font-semibold md:font-semibold text-white bg-[#2EABAF] rounded-full hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 uppercase">
              SEE OPENNINGS
            </Button>
          </div>
        </div>
        <div className="col-span-2 relative hidden md:block">
          <img
            src={Rectangle7554}
            alt="Graphic 1"
            className="absolute right-[40%] mt-[10%]"
          />
          <img
            src={Arrow}
            alt="Arrow logo"
            className="w-96 absolute top-20 left-[-100px]"
          />
          <img
            src={Rectangle7549}
            alt="Graphic 2"
            className="w-60 absolute top-[15%] right-[35%]"
          />
          <img
            src={Rectangle7550}
            alt="Graphic 3"
            className="w-96 absolute top-[30%] right-40 z-10"
          />
          <img
            src={Rectangle7553}
            alt="Graphic 4"
            className="w-60 absolute right-0 top-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
