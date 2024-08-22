import React from "react";
import elementor from "../../assets/images/div.elementor-column.png";
import Rectangle130 from "../../assets/images/Rectangle 130.png";
const GuaranteCard = () => {
  return (
    <div>
      <div className=" md:max-w-6xl mx-auto py-20">
        <div className="grid lg:grid-cols-2 px-2  rounded-2xl ">
          <div className=" pt-5  pl-5 w-full">
            <h2 className="text-6xl font-tek ">Title text block</h2>
            <h2 className="text-3xl font-tek py-4 ">
              JUST THE SUBHEAD HERE:
            </h2>
            <p className="text-xl font- pb-4 font-sans text-white/80">
              Freezing 2 times for two weeks a year If one video editor is not
              enough, then you need to buy another package. You need to pay
              monthly. You need to pay with monthly, quarterly and annual
              discounts.
            </p>
            <button className="px-8 py-2.5  text-sm font-semibold text-[#000]  bg-[#fff]  rounded-full  hover:text-[#000] hover:bg-cyan-600  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
            </button>
          </div>
          <div>
            <div className="video-container-testimonal border-none">
              <video controls poster={Rectangle130}>
                <source src="your-video-file.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="play-button"></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" sm:max-w-5xl mx-auto py-16">
        <div className="grid sm:grid-cols-4 px-2 bg-[#15B8C7] rounded-2xl ">
          <div className="flex justify-center">
            <img src={elementor} alt="" className="w-full" />
          </div>
          <div className="sm:col-span-3 pt-5  pl-5 w-full">
            <h2 className="text-3xl font-tek py-4 ">
              14-Day Money Back Guaarantee
            </h2>

            <p className="text-[16px] font- pb-4">
              No contracts. No commitments. Try it for 14 days and if it appears
              we’re not a match (doubt it), we’ll give your money back.
            </p>
            <button className="px-8 py-2.5 mb-5 text-sm font-semibold text-[#000]  bg-[#fff]  rounded-full  hover:text-[#000] hover:bg-cyan-600  focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              Try Our Platform Risk-Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteCard;
