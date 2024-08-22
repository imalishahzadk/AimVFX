import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { ClipboardIcon } from "@heroicons/24/outline";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { BanknotesIcon } from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Subscription",
    description: <ClipboardIcon class="h-6 w-6 text-gray-500" />,
    href: "#",
  },
  {
    name: "Usage",
    description: <ChartBarIcon class="h-6 w-6 text-gray-500" />,
    href: "#",
  },
  {
    name: "Team MEmber",
    description: <UserGroupIcon class="h-6 w-6 text-gray-500" />,
    href: "#",
  },
  {
    name: "Invoices",
    description: <ClipboardDocumentListIcon class="h-6 w-6 text-gray-500" />,
    href: "#",
  },
  {
    name: "User Profile",
    description: <UserIcon class="h-6 w-6 text-gray-500" />,
    href: "#",
  },
  {
    name: "Setting",
    description: <Cog6ToothIcon class="h-6 w-6 text-gray-500" />,
    href: "#",
  },
  {
    name: "Brand Assets",
    description: <BanknotesIcon class="h-6 w-6 text-gray-500" />,
    href: "#",
  },
];

export default function PanelLeft() {
  return (
    <Popover className="relative">
      <Popover.Button className="w-full border-t-[1px] bg-[#0B1A2880]  mb-3 rounded-lg py-5 flex items-center justify-between gap-x-1 text-sm font-semibold leading-6 ">
        <div className="flex justify-between items-center  px-3">
          <div className="flex gap-3  items-center">
            <span>
              <button className="px-3 py-3 rounded-[50%] bg-[#2EABAF]">
                MT
              </button>
            </span>

            <div>
              <h1 className="text-base text-left font-[Teko] font-bold uppercase">
                Marketing team
              </h1>
              <p className="text-base font-light font-tek">
                AIM FX Team | 10 members
              </p>
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
          <div className=" bg-[#0B1A2880] px-6 border-t-[1px] rounded-lg">
            <div className="p-4">
              <h1 className="text-[25px] py-3 uppercase">monthly usage</h1>
              <p>
                Great news! We saved 5 hours on project so you have 236 hours
                remaining this month. What’s next?
              </p>
            </div>
            <div className="flex font-tek justify-end ">
              <span className="">
                <span className="text-[40px] "> 69/</span>

                <span className="text-[30px]">312h</span>
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              class="slider"
              id="myRange"
              className="w-full py-3"
            />
            <div className="flex font-tek justify-end ">
              <span className="">
                <span className="text-[40px] "> 25/</span>

                <span className="text-[30px]">526h</span>
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value="20"
              class="slider"
              id="myRange"
              className="w-full py-3"
            />
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
