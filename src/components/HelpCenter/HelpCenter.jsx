import React from "react";
import Search from "../../assets/images/search.png";
import Arrow from "../../assets/images/Arrow.png";
import FooterForm from "../Footer/Footer";
import FooterWithForm from "../Footer/FooterWithForm";
const HelpCenter = () => {
  const Data = [
    {
      id: 1,
      text: "aim-fx tutorials and faq",
    },
    {
      id: 2,
      text: "getting started: video tutorials",
    },
    {
      id: 3,
      text: "faq",
    },
    {
      id: 4,
      text: "plans and add-ons help center",
    },
    {
      id: 5,
      text: "tips for your videos",
    },
  ];
  return (
    <div className="solution-page  sm:pt-28">
      <div>
        <div className="max-w-4xl mx-auto px-6  py-24 text-white ">
          <h1 className="text-5xl font-medium font-[Teko] py-8">
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
        <div className="promotional-section py-36">
          <div className="grid sm:44 md:px-40 px-6 lg:px-0 lg:grid-cols-2 max-w-5xl mx-auto gap-5 gap-y-20">
            {Data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative sm:p-10  p-5 bg-[#0513378C] rounded-3xl"
                >
                  <img
                    className="absolute top-[-52px]"
                    src="src/assets/images/Vector8.png"
                    alt=""
                  />
                  <div className="py-4 flex justify-between it">
                    <h2 className="text-3xl  sm:text-4xl lg:text-5xl font-[Teko] font-medium py-1 uppercase text-[#00FFFF]">
                      {item.text}
                    </h2>
                    <img src={Arrow} alt="" className="w-10 h-8 pl-2" />
                  </div>
                  <p className="text-[#B6B6B6] leading-6">
                    Lorem ipsum dolor sit amet consectetur. Quis neque neque
                    amet faucibus. Laoreet consequat.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FooterWithForm/>
    </div>
  );
};

export default HelpCenter;
