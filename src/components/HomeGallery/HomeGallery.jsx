import React, { useState, useEffect } from "react";
import client from "../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Button from "../Button/Button";
import image1 from "../../assets/AIM_VFX_WEBSITE_3D_STILL_SHOTS_MAIN_01.png";
import image2 from "../../assets/IMG_DA2CF09EBBB6-1.png";
import image3 from "../../assets/METAHUMAN_CLIENT_screencast 2024-01-24 00-31-16 (0-00-07-16) 1.png";
import Heading from "../Heading/Heading";

// Configure the URL builder
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const HomeGallery = () => {
  const [heroSectionData, setHeroSectionData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "heroSection"][0]`)
      .then((data) => setHeroSectionData(data));
  }, []);

  if (!heroSectionData) return <div>Loading...</div>;

  const gallery = [
    {
      id: 1,
      title: heroSectionData.section6title1,
      description: heroSectionData.section6Desc1,
      url: heroSectionData.section4Img3
        ? urlFor(heroSectionData.section4Img3).url()
        : image1,
    },
    {
      id: 2,
      title: heroSectionData.section6title2,
      description: heroSectionData.section6Desc2,
      url: heroSectionData.section4Img1
        ? urlFor(heroSectionData.section4Img1).url()
        : image2,
    },
    {
      id: 3,
      title: heroSectionData.section6title3,
      description: heroSectionData.section6Desc3,
      url: heroSectionData.section4Img2
        ? urlFor(heroSectionData.section4Img2).url()
        : image3,
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col lg:items-end items-center flex-wrap gap-x-10 gap-y-10">
      {gallery?.map((entity, index) => (
        <div
          key={index}
          className={`flex text-white flex-col lg:w-2/5 gap-y-3 lg:px-0 px-2 ${
            entity.id === 3 ? "flex-col-reverse lg:w-full" : ""
          }`}
        >
          <div
            className={`flex ${
              entity.id === 3
                ? "justify-between items-center lg:flex-row"
                : "flex-col"
            } gap-x-4`}
          >
            <div className="flex-1">
              <Heading className="font-tek text-[35px] lg:text-[70px] leading-tight px-2">
                {entity.title}
              </Heading>
              <p
                className={`px-2  font-Rubic text-[20px] text-white/80 text-justify ${
                  entity.id === 3 && "lg:w-2/4"
                }`}
              >
                {entity.description}
              </p>
            </div>
            {entity.id === 3 && (
              <div className="hidden lg:flex gap-x-4 lg:ml-4 md:mt-[31%] lg:mt-[31%]">
                <Button className="px-10 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                  Read more
                </Button>
                <Button
                  // onClick={() => setIsOpen(true)}
                  className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase"
                >
                  Choose a plan
                </Button>
              </div>
            )}
          </div>
          <div
            className={`relative ${
              entity.id === 2 ? "bg-black md:w-[140%] lg:w-[140%]" : ""
            }`}
            style={entity.id === 2 ? { borderRadius: "3.5rem" } : {}}
          >
            <img
              src={entity.url}
              alt={`image${entity.id}`}
              className={`object-cover object-center ${
                entity.id === 2 ? "w-full lg:w-[120%]" : "w-full"
              }`}
              style={entity.id === 2 ? { borderRadius: "2.5rem" } : {}}
            />
          </div>
          {entity.id === 3 && (
            <div className="flex lg:hidden flex-col gap-y-4 mt-4">
              <Button className="px-10 py-2.5 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Read More
              </Button>
              <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                Choose a Plan
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeGallery;
