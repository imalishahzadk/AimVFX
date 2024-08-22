import React from "react";
import shape7 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import Button from "../Button/Button";
import ServivePageVideo from "../CustomVideo/ServicePageVideo";
import ServiceLogoBar from "../LogoBars/ServiceLogoBar";
import Rectangle from "../../assets/images/Rectangle 131.png";
import Work from "../../assets/images/work.png";
import Required from "../../assets/images/required.png";
import ScreenShot from "../../assets/images/Screenshot 2025.png";
import HomeTestimoal from "../HomeTestimonals/HomeTestimonals";
import Heading from "../Heading/Heading";
import Industry from "./Industry";
import HomePortfolioVideo from "../HomePortfolioVideo/HomePortfolioVideo";
import LOGO from "../../assets/images/LOGO ORIGINAL GREEN.png";
import arrow from "../../assets/images/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import FooterPricing from "../Pricing/FooterPricing";
import FooterWithLetsTalk from "../Footer/FooterWithLetsTalk";
const SucessStories = () => {
  const product = [
    {
      name: "Dmitriy Gladenko",
      src: Rectangle,
      copmany: "Company VideoFx",
    },
    {
      name: "Dmitriy Gladenko",
      src: Rectangle,
      copmany: "Company VideoFx",
    },
    {
      name: "Dmitriy Gladenko",
      src: Rectangle,
      copmany: "Company VideoFx",
    },
  ];

  return (
    <div className="solution-page text-white">
      <div className="lg:py-0 py-6">
        {/*-----------------Hero  Section      ------------------*/}

        <div className="flex lg:flex-row  flex-col-reverse justify-between items-center">
          <div className="lg:px-40 px-5 lg:pt-0 pt-4">
            <span className="service-hero-heading">
              the video editing service for content creators
            </span>
            <div className="services-list">
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Startups
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Productions
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Agencies
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Enterprise
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Creators
              </span>
              <span>
                <img src={shape7} alt="img" className="w-7" />
                For Enterpreneurs
              </span>
            </div>
            <div className="pt-6 flex gap-y-5">
              <Button className="lg:px-8 px-6 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Choose a plan
              </Button>
              <Button className="lg:px-8 px-6 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a call
              </Button>
            </div>
          </div>

          <div className=" lg:relative lg:px-0 px-2 pt-24">
            <img src={shape7} alt="img" className="side-image " />
            <div className="lg:block lg:absolute lg:top-[35%] lg:left-[20%] ">
              <ServivePageVideo />
            </div>
          </div>
        </div>
      </div>

      {/*-----------------Required Videos Section      ------------------*/}
      <div className="relative ">
        <div className="mx-auto max-w-6xl sm:px-12 px-6">
          {product.map((item) => {
            return (
              <div className="grid md:gap-6 rounded-3xl border-[#15B8C7]  mt-16   border-4 md:grid-cols-3 ">
                <div className="   flex md:flex-col justify-between py-6 px-3 md:py-12 md:px-12">
                  <div>
                    <h2 className="md:text-3xl text-2xl italic font-bold font-tek">
                      {item.name}
                    </h2>
                    <p className="md:text-2xl text-xl font-light font-tek">
                      {item.copmany}
                    </p>
                  </div>
                  <div>
                    <button className="py-3 px-7 uppercase  bg-white hover:bg-slate-200 text-black rounded-full font-bold">
                      case study
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2 col-span-full py-10 px-5 relative overflow-hidden ">
                  <video controls poster={Rectangle}>
                    <source src="your-video-file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="play-button"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-16 -z-10">
          <img src={Required} alt="" />
          <img src={Work} alt="" />
        </div>
      </div>

      {/* ---------------    intdustry logo  and filter Button Section          -------------- */}
      <Industry />

      {/* ---------------    Porttfolia  Section          -------------- */}

      <div className="pt-6 pb-10 lg:px-0 px-2">
        <HomePortfolioVideo />
      </div>
      <div className="flex py-16 justify-center">
        <Button className="uppercase text-white border border-white px-8 py-3 rounded-full">
          Watch More
        </Button>
      </div>

      {/*----------------- sucess   video production Section      ------------------*/}
      <div>
        <div className="text-center">
          <h1 className="lg:text-8xl text-5xl uppercase font-normal font-[Teko]">
            video production
          </h1>
          <p className="font-tek text-base  font-light">
            Take a look at all the countries that AIM FX team members are based
            in.
          </p>
        </div>
        <div className="flex justify-end px-6 lg:px-28 ">
          <Button className="lg:px-8 px-6 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            see articles
          </Button>
        </div>
        <div className="px-6 xl:px-20 md:px-44 sm:px-10 lg:px-10 pb-28 grid lg:gap-5 lg:grid-cols-3">
          {product.map((item) => {
            return (
              <div className=" rounded-3xl border-[#15B8C7]  mt-5 border-4  ">
                <div className="lg:col-span-2 col-span-full py-10 px-5 relative overflow-hidden ">
                  <video controls poster={ScreenShot}>
                    <source src="your-video-file.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="play-button"></div>
                </div>

                <div className=" flex-col gap-5 flex justify-between pb-5 px-3">
                  <div>
                    <h2 className="md:text-3xl text-2xl italic font-bold font-tek">
                      {item.name}
                    </h2>
                    <p className="md:text-2xl text-xl font-light font-tek">
                      {item.copmany}
                    </p>
                  </div>
                  <div>
                    <button className="py-3 px-7 w-full uppercase  bg-white hover:bg-slate-200 text-black rounded-full font-bold">
                      case study
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*----------------- AIM VFX   video  Section      ------------------*/}

      <div className="lg:px-28 py-10 px-5 lg:relative">
        <div className="flex justify-end px-6 py-4  ">
          <Button className="lg:px-8 px-6 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            MEET OUR TEAM
          </Button>
        </div>
        <div className="hidden lg:flex justify-center items-center lg:absolute top-16   left-60">
          <img src={arrow} alt="" className="w-40 h-40" />
          <img src={LOGO} alt="" className=" w-32 h-32 " />
        </div>

        <div className="px-6 lg:px-28 xl:px-0">
          <div className="grid lg:gap-6 rounded-3xl border-[#15B8C7]  lg:m-5 border-4  xl:grid-cols-3 ">
            <div className="  flex flex-col justify-center py-12 xl:pl-24">
              <h2 className="text-4xl xl:text-6xl  uppercase  font-[400]">
                video AGENCY
              </h2>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin quis
                facilisis elit enim nam nec magna. Dignissim turpis feugiat sed
                nisi elementum nunc in aliquet.
              </p>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur. Sollicitudin quis
                facilisis elit enim nam nec magna. Dignissim turpis feugiat sed
                nisi elementum nunc in aliquet.
              </p>
            </div>
            <div className="lg:col-span-2 col-span-full p-2 lg:py-10 lg:px-5 relative overflow-hidden ">
              <video controls poster={Rectangle}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="play-button"></div>
            </div>
          </div>
        </div>
        <div className="lg:pt-20 py-6 flex flex-col items-center">
          <ServiceLogoBar />
        </div>
      </div>

      {/*----------------- Testimonial   video  Section      ------------------*/}

      <div className="2xl:max-w-7xl mx-auto flex flex-col gap-y-7 items-center justify-center py-20 ">
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
};

export default SucessStories;
