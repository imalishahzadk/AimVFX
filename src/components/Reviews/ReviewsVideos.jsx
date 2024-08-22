import React from "react";
import Rectangle from "../../assets/images/Rectangle 131.png";
import Button from "../Button/Button";
const ReviewsVideos = () => {
  return (
    <div className=" rounded-2xl border-4 border-[#15B8C7] p-6 mx-auto grid 2xl:grid-cols-5">
      <div className="col-span-2 xl:pt-10 xl:pb-10 xl:pl-20  ">
        <h1 className="py-6  text-5xl lg:text-6xl xl:text-6xl font-[Teko] uppercase">
          Top Results for real brands
        </h1>
        <p className="text-xl font-light font-[Teko]">
          Lorem ipsum dolor sit amet consectetur. Velit neque consequat id
          malesuada aenean eu fringilla varius. Risus quam enim quisque in
          turpis arcu non posuere.
        </p>
        <div className="py-8">
          <Button className="px-11 py-2.5 text-sm font-semibold text-[#273A5F]  bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            see success stories
          </Button>
        </div>
      </div>

      <div className="col-span-3">
        <div className="relative overflow-hidden">
          <video controls poster={Rectangle}>
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="play-button"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsVideos;
