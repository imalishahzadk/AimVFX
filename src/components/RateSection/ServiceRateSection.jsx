import React from "react";
import scissor from "../../assets/Scissor.svg";
import slicing from "../../assets/ri_knife-fill.svg";
import star from "../../assets/mdi_stars.svg";
import search from "../../assets/mingcute_search-fill.svg";
import audio from "../../assets/wpf_audio-wave.svg";
import training from "../../assets/iconamoon_certificate-badge-fill.svg";
import color from "../../assets/ion_color-fill.svg";
import file from "../../assets/fa-solid_file.svg";
import users from "../../assets/clarity_users-solid.svg";
import subtitle from "../../assets/material-symbols_subtitles-sharp.svg";

const ServiceRateSection = () => {
  return (
    <>
      <div className="serviceRateSection">
        <div className="text-white lg:text-[80px] text-[50px] uppercase font-tek">
          <h1>how much time you save with aim fx?</h1>
        </div>
        <div className="lg:mt-10 mt-5">
          <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start w-full gap-y-2 gap-x-3 lg:pb-10 pb-4">
            <div className="lg:w-1/2">
            <p className="px-2 pb-4 text-[#00FFFF]">
              You save hundreds of collective hours by not doing your own video
              editing:
            </p>
            </div>
            <div className="text-[#00FFFF] flex flex-col gap-y-3">
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5">
                <span>Cutting</span>
                <span>
                  <img
                    src={scissor}
                    alt="Scissor vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5">
                <span>Color Correction</span>
                <span>
                  <img
                    src={color}
                    alt="Color vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5">
                <span>Adding Subtitles</span>
                <span>
                  <img
                    src={subtitle}
                    alt="Subtitle vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
            </div>

            <div className="text-[#00FFFF] flex flex-col gap-y-3">
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5 ">
                <span>Slicing</span>
                <span>
                  <img
                    src={slicing}
                    alt="Slicing vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5 ">
                <span>Fixing Audio</span>
                <span>
                  <img
                    src={audio}
                    alt="Audio vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5 ">
                <span>Transitions</span>
                <span>
                  <img
                    src={star}
                    alt="Transition vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* ----------------- */}
          <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start w-full gap-y-2 gap-x-3">
            <div className="lg:w-1/2">
            <p className="px-2 pb-4 text-[#00FFFF]">
              You save hundreds of collective hours by not doing your own video
              editing:
            </p>
            </div>
            <div className="text-[#00FFFF] flex flex-col gap-y-3">
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5">
                <span>Cutting</span>
                <span>
                  <img
                    src={scissor}
                    alt="Scissor vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5">
                <span>Color Correction</span>
                <span>
                  <img
                    src={color}
                    alt="Color vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5">
                <span>Adding Subtitles</span>
                <span>
                  <img
                    src={subtitle}
                    alt="Subtitle vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
            </div>

            <div className="text-[#00FFFF] flex flex-col gap-y-3">
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5 ">
                <span>Slicing</span>
                <span>
                  <img
                    src={slicing}
                    alt="Slicing vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5 ">
                <span>Fixing Audio</span>
                <span>
                  <img
                    src={audio}
                    alt="Audio vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
              <div className="flex items-center justify-between border border-[#00FFFF] rounded-full w-80 px-4 py-1.5 ">
                <span>Transitions</span>
                <span>
                  <img
                    src={star}
                    alt="Transition vector"
                    className="ser-vector-set"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceRateSection;
