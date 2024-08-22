import React, { useState } from "react";
import Group469461 from "../../assets/images/Group 469461.png";
import Arrow from "../../assets/images/Arrow.png";
import "./Clients.css"; // Import the CSS file for animations

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("");

  const slides = [
    {
      videoSrc: "video-file.mp4",
      poster: Group469461,
      name: "Dmitriy Gladenko",
      company: "Company VideoFx",
      description: `Lorem ipsum dolor sit amet consectetur. Dictum ac in leo aliquam
      scelerisque nulla rhoncus mi. Mauris felis varius justo aliquam
      penatibus volutpat aenean vel fermentum. Aliquet id id ut sed in.
      Aliquam in urna eget mi morbi. Interdum nibh malesuada eget enim
      scelerisque lorem adipiscing. Montes adipiscing purus etiam diam.
      Mauris sit sit sed nunc. Egestas eget velit rhoncus egestas ac a
      scelerisque fusce. Velit libero eleifend erat mauris.`,
    },
    {
      videoSrc: "video-file.mp4",
      poster: Group469461,
      name: "Jane Doe",
      company: "Company Example",
      description: `Another description for the second slide. Lorem ipsum dolor sit amet consectetur.
      Dictum ac in leo aliquam scelerisque nulla rhoncus mi.`,
    },
    {
      videoSrc: "video-file.mp4",
      poster: Group469461,
      name: "ALi Gladenko",
      company: "Company VideoFx",
      description: `Lorem ipsum dolor sit amet consectetur. Dictum ac in leo aliquam
      scelerisque nulla rhoncus mi. Mauris felis varius justo aliquam
      penatibus volutpat aenean vel fermentum. Aliquet id id ut sed in.
      Aliquam in urna eget mi morbi. Interdum nibh malesuada eget enim
      scelerisque lorem adipiscing. Montes adipiscing purus etiam diam.
      Mauris sit sit sed nunc. Egestas eget velit rhoncus egestas ac a
      scelerisque fusce. Velit libero eleifend erat mauris.`,
    },
  ];

  const handlePrevClick = () => {
    setDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="xl:px-28 md:px-40 mx-auto px-6 grid lg:grid-cols-10 py-8 items-center">
      <div className="block col-span-1 xl:flex justify-start">
        <img
          className="rotate-180 cursor-pointer"
          src={Arrow}
          alt="Previous"
          onClick={handlePrevClick}
        />
      </div>
      <div
        key={currentIndex}
        className={`xl:col-span-8 col-span-full grid p-8 xl:grid-cols-2 gap-x-16 border-[2px] rounded-3xl border-[#15B8C7] ${
          direction === "next" ? "slide-next" : "slide-prev"
        }`}
      >
        <div className="w-full relative overflow-hidden">
          <video
            controls
            poster={currentSlide.poster}
            className="object-cover w-full rounded-3xl"
          >
            <source src={currentSlide.videoSrc} type="video/mp4" />
          </video>
          <div className="play-icon"></div>
        </div>
        <div className="text-[#fff] flex flex-col justify-between py-2">
          <p className="font-tek text-xl font-light">
            {currentSlide.description}
          </p>
          <div className="py-2">
            <h2 className="font-bold italic text-3xl font-tek">
              {currentSlide.name}
            </h2>
            <p className="text-[24px]">{currentSlide.company}</p>
          </div>
        </div>
      </div>
      <div className="block col-span-1 xl:flex justify-end">
        <img
          className="cursor-pointer"
          src={Arrow}
          alt="Next"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Clients;
