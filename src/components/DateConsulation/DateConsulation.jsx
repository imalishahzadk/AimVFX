import React from "react";
import Group469647 from "../../assets/images/Group 469647.png";
import arrow3 from "../../assets/images/arrow3.png";
import Calender from "../Calender/calender"
const DateConsulation = () => {
  return (
    <div className=" py-20">
      <div className="lg:px-10 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-x-20">
        <div className="flex flex-col justify-center gap-y-4">
          <h2 className="lg:text-[80px] text-[60px]  uppercase py-5 font-tek leading-tight">
            book a free consulation
          </h2>
          <p className="font-light -mt-4">
            Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam
            quis nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
            Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
            amet pelle
          </p>
          <div className="flex items-start flex-col  gap-y-6 py-6">
          <div className="flex items-center gap-1.5 text-[#00ffff]">
            <img src={arrow3} alt="" className="w-10 h-10" />
            <p>
              Lorem ipsum dolor sit amet consectetur. A suspendisse interdum
              phasellus dignissim. Id tellus fermentum morbi id blandit dolor
              ultrices rhoncus commodo.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[#00ffff]">
            <img src={arrow3} alt="" className="w-10 h-10" />
            <p>
              Lorem ipsum dolor sit amet consectetur. A suspendisse interdum
              phasellus dignissim. Id tellus fermentum morbi id blandit dolor
              ultrices rhoncus commodo.
            </p>
          </div>
          </div>
        </div>
        <div className="lg:mt-10">
          {/* <img src={Calender} alt="" className="w-full" /> */}
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default DateConsulation;
