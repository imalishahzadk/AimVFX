import React from "react";
import icon1 from "../../assets/Capa_1.png";
import icon2 from "../../assets/Capa_5.png";
import icon3 from "../../assets/Capa_2.png";
import icon4 from "../../assets/Capa_3.png";
import icon5 from "../../assets/Capa_4.png";
import CustomSolutionCard from "./CustomSolutionCard";

const SolutionCard = () => {
  const solutions = [
    {
      id: 1,
      title: "For Startups",
      description:
        "Everything startups need to acquire customers through video.",
      icon: icon1,
      active: true,
    },
    {
      id: 2,
      title: "for AGENCIES/production",
      description: "From editing to color grading, VFX sound design, and more.",
      icon: icon2,
      active: false,
    },
    {
      id: 3,
      title: "for enterprise",
      description:
        "A 360 animation production solution. Engineered for enterprise.",
      icon: icon3,
      active: false,
    },
    {
      id: 4,
      title: "for creators",
      description: "Save time editing your video. Instead film more content.",
      icon: icon4,
      active: false,
    },
    {
      id: 5,
      title: "for Enterprenuers",
      description:
        "Lorem ipsum dolor sit amet consectetur. Molestie dictumst in nisi elementum viverra proin. Convallis.",
      icon: icon5,
      active: false,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 lg:px-0 px-2">
        {solutions?.map((service) => (
          <CustomSolutionCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SolutionCard;
