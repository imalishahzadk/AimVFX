import React from "react";
// import Designimg from "../../assets/images/Designimg.png";
const Designs = () => {
  const data = [
    {
    //   img: Designimg,
      title: "Project Title",
      date: "Created 03/03/2024",
      badge1: "In Review",
      badge2: "Approved",
      badge3: "Needs Revision",
    },
    {
    //   img: Designimg,
      title: "Project Title",
      date: "Created 03/03/2024",
      badge1: "In Review",
      badge2: "Approved",
      badge3: "Needs Revision",
    },
    {
    //   img: Designimg,
      title: "Project Title",
      date: "Created 03/03/2024",
      badge1: "In Review",
      badge2: "Approved",
      badge3: "Needs Revision",
    },
    {
    //   img: Designimg,
      title: "Project Title",
      date: "Created 03/03/2024",
      badge1: "In Review",
      badge2: "Approved",
      badge3: "Needs Revision",
    },
  ];

  return (
    <div className=" max-w-6xl mx-auto text-white">
      <div className="pl-8 pr-4 py-9 flex-wrap gap-y-5  border-setting bg-[#0B1A2880] rounded-lg">
        <h1 className=" pb-10 font-tek lg:text-[50px] text-3xl leading-10 font-normal uppercase ">
          Delivered designs
        </h1>
        <div className="h-[750px] overflow-y-scroll flex flex-col border-r-[1px] gap-y-5">
          {data.map((item, ind) => {
            return (
              <div key={ind} className="flex gap-x-4  ">
                <div className="relative p-4 border-[4px] rounded-[40px] border-[#15B8C7]">
                  <span className="px-4 rounded-l-full absolute right-2 top-8 bg-[#15B8C7]">
                    {item.badge1}
                  </span>
                  {/* <img src={item.img} alt="" /> */}
                  <h2 className="italic font-bold text-xl  py-1">
                    {item.title}
                  </h2>
                  <p className="font-light text-base  ">
                    {item.date}
                  </p>
                </div>
                <div className="relative p-4 border-[4px] rounded-[40px] border-[#15B8C7]">
                  <span className="px-4 rounded-l-full absolute right-2 top-8 bg-[#55B947]">
                    {item.badge2}
                  </span>
                  <img src={item.img} alt="" />
                  <h2 className="italic font-bold text-xl  py-1">
                    {item.title}
                  </h2>
                  <p className="font-light text-base  ">
                    {item.date}
                  </p>
                </div>
                <div className="relative p-4 border-[4px] rounded-[40px] border-[#15B8C7]">
                  <span className="px-4 rounded-l-full absolute right-2 top-8 bg-[#EC1740]">
                    {item.badge3}
                  </span>
                  <img src={item.img} alt="" />
                  <h2 className="italic font-bold text-xl  py-1">
                    {item.title}
                  </h2>
                  <p className="font-light text-base  ">
                    {item.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Designs;