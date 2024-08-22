import React from "react";
import StoryVideo from "../SotryPage/StoryVideo";
import Group469478 from "../../assets/images/Group 469478.png";
import Industry from "../SucessSroeries/Industry";
import HomePortfolioVideo from "../HomePortfolioVideo/HomePortfolioVideo";
import Button from "../Button/Button";
import HomeTestimoal from "../HomeTestimonals/HomeTestimonals";
import Heading from "../Heading/Heading";
import FooterWithLetsTalk from "../Footer/FooterWithLetsTalk";

function OurWorks() {
  return (
    <div className="solution-page text-white pt-28">
      <div className="text-center py-6">
        <h1 className="text-5xl md:text-8xl uppercase  font-normal font-[Teko]">
          OUR WORKS
        </h1>
        <p className="py-5 font-tek">Check out our featured projects:</p>
      </div>
      <div className=" xl:pb-20 pb-5 xl:relative  text-center">
        <img
          src={Group469478}
          alt=""
          className="hidden xl:block xl:absolute -top-72"
        />
        <StoryVideo />
      </div>

      <Industry />
      <div className="pt-10 pb-10 lg:px-0 px-2">
        <HomePortfolioVideo />
      </div>
      <div className="flex justify-center pb-10">
        <Button className=" uppercase text-white border border-white px-8 py-3 rounded-full">
          Watch More
        </Button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col gap-y-7 items-center justify-center py-20 ">
        <div className="flex flex-col items-center justify-center">
          <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
            Testimonals
          </Heading>
          <p className="text-sm text-white  text-center">
            A Collection of Client Testimonials That Speak Volumes.
          </p>
        </div>
        <div className="pt-8 pb-10 lg:px-0 px-3">
          <HomeTestimoal />
        </div>
        <Button className="uppercase text-white border border-[#2EABAF] px-8 py-3 rounded-full">
          Watch More
        </Button>
      </div>

      <FooterWithLetsTalk/>
    </div>
  );
}

export default OurWorks;
