import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

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

export default function ControlLeftDiv() {
  const [show, setShow] = useState(false);
  return (
    <Popover className="relative">
      <Popover.Button
        onClick={() => setShow(!show)}
        className="w-full border-t-[1px] bg-[#0B1A2880] py-4 rounded-lg px-2 flex items-center justify-between gap-x-1 text-sm font-semibold leading-6 "
      >
        <div className="flex justify-between items-center  px-3">
          <div className="flex gap-3 p-2  items-center">
            <span>
              <button className="px-5 py-3 rounded-full bg-[#2EABAF] font-bold">
                A
              </button>
            </span>

            <div>
              <h1 className="text-base text-left font-[Teko] font-bold uppercase">
                AIM
              </h1>
              <p className="text-base font-light ">No Plan</p>
            </div>
          </div>
        </div>
        {show ? (
          <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 " aria-hidden="true" />
        )}
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
        <Popover.Panel>
          <div className=" bg-[#0B1A2880] px-6  rounded-b-xl">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="relative rounded-lg p-4 hover:bg-[#1e354b80]  flex"
              >
                <p>{item.description}</p>
                <a href={item.href} className="font-semibold text-[#fff] pl-4">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
