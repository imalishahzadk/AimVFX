import React, { useState } from "react";
import Article from "../../assets/images/article 1.png";
import article from "../../assets/images/article.png";
import teenyicons from "../../assets/images/teenyicons_book-solid.png";
import Vector from "../../assets/images/Vector.png";
import Group from "../../assets/images/Group.png";
import material from "../../assets/images/material-symbols_travel-rounded.png";
import Rectangle7535 from "../../assets/images/Rectangle 7535.png";
import Button from "../Button/Button";
import Artical from "../Artical/Artical";
import Design3d from "../Design3d/Design3d";
import Future from "../Future/Future";
import Future2 from "../Future/Future2";
import FooterForm from "../Footer/Footer";
import PopUp from "../PopUp/PopUp";
import PopupForDate from "../PopUpForDate/PopupForDate";
import FooterWithForm from "../Footer/FooterWithForm";

const Blog = () => {
  const [open, setOpen] = useState(false);
  const logo = [
    {
      img: Article,
      name: "latest articles",
    },
    {
      img: article,
      name: "creative-as-a-service",
    },
    {
      img: teenyicons,
      name: "smart bets",
    },
    {
      img: Vector,
      name: "digital advertising",
    },
    {
      img: Article,
      name: "video marketing",
    },
    {
      img: material,
      name: "brand design",
    },
    {
      img: Group,
      name: "AR & 3D design",
    },
  ];
  return (
    <div className="solution-page pt-36">
      <div className="lg:px-48 2xl:px-48 xl:px-10 md:px-48  px-6">
        <div className="text-center text-[#fff] pb-5 ">
          <h1 className="text-5xl lg:text-8xl font-normal font-tek uppercase leading-tight">
            creative performance
          </h1>
          <p className="text-xl font-tek font-light max-w-xl mx-auto">
            Creative ides, practical tips and insider info...the AIM-FX blog
            helps your team get great design done at scale.
          </p>
        </div>
        <div className="grid xl:grid-cols-7 lg:grid-cols-3 grid-cols-2 pt-12 gap-4 ">
          {logo.map((item, ind) => {
            return (
              <div
                className="flex flex-col px-5 py-4 rounded-3xl border-2  border-[#fff] items-center"
                key={ind}
              >
                <img className="w-12 h-12 object-cover" src={item.img} alt="" />
                <h2 className="font-normal text-3xl uppercase text-[#fff] font-tek pt-3 text-center">
                  {item.name}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" relative top-28 max-w-6xl mx-auto flex justify-center pt-6 px-4">
        <div className="max-w-xl absolute top-[17%] text-white  left-[8%] z-20">
          <div className="pb-4 text-3xl font-normal">
            <span>Featured Article </span>
            <span className="text-[#00ffff] ">Brand Design</span>
          </div>
          <h1 className=" lg:text-4xl text-2xl  font-medium uppercase">
            5 modern rebranding examples with serious wow factor
          </h1>
        </div>
        <img className="z-10" src={Rectangle7535} alt="" />
      </div>

      <div className=" promotional-section">
        <div className="px-6 max-w-7xl mx-auto  grid lg:grid-cols-2 py-24 gap-12">
          <div className="">
            <h1 className="text-5xl lg:text-7xl uppercase text-white ">
              subscribe now
            </h1>
            <p className="font-light text-xl  text-[#FFF]">
              Join our community of 30,000+ who receive the best in design and
              video development content weekly.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col gap-y-6 gap-x-4	lg:items-center	 items-center justify-center ">
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Your base Email"
                className="px-3 py-2.5 text-sm  w-full rounded-full text-gray-700 bg-[#D4E7F5] "
              />
            </div>
            <div className="w-full">
              <Button className="px-4 py-2.5 text-sm font-semibold text-[#100e0e] bg-[#fff] rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                SEE OPENNINGS
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Artical />
      <div className="pt-16">
        <Design3d />
      </div>
      <Future2 />
      <div className="pb-16">
        <Design3d />
      </div>
      <div className="py-16">
        <Design3d />
      </div>
      <div className="py-20">
        <Future />
      </div>

      <FooterWithForm/>
    </div>
  );
};

export default Blog;
