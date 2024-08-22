import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Lorem Ipsum",
    href: "#",
  },
  {
    name: "Lorem Ipsum",
    href: "#",
  },
  {
    name: "Lorem Ipsum",
    href: "#",
  },
];

export default function PanelRight() {
  return (
    <Popover className="relative">
      <Popover.Button className="w-full border-t-[1px] bg-[#0B1A2880] py-5 mb-3 rounded-lg flex items-center justify-between gap-x-1 text-sm font-semibold leading-6 ">
        <div className="flex justify-between items-center  px-3">
          <div className="flex gap-3">
            <span>
              <button className="px-4 py-3 rounded-[50%] bg-[#2EABAF]">
                TJ
              </button>
            </span>

            <div>
              <h1 className="text-base text-left font-[Teko] font-bold uppercase">
                Terrence Jeffords
              </h1>
              <p className="text-base font-light font-tek">AIM FX Member</p>
            </div>
          </div>
        </div>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="">
          <div className=" bg-[#0B1A2880] py-5 px-6 border-t-[1px] rounded-lg">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="relative border-b-[1px] p-4 hover:bg-[#1e354b80]  flex justify-between"
              >
                <a href={item.href} className="font-semibold text-[#fff] pl-4">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <EllipsisHorizontalIcon className="h-6 w-6 text-[#fff]" />
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
