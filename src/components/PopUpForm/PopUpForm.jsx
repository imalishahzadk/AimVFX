import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../Button/Button";
import { PhotoIcon } from "@heroicons/react/24/outline";

const PopUpForm = () => {
  const [value, setValue] = useState("");
  return (
    <form className="shadow-sm  sm:rounded-xl ">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid  sm:gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="col-span-full sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-[#FFFFFF]"
            >
              Project Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-full sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-[#FFFFFF]"
            >
              Project Type
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block pl-2 pr-2 bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
              >
                <option>Select</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div className="col-span-6 text-[#fff]">
            <h1 className="text-[20px] font-[700]">Creative Assets</h1>
            <p>What best fits your assets needs?</p>
          </div>
          <div className="col-span-full sm:col-span-3">
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block pl-2 bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
              >
                <option>Select</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>
          <div className="col-span-full sm:col-span-3">
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block pl-2 bg-[#D4E7F5] outline-none w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
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
              <h1 className=" text-[20px] font-[700]">Describe the project</h1>
              <p>
                Consideer providing context, challenges, requirements, playback
                duration, past work, preferences, scripts or instructions,
                references and links
              </p>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl">
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
            <h1 className="text-[20px] font-[700]">Formats, sizes or ad set</h1>
            <p>
              Are there any specific requirements for assets formats, sizes or
              dimensions?
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
          <div className="col-span-full mx-4 py-5">
            <h2 className="text-xl py-3">Files</h2>
            <p>Upload any relevant files, references or chase lists</p>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-100 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />

                <div className="mt-4 flex text-sm leading-6 text-white/60">
                  <p className="md:pl-14 lg:pl-14 text-center">
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
                <p className="text-xs leading-5 text-white/60">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-full flex sm:col-span-5 gap-x-4 items-center">
            <label className="text-[#fff] text-[20px] font-[700]" htmlFor="">
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
      <div className="flex justify-center">
        <Button className="px-8 py-2.5 text-sm font-semibold text-[#000]  bg-gradient-to-r from-[#fff] to-[#8CE1EC] rounded-full  hover:text-[#000] hover:bg-cyan-600  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          SEND PROJECT BRIEF
        </Button>
      </div>
    </form>
  );
};

export default PopUpForm;
