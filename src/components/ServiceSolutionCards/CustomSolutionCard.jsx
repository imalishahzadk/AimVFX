import React from "react";
import arrow from "../../assets/Arrow.png";

const CustomSolutionCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-wrap mb-10 w-[400px] border items-left justify-left rounded-3xl px-8 pt-10 pb-5 border-[#0513378C] bg-[#0513378C] relative">
      <div className="flex justify-left items-left absolute -top-8 left-16 transform -translate-x-1/2">
        <img src={icon} alt={title} className="w-11 h-12" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p
            className="text-white text-[26px] tracking-wide pb-4 font-semibold uppercase font-tek "
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage:
                "linear-gradient(to right, #00FFFF 100%, #15B8C7 100%)",
            }}
          >
            {title}
          </p>
          <p className="">
            <img src={arrow} alt="Image 7" className="h-6 w-6 ml-10" />
          </p>
        </div>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default CustomSolutionCard;
