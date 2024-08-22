import React from "react";
import calendar from "../../assets/images/calendar.png";
import Camada2 from "../../assets/images/Camada2.png";
import Group2 from "../../assets/images/Group2.png";
import Group1 from "../../assets/images/Group.png";
import Group6 from "../../assets/images/Group6.png";
import Group3 from "../../assets/images/Group3.png";
import Group4 from "../../assets/images/Group4.png";
import Group5 from "../../assets/images/Group5.png";
import Group7 from "../../assets/images/Group7.png";

const ConsultationImage = () => {
  const data = [
    {
      src: calendar,
      head: "CHOOSE EITHER A MONTHLY OR QUARTERLY RETAINER",
      des: "You don't have to worry whether you're getting the most value - we give you everything you need for one flat-fee. You can also choose from a range of production enhancing add-ons, including subtitles, thumbnails and more.",
    },

    {
      src: Camada2,
      head: "BOOK YOUR CUSTOMER ONBOARDING CALL",
      des: "You don't have to worry whether you're getting the most value - we give you everything you need for one flat-fee. You can also choose from a range of production enhancing add-ons, including subtitles, thumbnails and more.",
    },
    {
      src: Group2,
      head: "SEE YOUR NEW PROJECT DASHBOARD",
      des: "You don't have to worry whether you're getting the most value - we give you everything you need for one flat-fee. You can also choose from a range of production enhancing add-ons, including subtitles, thumbnails and more.",
    },
    {
      src: Group3,
      head: "SEND US YOUR VIDEO REQUEST FORM TO START YOUR FIRST PROJECT",
      des: "You don't have to worry whether you're getting the most value - we give you everything you need for one flat-fee. You can also choose from a range of production enhancing add-ons, including subtitles, thumbnails and more.",
    },
    {
      src: Group4,
      head: "WE'LL TAKE UP TO 40GB OF FOOTAGE OFF YOUR HANDS AND TURN IT INTO YOUR VISION",
      des: "You don't have to worry whether you're getting the most value - we give you everything you need for one flat-fee. You can also choose from a range of production enhancing add-ons, including subtitles, thumbnails and more.",
    },
    {
      src: Group4,
      head: "YOU'LL GET YOUR FIRST DRAFT IN JUST 1-3 BUSINESS DAYS DEPENDING ON COMPLEXITY",
      des: "You don't have to worry whether you're getting the most value - we give you everything you need for one flat-fee. You can also choose from a range of production enhancing add-ons, including subtitles, thumbnails and more.",
    },
    {
      src: Group6,
      head: "EASILY SYNC-UP YOUR VIDEO WITH YOUR EXACT VISION USING THE VIDEO PROOFING TOOL",
      des: "You don't have to worry whether you're getting the most value - we give you everything you need for one flat-fee. You can also choose from a range of production enhancing add-ons, including subtitles, thumbnails and more.",
    },
    {
      src: Group7,
      head: "YOU GET UNLIMITED VIDEO REQUESTS",
      des: "You don't have to worry whether you're getting the most value - we give you everything you need for one flat-fee. You can also choose from a range of production enhancing add-ons, including subtitles, thumbnails and more.",
    },
  ];
  return (
    <div className="promotional-section py-32 text-white ">
      <div className=" px-6 lg:px-0 max-w-4xl mx-auto">
        <h1 className="py-10 lg:text-8xl text-5xl uppercase text-center font-[Teko] ">
          how we edit your videos step by step
        </h1>
        <div className="px-7 gap-28">
          {data.map((item, ind) => {
            return (
              <div
                className={
                  ind % 2 == 0
                    ? "lg:flex  justify-between gap-11"
                    : "lg:flex flex-row-reverse  gap-11 justify-between items-start"
                }
              >
                <div className="flex-1 py-5">
                  <h1 className="lg:text-3xl text-5xl font-[Teko] text-[#00ffff] uppercase pb-2">
                    {item.head}
                  </h1>
                  <p className="font-tek text-lg font-light">{item.des}</p>
                </div>
                <div
                  className={
                    ind % 2 == 0
                      ? "flex-1 flex justify-end py-6"
                      : "flex-1 py-6 "
                  }
                >
                  <div className="py-5 lg:w-80 lg:h-60 w-60 h-60 bg-[#EFFCFA1F] flex items-center justify-center  rounded-3xl ">
                    <img src={item.src} alt="" className="object-cover" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConsultationImage;
