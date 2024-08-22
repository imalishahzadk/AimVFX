import React from "react";
import Button from "../Button/Button";

const ServiceBenefits = () => {
  return (
    <>
      <div className="benefits-container">
        <div className="py-4">
          <p>Some of the benefits include:</p>
        </div>
        <div className="flex lg:flex-row flex-col gap-y-6 items-center w-full gap-x-4">
          <div className="">
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">
                Unlimited video projects -{" "}
              </h5>
              <p className="text-sm font-light">
                Unleash your creativity without limitations. video output.
              </p>
            </div>
            <div className="flex items-center  flex-wrap">
              <h5 className="font-semibold text-base">
                Fast turnaround time -{" "}
              </h5>
              <p className="text-sm font-light">
                Lighting-fast turnaround time for your video needs.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">
                3 rounds of changes -{" "}
              </h5>
              <p className="text-sm font-light">
                {" "}
                Perfection guaranteed with three rounds of revisions.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">Subtitles - </h5>
              <p className="text-sm font-light">
                60 minutes per month of human quality controlled transcription
                and subtitles.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">
                Private Slack Channel -{" "}
              </h5>
              <p className="text-sm font-light">
                Streamlined communication for hassle-free collaboration.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">Flexible Plans - </h5>
              <p className="text-sm font-light">
                Flexible plans with no long-term commitment.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">
                Adobe Premiere Pro Files -{" "}
              </h5>
              <p className="text-sm font-light">
                {" "}
                Full control if you want to make your own changes.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">
                Unlimited video projects -{" "}
              </h5>
              <p className="text-sm font-light">
                Unleash your creativity without limitations. video output.
              </p>
            </div>
            <div className="flex items-center  flex-wrap">
              <h5 className="font-semibold text-base">
                Fast turnaround time -{" "}
              </h5>
              <p className="text-sm font-light">
                Lighting-fast turnaround time for your video needs.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">
                3 rounds of changes -{" "}
              </h5>
              <p className="text-sm font-light">
                {" "}
                Perfection guaranteed with three rounds of revisions.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">Subtitles - </h5>
              <p className="text-sm font-light">
                60 minutes per month of human quality controlled transcription
                and subtitles.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">
                Private Slack Channel -{" "}
              </h5>
              <p className="text-sm font-light">
                Streamlined communication for hassle-free collaboration.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">Flexible Plans - </h5>
              <p className="text-sm font-light">
                Flexible plans with no long-term commitment.
              </p>
            </div>
            <div className="flex items-center flex-wrap">
              <h5 className="font-semibold text-base">
                Adobe Premiere Pro Files -{" "}
              </h5>
              <p className="text-sm font-light">
                {" "}
                Full control if you want to make your own changes.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pt-20 pt-10 flex lg:flex-row  flex-col justify-center gap-y-5 items-center gap-x-3">
          <Button className="lg:px-8 px-6 py-2.5   text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            book a call
          </Button>
          <Button className="lg:px-8 px-6 py-2.5  text-sm font-semibold text-black bg-white hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-cyan-500 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Choose a plan
          </Button>
        </div>
      </div>
    </>
  );
};

export default ServiceBenefits;
