import React from "react";
import ServivePageVideo from "../CustomVideo/ServicePageVideo";
import Button from "../Button/Button";
import "./AboutUs.css";
import shape4 from "../../assets/holographic_fluid_drop_shapes_illustration_02 copy 4.png";
import shape7 from "../../assets/video bubbles (1).png";
import bg1 from "../../assets/11 copy 3.png";
import OurStory from "./OurStory";
import Heading from "../Heading/Heading";
import LetsTalk from "../Team Page/LetsTalk";
import GetToKnowUs from "../GetToKnowUs/GetToKnowUs";
import Location from "../Location/Location";
import Footer from "../Footer/Footer";
import FooterWithLetsTalk from "../Footer/FooterWithLetsTalk";
import LetsCreateFuture from "../Team Page/LetsCreateFuture";
import CustomVideo2 from "../CustomVideo/Custom-Video2";
import poster from "../../assets/Screenshot 2024-01-29 at 12.00 1 (1).png";
import bg2 from "../../assets/about-us-page-bg.png";

const AboutUsPage = () => {
  const features = [
    {
      name: "Dmitriy Gladenko",
      description: "Company VideoFx.",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg",
      imageAlt: "case study",
    },
    {
      name: "Dmitriy Gladenko",
      description: "Company VideoFx",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg",
      imageAlt: "case study",
    },
    {
      name: "Dmitriy Gladenko",
      description: "Company VideoFx",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg",
      imageAlt: "case study",
    },
  ];

  const aboutus = [
    {
      name: "about our",
      title: "VIDEO PRODUCTION AGENCY :",
      description:
        "Aim FX is a full-service video production agency in London, providing end-to-end solutions for all creative video campaigns, that provide an uplifting change of pace from the tired and overused methods seen elsewhere.",
      button: "animated video services",
    },
    {
      name: "video cost",
      title: "VIDEO PRODUCTION COSTS :",
      description:
        "Explore our video production costs page to gain a clear understanding of investment options tailored to your creative vision and project needs.",
      button: "animated production cost",
    },
    {
      name: "Our capabilities",
      title: "VIDEO PRODUCTION AGENCY :",
      description:
        "Specialising in bespoke, eye-catching video content that delivers more clicks, more sales, and more likes.",
      button: "get a quote",
    },
  ];

  return (
    <>
      <div className="solution-page relative lg:px-0 px-3 overflow-hidden">
        <div className="lg:flex items-center justify-center hidden">
          <img
            src={bg2}
            alt="bg"
            className="absolute inset-y-32 -z-50 max-w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:py-[300px] py-[100px] gap-y-20 max-w-full">
          {aboutus?.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-y-6 gap-x-4 lg:gap-x-20`}
            >
              <div className="flex flex-col gap-y-3 max-w-full">
                <span className="lg:text-[80px] text-[60px] text-white uppercase font-tek">
                  {item.name}
                </span>
                <div className="lg:w-96 -mt-8">
                  <span className="text-white font-semibold">
                    {item?.title}
                    <br />
                  </span>
                  <span className="text-sm text-white font-extralight">
                    {item?.description}
                  </span>
                </div>
                <div className="mt-2">
                  <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white border-2 border-white rounded-full hover:border-cyan-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                    {item?.button}
                  </Button>
                </div>
              </div>
              <div className="lg:relative max-w-full">
                <CustomVideo2
                  poster={poster}
                  className="border-[9px] border-[#2EABAF]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-7xl lg:py-32 lg:px-48 px-3 py-10 overflow-hidden">
          <div className="lg:space-y-16 flex flex-col gap-y-10">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 border-2 rounded-2xl border-[#15B8C7] p-4 overflow-x-auto"
              >
                <div className="flex flex-col py-4 lg:gap-12 gap-6 justify-between lg:col-span-6 mt-0 xl:col-span-6">
                  <div>
                    <h1 className="text-2xl font-medium text-white">
                      {feature.name}
                    </h1>
                    <p className="mt-4 text-base text-white">
                      {feature.description}
                    </p>
                  </div>
                  <div className="w-60">
                    <Button className="px-4 py-2.5 text-sm font-semibold text-gray-900 bg-white border-2 border-white rounded-full hover:border-cyan-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                      {feature.imageAlt}
                    </Button>
                  </div>
                </div>
                <div className="flex-auto lg:col-span-5 xl:col-span-6">
                  <ServivePageVideo />
                </div>
              </div>
            ))}
          </div>
        </div>

        <GetToKnowUs />
        <Location />
        <OurStory />
        <LetsCreateFuture />
        <FooterWithLetsTalk />
      </div>
    </>
  );
};

export default AboutUsPage;
