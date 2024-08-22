import React, { useState } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Select } from "@mui/material";
import { PhotoIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const ProjectBrief = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState("");
  const data = [
    {
      col: "lg:col-span-3 cursor-pointer",
      text: "lorem span",
    },
    {
      col: "lg:col-span-3 cursor-pointer",
      text: "lorem span ",
    },
    {
      col: "lg:col-span-3 cursor-pointer",
      text: "lorem span",
    },
    {
      col: "lg:col-span-4 cursor-pointer",
      text: "lorem span",
    },
    {
      col: "lg:col-span-4 cursor-pointer",
      text: "lorem span",
    },
  ];

  return (
    <div className="solution-page py-20 text-[#fff]">
      <div className="px-6 md:max-w-5xl mx-auto">
        <div>
          <div className="w-full md:flex bg-[#0B1A2880]  items-center justify-between px-8 py-6 rounded-lg ring-1 ring-gray-400 lg:mt-10">
            <div className="flex items-center gap-4">
              <ChevronLeftIcon className="h-4 w-4 text-gray-300" />
              <span className="text-5xl font-[Teko] font-normal uppercase">
                edit Projects
              </span>
            </div>

            <div className="flex items-center gap-2 lg:gap-4">
              <button className="cursor-pointer bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 px-10 rounded-full">
                Save Changes
              </button>
              <span className="px-4 py-3 rounded-[50%] bg-[#2EABAF]">TJ</span>
            </div>
          </div>
          {/* ------------ From 1 Section --------------- */}

          <div className="w-full  bg-[#0B1A2880]  mt-6 px-8 rounded-lg ring-1 ring-gray-600">
            <div className="flex items-center gap-x-2 py-9">
              <ChevronLeftIcon className="h-4 w-4 text-gray-100" />
              <span className="text-5xl font-[Teko] font-normal uppercase">
                Please fill in this brief
              </span>
            </div>
            <div className="px-2">
              <div className="grid grid-cols-1 gap-x-8 lg:gap-y-10 gap-4 pb-14 md:grid-cols-3">
                <div>
                  <h2 className="text-base font-bold  leading-7">
                    project name
                  </h2>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-6 md:grid-cols-3">
                <div>
                  <h2 className="text-base font-bold  leading-7">
                    Job
                  </h2>
                  <p className="text-base font-light  leading-7">
                    How can we help?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------ From 2 Section --------------- */}

          <div className="w-full  bg-[#0B1A2880]  mt-6 px-8 rounded-lg ring-1 ring-gray-700">
            <div className="flex items-center gap-4 py-9">
              <ChevronLeftIcon className="h-4 w-4 text-gray-100" />
              <h1 className="text-5xl font-[Teko] font-normal uppercase">
                Creative Assets
              </h1>
            </div>
            <div>
              <div className="pt-5 grid grid-cols-1 gap-x-8 gap-y-10 px-2 pb-6 md:grid-cols-3">
                <div>
                  <h2 className="text-base font-bold  leading-7">
                    New or edits
                  </h2>

                  <p className="text-base font-light ">
                    What best fits your assets needs?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------ From 3 Section --------------- */}

          <div className="w-full  bg-[#0B1A2880]  my-5 px-8 rounded-lg ring-1 ring-gray-600">
            <div className="flex items-center py-12 gap-4">
              <ChevronLeftIcon className="h-4 w-4 text-gray-300" />
              <h1 className="text-5xl font-[Teko] font-normal uppercase">
                lets design new creative assets
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-4 px-2 md:grid-cols-3">
                <div>
                  <h2 className="text-base font-bold  leading-7 uppercase">
                    Goals
                  </h2>
                  <p className="text-base font-light ">
                    What would make this project a win?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-4 md:grid-cols-3">
                <div>
                  <h2 className="text-base font-bold  leading-7 uppercase">
                    Channels
                  </h2>
                  <p className="text-base font-light ">
                    Where do you want people to see your assets?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 pb-4 md:grid-cols-3">
                <div>
                  <h2 className="text-base font-bold  leading-7 uppercase">
                    target audience
                  </h2>
                  <p className="text-base font-light ">
                    Who are they and do they have any especial interests or pain
                    points?
                  </p>
                </div>

                <div className=" max-w-2xl col-span-2 w-full">
                  <div className="w-full md:pl-28 mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Text Here"
                      className="px-5 outline-none block w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* ------------ All About 3 Section --------------- */}

            <div>
              <div className="py-4">
                <h2 className="text-base font-bold  leading-7 uppercase">
                  target audience
                </h2>

                <p className="text-base font-light ">
                  Who are they and do they have any <br /> especial interests or
                  pain points?
                </p>
              </div>

              <div className=" grid md:grid-cols-6 lg:grid-cols-12 gap-3">
                {data.map((item, ind) => {
                  return (
                    <div key={ind} className={item.col}>
                      <div className=" flex flex-1 justify-between px-5 py-3   rounded-full bg-slate-800  font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                        <button className=" text-xs font-semibold">
                          {item.text}
                        </button>
                        <span>
                          <PlusIcon className="h-4 w-4 text-gray-50" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-span-full pt-7">
                <div className="text-[#fff] ">
                  <h2 className="text-base font-bold  leading-7 uppercase">
                    Describe the project
                  </h2>
                  <p className="text-base font-light ">
                    Consideer providing context, challenges, requirements,
                    playback duration,
                    <br /> past work, preferences, scripts or instructions,
                    references and links
                  </p>
                </div>
                {/* ------------ React Quill Text About 3 Section --------------- */}

                <div className="lg:mt-3 max-w-4xl  overflow-hidden rounded-2xl placeholder:text-gray-400 border-none ">
                  <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    className=" bg-slate-800 placeholder:text-gray-400 h-28 border-none right-0  "
                    placeholder="Add description..."
                  />
                </div>
                <div className="col-span-full text-[#fff] py-5 leading-7">
                  <h2 className="text-base font-bold  leading-7 uppercase">
                    Formats, sizes or ad set
                  </h2>
                  <p className="text-base font-light ">
                    Are there any specific requirements for assets formats,
                    sizes or dimensions?
                  </p>

                  <div className="flex items-start pt-4">
                    <div className="flex h-6 items-center">
                      <input
                        name="plan"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label
                        htmlFor="plan"
                        className="text-base font-light  "
                      >
                        Yes, I’ll provide the creative specs/chase list
                      </label>
                    </div>
                  </div>
                  <div className=" flex items-start py-4">
                    <div className="flex h-6 items-center ">
                      <input
                        name="plan"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3  text-sm leading-6">
                      <label
                        htmlFor="plan"
                        className="text-base font-light  "
                      >
                        No, I’d Superside to suggest the creative specs
                      </label>
                    </div>
                  </div>
                </div>

                {/* ------------ Choose option Text About 3 Section --------------- */}

                <div className="grid lg:grid-cols-2 gap-x-4 items-center">
                  <div className="py-4">
                    <h2 className="text-base font-bold  leading-7 uppercase">
                      Creative exploration
                    </h2>
                    <p className="text-base font-light  ">
                      How far would you like us to push our creativity on this
                      project?
                    </p>
                    <select
                      type="select"
                      name="choose"
                      id=""
                      placeholder="Please choose"
                      className="w-full mt-4 px-3 py-2 placeholder:text-sky-600 rounded-full text-[#4949c7] outline-none"
                    >
                      <option className="rounded-3xl" value="choose">
                        Please choose
                      </option>
                    </select>
                  </div>
                </div>

                {/* ------------ Upload File option Text About 3 Section --------------- */}

                <div>
                  <div className="max-w-4xl  mx-4">
                    <h2 className="text-xl py-3">Files</h2>
                    <p className="text-base font-light  ">
                      Upload any relevant files, references or chase lists
                    </p>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100 px-6 py-24">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />

                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <p className=" lg:pl-14 pl-1 text-center">
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
                      </div>
                    </div>
                    <div>
                      <div className=" flex py-1 justify-end  items-center  gap-x-3">
                        <Button className="px-4 py-2.5 text-sm font-semibold text-white bg-transparent hover:bg-gray-700 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                          Book A Call
                        </Button>
                        <Button className="px-8 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                          Sign In
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-8 px-3">
                  <h2 className="text-base font-bold  leading-7 uppercase">
                    Copywriting
                  </h2>
                  <p className="text-base font-light  ">
                    Would you like help with copywriting?
                  </p>
                  <div className="flex items-start pt-4">
                    <div className="flex h-6 items-center">
                      <input
                        name="react"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="react" className="font-medium ">
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className=" flex items-start pt-4">
                    <div className="flex h-6 items-center ">
                      <input
                        name="react"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor="react" className="font-medium ">
                        No
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------ Delivery  Section --------------- */}

          <div className="w-full  bg-[#0B1A2880]   px-8 py-6 rounded-lg ring-1 ring-gray-600">
            <div className="flex items-center gap-4">
              <ChevronLeftIcon className="h-4 w-4 text-white" />
              <h1 className="text-5xl font-[Teko] font-normal uppercase">
                Delivery
              </h1>
            </div>
            <div className="px-2 grid md:grid-cols-5 gap-5">
              <label htmlFor="date" className="text-xl col-span-2">
                Deadline
              </label>
              <div className="w-full lg:px-11 text-black rounded-full col-span-3">
                <input
                  name="date"
                  type="date"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  isClearable
                  placeholderText="I have been cleared!"
                  placeholder="date"
                  className="px-5 outline-none w-full rounded-full border-0 py-1.5 text-blue-500 shadow-sm  ring-gray-300 placeholder:text-blue-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                />
              </div>
            </div>
            <div className="py-6 px-2">
              <h2 className="text-base font-bold  leading-7 uppercase">
                AI-enhanced [beta]
              </h2>
              <p className="text-base font-light  ">
                Would you be open to us using AI for greater efficiences and
                boosted creativity?
              </p>
              <div className="flex items-start pt-4">
                <div className="flex h-6 items-center">
                  <input
                    name="react"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="react" className="font-medium ">
                    Yes, please feel free to use AI where it makes sense
                  </label>
                </div>
              </div>
              <div className=" flex items-start pt-4">
                <div className="flex h-6 items-center ">
                  <input
                    name="react"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="react" className="font-medium ">
                    No, please feel free to use AI where it makes sense
                  </label>
                </div>
              </div>
            </div>{" "}
            <div className="py-5">
              <h2 className="text-base font-bold  leading-7 uppercase">
                Skip estimate approval
              </h2>
              <p className="text-base font-light  ">
                Would you like help with copywriting?
              </p>
              <div className="flex items-start pt-4">
                <div className="flex h-6 items-center">
                  <input
                    name="react"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="react" className="font-medium ">
                    Yes, I would like to skip the estimate approval, and start
                    the project straight away
                  </label>
                </div>
              </div>
              <div className=" flex items-start pt-4">
                <div className="flex h-6 items-center ">
                  <input
                    name="react"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label
                    htmlFor="react"
                    className="text-base font-light  "
                  >
                    No, I would like to skip the estimate approval, and start
                    the project straight away
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* ------------ Summery  Section --------------- */}

          <div className="w-full my-6  bg-[#0B1A2880]   px-5 py-6 rounded-lg ring-1 ring-gray-700">
            <div className="flex items-center gap-4">
              <ChevronLeftIcon className="h-6 w-6 text-gray-300" />
              <h1 className="text-5xl font-[Teko] font-normal uppercase">
                Summery
              </h1>
            </div>
            <div className="p-8">
              <div className="md:p-8 p-2 rounded-2xl ring-1 ring-gray-600">
                <div className="flex gap-4 py-2">
                  <ClipboardDocumentListIcon className="h-4 w-4 text-gray-50" />

                  <span>[From Create your brief]</span>
                </div>
                <div className="flex gap-4 py-2">
                  <UserIcon className="h-6 w-6 text-gray-50" />

                  <span>[By Terrence Jeffords]</span>
                </div>
                <div className="flex gap-4 py-2">
                  <CurrencyDollarIcon className="h-6 w-6 text-gray-50" />
                  <span>
                    Minimum 3 hours, rates depends on scope and your
                    subscription plan
                  </span>
                </div>
                <div className="flex gap-4 py-2">
                  <DocumentTextIcon className="h-6 w-6 text-gray-50" />

                  <span>48+ hours deadline | Oct 31 at 08:00 AM</span>
                </div>
              </div>
            </div>

            <div className="px-5">
              <h2 className="text-base font-bold  leading-7 uppercase">
                please note
              </h2>

              <ul className="list-disc gap-6">
                <li className="py-2">
                  Your CPM will review your project request, and get back to you
                  within 12 hours to confirm or ask any clarifying questions
                </li>
                <li className="py-2">
                  If you have chosen to start the project with a kick off call,
                  your CPM will set this up.
                </li>
                <li className="py-2">
                  If you have chosen to review and approve the hourly estimate,
                  or there is a possibility of overages, your CPM will
                  communicate and confirm all estimates before we start your
                  project
                </li>
                <li className="py-2">
                  We will agree on a timeline for drafts, feedback and
                  revisions, and delivery of final designs within the deadline.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBrief;
