import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbDownIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

const TurnAround = () => {
  const data = [
    {
      id: 1,
      val: "Short-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
    {
      id: 2,
      val: "Long-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
    {
      id: 3,
      val: "Long-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
    {
      id: 4,
      val: "Long-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
    {
      id: 5,
      val: "Long-form",
      time: "90 seconds",
      day: "Same day",
      plan2: "Multiple per day",
    },
  ];

  return (
    <div className="px-4 mx-auto sm:max-w-6xl lg:max-w-6xl text-white">
      <h1 className=" lg:text-8xl sm:text-6xl  font-normal uppercase font-[Teko]  pb-10 pt-28">
        turnaround times
      </h1>
      <div>
        <div className="py-12 pb-16 flex justify-between  border-2 font-[Teko]  font-medium  border-[#15B8C7] rounded-t-[62px] text-white text-2xl  lg:text-4xl  uppercase ">
          <span className="py-4 px-5">Content type</span>
          <span className="py-4  px-5">video length</span>
          <span className="py-4 px-5">plan 1</span>
          <span className="py-4 px-5">plan 2</span>
        </div>
        <div className="bg-[#15B8C7] lg:p-12 py-12 px-5  rounded-[62px] w-full relative bottom-14">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between gap-x-4 py-3 text-black font-tek text-lg"
              >
                <span>{item.val}</span>
                <span>{item.time}</span>
                <span>{item.day}</span>
                <span>{item.plan2}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="font-[Poppins] text-xl font-normal">
        <p className="py-16">
          Lorem ipsum dolor sit amet consectetur. Auctor leo in viverra quam
          nulla sed. A at eget pellentesque at viverra risus pulvinar sit.
          Pellentesque nunc vitae amet a placerat. Facilisis eu enim mus diam
          scelerisque imperdiet. Quam euismod morbi tortor at vitae sem. Sed
          vitae lorem morbi et sed vitae non cursus. Porttitor blandit odio
          velit fermentum rhoncus egestas amet ac sed. Nunc pellentesque donec
          viverra dui neque auctor pellentesque massa non. Nunc porta nunc nisi
          pharetra. <br />
          <br />
          Pellentesque enim placerat diam et dui pellentesque cras habitasse.
          Etiam sollicitudin gravida amet suscipit. Diam feugiat sodales lectus
          faucibus nulla sed sapien volutpat. Placerat lorem odio nunc.
        </p>
        <h1 className="text-6xl font-[Teko] lg:text-8xl uppercase font-normal  py-12">
          What videos do we edit?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Auctor leo in viverra quam
          nulla sed. A at eget pellentesque at viverra risus pulvinar sit.
          Pellentesque nunc vitae amet a placerat. Facilisis eu enim mus diam
          sceler.
        </p>
      </div>
      <ul className="py-10 font-[Poppins] text-xl font-normal">
        <li className="flex py-3 gap-2 items-center">
          <XMarkIcon className="h-6 w-6 text-[#15B8C7]" />

          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2 items-center">
          <XMarkIcon className="h-6 w-6 text-[#15B8C7]" />

          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2 items-center">
          <XMarkIcon className="h-6 w-6 text-[#15B8C7]" />

          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2 items-center">
          <XMarkIcon className="h-6 w-6 text-[#15B8C7]" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2 items-center">
          <XMarkIcon className="h-6 w-6 text-[#15B8C7]" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
        <li className="flex py-3 gap-2 items-center">
          <XMarkIcon className="h-6 w-6 text-[#15B8C7]" />
          <span>
            Lorem ipsum dolor sit amet consectetur. Tempor amet nulla enim erat.
          </span>
        </li>
      </ul>
      <div className="mt-3 w-full bg-black rounded-[62px] p-12">
        <div className=" flex justify-center gap-3 items-center">
          <h2 className=" font-[Teko] text-4xl  md:text-5xl font-medium uppercase">
            did this anwer your question?
          </h2>
          <p className="p-4 inline-block rounded-full bg-[#15B8C7]">
            <HandThumbUpIcon className="h-6 w-6 text-white" />
          </p>
          <p className="p-4 inline-block rounded-full border-[1px] border-white">
            <HandThumbDownIcon className="h-6 w-6 text-white" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TurnAround;
