import React from "react";
import StoryVideo from "./StoryVideo";
import suzuki from "../../assets/images/suzuki video (1).png";
import suzuki2 from "../../assets/images/suzuki video.png";
import holographic from "../../assets/images/holographic_fluid_drop_shapes_illustration_02 copy 5.png";
import Rectangle7600 from "../../assets/images/Rectangle 7600.png";
import Rectangle7601 from "../../assets/images/Rectangle 7601.png";
import Rectangle7602 from "../../assets/images/Rectangle 7602.png";
import Rectangle7603 from "../../assets/images/Rectangle 7603.png";
import holographic2 from "../../assets/images/holographic2.png";

import Rectangle76 from "../../assets/images/Rectangle 76.png";
import Rectangle75 from "../../assets/images/Rectangle 75.png";
import Button from "../Button/Button";
import hologrphic from "../../assets/images/hologrphic.png";
import Clients from "../Clients/Clients";
import FooterForm from "../Footer/Footer";
import FooterWithForm from "../Footer/FooterWithForm";
const StoryPage = () => {
  const product = [
    {
      heading: "objective",
      description:
        "TV ADVERTISEMENT The concept for this ad campaign was to showcase the car as a central part of family life, highlighting its versatility and practicality. A live-action video advertisement that positions the car as the fifth member of the family.",
      src: Rectangle7600,
    },
    {
      heading: "the script",
      description:
        "Lorem ipsum dolor sit amet consectetur. At quis nunc mus iaculis. Nunc id ut ipsum vel lectus maecenas. Sem in laoreet gravida etiam in amet sociis non at. Ut senectus nisl aliquet vivamus arcu pharetra at. Pharetra lacus nulla tellus mi lectus vitae nullam tellus.",
      src: Rectangle7601,
    },
    {
      heading: "casting",
      description:
        "Lorem ipsum dolor sit amet consectetur. At quis nunc mus iaculis. Nunc id ut ipsum vel lectus maecenas. Sem in laoreet gravida etiam in amet sociis non at. Ut senectus nisl aliquet vivamus arcu pharetra at. Pharetra lacus nulla tellus mi lectus vitae nullam tellus.",
      src: Rectangle7602,
    },
  ];

  return (
    <div className="solution-page text-white pt-28">
      <div className="xl:relative">
        <h1 className="lg:text-8xl text-6xl font-[Teko] uppercase text-center py-14 font-normal">
          suzuki video commercial
        </h1>

        <StoryVideo />
        <div className="xl:block hidden xl:absolute bottom-[-120px] -z-10">
          <img src={suzuki} alt="" />
          <img
            src={holographic}
            alt=""
            className="absolute -rotate-180  -z-10 left-48 bottom-[-150px]"
          />
          <img src={suzuki2} alt="" />
        </div>
      </div>

      <div className="px-6 max-w-6xl mx-auto py-20 pt-40">
        {product.map((item, ind) => {
          return (
            <div
              className={
                ind % 2 == 0
                  ? "md:flex gap-12 justify-between"
                  : " md:flex flex-row-reverse gap-9  justify-between"
              }
            >
              <div
                className={
                  ind % 2 == 0
                    ? " flex-1 flex flex-col py-9 justify-center"
                    : " flex-1 text-right flex py-9  flex-col justify-center"
                }
              >
                <h2 className="text-5xl font-[Teko] font-normal uppercase py-3">
                  {item.heading}
                </h2>
                <p className="text-lg  font-light">
                  {item.description}
                </p>
              </div>
              <div
                className={
                  ind % 2 == 0 ? "flex justify-end flex-1" : " flex-1  "
                }
              >
                <img src={item.src} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      {/*---------------------------------  Location Section   -------------------------------------------------*/}

      <div className="promotional-section px-5 lg:py-28 py-40">
        <div className="xl:max-w-6xl mx-auto md:gap-24 grid font-[Teko] md:px-40 sm:px-12 lg:px-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-4">
            <h1 className="lg:text-8xl text-6xl uppercase font-normal ">
              locations
            </h1>
            <p className="py-3 text-lg font-light ">
              Lorem ipsum dolor sit amet consectetur. At quis nunc mus iaculis.
              Nunc id ut ipsum vel lectus maecenas. Sem in laoreet gravida etiam
              in amet sociis non at. Ut senectus nisl aliquet vivamus arcu
              pharetra at. Pharetra lacus nulla tellus mi lectus vitae nullam
              tellus.
            </p>
            <div className="pt-10 text-base font-medium ">
              <Button className="uppercase text-white font-semibold border-white border-4 px-10 py-2.5 rounded-full">
                location shooting services
              </Button>
            </div>
          </div>
          <div className=" flex flex-col justify-center">
            <img src={Rectangle75} alt="" className="h-72 py-3" />
            <img src={Rectangle76} alt="" className="h-72 py-3" />
          </div>
        </div>
      </div>

      {/*---------------------------------  selecting the scenes Section   -------------------------------------------------*/}
      <div className="px-6 max-w-6xl py-20 mx-auto md:gap-24 grid  md:grid-cols-2">
        <div className="flex flex-col justify-center py-4">
          <h1 className="text-5xl font-[Teko] uppercase font-normal ">
            selecting the scenes
          </h1>
          <p className="py-3 ">
            Lorem ipsum dolor sit amet consectetur. At quis nunc mus iaculis.
            Nunc id ut ipsum vel lectus maecenas. Sem in laoreet gravida etiam
            in amet sociis non at. Ut senectus nisl aliquet vivamus arcu
            pharetra at. Pharetra lacus nulla tellus mi lectus vitae nullam
            tellus.
          </p>
        </div>
        <div>
          <img src={Rectangle7603} alt="" />
        </div>
      </div>

      {/*---------------------------------Final Video  Section   -------------------------------------------------*/}

      <div className="pb-24">
        <div className="max-w-3xl mx-auto text-center py-10">
          <h1 className="text-5xl font-normal uppercase py-4 font-[Teko] ">
            final video
          </h1>
          <p className=" text-lg font-light max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. At quis nunc mus iaculis.
            Nunc id ut ipsum vel lectus maecenas. Sem in laoreet gravida etiam
            in amet sociis non at. Ut senectus nisl aliquet vivamus arcu
            pharetra at. Pharetra lacus nulla tellus mi lectus vitae nullam
            tellus.
          </p>
        </div>
        <StoryVideo />
      </div>

      {/*---------------------------------Commercial  Section   -------------------------------------------------*/}

      <div className="px-5 py-12 max-w-6xl mx-auto">
        <div className=" grid lg:grid-cols-5 bg-[#15B8C7] rounded-3xl">
          <div className="hidden col-span-2  lg:block lg:relative">
            <img src={hologrphic} alt="" className="absolute left-0 bottom-0" />
          </div>
          <div className=" lg:col-span-3 overflow-hidden lg:relative py-24 lg:pr-44 lg:px-0 px-2">
            <img
              src={holographic2}
              alt=""
              className="hidden lg:block lg:absolute top-[-6px] right-0 "
            />
            <h1 className="text-5xl lg:text-7xl font-normal uppercase py-3 font-[Teko] ">
              TV COMMERCIAL BY AIM-FX
            </h1>
            <p className="">
              AIM-FX were outcome-focused and worked closely with Suzuki to
              create a concept that aligned with the brand and target audience,
              resulting in effective and engaging video advertising content.
            </p>
            <div className="flex gap-y-5 gap-x-3 lg:gap-x-5  mt-6">
              <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a call
              </Button>
              <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-black bg-white hover:bg-gray-100 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Choose a plan
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/*---------------------------------Clients  Section   -------------------------------------------------*/}

      <div className="py-10">
        <h1 className=" text-5xl lg:text-7xl font-normal uppercase py-3 font-[Teko] text-center">
          client response
        </h1>
        <Clients />
      </div>
      <FooterWithForm/>
    </div>
  );
};

export default StoryPage;
