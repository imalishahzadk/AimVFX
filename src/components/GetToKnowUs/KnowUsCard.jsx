import React from "react";

const KnowUsCard = ({ imageSrc, title, subTitle, chipText, paragraph }) => {
  return (
    <div className="bg-[#05133766] rounded-2xl shadow-lg px-3 pb-6 pt-3">
      <img src={imageSrc} alt="Card Image" className="w-full mb-4" />
      <div className="px-6">
      <div className="flex justify-between">
      <h3 className="text-sm text-white mb-3">{subTitle}</h3>
      <div className="">
          <span className="inline-block bg-gray-500 text-[#FFFFFF] px-3 py-1 rounded-full text-xs uppercase font-semibold">
            {chipText}
          </span>
        </div>
      </div>
        <h2 className="text-3xl font-tek uppercase tracking-wide font-normal mb-2 text-[#00FFFF]">{title}</h2>
        
      <p className="text-gray-400">{paragraph}</p>
      </div>
    </div>
  );
};

export default KnowUsCard;
