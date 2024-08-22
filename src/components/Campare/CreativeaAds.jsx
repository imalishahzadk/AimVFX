import React from "react";
import Button from "../Button/Button";
import holographic from "../../assets/images/holographic_fluid_drop_shapes_illustration_02 copy 2 (1).png";
import Group469378 from "../../assets/images/Group 469378 (1).png";
import Persntage from "../Persentage/Persentage";
import Arrow from "../../assets/images/Arrow.png";

const CreativeaAds = () => {
  const data = Array(7).fill({ text: "Website", span1: "Agencies" });
  const data1 = Array(7).fill({ text: "Website", span1: "Freelancers" });

  //   data1[3] = { span: "Freelancer" };
  return (
    <div>
      <div className="px-20  2xl:px-40 mx-auto sm:py-28 gap-3 grid md:grid-cols-2 xl:gap-32 ">
        <div>
          <h1 className="uppercase text-5xl font-[Teko]  font-normal sm:text-5xl xl:text-8xl py-6">
            From creative ads to multiple designs
          </h1>

          <p className="text-xl font-tek font-light">
            Lorem ipsum dolor sit amet consectetur. Sed enim tincidunt etiam
            quis nulla pellentesque. Facilisis orci rhoncus adipiscing donec.
            Pellentesque sed sit lorem orci rutrum. Mi ac morbi convallis massa
            amet pellentesque gravida. Sed sed nisl in diam arcu non nunc mi
            leo. Id natoque hendrerit gravida posuere pulvinar consectetur augue
            tincidunt. Commodo eu pharetra velit platea vestibulum purus.
          </p>
          <div className="pt-28">
            <Button className="px-20 py-2.5 text-sm font-semibold text-[#273A5F] bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              join us
            </Button>
          </div>
        </div>
        <div className="xl:relative py-4">
          <img
            src={holographic}
            alt=""
            className="xl:block hidden absolute rotate-180 -top-52 right-0 -z-10"
          />
          <img src={Group469378} alt="" className=" 2xl:w-9/12" />
        </div>
      </div>
      <Persntage />
      <div className="px-6 sm:px-10 xl:px-40 pb-36">
        <h1 className=" xl:text-8xl md:text-6xl text-5xl font-[Teko] uppercase py-10">
          aim-fx alternatives
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Egestas id rhoncus morbi
              commodo auctor. Nulla imperdiet porttitor sollicitudin vitae
              varius semper in tortor integer. Quis nulla consequat ac ut
              consequat. Lorem sem lectus eu eros varius. Quis urna fringilla
              sed.
            </p>
          </div>

          <div>
            <h2 className="py-5 text-xl font-tek font-semibold">
              Hiring In-House
            </h2>
            {data1.map((item, ind) => {
              return (
                <>
                  {ind == 1 || ind == 3 ? (
                    <h1 className="py-5 text-xl font-tek font-semibold">
                      {item.span1}
                    </h1>
                  ) : (
                    <div key={ind} className=" cursor-pointer py-3">
                      <div className=" flex flex-1 justify-between px-5 py-3 rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                        <button className="text-base font-tek font-semibold">
                          {item.text}
                        </button>
                        <span>
                          <img src={Arrow} alt="" />
                        </span>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>

          <div>
            <h2 className="py-5 text-xl font-tek font-semibold">
              Other design subscriptions
            </h2>
            {data.map((item, ind) => {
              return (
                <div key={ind} className=" cursor-pointer py-3">
                  <div className=" flex flex-1 justify-between px-5 py-3 rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                    <button className="text-base font-tek font-semibold">
                      {item.text}
                    </button>
                    <span>
                      <img src={Arrow} alt="" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h2 className="py-5 text-xl font-tek font-semibold">
              Design agencies by city
            </h2>
            {data.slice(0, 7).map((item, ind) => {
              return (
                <div key={ind} className=" cursor-pointer py-3">
                  <div className=" flex flex-1 justify-between px-5 py-3 rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                    <button className="text-base font-tek font-semibold">
                      {item.text}
                    </button>
                    <span>
                      <img src={Arrow} alt="" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeaAds;
