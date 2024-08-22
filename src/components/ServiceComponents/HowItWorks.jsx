import React from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import videoicon from "../../assets/Camada_1.png";
import revision from "../../assets/Camada_2.png";
import folder from "../../assets/Camada_3.png";
import { Divider } from "@mui/material";
import Heading from "../Heading/Heading";

const HowItWorks = () => {
  const categories = [
    {
      icon: folder,
      alt: "Folder",
      title: "Offload your assets to us",
      description:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      icon: videoicon,
      alt: "Video Icon",
      title: "Get your first edit in 1-2 business days",
      description:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
    {
      icon: revision,
      alt: "Revision",
      title: "Make it perfect with unlimited revisions",
      description:
        "Lorem ipsum dolor sit amet consectetur. Accumsan nisl vitae eget tempus donec pellentesque vivamus felis.",
    },
  ];
  return (
    <div className="flex lg:flex-row items-center justify-center gap-x-10 flex-col w-full gap-y-6  mx-auto max-w-5xl lg:px-0 px-3 lg:pt-0 pt-6">
      {categories.map((category, index) => (
        <div className="flex flex-col lg:items-start items-center gap-y-6" key={index}>
          <div className="flex items-center gap-x-2">
            <img src={category.icon} alt={category.alt} className="w-20 h-16" />
            {index < 2 && (
              <div className="hidden lg:flex  w-full pr-2">
                <div className="round-circle">
                  <IoIosArrowDropleftCircle />
                </div>
                <Divider
                  sx={{ backgroundColor: "#15B8C7" }}
                  style={{ width: "680%", marginTop: "8px" }}
                />
                <div className="round-circle">
                  <IoIosArrowDroprightCircle />
                </div>
              </div>
            )}
          </div>
          <div className="flex lg:w-80 flex-col lg:items-start items-center w-full ">
            <Heading className="text-4xl text-[#56BEC2] font-tek pr-0 lg:pr-20 lg:text-start text-center">
              {category.title}
            </Heading>
            <p className="text-[#E4E4E4] font-light text-sm lg:text-start text-center">
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
