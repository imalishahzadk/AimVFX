import React from "react";
import icon1 from "../../assets/images/Flat.png";
import icon2 from "../../assets/images/Flat1.png";
import icon3 from "../../assets/images/Flat2.png";
import icon4 from "../../assets/Capa_3.png";

const WorkSolutionCard = () => {
  const solutions = [
    {
      id: 1,
      title: "remote, fully managed creatives",
      description:
        "Everything startups need to acquire customers through video.",
      icon: icon1,
      active: true,
    },
    {
      id: 2,
      title: "tech built for easy collaboration",
      description: "From editing to color grading, VFX sound design, and more.",
      icon: icon2,
      active: false,
    },
    {
      id: 3,
      title: "unique subscription model",
      description:
        "A 360 animation production solution. Engineered for enterprise.",
      icon: icon3,
      active: false,
    },
    {
      id: 4,
      title: "creative-as-a-service",
      description: "Save time editing your video. Instead film more content.",
      icon: icon4,
      active: false,
    },
  ];
  return (
    <>
      <div className="pt-10 max-w-7xl lg:px-0 px-6 mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-5 lg:gap-8 gap-y-16">
        {solutions.map((item) => {
          return (
            <div className="bg-[#0513378C] relative px-5 py-10 rounded-3xl">
              <img
                src={item.icon}
                alt=""
                className="absolute -top-9 left-6 w-16 h-16"
              />
              <h1 className="font-[Teko] text-3xl text-[#15B8C7] uppercase font-medium">
                {item.title}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WorkSolutionCard;
