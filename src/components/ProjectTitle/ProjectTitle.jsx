import { IoIosArrowDown, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Rectangle from "../../assets/images/Rectangle 7530.png";

const ProjectTitle = ({ open, setOpen }) => {
  const [value, setValue] = useState("");
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl ring-1 ring-gray-300 bg-[#0B1A28CC]  px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-32 sm:w-full sm:max-w-6xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="">
                  <div className="  text-[#fff] flex justify-between  gap-3">
                    <span className="text-[50px] font-[400]">
                      Project Title
                    </span>
                  </div>
                  <div className="flex justify-end items-center gap-x-2 font-semibold">
                    <p className="py-2 px-4 rounded-xl bg-gradient-to-bl from-[#15B8C7] to-[#0B1A28CC]">
                      <ShareIcon className="h-6 w-6  text-white" />
                    </p>
                    <p className="py-2 px-4 rounded-xl bg-gradient-to-bl from-[#15B8C7] to-[#0B1A28CC]">
                      <ArrowDownTrayIcon className="h-6 w-6 text-white" />
                    </p>
                  </div>
                  <div>
                    <div className=" py-10 border-b-[1px] border-gray-500">
                      <div className="p-10 xl:w-[1100px] xl:h-[500] object-cover">
                        <video controls poster={Rectangle}>
                          <source src="your-video-file.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="play-button"></div>
                      </div>
                    </div>
                    <div className="flex justify-between py-4 text-[#fff]">
                      <p>Created 03/03/2024</p>
                      <p>Clients Name </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProjectTitle;
