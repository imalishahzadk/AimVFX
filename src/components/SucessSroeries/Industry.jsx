import React from "react";

import bitcoin1 from "../../assets/images/bitcoin1.png";
import bitcoin2 from "../../assets/images/bitcoin2.png";
import bitcoin3 from "../../assets/images/bitcoin3.png";
import bitcoin4 from "../../assets/images/bitcoin4.png";
import bitcoin5 from "../../assets/images/bitcoin5.png";
import bitcoin6 from "../../assets/images/bitcoin6.png";
import bitcoin7 from "../../assets/images/bitcoin7.png";
import bitcoin8 from "../../assets/images/bitcoin8.png";

const Industry = () => {
  const logo = [
    {
      img: bitcoin1,
      name: "Business & marketing",
      filter: "All Filter :",
      btn: "all",
    },
    {
      img: bitcoin2,
      name: "real estate",
      btn: "ads",
    },
    {
      img: bitcoin3,
      name: "coaching & education",
      btn: "Beauty & fashion",
    },
    {
      img: bitcoin4,
      name: "entertainment",
      btn: "business & marketing",
    },
    {
      img: bitcoin5,
      name: "health & wellness",
      btn: "coaching & education",
    },
    {
      img: bitcoin6,
      name: "lifestyle",
      btn: "crowdfunding",
    },
    {
      img: bitcoin7,
      name: "beauty & fashion",
      btn: "youtube",
    },
    {
      img: bitcoin8,
      name: "finance",
      btn: "youtube",
    },
    {
      btn: "entertainment",
    },
    {
      btn: "finance",
    },
    {
      btn: "health & wellness",
    },
    {
      btn: "lifestyle",
    },
    {
      btn: "podcast",
    },
    {
      btn: "real estate",
    },
    {
      btn: "tiktok & reels",
    },
  ];

  return (
    <div className="lg:px-28 pt-28">
      <h1 className="text-center text-5xl font-[Teko] uppercase py-12 font-[400]">
        We work with your industry
      </h1>
      <div className="px-28 grid 2xl:grid-cols-8 xl:grid-cols-4 sm:grid-cols-2 sm:px-28 md:px-40 xl:px-0 pt-12 pb-10 gap-4">
        {logo.slice(0, 8).map((item, ind) => {
          return (
            <div
              className="flex flex-col  items-center justify-center py-7 px-5 rounded-3xl border-[3px] border-[#fff]"
              key={ind}
            >
              <div className="flex flex-col items-center gap-y-3 ">
                <img className="w-12 h-10 object-cover" src={item.img} alt="" />
                <h2 className="uppercase text-3xl font-tek font-normal text-center pt-3">
                  {item.name}
                </h2>
              </div>{" "}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center flex-wrap gap-y-8 gap-x-1 py-16">
        {logo.map((item, ind) => {
          return (
            <div className="flex items-center gap-x-2">
              <span className="text-[20px] text-white font-light">{item.filter}</span>
              <button
                className={
                  ind === 0
                    ? "py-3 px-7 text-[16px] uppercase rounded-full border-4 border-white bg-white text-black "
                    : "py-3 px-7 text-[16px] uppercase rounded-full border-4  border-white "
                }
              >
                {item.btn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Industry;
