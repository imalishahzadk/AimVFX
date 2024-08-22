import React from "react";
import Acclarate from "../../assets/images/Acclarate.png";
const Accelarat = () => {
  const data = [
    {
      heading: "accelerate creative speed",
      des: "Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam quis nulla pellentesque. Facilisis",
    },
    {
      heading: "lower hourly rates",
      price: "$33k",
      des: "Lorem ipsum dolor sit amet consectetur. Eu quis donec.",
    },

    {
      heading: "impactful",
      price: "65%",
      des: "Lorem ipsum dolor sit amet consectetur. Eu quis donec.",
    },
    {
      heading: "much faster",
      price: "70%",
      des: "Lorem ipsum dolor sit amet consectetur. Eu quis donec.",
    },
    {
      heading: "cost-effective",
      price: "50%",
      des: "Lorem ipsum dolor sit amet consectetur. Eu quis donec.",
    },
    {
      heading: "increase creative performance",
      des: "Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam quis nulla pellentesque. Facilisis",
    },
  ];
  return (
    <div className="relative">
      <div className="px-6 md:px-24 xl:grid grid-cols-7 gap-6 gap-y-6  2xl:pr-80">
        {data.slice(0, 3).map((item, ind) => {
          return (
            <div
              className={
                ind === 0
                  ? "p-7 mt-6 rounded-[62px] box-border border-2 border-[#2EABAF] xl:col-span-3"
                  : "xl:col-span-2 p-7 mt-6  rounded-[62px] border-2 border-[#2EABAF]"
              }
            >
              <div className="flex justify-between items-start">
                <h2 className="text-[45px] font-tek font-medium uppercase text-white">
                  {item.heading}
                </h2>
                <span className="text-[72px] text-[#00ffff] font-light font-tek">
                  {item.price}
                </span>
              </div>
              <p className="text-xl font-light text-white ">
                {item.des}
              </p>
              <button className="underline text-xl text-[#00FFFF]  py-3">
                READ ME
              </button>
            </div>
          );
        })}
      </div>
      <div className="absolute xl:block hidden right-0 -top-32">
        <img src={Acclarate} alt="" />
      </div>
      <div className="px-6 md:px-24 grid xl:grid-cols-7 gap-6 py-6 2xl:pl-80">
        {data.slice(3, 6).map((item, ind) => {
          return (
            <div
              className={
                ind < 2
                  ? " xl:col-span-2 p-7  rounded-[62px] border-2 border-[#2EABAF]"
                  : "p-7  rounded-[62px] border-2 border-[#2EABAF] xl:col-span-3"
              }
            >
              <div className="flex justify-between items-start">
                <h2 className="text-[45px] font-tek font-medium uppercase text-white pl-3">
                  {item.heading}
                </h2>
                <span className="text-[72px] text-[#00ffff] font-light font-tek">
                  {item.price}
                </span>
              </div>
              <p className="text-xl font-light text-white ">
                {item.des}
              </p>
              <button className="underline text-xl text-[#00FFFF]  py-3">
                READ ME
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accelarat;
