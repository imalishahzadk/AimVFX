import React from "react";
import Button from "../Button/Button";
import Rectangle1 from "../../assets/images/Rectangle 7561.png";
import Rectangle2 from "../../assets/images/Rectangle 7577.png";

const Maxine = () => {
  return (
    <div className="bg-gradient-to-br from-[#013b49] to-[#29b6bd] p-5 lg:p-32">
      <div className="flex flex-col lg:flex-row items-center mx-auto max-w-7xl">
        <div className="relative mb-8 lg:mb-0 lg:mr-8">
          <img src={Rectangle1} alt="img" className="w-full lg:w-auto" />
          <div className="absolute top-2 sm:top-10 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none">
            <img src={Rectangle2} alt="" className="w-3/4 sm:w-full" />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 py-5 lg:py-0">
          <span className="text-[24px] sm:text-[32px] lg:text-[40px] text-[#56BEC2] font-[400]">
            Maxine Casper
          </span>
          <span className="line font-Teko text-[#fff] text-[14px] sm:text-[18px] lg:text-[24px]">
            CREATIVE DIRECTOR OF PROMOTIONAL VIDEOS
          </span>
          <div className="text-white max-w-full lg:w-96">
            <p className="-light text-[12px] sm:text-[14px] lg:text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Leo molestie velit turpis
              tellus maecenas vitae facilisis id dolor. Tellus ac nullam urna
              cursus euismod consequat. Ut ac nam morbi at sit maecenas habitant
              neque enim in id ac.
            </p>
            <br />
            <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
              Freezing 2 times for two weeks a year If one video editor is not
              enough, then you need to buy another package. You need to pay
              monthly. You need to pay with monthly, quarterly and annual
              discounts.
            </p>
            <p className="py-1 text-[12px] sm:text-[14px] lg:text-[16px]">
              Lorem ipsum dolor sit amet consectetur. Leo molestie velit turpis
              tellus maecenas vitae facilisis id dolor.
            </p>
          </div>
          <div className="flex mt-6 lg:mt-10">
            <Button className="px-6 sm:px-8 py-2 text-xs sm:text-sm font-semibold text-[#FFFFFF] bg-[#2EABAF] bg-transparen rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              book a call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maxine;
