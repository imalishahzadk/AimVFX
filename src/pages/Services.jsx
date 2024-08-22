import React from "react";
import Navbar from "../components/Navbar/Navbar";
import shape7 from "../assets/127_arrow_icon_logo_with_3d_modern_style copy 1.png";
import Button from "../components/Button/Button";
import solution from "../assets/Solution.png";
import calendar from "../assets/Calendar.png";
import ServivePageVideo from "../components/CustomVideo/ServicePageVideo";
import SolutionCard from "../components/ServiceSolutionCards/SolutionCard";
import ServiceLogoBar from "../components/LogoBars/ServiceLogoBar";
import SerRatesVideo from "../components/CustomVideo/SerRatesVideo";
import ServicesBenefits from "../components/ServiceSolutionCards/ServiceBenefits";
import ServiceRateSection from "../components/RateSection/ServiceRateSection";
import Heading from "../components/Heading/Heading";
import { Checkbox, Divider } from "@mui/material";
import ServiceRateDesc from "../components/RateSection/ServiceRateDesc";
import ServiceRatesCount from "../components/RateSection/RatesCount";
import HowItWorks from "../components/ServiceComponents/HowItWorks";
import ServicePortfolioVideo from "../components/ServiceComponents/ServicePortfolio";
import HomeTestimoal from "../components/HomeTestimonals/HomeTestimonals";
import { FaPercent, FaStar, FaTrophy } from "react-icons/fa";
import WorkHistory from "../components/WorkHistory/WorkHistory";
import FaqSection from "../components/FAQ/FAQ";
import FooterForm from "../components/Footer/Footer";
import HomePortfolioVideo from "../components/HomePortfolioVideo/HomePortfolioVideo";
import StillHaveDoubts from "../components/Still Have Doubts/StillHaveDoubts";
import FooterWithForm from "../components/Footer/FooterWithForm";
import Calendar from "../components/Calender/calender";

const Services = () => {
  const descriptions = [
    [
      "Releasing that overwhelming pressure to get through your editing backlog",
      "Getting more leisure time and enjoying it more with one less thing to worry about",
      "Getting more joy out of creating content with freedom to explore your creative side",
    ],
    [
      "Using your skills and focusing your expertise to create better, more unique content",
      "Pursuing held-back ideas to reach your full potential as a content creator",
    ],
  ];

  return (
    <div className="service-page">
      <div className="lg:py-0 py-6">
        <div className="relative">
          <img
            src={solution}
            alt="Image 7"
            className="hidden lg:block absolute w-full h-auto lg:pt-[15%]"
          />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-[60%] px-5 pt-20 lg:pt-[10%] lg:pl-[10%]">
              <span className="text-white font-tek text-[40px] md:text-[70px] lg:text-[100px] z-10 uppercase">
                the video editing service for content creators
              </span>
              <div className="flex flex-wrap mt-5">
                <span className="flex items-center text-cyan-400 py-3 mr-2">
                  <img src={shape7} alt="img" className="w-7 mr-2" />
                  For Startups
                </span>
                <span className="flex items-center text-cyan-400 py-3 mr-2">
                  <img src={shape7} alt="img" className="w-7 mr-2" />
                  For Productions
                </span>
                <span className="flex items-center text-cyan-400 py-3 mr-2">
                  <img src={shape7} alt="img" className="w-7 mr-2" />
                  For Agencies
                </span>
                <span className="flex items-center text-cyan-400 py-3 mr-2">
                  <img src={shape7} alt="img" className="w-7 mr-2" />
                  For Enterprise
                </span>
                <span className="flex items-center text-cyan-400 py-3 mr-2">
                  <img src={shape7} alt="img" className="w-7 mr-2" />
                  For Creators
                </span>
                <span className="flex items-center text-cyan-400 py-3 mr-2">
                  <img src={shape7} alt="img" className="w-7 mr-2" />
                  For Entrepreneurs
                </span>
              </div>
              <div className="pt-6 flex flex-col lg:flex-row gap-3">
                <Button className="lg:px-8 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                  Choose a plan
                </Button>
                <Button className="lg:px-8 px-6 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                  Book a call
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-auto mt-6 lg:mt-20 lg:absolute lg:top-[35%] lg:left-[68%] relative z-10">
              <ServivePageVideo />
            </div>
          </div>
        </div>

        <div className="lg:pt-20 pt-5 flex flex-col items-center">
          <ServiceLogoBar />
        </div>
      </div>

      <div className="py-20">
        <div className="flex lg:flex-row flex-col items-center justify-center">
          <h3 className="solution-heading">Solutions</h3>
          <p className="text-white text-sm lg:pl-3 lg:text-start text-center px-3">
            For Startup, For Enterprise, For Agencies/Production, For Creators,
            For Enterprenuers
          </p>
        </div>
      </div>

      {/* --------------- Solution Section ----------- */}

      <div className="solution-cards">
        <SolutionCard />
      </div>

      {/* --------------- Calendar Section ----------- */}

      <div className="mx-auto max-w-7xl py-10 lg:px-0 px-3">
        <div className="flex lg:flex-row flex-col items-start gap-y-6 bg-[#15b8c7] rounded-3xl lg:py-10 py-6 lg:pl-20 lg:pr-10 px-6">
          <div className="flex items-start flex-col gap-y-2 lg:pr-10">
            <h2 className="text-white lg:text-[80px] text-[45px] uppercase font-tek">
              book a call now
            </h2>
            <h4 className="lg:text-2xl text-xl text-white  tracking-wide">
              To discuss details and take the next step
            </h4>
            <p className="text-white text-base ">
              Lorem ipsum dolor sit amet consectetur. Mollis in vestibulum et
              sit duis viverra. Purus lacus amet mollis aenean fringilla. Diam
              ornare in purus viverra. Nullam amet neque in consectetur
              suspendisse sem elit vel. Arcu lorem nulla risus dis. Eu euismod
              hac amet enim aliquet tristique. Donec nunc id eget et sit. Purus
              nam elementum nunc ipsum augue luctus amet risus massa.
            </p>
          </div>
          <div className="">
            {/* <img src={calendar} alt="Calendar" className="lg:max-w-sm h-auto" /> */}
            <Calendar />
          </div>
        </div>
      </div>

      {/* --------------- Rates Section ----------- */}

      <div className="rates-section">
        <div className="rates-container">
          <div className="rates-top">
            <h1 className="lg:text-[80px] text-[50px] text-white font-tek uppercase leading-tight">
              better rates than hiring a creative in house
            </h1>
            <div className="flex items-center justify-center pt-6">
              <SerRatesVideo />
            </div>
          </div>
        </div>
        <ServiceRatesCount />
        <div className="flex items-center justify-center lg:p-10 py-4 px-3">
          <h1 className="italic lg:text-3xl text-xl font-semibold">
            All benefits of getting your video editing done for you, without the
            headaches of hiring, managing or spending $$$ on equipment and
            software
          </h1>
        </div>

        <div className="lg:px-10 px-3">
          <ServicesBenefits />
        </div>
      </div>

      {/* --------------- Time Section -------------- */}

      <div className="save-time-section">
        <ServiceRateSection />
        <div className="dividerStyle">
          <Divider sx={{ backgroundColor: "#d9d9d9" }} />
        </div>
        <div className="rate-bottom-content">
          <Heading className="lg:text-[80px] text-[50px] uppercase text-white font-tek leading-tight">
            imagine not doing any of the above while still producing on-brand
            videos you can be proud of...
          </Heading>
          <p className="text-white text-center text-sm pt-4">
            Lorem ipsum dolor sit amet consectetur. Mollis in vestibulum et sit
            duis viverra. Purus lacus amet mollis aenean fringilla. Diam ornare
            in purus viverra. Nullam amet neque in consectetur suspendisse sem
            elit vel. Arcu lorem nulla risus dis. Eu euismod hac amet enim
            aliquet tristique. Donec nunc id eget et sit. Purus nam elementum
            nunc ipsum augue luctus amet risus massa.
          </p>
        </div>
        {/* ---------- Service Rate Description ------------ */}
        <ServiceRateDesc descriptions={descriptions} />

        <div className="rate-button flex gap-y-5">
          <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            book a call
          </Button>
          <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Choose a plan
          </Button>
        </div>

        <div className="dividerStyle">
          <Divider sx={{ backgroundColor: "#d9d9d9" }} />
        </div>
        {/* -------------- How it Works Section ---------- */}
        <div className="py-10">
          <Heading className="lg:text-[80px] text-[50px] uppercase text-white text-center font-tek">
            how it works
          </Heading>
          <div className="lg:px-40 lg:pt-10">
            <HowItWorks />
            <div className="how-work-btn">
              <Button className="how-work-btn-style px-8 py-2.5 bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                schedule a free consulation
              </Button>
            </div>
          </div>
        </div>
        {/*   ---------- portFolio Section ----------- */}

        <div className="flex flex-col gap-y-7 items-center justify-center lg:py-10  py-6 ">
          <div className="flex flex-col items-center justify-center">
            <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
              Portfolio
            </Heading>
            <p className="text-sm text-white  text-center lg:px-0 px-6">
              Uncover Our Rich Array of Work: Browse Categories Ranging from
              eLearning to Hollywood-style Productions.
            </p>
          </div>
          <div className="pt-6 pb-10 lg:px-0 px-2">
            <HomePortfolioVideo />
          </div>
        </div>

        {/* ---------- Testimonals Section -----------*/}
        <div className="flex flex-col gap-y-7 items-center justify-center py-20 ">
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
        </div>

        {/* ----------- Awards Section ---------- */}
        <div className="flex items-center justify-center ">
          <div className="flex flex-col md:flex-row gap-x-8 border border-[#15B8C7] px-8 md:px-20 pt-6 md:pt-10 pb-6 rounded-[35px]">
            <div className="flex flex-col gap-y-6 ">
              <Heading className="uppercase text-2xl md:text-4xl font-bold italic text-[#15B8C7]">
                Upword Activity
              </Heading>

              <div className="flex flex-col md:flex-row md:gap-x-20">
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">Hourly Rate</span>
                  <span className="font-bold">$25.00 - $50.00</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">Minimum project size</span>
                  <span className="font-bold">$1K+</span>
                </div>
                <div className="flex flex-col text-white">
                  <span className="text-gray-300">Total earned</span>
                  <span className="font-bold">$100K+</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block h-32 w-0.5 bg-gray-500"></div>{" "}
            {/* Hidden on smaller screens */}
            <div className="flex flex-col gap-y-4 mt-6 md:mt-0">
              {" "}
              {/* Added margin top for smaller screens */}
              <Heading className="uppercase text-xl md:text-2xl font-bold italic text-[#15B8C7] leading-tight">
                Awards
              </Heading>
              <div className="flex flex-col gap-y-3 -mt-2">
                <div className="flex flex-col text-white text-sm">
                  <span className="flex items-center gap-x-1.5">
                    <FaStar />
                    Cannes Lions
                  </span>
                  <span className="flex items-center gap-x-1.5">
                    <FaStar />
                    Red Apple
                  </span>
                </div>
                <div className="flex flex-col text-[#15B8C7]">
                  <span className="flex items-center gap-x-1.5">
                    <FaTrophy />
                    100% success rate
                  </span>
                  <span className="flex items-center gap-x-1.5">
                    <FaPercent />
                    Top Rated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pb-20 pb-40">
          <WorkHistory />
        </div>
      </div>
      <FaqSection />
      <StillHaveDoubts />
      <FooterWithForm />
    </div>
  );
};

export default Services;
