import React, { useState } from "react";
import Rectangle7538 from "../../assets/images/Rectangle 7538.png";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import "./HowitWorks.css";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../Button/Button";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { TagIcon } from "@heroicons/react/24/outline";
import holographic4 from "../../assets/images/holographic4.png";
import HomePortfolioVideo from "../HomePortfolioVideo/HomePortfolioVideo";
import { CheckIcon } from "@heroicons/react/24/outline";

const CardWorks = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [activeCard, setActiveCard] = useState(null);
const [value, setValue] = useState("");
  // Original monthly prices
  const monthlyData = [
    {
      src: "Rectangle7538",
      head: "STARTER",
      price: "$1299/mo",
      description:
        "Get your videos edited with a 2-3 business days turnaround by your dedicated editor",
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
      src: "Rectangle7538",
      head: "Business",
      price: "$2399/mo",
      description:
        "Get videos edited with the same-day turnaround by your ‘better than in-house’ editor",
      p1: "Same day turnaround*",
      p2: "Unlimited orders / revisions",
      p3: "Dedicated Video Editor",
      p4: "Account Manager",
      p5: "Real-time collaboration with your editor on Slack",
      other: "see more",
      service: "SERVICES",
      add: "ADD-ONS",
    },
    {
      src: "Rectangle7538",
      head: "Big Studio Team",
      price: "From $3499",
      description:
        "Get your videos edited with a 2-3 business days turnaround by your dedicated editor",
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

  // Function to extract numeric value from price string
  const extractPrice = (priceString) => {
    const match = priceString.match(/\d+(\.\d+)?/); // Extract numeric part
    return match ? parseFloat(match[0]) : 0;
  };

  const quarterlyData = monthlyData.map((plan) => {
    const monthlyPrice = extractPrice(plan.price);
    const discountedQuarterlyPrice = (monthlyPrice * 3 * 0.9).toFixed(2); // 10% OFF
    return {
      ...plan,
      price: `$${discountedQuarterlyPrice}/Quarter`,
      discount: "10% OFF",
    };
  });

  const yearlyData = monthlyData.map((plan) => {
    const monthlyPrice = extractPrice(plan.price);
    const yearlyPrice = (monthlyPrice * 11).toFixed(2); // 1 month free
    return {
      ...plan,
      price: `$${yearlyPrice}/Year`,
      discount: "Get 1 month free",
    };
  });

  const getCurrentData = () => {
    switch (selectedPlan) {
      case "quarterly":
        return quarterlyData;
      case "yearly":
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  const data = getCurrentData();
  return (
    <div>
      <div className="py-14 lg:max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-[500] lg:text-8xl font-tek text-white uppercase">
          Manage All Your Social Media Profiles From One Place.
        </h2>
        <div className="py-8 flex justify-between items-center flex-wrap gap-y-6 px-6">
          <div className="flex items-center gap-x-2">
            <CheckIcon className="h-6 w-6 text-[#2EA89D] " />
            <p className="text-lg font-semibold ">
              No contracts. No commitments
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckIcon className="h-6 w-6 text-[#2EA89D] " />
            <p className="text-lg font-semibold ">
              14-Day Money Back Guarantee
            </p>
          </div>
          <div className="flex items-center gap-x-2">
            <CheckIcon className="h-6 w-6 font-extrabold text-[#2EA89D] " />
            <p className="text-lg font-semibold ">Support of multiple brands</p>
          </div>
        </div>

        <div className="flex justify-center text-slate-800">
          <div className="flex items-center justify-between text-[13px] font-normal gap-x-4 gap-4 sm:flex-nowrap flex-wrap rounded-xl bg-white py-1 px-2 cursor-pointer">
            <div
              className={`flex justify-between items-center w-full rounded-xl p-2 ${
                selectedPlan === "monthly" ? "bg-[#00ffff]" : ""
              }`}
              onClick={() => handlePlanChange("monthly")}
            >
              <button className="text-nowrap w-full text-left">
                Monthly plan
              </button>
            </div>
            <div
              className={`flex justify-between items-center w-full rounded-xl p-2 ${
                selectedPlan === "quarterly" ? "bg-[#00ffff]" : ""
              }`}
              onClick={() => handlePlanChange("quarterly")}
            >
              <button className="text-nowrap w-full text-left flex items-center justify-between">
                <span>Quarter</span>
                <span className="text-xs ml-2">10% OFF</span>
              </button>
            </div>
            <div
              className={`flex justify-between items-center w-full rounded-xl p-2 ${
                selectedPlan === "yearly" ? "bg-[#00ffff]" : ""
              }`}
              onClick={() => handlePlanChange("yearly")}
            >
              <div className="flex items-center justify-between w-full">
                <button className="text-nowrap w-full text-left flex items-center justify-between">
                  <span>Year</span>
                  <span className="text-xs ml-2">Get 1 month free</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid xl:grid-cols-3 sm:px-10 md:grid-cols-2 md:px-10 lg:px-20 xl:px-0 px-6 gap-8">
        {data.map((item, index) => {
          const isActive = activeCard === index;
          const isBigStudioTeam = item.head === "Big Studio Team";
          const headParts = isBigStudioTeam ? item.head.split(" ") : [];

          return (
            <div
              key={item.head}
              className={`box-border card-project-border p-6 rounded-3xl transition-all duration-300 ${
                isActive ? "border-8 border-[#00FFFF]" : "border-transparent"
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => setActiveCard(index)}
            >
              <h1
                className={`pt-10 text-center font-tek text-5xl lg:text-8xl transition-all duration-300 ${
                  isActive ? "text-[#00FFFF]" : "text-white"
                }`}
              >
                {isBigStudioTeam ? (
                  <div className="relative">
                    <span className="text-xl sm:text-sm lg:text-3xl left-[40%] absolute top-[-20px]">
                      Big Studio
                    </span>
                    <span className="block">{headParts[2]}</span>
                  </div>
                ) : (
                  item.head
                )}
              </h1>
              <h3 className="text-[30px] font-medium text-center text-[#0E2140]">
                {item.price}{" "}
                {item.discount && (
                  <span className="text-sm">({item.discount})</span>
                )}
              </h3>
              <p className="text-center px-10 text-[16px] py-3 text-white font-normal">
                {item.description}
              </p>
              <ul className="pl-3 text-base mt-4 font-normal text-white">
                <li className="flex items-center gap-2 pl-4 py-2">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span>{item.p1}</span>
                </li>
                <li className="flex items-center gap-2 pl-4 py-2">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span>{item.p2}</span>
                </li>
                <li className="flex items-center gap-2 pl-4 py-2">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span>{item.p3}</span>
                </li>
                <li className="flex items-center gap-2 pl-4 py-2">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span>{item.p4}</span>
                </li>
                <li className="flex items-center gap-2 pl-4 py-2">
                  <CheckCircleIcon className="h-6 w-6 text-gray-100" />
                  <span>{item.p5}</span>
                </li>
              </ul>
              <div className="pl-4">
                <div className="pl-4 py-2 flex items-center gap-x-2">
                  <span className="text-[#000000] text-lg uppercase font-semibold">
                    {item.other}
                  </span>
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </div>
                <div className="pl-4 py-5 flex items-center gap-x-2">
                  <span className="text-xl font-semibold text-white">
                    {item.service}
                  </span>
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </div>
                <div className="pl-4 py-2 flex items-center gap-x-2">
                  <span className="text-xl font-semibold text-white">
                    {item.add}
                  </span>
                  <ChevronDownIcon className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="px-12 py-8">
                <button className="w-full bg-gradient-to-r from-[#00FFFF] to-[#2EABAF] text-[#0F222F] py-2.5 font-medium hover:text-white hover:bg-gray-600 focus:bg-slate-500 uppercase rounded-full">
                  BUY this plan
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className=" py-28">
        <h1 className="lg:px-56 px-6  pb-16 lg:text-8xl text-5xl font-tek font-normal uppercase text-white">
          video examples
        </h1>
        <HomePortfolioVideo />
      </div>

      {/* ---------------------------  form section    -------------------------------------*/}

      <div className="promotional-section ">
        <h1 className="lg:text-8xl text-5xl font-tek uppercase font-normal text-center">
          ESTIMATE your project with us
        </h1>
        <div className="pt-4 max-w-4xl mx-auto">
          <form className="shadow-sm  sm:rounded-xl ">
            <div className="px-4 py-6 sm:p-8">
              <div className="grid  sm:gap-x-6 lg:gap-y-16 gap-y-14  sm:grid-cols-6">
                <div className="col-span-full sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-[#FFFFFF]"
                  >
                    project name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full bg-[#D4E7F5] outline-none rounded-full placeholder:text-[#1666B0] border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3 w-full flex items-end">
                  <div className=" w-full">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 text-[#1666B0] px-3 placeholder:text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                    >
                      <option>Select</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full sm:col-span-3">
                  <div className=" text-[#fff]">
                    <h1 className="text-xl font-bold">Creative Assets</h1>
                    <p>What best fits your assets needs?</p>
                  </div>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 text-[#1666B0] px-3 placeholder:text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                    >
                      <option>Select</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-full sm:col-span-3 flex items-end">
                  <div className="mt-2 w-full">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 px-3 text-[#1666B0] placeholder:text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                    >
                      <option>Select</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="text-[#fff] ">
                    <h1 className=" text-xl font-bold">Describe the project</h1>
                    <p>
                      Consideer providing context, challenges, requirements,
                      playback duration, past work, preferences, scripts or
                      instructions, references and links
                    </p>
                  </div>
                  <div className="mt-2 overflow-hidden rounded-xl">
                    <ReactQuill
                      theme="snow"
                      value={value}
                      onChange={setValue}
                      className=" bg-[#D4E7F5] h-28  "
                      placeholder="Add description..."
                    />
                  </div>
                </div>
                <div className="col-span-full text-[#fff] leading-7">
                  <h1 className="text-xl font-bold">
                    Formats, sizes or ad set
                  </h1>
                  <p>
                    Are there any specific requirements for assets formats,
                    sizes or dimensions?
                  </p>

                  <div className="flex items-start pt-4">
                    <div className="flex h-6 items-center">
                      <input
                        name="plan"
                        type="radio"
                        className="h-4 w-4 border-gray-300 bg-inherit focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="plan" className="font-medium ">
                        Yes, I’ll provide the creative specs/chase list
                      </label>
                    </div>
                  </div>
                  <div className=" flex items-start pt-4">
                    <div className="flex h-6 items-center ">
                      <input
                        name="plan"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 bg-inherit focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="plan" className="font-medium">
                        No, I’d Superside to suggest the creative specs
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-span-full text-white pb-5">
                  <h2 className="text-xl pb-3">Files</h2>
                  <p>Upload any relevant files, references or chase lists</p>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />

                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <p className="lg:pl-12 pl-1 text-center">
                          Drag files here to add them to this project, or
                        </p>
                      </div>
                      <div className="flex gap-x-12">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer "
                        >
                          <span className="text-[#00ffff] underline">
                            Upload from computer
                          </span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer "
                        >
                          <span className="text-[#00ffff] underline">
                            Import from Brand Assests
                          </span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-full flex sm:col-span-4 gap-x-4 items-center">
                  <label
                    className="text-[#fff] text-[20px] font-[700]"
                    htmlFor=""
                  >
                    DEADLINE
                  </label>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="w-full px-3 py-1.5 rounded-full text-[#9191d2] outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center py-10">
              <div>
                {/* <h1 className="text-white p-3">Button</h1> */}
                <Button className="px-20 py-2.5 text-sm font-semibold text-[#000]  bg-[#fff]  rounded-full  hover:text-[#000] hover:bg-cyan-600  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                  SEND PROJECT BRIEF
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* ------------------------- Date consulation --------------------------*/}
    </div>
  );
};

export default CardWorks;
