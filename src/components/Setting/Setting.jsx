import React from "react";
import PanelLeft from "../Panel/PanelLeft";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ControlLeftDiv from "../ControlFreelancer/ ControlLeftDiv";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { CreditCardIcon } from "@heroicons/react/24/outline";

const Setting = () => {
  return (
    <div className="solution-page py-24">
      <div className="px-6 lg:px-10 grid xl:grid-cols-8 text-white gap-4 lg:mt-10">
        <div className="col-span-full  xl:col-span-2 ">
          <ControlLeftDiv />
        </div>
        {/* ------------ Center div  Section --------------- */}

        <div className=" xl:col-span-4 ">
          <div className="w-full gap-y-4 flex flex-row   items-center justify-between px-3 py-5 border-setting ">
            <div className="flex  gap-x-2 ">
              <Cog8ToothIcon className="h-6 w-6 pt-1 text-gray-200" />

              <h2 className="text-4xl uppercase font-[Teko]">settings</h2>
            </div>
            <div className="flex items-center  rounded-full py-2 px-3">
              <span className="px-3 py-2 rounded-[50%] bg-[#2EABAF]">TJ</span>
            </div>
          </div>
          <div className="w-full h-[576px] gap-y-4 bg-[#0B1A2880] rounded-xl mt-6">
            <form className="p-6 w-full">
              {/* ------------ input For City and Country  div  Section --------------- */}

              <div className="border-b-[1px] border-gray-500 pb-8 grid lg:grid-cols-5">
                <div className="col-span-3">
                  <div className="flex items-center gap-x-2">
                    <div>
                      <CurrencyDollarIcon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-4xl uppercase font-[Teko]">
                      billing details
                    </h2>
                  </div>

                  <div className="py-2">
                    <label
                      htmlFor="first-name"
                      className="block text-base  font-bold  leading-6 text-[#FFFFFF]"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder="City"
                        className=" w-full px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="py-2">
                    <label
                      htmlFor="first-name"
                      className="block text-base  font-bold leading-6 text-[#FFFFFF]"
                    >
                      Contry
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="country"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder="Country"
                        className=" w-full  px-4 bg-[#D4E7F5] outline-none rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ------------ input For Name and Surname  div  Section --------------- */}

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pt-5  md:grid-cols-3">
                <div>
                  <h2 className="text-base font-semibold leading-7">
                    Personal Information
                  </h2>
                </div>

                <div className="grid max-w-2xl grid-cols-1 gap-x-9 gap-y-10 sm:grid-cols-6 md:col-span-2">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 "
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder="Name"
                        className="px-2 block w-full rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 "
                    >
                      Surname
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        placeholder="Surname"
                        className="px-2 block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="px-3 block w-full rounded-full border-0 py-1.5 text-blue-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* ------------ Payment Method   div  Section --------------- */}
          <div className="w-full bg-[#0B1A2880] rounded-xl mt-5 p-6">
            <div className="border-b-[1px] border-gray-500">
              <div className="flex items-center gap-x-2 pb-4">
                <CreditCardIcon className="h-8 w-8 text-gray-200" />

                <h1 className="text-5xl uppercase font-[Teko]">
                  payment methods
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-4 md:grid-cols-3">
                <div>
                  <h2 className="uppercase text-base font-semibold leading-7 ">
                    Credit/debit cards
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    Connected cards will appear here listed
                  </p>
                </div>

                <div className="grid max-w-2xl grid-cols-1 gap-x-1 gap-y-3 md:col-span-2">
                  <div className="sm:col-span-full">
                    <h2 className="text-base font-semibold leading-7 text-gray-100 uppercase">
                      add new card
                    </h2>
                  </div>
                  <div className=" flex justify-between gap-x-2 gap-y-2 flex-wrap items-center">
                    <span className="text-lg font-medium uppercase">
                      Card number:
                    </span>
                    <span className="text-lg font-medium uppercase">MM/YY</span>
                    <span className="text-lg font-medium uppercase">cvc</span>
                    <button className="uppercase px-4 py-1 border-4 border-[#2EABAF] rounded-full hover:bg-[#3a9194]">
                      Add Card
                    </button>
                  </div>
                  <div className="col-span-full">
                    <p>
                      A temporary $0.5 charge that automatically refunds might
                      be <br />
                      applied to verify your credit card at the start of your
                      project
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------ Bank  Account   div  Section --------------- */}

            <div className="grid grid-cols-1 gap-x-8 gap-y-10  pb-6 pt-6 md:grid-cols-3">
              <div>
                <h2 className="uppercase text-base font-semibold leading-7 ">
                  Bank accounts
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-300">
                  Contact payment@aimfx.com if you want to disconnect a bank
                  account
                </p>
              </div>

              <div className="grid max-w-2xl grid-cols-1 gap-x-1 gap-y-8 sm:grid-cols-4 md:col-span-2">
                <div className="col-span-full">
                  <h1 className=" text-xl font-[700]">
                    Connecting your bank accounts is easy <br /> and your the
                    details stays secure
                  </h1>
                </div>
                <div className="col-span-2">
                  <button className="uppercase px-4 py-1 border-4 border-[#2EABAF] rounded-full hover:bg-[#3a9194]">
                    Add account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
