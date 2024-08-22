import React from "react";
import shape7 from "../../assets/video bubbles (1).png";
// import Copy from "../../assets/images/Copy.png";
import Copy1 from "../../assets/images/Copy1.png";
import Screenshort from "../../assets/images/Screenshot.png";
import Promotional1 from "../Promotional1/Promotional1";
import Maxine from "../Maxine/Maxine";
import Persntage from "../Persentage/Persentage";
import Helpus from "../Helpus/Helpus";
import Vfx from "../VFX/Vfx";
import Promotionalimage from "../PromotionalVideo/Promotionalimage";
import Hero from "./Hero";
import Frame from "../../assets/images/Frame 308.png";
import Logos from "../../assets/images/LOGOS.png";
import FooterForm from "../Footer/Footer";
import Question from "../PromationalAbout/Question";
import Clients from "../Clients/Clients";
import Promotionalvideo from "../PromotionalVideo/Promotionalvideo";
import FooterWithForm from "../Footer/FooterWithForm";

const Promotional = () => {
  return (
    <div className="solution-page">
      <Hero />
      <div className="flex flex-col items-center">
        <img src={Frame} alt="" className="pt-[135%] md:pt-[1%] lg:pt-[1%]" />
        <img src={Logos} alt="" />
      </div>
      <Vfx />
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32">
          <div className="flex flex-col gap-y-3 text-center lg:text-left">
            <span className="team-hero-headin  font-tek text-[35px] pt-[80%] md:pt-0 lg:pt-0 uppercase lg:text-[100px] md:text-[100px] text-white">
              From creative ads to multiple designs
            </span>
            <div className="w-full lg:w-96 mx-auto lg:mx-0">
              <p className="font-light text-[16px] md:text-[20px] lg:text-[20px] text-white mt-4">
                JUST THE SUBHEAD HERE:
                <br />
                Freezing 2 times for two weeks a year If one video editor is not
                enough, then you need to buy another package. You need to pay
                monthly. You need to pay with monthly, quarterly and annual
                discounts.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center lg:block">
            <img src={shape7} alt="img" className="pt-5" />
            <div className="p-16">
              <div className="absolute top-1 md:p-12">
                <img src={Copy1} alt="" />
              </div>
              <div>
                <img
                  className="absolute top-[13%] md:p-16 lg:p-16 p-1 md:left-10 left-[-4px]"
                  src={Screenshort}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Promotional1 />
      <Maxine />
      <Promotionalvideo />
      <Persntage />
      <Helpus />
      <div>
        <div className="text-center">
          <h1 className="font-tek font-[400] text-[#fff] text-[40px] sm:text-[50px] lg:text-[100px] uppercase">
            why clients love aimfx
          </h1>
          <Clients />
        </div>
      </div>
      <Question />
      <Promotionalimage />
      <FooterWithForm />
    </div>
  );
};
// <Mxine2 />
// <BlogPost />

export default Promotional;
