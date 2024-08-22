import React from "react";
import ServivePageVideo from "../CustomVideo/ServicePageVideo";
import Button from "../Button/Button";
const features = [
  {
    name: "Dmitriy Gladenko ",
    description: "Company VideoFx.",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg",
    imageAlt: "case study",
  },
  {
    name: "Dmitriy Gladenko ",
    description: "Company VideoFx",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg",
    imageAlt: "case study",
  },
  {
    name: "Dmitriy Gladenko ",
    description: "Company VideoFx",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg",
    imageAlt: "case study",
  },
];
const OurStory = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="mx-auto max-w-7xl  flex justify-center items-center flex-col py-10 ">
        <div className="max-w-xl  flex justify-center items-center flex-col lg:px-0 px-3">
          <p className="mt-2 font-tek text-[60px] uppercase text-white ">
            our story
          </p>
          <p className="mt-4 text-white lg:text-start text-center">
            Take a look at all the countries that AIM FX team members are based
            in.
          </p>
        </div>
      </div>
      <div className="flex items-center lg:flex-row flex-col  mx-auto max-w-7xl lg:px-32 px-3 lg:py-16 py-10">
        {/* ------------ Right Side Hero Section --------------- */}
        <div className="relative">
          <ServivePageVideo />
        </div>
        <div className="flex flex-col gap-y-3 lg:pl-6  ">
          <span className="team-hero-heading">video cost</span>
          <div className="lg:w-96">
            <p className="text-white">
              VIDEO PRODUCTION COSTS:
              <br />
              Explore our video production costs page to gain a clear
              understanding of investment options tailored to your creative
              vision and project needs.
            </p>
          </div>
          <div className="flex gap-y-5 mt-10">
            {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
             </Button> */}
            <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              video production costs
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:flex-row flex-col-reverse  mx-auto max-w-7xl lg:px-32 px-3 lg:py-16 py-10">
        <div className="flex flex-col gap-y-3">
          <span className="team-hero-heading">about our</span>
          <div className="lg:w-96">
            <p className="text-white">
              VIDEO PRODUCTION AGENCY :<br />
              Aim FX is a full-service video production agency in London,
              providing end-to-end solutions for all creative video campaigns,
              that provide an uplifting change of pace from the tired and
              overused methods seen elsewhere.{" "}
            </p>
          </div>
          <div className="flex gap-y-5 mt-10">
            {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
             </Button> */}
            <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              animated video services
            </Button>
          </div>
        </div>
        {/* ------------ Right Side Hero Section --------------- */}
        <div className="relative">
          <ServivePageVideo />
        </div>
      </div>
      <div className="flex items-center lg:flex-row flex-col  mx-auto max-w-7xl lg:px-32 px-3 lg:py-16 py-10">
        {/* ------------ Right Side Hero Section --------------- */}
        <div className="relative">
          <ServivePageVideo />
        </div>
        <div className="flex flex-col gap-y-3 lg:pl-6 ">
          <span className="team-hero-heading">video cost</span>
          <div className="lg:w-96">
            <p className="text-white">
              VIDEO PRODUCTION COSTS:
              <br />
              Explore our video production costs page to gain a clear
              understanding of investment options tailored to your creative
              vision and project needs.
            </p>
          </div>
          <div className="flex gap-y-5 mt-10">
            {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
             </Button> */}
            <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              video production costs
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:flex-row flex-col-reverse  mx-auto max-w-7xl lg:px-32 px-3 lg:py-16 py-10">
        <div className="flex flex-col gap-y-3">
          <span className="team-hero-heading">Our capabilities</span>
          <div className="lg:w-96">
            <p className="text-white">
              VIDEO PRODUCTION AGENCY:
              <br />
              Specialising in bespoke, eye-catching video content that delivers
              more clicks, more sales, and more likes.{" "}
            </p>
          </div>
          <div className="flex gap-y-5 mt-10">
            {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
             </Button> */}
            <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              get a quote
            </Button>
          </div>
        </div>
        {/* ------------ Right Side Hero Section --------------- */}
        <div className="relative">
          <ServivePageVideo />
        </div>
      </div>
      <div className="flex items-center lg:flex-row flex-col  mx-auto max-w-7xl lg:px-32 px-3 lg:py-16 py-10">
        {/* ------------ Right Side Hero Section --------------- */}
        <div className="relative">
          <ServivePageVideo />
        </div>
        <div className="flex flex-col gap-y-3 pl-6">
          <span className="team-hero-heading">video cost</span>
          <div className="lg:w-96">
            <p className="text-white">
              VIDEO PRODUCTION COSTS:
              <br />
              Explore our video production costs page to gain a clear
              understanding of investment options tailored to your creative
              vision and project needs.
            </p>
          </div>
          <div className="flex gap-y-5 mt-10">
            {/* <Button className="px-8 py-2.5 mr-3 text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-400 border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              choice your plan
             </Button> */}
            <Button className="px-8 py-2.5 text-sm font-semibold text-gray-900 bg-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
              video production costs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
