import React, { Fragment, useState } from "react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import "react-quill/dist/quill.snow.css";

import { Dialog, Transition } from "@headlessui/react";
import chevron from "../../assets/images/chevron-right (1).png";
import Group from "../../assets/images/Group 469477.png";
import Rectangle7590 from "../../assets/images/Rectangle 7590.png";
import Rectangle7591 from "../../assets/images/Rectangle 7591.png";
import Rectangle7592 from "../../assets/images/Rectangle 7592.png";
import Rectangle7593 from "../../assets/images/Rectangle 7593.png";
import Rectangle7594 from "../../assets/images/Rectangle 7594.png";
import Rectangle7595 from "../../assets/images/Rectangle 7595.png";
import Rectangle7596 from "../../assets/images/Rectangle 7596.png";
import Rectangle7597 from "../../assets/images/Rectangle 7597.png";
import Rectangle7598 from "../../assets/images/Rectangle 7598.png";
import Rectangle7510 from "../../assets/images/Rectangle 7510.png";
import Rectangle7511 from "../../assets/images/Rectangle 7511.png";
import Rectangle7512 from "../../assets/images/Rectangle 7512.png";
import Rectangle7513 from "../../assets/images/Rectangle 7513.png";
import Rectangle7514 from "../../assets/images/Rectangle 7514.png";
import Rectangle750 from "../../assets/images/Rectangle 7510.png";
import Group469614 from "../../assets/images/Group 469614.png";
import PopUpVideo from "./PopUpVideo";
const PopUp = ({ open, setOpen }) => {
  const imgData = [
    {
      id: 1,
      src: Rectangle7591,
      colspan: "col-span-3",
    },
    {
      id: 2,
      src: Rectangle7592,
      colspan: "col-span-3",
    },
    {
      id: 3,
      src: Rectangle7593,
      colspan: "col-span-3",
    },
    {
      id: 4,
      src: Rectangle7594,
      colspan: "col-span-3",
    },
    {
      id: 5,
      src: Rectangle7595,
      colspan: "col-span-6",
    },
    {
      id: 6,
      src: Rectangle7596,
      colspan: "col-span-2",
    },
    {
      id: 7,
      src: Rectangle7597,
      colspan: "col-span-2",
    },
    {
      id: 8,
      src: Rectangle7598,
      colspan: "col-span-2",
    },
    {
      id: 9,
      src: Rectangle7510,
      colspan: "col-span-6",
    },
    {
      id: 10,
      src: Rectangle7511,
      colspan: "col-span-3",
    },
    {
      id: 11,
      src: Rectangle7512,
      colspan: "col-span-3",
    },
    {
      id: 12,
      src: Rectangle7513,
      colspan: "col-span-2",
    },
    {
      id: 13,
      src: Rectangle7514,
      colspan: "col-span-4",
    },
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl ring-1 ring-slate-400	 bg-[#0B1A28CC]  px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-24 sm:w-full sm:max-w-6xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="w-[90%] mx-auto  text-white  ">
                  <div className="flex items-center mt-2 py-4">
                    <span>Our Works</span>
                    <span>
                      <img src={chevron} alt="" />
                    </span>
                    <span className="text-[#00FFFF] font-[500]">Bolt</span>
                  </div>
                  <div className="pb-4">
                    <video controls poster={Group}>
                      <source src="your-video-file.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <div className="w-[85%] mx-auto">
                    <div className="grid grid-cols-2 ">
                      <div className="  flex flex-col justify-center gap-3">
                        <h1 className="font-[500] text-3xl pb-4">
                          Bolt Bets on Video to Generate Brand Awareness
                        </h1>
                        <p>
                          Bolt requested a video to showcase their unique
                          offering of making customer checkouts quick, easy, and
                          painless. The brand’s Electric Dynamism reflects the
                          excitement and instantaneity of a one-click checkout
                          process through the use of dramatic wide-angle lenses,
                          energetic movement
                        </p>
                      </div>
                      <div className="p-6">
                        <img src={Rectangle7590} alt="" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 uppercase py-10">
                      <div className=" flex flex-col justify-center gap-4">
                        <h1 className="font-[500] text-3xl pb-4">YEAR</h1>
                        <span className="text-[#00FFFF] text-7xl font-tek">
                          2024-2025
                        </span>
                      </div>
                      <div className=" flex flex-col justify-center gap-3">
                        <h1 className="font-[500] text-3xl pb-4">industry</h1>
                        <span className="text-[#00FFFF] text-7xl font-tek">
                          SOFTWARE
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4">
                      {imgData.slice(0, 8).map((item) => {
                        return (
                          <div key={item.id} className={item.colspan}>
                            <img src={item.src} alt="" />
                          </div>
                        );
                      })}
                    </div>
                    <p className="px-10 py-14 text-xl">
                      Lorem ipsum dolor sit amet consectetur. Curabitur rhoncus
                      vitae posuere sit pharetra. Purus donec enim sagittis
                      parturient imperdiet mauris cras. Urna morbi imperdiet
                      dolor amet. Mi et aliquam elementum vestibulum risus
                      velit. Quam aliquet morbi id nisl nunc.
                    </p>
                    <div className="grid grid-cols-6 gap-4">
                      {imgData.slice(8, 13).map((item) => {
                        return (
                          <div key={item.id} className={item.colspan}>
                            <img src={item.src} alt="" />
                          </div>
                        );
                      })}
                    </div>
                    <p className="px-10 py-14 text-xl">
                      Lorem ipsum dolor sit amet consectetur. Curabitur rhoncus
                      vitae posuere sit pharetra. Purus donec enim sagittis
                      parturient imperdiet mauris cras. Urna morbi imperdiet
                      dolor amet. Mi et aliquam elementum vestibulum risus
                      velit. Quam aliquet morbi id nisl nunc.
                    </p>
                  </div>

                  <div>
                    <img src={Group469614} alt="" />
                  </div>
                  <h1 className="font-[500] text-3xl py-14">
                    DISCOVER MORE AMAZING PROJECTS
                  </h1>
                  <PopUpVideo />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default PopUp;
