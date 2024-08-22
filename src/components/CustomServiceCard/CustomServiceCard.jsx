// CustomServiceCard.jsx

import React from "react";

const CustomServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col border items-center justify-center rounded-3xl px-8 pt-10 pb-5 border-[#0513378C] bg-[#0513378C] relative transform transition-transform duration-300 hover:scale-105 mx-auto mb-4 max-w-[300px]">
      <div className="flex justify-center items-center absolute -top-5 left-1/2 transform -translate-x-1/2">
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      <div className="flex items-center justify-center flex-col text-center">
        <p
          className="text-white text-[30px] tracking-wide pb-4 font-semibold uppercase font-tek"
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
        <p className="text-xs text-white w-60">{description}</p>
      </div>
    </div>
  );
};

export default CustomServiceCard;
