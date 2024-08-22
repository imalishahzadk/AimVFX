import React from "react";
import Group469764 from "../../assets/images/Group 469764.png";
import Group469766 from "../../assets/images/Group 469766.png";
import Group469765 from "../../assets/images/Group 469765.png";
import Rectagle7604 from "../../assets/images/Rectangle 7604.png";
import Rectagle7605 from "../../assets/images/Rectangle 7605.png";
import scroll from "../../assets/images/scroll.png";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import AMEX from "../../assets/images/logo/AMEX.png";
import visa from "../../assets/images/logo/visa-logo.png";
import Stripe from "../../assets/images/logo/Stripe.png";
import PayPal from "../../assets/images/logo/PayPal.png";
import Mastercard from "../../assets/images/logo/Mastercard.png";
import GooglePay from "../../assets/images/logo/GooglePay.png";
import Bitcoin from "../../assets/images/logo/Bitcoin.png";
import ApplePay from "../../assets/images/logo/ApplePay.png";

import Rectangle from "../../assets/images/logo/Rectangle 7613.png";

const CheckOut = () => {
  const logo = [
    {
      icon: visa,
    },
    {
      icon: AMEX,
    },
    {
      icon: Mastercard,
    },
    {
      icon: Stripe,
    },
    {
      icon: PayPal,
    },
    {
      icon: GooglePay,
    },
    {
      icon: ApplePay,
    },
    {
      icon: Bitcoin,
    },
  ];
  return (
    <div className="solution-page text-white py-24">
      <div className=" pl-4 pr-6 grid md:grid-cols-5 2xl:px-60 gap-5 lg:gap-x-14">
        <div className="col-span-3 md:col-span-2 text-[20px] lg:px-12">
          <div className="text-4xl font-[400] uppercase font-tek border-b-[1px] border-gray-400 flex justify-between pt-5 pb-2">
            <span>subtotal</span>
            <span>$0.00</span>
          </div>
          <div className="text-xl font-[400] font-tek border-b-[1px] border-gray-400  flex items-center justify-between pt-5 pb-2">
            <span className="font-tek">Due Today</span>
            <span className="text-4xl">$0.00</span>
          </div>
          <h1 className="text-4xl font-normal font-[Teko] uppercase pb-6 pt-14">
            choose your video editing plan
          </h1>

          <div className="bg-[#15B8C7] px-4 border-[1px] rounded-full flex justify-between items-center py-3">
            <span className="flex gap-3 items-center">
              <span className="h-4 w-4 rounded-sm bg-white flex justify-center items-center">
                <img src={Rectagle7605} alt="" />
              </span>

              <p>Scale Plan (Monthly)</p>
            </span>
            <span className="text-[25px] font-tek">$1,999.00</span>
          </div>
          <div className=" px-4 mt-4 border-[#2EABAF] border-[1px] rounded-full flex justify-between items-center py-3">
            <span className="flex items-center gap-x-3">
              <span className="h-4 w-4 rounded-sm  flex justify-center items-center">
                <img src={Rectagle7604} alt="" />
              </span>
              <p>Scale Plan (Monthly)</p>
            </span>
            <span className="text-[25px] font-tek">$1,999.00</span>
          </div>
          <div className="flex justify-between py-8 font-Rubik">
            <span className="text-4xl font-[Teko] font-normal uppercase">
              add-ons
            </span>
            <p>Include in your subscription.</p>
          </div>

          {/*---------------------------------  Creative Direction button section  ----------------------------*/}

          <div className="lg:relative">
            <div className="mb-3 rounded-3xl flex justify-between bg-[#0513378C] py-7 px-8  text-xl font-light font-tek">
              <div className="  ">
                <div className="flex items-center pb-5 gap-x-2">
                  <PhoneIcon className="h-6 w-6 text-white " />

                  <p className=" ">Creative Direction</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className=" flex items-center justify-center">
                <button className="p-8 box-border rounded-3xl bg-[#00000014]">
                  <PlusIcon className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>
            <div className="rounded-3xl flex justify-between bg-[#0513378C] py-7 px-8 text-xl font-light font-tek">
              <div className="  ">
                <div className="flex items-center pb-5 gap-x-2">
                  <PhoneIcon className="h-6 w-6 text-white " />

                  <p className=" ">Creative Direction</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
              <div className=" flex items-center justify-center">
                <button className="p-8 box-border rounded-3xl bg-[#00000014]">
                  <PlusIcon className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            <img
              src={scroll}
              alt=""
              className="hidden lg:block lg:absolute -right-16 -bottom-0"
            />
          </div>
        </div>
        <div className="col-span-3 py-6  ">
          <div className=" ring-1 ring-slate-400 rounded-3xl p-6 lg:px-20 bg-[#0B1A28CC] text-white">
            <h1 className="text-[40px] uppercase pb-8 font-tek">
              payment method
            </h1>
            <form>
              <div className="grid max-w-full grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 md:col-span-2">
                <div className="sm:col-span-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 "
                  >
                    Card Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="Number"
                      name="number"
                      type="number"
                      placeholder="Enter Card Number"
                      className="block w-full px-4 rounded-full border-0 py-1.5 placeholder:text-[#1666B0] text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-full lg:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6"
                  >
                    Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name=""
                      id=""
                      placeholder="given-name"
                      className="block w-full px-6 rounded-full border-0 py-1.5 text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full lg:col-span-3 ">
                  <label
                    htmlFor="CVC"
                    className="block text-sm font-medium leading-6"
                  >
                    CVC
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="CVC"
                      id="CVC"
                      placeholder="Enter CVC number"
                      className="block w-full px-6 t rounded-full border-0 py-1.5 text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#1666B0] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-full py-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 "
                  >
                    Cardholder Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter name as written on card"
                      className="block w-full px-4 rounded-full border-0 py-1.5 placeholder:text-[#1666B0] text-[#1666B0] shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <p className="text-center">
                By continuing you agree with the{" "}
                <span className="text-[#00ffff]">Terms of Service</span> &
                <span className="text-[#00ffff]">Privacy Policy</span>.
              </p>

              <div className="flex justify-center pb-14">
                <button
                  type="submit"
                  className=" bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 lg:px-44 px-20 mt-5 rounded-full"
                >
                  subscribe
                </button>
              </div>
            </form>

            <div className="border-t-2 max-w-md flex flex-col justify-between gap-y-10 mx-auto pt-9 pb-9 border-[#2EABAF] ">
              <div className="flex justify-between items-center">
                <p>
                  Guaranteed{" "}
                  <span className="text-[#00ffff]">safe & secure</span>{" "}
                  checkout.
                </p>
                <div className=" flex justify-between gap-x-1 bg-black items-center px-2 py-1 rounded-md">
                  <span>Powered by </span>{" "}
                  <span className="text-3xl font-normal">strip</span>
                </div>
              </div>
              <div className=" flex justify-between items-center gap-x-1">
                {logo.map((item) => {
                  return (
                    <div className="h-8 flex-wrap w-10 flex justify-center items-center rounded-md bg-white">
                      <img src={item.icon} alt="" className="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
