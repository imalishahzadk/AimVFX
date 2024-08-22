import React from "react";
import Rectangle7538 from "../../assets/images/Rectangle 7538.png";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import "../Pricing/PricingCard.css";

const PricingCard = () => {
  const data = [
    {
      src: Rectangle7538,
      head: "STARTER",
      price: "$ 1299/mo",
      description:
        "Get your videos edited with a 2-3 business days turnaround by your dedicated editor",
      p1: "2-3 business days turnaround**",
      p2: "Unlimited orders / revisions",
      p3: "Dedicated Video Editor",
      p4: "Account Manager",
      p5: "Real-time collaboration with your editor on Slack",
      other: "see more",
      service: "SERVICES",
      add: "ADD-ONS",
    },
    {
      src: Rectangle7538,
      head: "STARTER",
      price: "$ 1299/mo",
      description:
        "Get your videos edited with a 2-3 business days turnaround by your dedicated editor",
      p1: "2-3 business days turnaround**",
      p2: "Unlimited orders / revisions",
      p3: "Dedicated Video Editor",
      p4: "Account Manager",
      p5: "Real-time collaboration with your editor on Slack",
      other: "see more",
      service: "SERVICES",
      add: "ADD-ONS",
    },
    {
      src: Rectangle7538,
      head: "STARTER",
      price: "$ 1299/mo",
      description:
        "Get your videos edited with a 2-3 business days turnaround by your dedicated editor",
      p1: "2-3 business days turnaround**",
      p2: "Unlimited orders / revisions",
      p3: "Dedicated Video Editor",
      p4: "Account Manager",
      p5: "Real-time collaboration with your editor on Slack",
      other: "see more",
      service: "SERVICES",
      add: "ADD-ONS",
    },
  ];

  return (
    <div className="z-40">
      <div className="px-10 lg:px-10 xl:px-40 gap-5 grid lg:grid-cols-3">
        {data.map((item) => {
          return (
            <div className=" box-border brief-project  ">
              <h1 className="p-8 py-14 font-[500] text-center sm:text-4xl md:text-5xl xl:text-6xl">
                {item.head}
              </h1>
              <h3 className="text-2xl font-[500] text-center text-[#0E2140]">
                {item.price}
              </h3>
              <p className=" text-center px-10 py-6">{item.description}</p>
              <ul>
                <li className="flex items-center gap-2 pl-4 py-3">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span> {item.p1}</span>
                </li>
                <li className="flex items-center gap-2 pl-4 py-3">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100 " />
                  <span> {item.p2}</span>
                </li>
                <li className="flex items-center gap-2 pl-4 py-3">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span> {item.p3}</span>
                </li>
                <li className="flex items-center gap-2 pl-4 py-3">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span> {item.p4}</span>
                </li>
                <li className="flex items-center gap-2 pl-4 py-3">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span> {item.p5}</span>
                </li>
              </ul>
              <div className="pl-4 py-2">
                <span className="text-[#000000] text-[20px] py-5 uppercase">
                  {item.other}
                </span>
              </div>
              <div className="pl-4 py-2">
                <span className="text-xl font-[600] py-4">{item.service}</span>
              </div>
              <div className="pl-4 py-2">
                <span className="text-xl font-[600] py-4">{item.add}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
