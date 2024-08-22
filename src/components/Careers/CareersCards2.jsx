import React from "react";
import Rectangle from "../../assets/images/Rectangle 7609.png";
import holographic from "../../assets/images/holographic_fluid_drop_shapes_illustration_02 copy 4.png";
import QN from "./QN";
const CareersCards2 = () => {
  const value = [
    {
      answer:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad facilis repellendus.",
      question: "Lorem ipsum, dolor sit ?",
    },
    {
      answer:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad facilis repellendus.",
      question: "Lorem ipsum, dolor sit ?",
    },
    {
      answer:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad facilis repellendus.",
      question: "Lorem ipsum, dolor sit ?",
    },
    {
      answer:
        "   Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ad facilis repellendus.",
      question: "Lorem ipsum, dolor sit ?",
    },
  ];
  return (
    <div className="py-10 ">
      <div className="lg:px-0 px-6 grid grid-cols-1 gap-x-4 gap-y-10 xl:grid-cols-2 md:w-[90%] py-10 xl:w-[70%] mx-auto">
        <div className="opacity-50 block">
          <img src={Rectangle} alt="" className="object-cover lg:mt-6" />
        </div>
        <div className="flex flex-col justify-center  px-0 lg:px-10">
          <h1 className="lg:text-8xl text-5xl  font-tek font-normal">
            This is what we value
          </h1>

          {value.map((item, ind) => {
            return (
              <QN key={ind} question={item.question} answer={item.answer} />
            );
          })}
        </div>
      </div>
      <div className="md:relative md:py-28 lg:px-0 px-6">
        <img
          src={holographic}
          alt=""
          className="hidden 2xl:block  2xl:absolute right-0 top-[-300px]"
        />
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#2EABAF] p-5 lg:p-20 text-white">
          <h1 className="text-[30px] sm:text-[50px] pb-5 uppercase">
            our vision and mission
          </h1>
          <div className="flex flex-col sm:flex-row gap-9">
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate mauris dolor
              ipsum volutpat fusce quis porttitor gravida. Enim orci neque risus
              vestibulum nunc eget. Facilisis facilisi id posuere bibendum
              porttitor. Convallis lectus eget sapien semper tincidunt nulla.
              Sagittis a porta enim sollicitudin vel ultrices mi urna vel. Ac
              commodo ridiculus tellus augue lacus vel.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Vulputate mauris dolor
              ipsum volutpat fusce quis porttitor gravida. Enim orci neque risus
              vestibulum nunc eget. Facilisis facilisi id posuere bibendum
              porttitor. Convallis lectus eget sapien semper tincidunt nulla.
              Sagittis a porta enim sollicitudin vel ultrices mi urna vel. Ac
              commodo ridiculus tellus augue lacus vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersCards2;
