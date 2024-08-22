import React from "react";
import Rectangle from "../../assets/images/Rectangle 7609.png";
import Rectangle7615 from "../../assets/images/Rectangle 7515.png";
import Rectangle7616 from "../../assets/images/Rectangle 7516.png";
import Rectangle7617 from "../../assets/images/Rectangle 7517.png";
import Rectangle7618 from "../../assets/images/Rectangle 7518.png";
import Rectangle7619 from "../../assets/images/Rectangle 7519.png";
import Rectangle7620 from "../../assets/images/Rectangle 7520.png";
import arrow6 from "../../assets/images/arrow6.png";
import CareersGalerry from "./CareersGalerry";
const CareersCards = () => {
  const GalData = [
    {
      galSrc: Rectangle7615,
    },
    {
      galSrc: Rectangle7616,
    },
    {
      galSrc: Rectangle7617,
    },

    {
      galSrc: Rectangle7618,
    },
    {
      galSrc: Rectangle7619,
    },
    {
      galSrc: Rectangle7620,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:w-[100%] py-10 mr-auto">
        <div className="opacity-[50%]">
          <img src={Rectangle} alt="" className="object-cover w-80 h-80 ml-16" />
        </div>
        <div className="flex flex-col justify-center  px-7">
          <h1 className="font-tek font-normal uppercase lg:text-6xl text-5xl ">
            join a native remote company
          </h1>
          <p className="text-white text-xl  font-light">
            Lorem ipsum dolor sit amet consectetur. Platea molestie id neque
            nascetur est quis id varius. Consectetur venenatis tortor mattis a
            purus. Nibh risus varius at tellus molestie. Cras ullamcorper est
            quam ut egestas. Ac nunc nunc id dignissim. Eu proin tellus aliquam
            sapien aliquet.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:w-[80%]    py-10 ml-auto">
        <div className="flex flex-col justify-center  px-7">
          <h1 className="font-tek font-normal uppercase lg:text-6xl text-5xl">
            embark on a growth journey
          </h1>
          <p className="text-white text-xl  font-light">
            Lorem ipsum dolor sit amet consectetur. Platea molestie id neque
            nascetur est quis id varius. Consectetur venenatis tortor mattis a
            purus. Nibh risus varius at tellus molestie. Cras ullamcorper est
            quam ut egestas. Ac nunc nunc id dignissim. Eu proin tellus aliquam
            sapien aliquet.
          </p>
        </div>
        <div className=" flex justify-end flex-wrap">
          <img src={arrow6} alt="" className="object-cover" />
        </div>
      </div>
      <div className="px-6 lg:px-0 max-w-4xl mx-auto  text-white pt-6">
        <h1 className="font-tek  font-normal lg:text-6xl text-5xl leading-tight uppercase">
          be part of an international community
        </h1>
        <p className=" font-light text-xl">
          Lorem ipsum dolor sit amet consectetur. Sed tincidunt sem nunc proin
          volutpat gravida amet sed eu. Mauris porttitor posuere integer
          tristique auctor. Nisi quis purus augue proin integer feugiat nunc. Ut
          aliquam massa amet feugiat neque commodo magnis nullam. Tortor egestas
          fringilla bibendum gravida neque at. Fringilla id elementum lobortis
          vel non nisl risus pellentesque.
        </p>
      </div>
      {/*
    
    
     <div className="lg:px-44 px-6 2xl:px-0  grid xl:grid-cols-3 gap-3 py-14">
        <div className="col-span-3 2xl:col-span-2 grid sm:grid-cols-2 mx-auto md:grid-cols-3 2xl:flex 2xl:flex-wrap gap-5">
          {GalData.map((item, ind) => {
            return (
              <div key={ind} className="">
                <img
                  src={item.galSrc}
                  alt=""
                  className={
                    ind < 2
                      ? " 2xl:w-[600px] h-[270px] w-[450px ] h-auto"
                      : "2xl:w-[395px] h-[270px] w-[450px ] h-auto "
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="col-span-3 2xl:col-span-1">
          <img
            src={Rectangle7617}
            alt=""
            className=" 2xl:w-[711px] 2xl:h-[560px] w-[600px] h-[270px] 2xl:rounded-none rounded-3xl py "
          />
        </div>
      </div>
    
    */}

      {/*
    <div className="lg:px-44 px-6 2xl:px-0  grid xl:grid-cols-3 gap-3 py-14">
        <div className="col-span-3 2xl:col-span-2 grid sm:grid-cols-2 mx-auto md:grid-cols-3 2xl:flex 2xl:flex-wrap gap-5">
          {GalData.map((item, ind) => {
            return (
              <div key={ind} className="">
                <img
                  src={item.galSrc}
                  alt=""
                  className={
                    ind < 2
                      ? " 2xl:w-[600px] h-[270px] w-[450px ]  2xl:rounded-none rounded-3xl "
                      : "2xl:w-[395px] h-[270px] w-[450px ]   2xl:rounded-none rounded-3xl"
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="col-span-3 2xl:col-span-1">
          <img
            src={Rectangle7617}
            alt=""
            className=" 2xl:w-[711px] 2xl:h-[560px] w-[600px] h-[270px] 2xl:rounded-none rounded-3xl py "
          />
        </div>
      </div>
  
  
  */}
      <div className="grid lg:grid-cols-9 md:grid-cols-6 gap-5 px-6 lg:px-0 py-10">
        {GalData.map((item, ind) => {
          return (
            <div
              className={
                ind < 2
                  ? "md:col-span-3 col-span-full "
                  : ind === 2
                  ? "col-span-full lg:col-span-3 lg:row-span-3 order-last lg:order-none "
                  : "col-span-full md:col-span-2 h-[250px]"
              }
            >
              <img
                src={item.galSrc}
                alt=""
                className={
                  ind < 2
                    ? "w-[600px] h-[270px] md:rounded-none rounded-3xl"
                    : ind === 2
                    ? " lg:w-[600px] lg:h-[530px] w-full h-[400px] md:rounded-none rounded-3xl"
                    : "w-[400px] h-[240px] md:rounded-none rounded-3xl"
                }
              />
            </div>
          );
        })}
      </div>

      <CareersGalerry />
    </div>
  );
};

export default CareersCards;
