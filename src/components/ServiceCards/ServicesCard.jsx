import React from "react";

const ServicesCard = ({ service, isActive, onClick }) => {
  return (
    <div
      key={service.id}
      className={`flex flex-col border-2 border-[#15B8C7]  rounded-5xl px-6 pt-3 pb-1 transition duration-150 ease-in-out cursor-pointer ${
        isActive
          ? "bg-gradient-to-r from-[#15B8C7] to-[#00FFFF] text-black"
          : "bg-transparent text-white"
      }`}
      onClick={onClick}
    >
      <div className="flex items-end justify-end pb-4">
        <img
          src={service.icon}
          alt={service.title}
          className="w-10 h-10"
          style={{
            filter: isActive
              ? "brightness(0) saturate(100%) opacity(1)"
              : "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(188deg) brightness(103%) contrast(103%)",
          }}
        />
      </div>
      <p className="text-[18px] font-semibold mb-2 transition duration-150 ease-in-out">
        {service.title}
      </p>
      <p className="text-[14px] w-60 mb-4 font-sans leading-relaxed transition duration-150 ease-in-out">
        {service.description}
      </p>
    </div>
  );
};

export default ServicesCard;
