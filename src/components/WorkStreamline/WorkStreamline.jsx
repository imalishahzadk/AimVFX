import React from "react";
import icon1 from "../../assets/calendar-svgrepo-com-4 2.png";
import icon2 from "../../assets/Group 469319.png";
import icon3 from "../../assets/IMAC (1).png";
import icon4 from "../../assets/IMAC.png";
import icon5 from "../../assets/laptop-svgrepo-com 1.png";

const items = [
  {
    id: 1,
    icon: icon1,
    title: "Book Your Onboarding Call",
    description:
      "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Submit Your Video Request Form",
    description:
      "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Choose a Monthly or Quarterly Retainer",
    description:
      "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Explore Your Project Dashboard",
    description:
      "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
  },
  {
    id: 5,
    icon: icon5,
    title: "Receive Your First Draft",
    description:
      "No more worries about value; we offer everything you need for one flat fee. Enhance your production with optional add-ons like subtitles and thumbnails.",
  },
];

const WorkStreamline = () => {
  return (
    <div className="flex flex-col items-center mt-10 px-4">
      <div className="flex flex-col items-center w-full lg:w-3/4">
        {/* Top two items */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:space-x-20 mb-20 lg:mb-8">
          {items.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start w-full lg:w-1/3 mb-10 lg:mb-0"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 mb-4"
              />
              <p className="text-[#56BEC2] font-tek text-[35px] w-full leading-tight">
                {item.title}
              </p>
              <p className="text-white/80 text-[20px] w-full">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connecting line with rectangles (visible on larger screens only) */}
        <div className="relative w-full flex justify-center mb-8 hidden lg:flex">
          <div className="border-t-4 border-[#56BEC2] w-full absolute top-1/2 transform -translate-y-1/2" />
          <div className="flex justify-between w-full px-4 relative">
            <div
              className="w-8 h-4 bg-[#56BEC2] absolute transform -translate-y-1/2"
              style={{ left: "14%" }}
            />
            <div
              className="w-8 h-4 bg-[#56BEC2] absolute transform -translate-y-1/2"
              style={{ left: "35%" }}
            />
            <div
              className="w-8 h-4 bg-[#56BEC2] absolute transform -translate-y-1/2"
              style={{ left: "53%" }}
            />
            <div
              className="w-8 h-4 bg-[#56BEC2] absolute transform -translate-y-1/2"
              style={{ left: "71%" }}
            />
          </div>
        </div>

        {/* Bottom three items */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:space-x-20 mt-14 lg:mt-0">
          {items.slice(2, 5).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start w-full lg:w-1/3 mb-10 lg:mb-0"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 mb-4"
              />
              <p className="text-[#56BEC2] font-tek text-[35px] w-full leading-tight">
                {item.title}
              </p>
              <p className="text-white/80 text-[20px] w-full">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkStreamline;
