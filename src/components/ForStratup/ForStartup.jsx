import React from "react";
import arrow2 from "../../assets/images/arrow2.png";
import arrow3 from "../../assets/images/arrow3.png";
import Frame from "../../assets/images/Frame 308.png";
import Logos from "../../assets/images/LOGOS.png";

import Group469378 from "../../assets/images/Group 469378.png";
import Button from "../Button/Button";
import Content from "./Content";
import Rates from "./Rates";
import Marketing from "../Marketing/Marketing";
import PageTestimonals from "../PageTestimonals/PageTestimals";
import Article from "../../assets/images/article 1.png";
import article from "../../assets/images/article.png";
import teenyicons from "../../assets/images/teenyicons_book-solid.png";
import Vector from "../../assets/images/Vector.png";
import Group from "../../assets/images/Group.png";
import material from "../../assets/images/material-symbols_travel-rounded.png";
import ForStartVideo from "./ForStartVideo";
import Question from "../PromationalAbout/Question";
import FooterForm from "../Footer/Footer";
import Promotionalimage from "../PromotionalVideo/Promotionalimage";
import FooterWithForm from "../Footer/FooterWithForm";
const ForStartup = () => {
  const logo = [
    {
      img: Article,
      name: "latest articles",
    },
    {
      img: article,
      name: "creative-as-a-service",
    },
    {
      img: teenyicons,
      name: "smart bets",
    },
    {
      img: Vector,
      name: "digital advertising",
    },
    {
      img: Article,
      name: "video marketing",
    },
    {
      img: material,
      name: "brand design",
    },
    {
      img: Group,
      name: "AR & 3D design",
    },
  ];
  return (
    <div className="solution-page">
      <div className="grid lg:grid-cols-2 pt-32 mx-auto px-36">
        <div className="flex flex-col justify-center gap-y-3">
          <span className="team-hero-heading">
            OUR TAILORED SOLUTIONS FOR STARTUPS
          </span>
          <p className="text-white">
            Freezing 2 times for two weeks a year If one video editor is not
            enough, then you need to buy another package. You need to pay
            monthly. You need to pay with monthly, quarterly and annual
            discounts.
          </p>
          <br />
          <p className="flex items-center text-[#00FFFF] text-[20px] font-[400]">
            <img src={arrow3} alt="" />
            <span>Real time collaboration with your editor via Slack</span>
          </p>
          <p className="flex items-center text-[#00FFFF] text-[20px] font-[400]">
            <img src={arrow3} alt="" />
            <span>Real time collaboration with your editor via Slack</span>
          </p>
          <div className="hidden sm:flex sm:items-center  gap-x-6  pt-5">
            <Button className="px-8 py-2.5 text-sm font-semibold text-[#000]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#000] hover:bg-cyan-600  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Book A Call
            </Button>
            <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent  border-2 border-[#fff] rounded-full hover:bg-[#69FBF17D] focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              CHOOSE A PLAN
            </Button>
          </div>
        </div>
        <div className="relative ">
          <img src={arrow2} alt="img" className="" />
          <div className=" absolute top-28  p-8 left-6">
            <img src={Group469378} alt="" />
          </div>
          <div className="">
            <img className="absolute top-28 p-16 left-9" src="" alt="" />
          </div>
        </div>
      </div>

      <p className="text-center text-[#fff] uppercase mt-16">
        80.082 design projects delivered to 450+ happy clients.
      </p>
      <div className="mt-6">
        <img className="" src={Frame} alt="" />
        <img className="" src={Logos} alt="" />
      </div>
      <Content />
      <Rates />
      <div className="pt-32 text-center">
        <h2 className="text-[70px] text-[#fff] uppercase">how it works</h2>
      </div>
      <Marketing />
      <div className="pt-10 text-center">
        <h2 className="text-[70px] text-[#fff] uppercase font-tek">
          real people, real businesses, real results
        </h2>
      </div>

      <div className="flex flex-col gap-y-7 items-center justify-center py-20">
        <div className="pt-8 pb-10">
          <PageTestimonals />
        </div>
        <Button className="uppercase text-white border border-[#2EABAF] px-8 py-3 rounded-full">
          Watch More
        </Button>
      </div>
      <div className="grid grid-cols-7 px-60 py-10 gap-4 ">
        {logo.map((item, ind) => {
          return (
            <span
              className="flex flex-col p-3 items-center   justify-center"
              key={ind}
            >
              <img className="w-12 h-12 object-cover" src={item.img} alt="" />
              <span className="font-[400] text-[30px] uppercase font-tek text-[#fff] text-center">
                {item.name}
              </span>
            </span>
          );
        })}
      </div>
      <div className="py-10">
        <h1 className="py-10 pl-60 text-[#fff] text-[24px] font-semibold  uppercase">
          Take a look at some of our works
        </h1>
        <ForStartVideo />
      </div>
      <Question />
      <div className="">
        <Promotionalimage />
      </div>
      <FooterWithForm/>
    </div>
  );
};

export default ForStartup;
