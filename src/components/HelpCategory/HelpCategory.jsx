import React from "react";
import Search from "../../assets/images/search.png";
import FooterForm from "../Footer/Footer";
import Arrow from "../../assets/images/Arrow.png";
import chevron from "../../assets/images/chevron-right (1).png";
import FooterWithForm from "../Footer/FooterWithForm";
const HelpCatogry = () => {
  const data = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 7,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 9,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 10,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
    {
      id: 11,
      text: "Lorem ipsum dolor sit amet consectetur ?",
    },
  ];
  return (
    <div className="solution-page">
      <div>
        <div className=" max-w-4xl mx-auto px-6  py-28 text-white">
          <h1 className="text-5xl font-medium font-[Teko] py-8  ">
            Advice and answers from the AIM-FX Team
          </h1>
          <div className="flex justify-between p-2 px-4 bg-[#fff] rounded-full">
            <input
              className="w-full  outline-0 placeholder:text-[#1666B0] font-[Inter]"
              type="text"
              placeholder="Search for articles"
            />
            <img src={Search} alt="" />
          </div>
        </div>
        <div className="promotional-section text-white py-14 pb-36">
          <div className=" sm:28 md:px-36 px-6 lg:px-0  max-w-4xl mx-auto ">
            <div className="flex px-6 font-tek text-lg font-normal">
              <span>All Collections</span>
              <img src={chevron} alt="" />
              <span className="text-[#00FFFF] font-[400]">
                AIM-FX Tutorials and FAQ
              </span>
            </div>
            <div className="pb-6 px-6">
              <h1 className="text-8xl font-[Teko] font-normal py-6 uppercase">
                aim-fx tutorials and faq
              </h1>
              <p className=" text-lg font-normal">
                Workflow, processes and AIM-FX tutorials.
              </p>
            </div>
            <div className="grid gap-3">
              {data.map((value) => {
                return (
                  <div
                    key={value.id}
                    className=" flex flex-1 items-center justify-between px-5 py-1.5 cursor-pointer  rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4] hover:bg-gray-700"
                  >
                    <p className="font-semibold font-tek text-base">
                      {value.text}
                    </p>
                    <span>
                      <img src={Arrow} alt="" className="w-6 h-6" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <FooterWithForm/>
    </div>
  );
};

export default HelpCatogry;
