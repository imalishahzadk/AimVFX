import React from "react";
import Button from "../Button/Button";
import arrow3 from "../../assets/images/arrow3.png";
import baseline1 from "../../assets/images/baseline1.png";
import baseline2 from "../../assets/images/baseline2.png";
import baseline3 from "../../assets/images/baseline3.png";
import baseline4 from "../../assets/images/baseline4.png";

const Creative = () => {
  const data = [
    {
      src: baseline1,
      span: "top-quality creatives",
      text: "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      src: baseline2,
      span: "speed",
      text: "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      src: baseline3,
      span: "flexibility",
      text: "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      src: baseline4,
      span: "cost-efficiency",
      text: "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
  ];
  return (
    <div className="promotional-section ">
      <div className="px-20  sm:max-w-6xl lg:max-w-7xl mx-auto">
        <div className=" grid lg:grid-cols-3">
          <div className="col-span-2">
            <h1 className="text-5xl sm:6xl xl:text-8xl font-[Teko] font-normal uppercase py-4">
              aim-fx is the better way to get creative done
            </h1>
            <p className="py-3 font-tek text-xl font-medium">
              Lorem ipsum dolor sit amet consectetur. Egestas id rhoncus morbi
              commodo auctor. Nulla imperdiet porttitor sollicitudin vitae
              varius semper in tortor integer. Quis nulla consequat ac ut
              consequat. Lorem sem lectus eu eros varius. Quis urna fringilla
              sed.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-2 gap-5 py-5">
              <p className="flex items-center  font-tek text-[#00FFFF] text-xl font-normal">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center  font-tek text-[#00FFFF] text-xl font-normal">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center  font-tek text-[#00FFFF] text-xl font-normal">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center  font-tek text-[#00FFFF] text-xl font-normal">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center  font-tek text-[#00FFFF] text-xl font-normal">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
              <p className="flex items-center  font-tek text-[#00FFFF] text-xl font-normal">
                <img src={arrow3} alt="" />
                <span>Lorem ipsum dolor sit amet consectetur.</span>
              </p>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="pt-28">
              <Button className="px-11 py-2.5 text-sm font-semibold text-[#273A5F]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 py-20 px-20 lg:px-40 gap-5">
        {data.map((item, ind) => {
          return (
            <div key={ind} className="flex flex-col justify-between">
              <img src={item.src} alt="" className="w-16 h-16" />
              <p className="text-[#2f6f7f] font-[Teko] text-5xl font-normal py-2  uppercase">
                {item.span}
              </p>
              <p className="text-[#E4E4E4]">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Creative;
