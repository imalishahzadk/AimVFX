import React from "react";
import Button from "../Button/Button";
import Group469378 from "../../assets/images/Group 469378.png";
import arrow2 from "../../assets/images/arrow2.png";
import copy from "../../assets/images/11 copy 2.png";
import WorkSolutionCard from "./WorkSolutionCard";
import { CheckIcon } from "@heroicons/react/24/outline";
import arrow from "../../assets/images/arrow -33.png";
import Rectangle7583 from "../../assets/images/Rectangle 7583.png";
import Vector11 from "../../assets/images/Vector11 .png";
import Vector12 from "../../assets/images/Vector12 .png";
import Vector13 from "../../assets/images/Vector13 .png";
import Vector14 from "../../assets/images/Vector14 .png";
import Vector15 from "../../assets/images/Vector15 .png";
import Accelarat from "./Accelarat";
import CardWorks from "./CardWorks";
import FooterForm from "../Footer/FooterForm";
import Footer from "../Footer/Footer";
import Question from "../PromationalAbout/Question";
import Questions from "../../assets/images/Questions .png";
import DateConsulation from "../DateConsulation/DateConsulation";
import FooterWithForm from "../Footer/FooterWithForm";
const HowitWorksPage33 = () => {
  const cards = [
    {
      heading: "for marketers",
      descrp:
        "Lorem ipsum dolor sit amet consectetur. Ut et id adipiscing at euismod odio.",
      descrp2:
        "Lorem ipsum dolor sit amet consectetur. Congue morbi gravida rhoncus sit tempus massa purus sollicitudin. Volutpat congue.",
      icon: Vector11,
      feed: "internal creative",
      descrp3:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      heading: "for creative",
      descrp:
        "Lorem ipsum dolor sit amet consectetur. Ut et id adipiscing at euismod odio.",
      descrp2:
        "Lorem ipsum dolor sit amet consectetur. Congue morbi gravida rhoncus sit tempus massa purus sollicitudin. Volutpat congue.",
      icon: Vector12,
      feed: "creative agencies",
      descrp3:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      icon: Vector13,
      feed: "creative-as-a-service",
      descrp3:
        "Lorem ipsum dolor sit amet consectetur. Eget at interdum imperdiet ullamcorper semper mus adipiscing sodales. Aliquam id nulla quam sit eget si. ",
      descrp4:
        " Sit aliquam blandit vestibulum donec turpis volutpat quis. Ligula commodo lorem risus nisl etiam nam orci malesuada. Tincidunt placerat tortor vitae hendrerit amet sed vitae elementum mauris. Sit sagittis ut phasellus dignissim. In tristique et pretium volutpat lorem at sed sem molestie. Nibh ut neque eget risus et vulputate dui est eget.",
    },
    {
      icon: Vector14,
      feed: "freelancers",
      descrp3:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      icon: Vector15,
      feed: "self-service tools",
      descrp3:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
  ];
  return (
    <div className="solution-page pt-24 ">
      {/*----------------------------   Hero SEction for HowitWorks page33        --------------------------------*/}

      <div className="pt-32 pb-10 px-6 xl:px-40 lg:px-10 grid lg:grid-cols-2 gap-y-10 gap-x-16 text-white">
        <div className="flex flex-col justify-center gap-y-3">
          <h1 className="lg:text-6xl text-5xl font-tek uppercase font-normal ">
            lift off into aim-fx one tab video editing platform
          </h1>
          <p className="text-white">
            Freezing 2 times for two weeks a year If one video editor is not
            enough, then you need to buy another package. You need to pay
            monthly. You need to pay with monthly, quarterly and annual
            discounts.
          </p>
          <br />

          <div className="flex items-center gap-x-5 lg:gap-x-6  gap-y-10 pt-5">
            <Button className="px-8 py-2.5 text-sm font-semibold text-[#000]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#ffffff] hover:bg-cyan-800  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Book A Call
            </Button>
            <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent  border-2 border-[#fff] rounded-full hover:bg-[#69FBF17D] focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              CHOOSE A PLAN
            </Button>
          </div>
        </div>
        <div className=" flex justify-center items-center ">
          <div className="relative overflow-hidden">
            <video controls poster={Group469378}>
              <source src="your-video-file.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="play-button"></div>
          </div>
          <div className="absolute -z-10 lg:block hidden ">
            <img className="" src={copy} alt="" />
          </div>
        </div>
      </div>

      {/*----------------------------   Text Area  HowitWorks page33        --------------------------------*/}

      <div className="max-w-5xl px-6 py-20  mx-auto ">
        <div className="flex flex-wrap justify-between  gap-x-6 gap-y-10">
          <h1 className="lg:text-7xl max-w-2xl text-5xl font-tek uppercase font-normal text-white">
            what makes caas the smartest choice?
          </h1>
          <div className=" flex items-end w-60">
            <div className="w-full pb-6">
              <Button className="px-8 py-2.5  text-sm font-semibold text-[#000]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#ffffff] hover:bg-cyan-800  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Book A Call
              </Button>
            </div>
          </div>
        </div>
        <p className="max-w-3xl  py-7 text-white">
          Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam quis
          nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
          Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
          amet pelle
        </p>
      </div>
      {/*----------------------------WorkSolutionCard for Logo    HowitWorks page33        --------------------------------*/}

      <div className="px-6 pb-10">
        <WorkSolutionCard />
      </div>

      {/*---------------------------for marketers    SEction        --------------------------------*/}

      <div className="relative  max-w-3xl mx-auto text-center lg:px-0 text-white px-5 py-10">
        <h1 className="lg:text-7xl text-5xl font-tek uppercase font-normal">
          bridging the gap between marketers & creatives
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ut et id adipiscing at euismod
          odio. Laoreet turpis elit placerat tincidunt tristique donec. At
          lobortis et ultrices placerat donec cursus neque sed. Vitae in eget ac
          venenatis vestibulum. Mi interdum dictum tincidunt at. Dui volutpat
          morbi a in.
        </p>
        <div className="lg:block hidden absolute -z-10 -top-40">
          <img src={arrow} alt="" className=" h-[1400px] w-[1400px]" />
        </div>
      </div>

      <div className="py-20 lg:max-w-6xl mx-auto">
        <div className="px-6 md:px-5 lg:p-0   gap-8  grid md:grid-cols-2 ">
          {cards.slice(0, 2).map((item) => {
            return (
              <div className="px-5 lg:px-16 py-16 rounded-3xl border-[10px] border-[#051338] bg-[#05133766] text-[#ffffff]">
                <h2 className="text-center text-[#15B8C7] font-medium font-[Teko] text-4xl uppercase pb-5">
                  {item.heading}
                </h2>
                <div className="flex items-start gap-3 py-3">
                  <span className="py-1 px-1 rounded-full bg-[#00FFFF]">
                    <CheckIcon className="h-4 w-4 text-[#05133766] font-bold" />
                  </span>

                  <p>{item.descrp}</p>
                </div>
                <div className="flex items-start gap-3 py-3">
                  <span className="py-1 px-1 rounded-full bg-[#00FFFF]">
                    <CheckIcon className="h-4 w-4 text-[#05133766] font-bold" />
                  </span>
                  <p>{item.descrp2}</p>
                </div>
                <div className="flex items-start gap-3 py-3">
                  <span className="py-1 px-1 rounded-full bg-[#00FFFF]">
                    <CheckIcon className="h-4 w-4 text-[#05133766] font-bold" />
                  </span>
                  <p>{item.descrp}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-6 lg:px-0 flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-10 py-20 text-white">
          <h1 className="lg:text-8xl text-5xl font-tek uppercase font-normal">
            lower your cac with creative that performs
          </h1>
          <div className=" w-full flex justify-center lg:justify-end items-center">
            <Button className="px-8 py-2.5 text-sm font-semibold text-[#273A5F]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#ffffff] hover:bg-cyan-800  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              see it for yourself
            </Button>
          </div>
        </div>
      </div>
      {/*-------------------------- Accelarate component   SEction        --------------------------------*/}

      <div className="pb-28">
        <Accelarat />
      </div>
      {/*--------------------------FOR CAAS SOLUTION   SEction        --------------------------------*/}
      <div className="promotional-section py-40 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="flex flex-wrap lg:flex-nowrap gap-x-10 gap-y-10 py-10 text-white">
            <div className="lg:flex-[2]">
              <h1 className="lg:text-8xl text-5xl font-tek uppercase font-normal">
                aim-fx is the ultimate caas solution
              </h1>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end items-end pb-6">
              <Button className="px-8 py-2.5 text-sm font-semibold text-[#273A5F]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#ffffff] hover:bg-cyan-800  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a demo
              </Button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
            <div className="relative overflow-hidden">
              <video controls poster={Group469378}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="play-button"></div>
            </div>
            <div className="py-2 text-white flex flex-col justify-between">
              <p className=" text-xl font-normal font-tek">
                Lorem ipsum dolor sit amet consectetur. Ut urna commodo massa
                risus sem pulvinar pulvinar bibendum. Platea vel eget amet
                pharetra id enim. Sed quis eget urna facilisis tristique.
                Bibendum arcu sit risus lorem. Convallis facilisi enim sit
                habitant turpis sed ligula turpis purus. Semper pharetra mattis.
              </p>
              <div className="flex gap-2 pt-3">
                <span>
                  <img src={Rectangle7583} alt="" />
                </span>
                <span>
                  <span className="italic font-[700]">Dean Collins</span>
                  <p className="font-[300] text-[#00FFFF] text-[18px]">
                    Director of Brand Design
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------hiring or traditional.   SEction        --------------------------------*/}

      <div className="max-w-7xl px-6 py-20  mx-auto ">
        <div className="flex flex-wrap justify-between  gap-x-6 gap-y-10">
          <h1 className="lg:text-8xl max-w-2xl text-5xl font-tek uppercase font-normal text-white">
            hiring or traditional outsource?{" "}
            <span className="text-[#00ffff]">neither.</span>
          </h1>
          <div className=" flex items-end w-60">
            <div className="w-full pb-6">
              <Button className="px-8 py-2.5  text-sm font-semibold text-[#000]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full  hover:text-[#ffffff] hover:bg-cyan-800  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Book A Call
              </Button>
            </div>
          </div>
        </div>
        <div>
          <p className="max-w-3xl  py-7 text-white">
            Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam
            quis nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
            Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
            amet pelle
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-7 gap-y-5 py-12">
          {cards.map((item, ind) => {
            return (
              <div
                key={ind}
                className={
                  ind === 2 ? "lg:col-span-1 row-span-2" : " lg:col-span-1"
                }
              >
                <img src={item.icon} alt="" className="py-6" />
                <h2 className="lg:text-5xl text-3xl font-tek font-normal text-[#15B8C7] pb-3 uppercase ">
                  {item.feed}
                </h2>
                <p className="text-white font-light font-tek text-xl">
                  {item.descrp3}
                </p>
                <p className="text-white font-light font-tek text-xl pt-1s">
                  {item.descrp4}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <CardWorks />
      <Question />
      <div className="text-white">
        <DateConsulation />
      </div>
     <FooterWithForm/>
    </div>
  );
};

export default HowitWorksPage33;
