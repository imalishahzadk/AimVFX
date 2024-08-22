import React, { useState } from "react";
import Rectangle7583 from "../../assets/images/Rectangle 7583.png";
import Rectangle7536 from "../../assets/images/Rectangle 7536.png";
import facebook from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";
import share from "../../assets/images/share.png";
import Rectangle7535 from "../../assets/images/Rectangle 7535.png";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import holographicBlog from "../../assets/images/holographicBlog.png";
import Arrow from "../../assets/images/Arrow.png";
import Button from "../Button/Button";
import holographic from "../../assets/images/holographic_fluid.png";
import Promotionalimage from "../PromotionalVideo/Promotionalimage";
import FooterForm from "../Footer/Footer";
import FooterWithForm from "../Footer/FooterWithForm";

const BlogPost = () => {
  const data = Array(5).fill({
    btn: `Oyster's Rerband`,
  });



  const Que = [
    {
      id: 1,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 2,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 3,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 4,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 5,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
  ];
  
  const [show, setShow] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className="solution-page  pt-32">
      <div className="flex justify-center py-8 ">
        <div>
          <div className="flex gap-x-2 items-center py-4 text-[#fff] text-[15px] pl-16">
            <span>Blog</span>

            <ChevronRightIcon className="h-4 w-4 text-[#15B8C7]" />

            <span className="text-[#15B8C7] "> Brand Design</span>
          </div>
          <div className="">
            <img
              src={Rectangle7535}
              alt=""
              className=" object-cover w-[1500px] h-[530px] rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="2xl:pl-80 2xl:pr-40 md:px-10 2xl:px-0">
        <div className=" grid lg:grid-cols-8 gap-x-10">
          <div className="p-5 lg:px-0 px-6  lg:col-span-5 text-[#fff]">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center pb-12">
                <img src={Rectangle7583} alt="" />
                <span>
                  <h4 className="text-[16px] italic font-[700] ">
                    Dean Collins
                  </h4>
                  <p className="text-[#00FFFF] font-[300]">
                    Director of Brand Design
                  </p>
                </span>
              </div>
              <div className="">
                <h4 className="text-[16px] italic font-[700] ">
                  Published:
                  <span className="text-[#00FFFF] font-[300]">
                    Feb 12, 2024
                  </span>
                </h4>
              </div>
            </div>
            <div className="pt-2 pb-12 border-b-[1px] border-[#D9D9D9]">
              <strong>TL;DR:</strong>
              <p className="text-xl font-normal">
                The prospect of rebranding can strike fear into even the most
                seasoned creative leader’s heart. But the return on investment
                is well worth the hard work. Learn from five successful, modern
                rebrands and get inspired to climb your own visual identity
                mountain.
              </p>
            </div>
            <div className="pt-14">
              <h1 className="text-xl font-bold pb-2">
                Know how to make a Creative Director shudder with a single word?
              </h1>
              <p className="py-6">“Rebranding.”</p>
              <p className="text-xl font-normal">
                Rebranding can be a herculean task. For smaller businesses, it
                can seem like there are never enough resources to get everything
                done. But at larger organizations, there are so many moving
                parts and stakeholders that wrapping your head around the
                process can be dizzying. No matter what, rebranding can be
                scary. Your brand is the core of your organization’s
                identity—what customers know, and what you’ve built all your
                success on so far. The pressure is high to deliver an incredible
                identity that will elevate every part of your business. Let’s
                look at five organizations that were up to the challenge. These
                orgs fearlessly reinvented themselves with fresh, powerful
                brands. Here are the organizations we’ll cover:
              </p>
            </div>
            <div className="py-14 grid md:grid-cols-2 gap-x-20 gap-y-8">
              {data.map((item, ind) => {
                return (
                  <div key={ind} className=" cursor-pointer">
                    <div className=" flex flex-1 justify-between px-5 py-2.5   rounded-full bg-slate-800  border-[#15B8C7] border-[1px] font-bold  text-[#E4E4E4]  hover:bg-gray-700">
                      <button>{item.btn}</button>
                      <span>
                        <img src={Arrow} alt="" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="pb-28">
              <h2 className="font-medium lg:text-[45px] text-3xl font-tek max-w-xl uppercase">
                5 Successful Rebranding Examples (and What to Learn From Them)
              </h2>
              <p className="text-xl font-normal mt-6">
                Lorem ipsum dolor sit amet consectetur. Parturient pharetra
                mattis ridiculus at eu scelerisque consectetur tellus risus. Vel
                at molestie pharetra ut ultrices nisl sed interdum dolor.
                Interdum pharetra id quis fames odio egestas. Mauris sed eget ac
                blandit tempus nunc pellentesque bibendum. Sed ultrices netus
                lorem sed a feugiat ac arcu risus. Pulvinar enim nibh feugiat
                risus rhoncus ac nullam.
              </p>
              <p className="pt-3 text-xl font-normal">
                Est eu at pharetra dolor. Ullamcorper tellus viverra non augue
                sit id sagittis sodales suspendisse. Netus ullamcorper lectus
                sapien convallis risus. Eget ut nisi mauris iaculis. Felis neque
                etiam enim sed. Ornare non pulvinar sodales pretium a amet.
                Sapien a mi diam leo porta integer. Mattis eget a fringilla
                maecenas. Vel tempor turpis quisque elementum in purus. Purus
                purus arcu venenatis cras malesuada amet blandit nec. Phasellus
                vestibulum eu id sit malesuada faucibus. Vulputate semper diam
                urna eget cursus arcu porta massa. Ultrices amet mollis volutpat
                maecenas eleifend tincidunt tellus urna quam. Risus suspendisse
                enim viverra ornare. Vitae dolor bibendum justo augue eu lectus.
                Id mi enim risus quam maecenas turpis.
              </p>
              <p className="pt-3 text-xl font-normal">
                Justo sem sed cursus arcu aliquam. Laoreet est eget vestibulum
                sollicitudin id urna lacinia metus. Feugiat egestas iaculis
                elementum donec augue dolor. At ultrices dignissim nisi blandit.
                Nulla viverra in eget ullamcorper purus pretium dui sit dui.
                Eget ante quis convallis adipiscing purus. Tincidunt egestas
                egestas ipsum in eget consectetur sit. Dictum eleifend arcu
                lectus sapien mi pretium ut. At dolor fermentum magna at rhoncus
                arcu. Nisl est nunc id ac. Risus at libero sed sed orci turpis
                etiam. At magna tincidunt nec nulla. Auctor enim nec aliquam et
                auctor. Nulla praesent sed convallis porta convallis volutpat
                sapien. Ultricies aliquet viverra eu ipsum adipiscing ultrices
                sit nisi nisl. Posuere tellus nascetur augue tincidunt urna sed
                purus. Augue eget integer morbi eget. Tortor libero fusce eget
                id pellentesque fames sapien purus. In venenatis lorem in
                scelerisque mattis enim ac aliquet quis. Condimentum vel tortor
                facilisi fermentum fermentum posuere fermentum. Sed eget
                accumsan sit nam dictumst. Est auctor at sed ullamcorper quis
                massa non dolor. Sit sed volutpat lacus quisque. Magnis
                dignissim massa volutpat dui a risus at enim. Nisi nulla
                accumsan non enim turpis volutpat quisque elementum bibendum.
              </p>
            </div>
            <div className=" md:p-11 py-11 px-3  rounded-3xl bg-[#2EABAF] relative ">
              <div className="flex flex-col justify-center">
                <h1 className="lg:text-8xl text-5xl  font-tek font-normal uppercase">
                  Lorem Ipsum
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur. Mauris arcu.</p>
                <div className=" flex items-center pt-4 gap-x-3">
                  <Button className="px-8 py-2.5 text-sm font-semibold text-white bg-transparent  hover:bg-cyan-600 border-2 border-[#fff] rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                    Book A Call
                  </Button>
                  <Button className="px-8 py-2.5 text-sm font-semibold text-[#273A5F] bg-[#fff] rounded-full hover:text-white  hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                    CHOOSE A PLAN
                  </Button>
                </div>
              </div>
              <div className="lg:block hidden absolute -top-24 right-0">
                <img src={holographic} alt="" />
              </div>
            </div>
            <div className="pt-10">
              <p className="pt-3 text-xl font-normal">
                Lorem ipsum dolor sit amet consectetur. Parturient pharetra
                mattis ridiculus at eu scelerisque consectetur tellus risus. Vel
                at molestie pharetra ut ultrices nisl sed interdum dolor.
                Interdum pharetra id quis fames odio egestas. Mauris sed eget ac
                blandit tempus nunc pellentesque bibendum. Sed ultrices netus
                lorem sed a feugiat ac arcu risus. Pulvinar enim nibh feugiat
                risus rhoncus ac nullam.
              </p>
              <p className="text-xl font-normal">
                Est eu at pharetra dolor. Ullamcorper tellus viverra non augue
                sit id sagittis sodales suspendisse. Netus ullamcorper lectus
                sapien convallis risus. Eget ut nisi mauris iaculis. Felis neque
                etiam enim sed. Ornare non pulvinar sodales pretium a amet.
                Sapien a mi diam leo porta integer. Mattis eget a fringilla
                maecenas. Vel tempor turpis quisque elementum in purus. Purus
                purus arcu venenatis cras malesuada amet blandit nec. Phasellus
                vestibulum eu id sit malesuada faucibus. Vulputate semper diam
                urna eget cursus arcu porta massa. Ultrices amet mollis volutpat
                maecenas eleifend tincidunt tellus urna quam. Risus suspendisse
                enim viverra ornare. Vitae dolor bibendum justo augue eu lectus.
                Id mi enim risus quam maecenas turpis.
              </p>
              <p className="pt-3 text-xl font-normal">
                Justo sem sed cursus arcu aliquam. Laoreet est eget vestibulum
                sollicitudin id urna lacinia metus. Feugiat egestas iaculis
                elementum donec augue dolor. At ultrices dignissim nisi blandit.
                Nulla viverra in eget ullamcorper purus pretium dui sit dui.
                Eget ante quis convallis adipiscing purus. Tincidunt egestas
                egestas ipsum in eget consectetur sit. Dictum eleifend arcu
                lectus sapien mi pretium ut. At dolor fermentum magna at rhoncus
                arcu. Nisl est nunc id ac. Risus at libero sed sed orci turpis
                etiam. At magna tincidunt nec nulla. Auctor enim nec aliquam et
                auctor. Nulla praesent sed convallis porta convallis volutpat
                sapien. Ultricies aliquet viverra eu ipsum adipiscing ultrices
                sit nisi nisl. Posuere tellus nascetur augue tincidunt urna sed
                purus. Augue eget integer morbi eget. Tortor libero fusce eget
                id pellentesque fames sapien purus. In venenatis lorem in
                scelerisque mattis enim ac aliquet quis. Condimentum vel tortor
                facilisi fermentum fermentum posuere fermentum. Sed eget
                accumsan sit nam dictumst. Est auctor at sed ullamcorper quis
                massa non dolor. Sit sed volutpat lacus quisque. Magnis
                dignissim massa volutpat dui a risus at enim. Nisi nulla
                accumsan non enim turpis volutpat quisque elementum bibendum.
              </p>
            </div>
            <div className="pt-10 pb-10">
              <img src={Rectangle7536} alt="" />
              <p className="text-sm font-tek font-normal py-1">
                Source: loremipsum.com
              </p>
            </div>
            <div className="pb-10">
              <h2 className="font-medium lg:text-[45px] text-3xl font-tek">
                Lorem ipsum dolor sit amet consectetur. Pulvinar elit eu ante
                vitae. In nunc est neque ac mi in feugiat erat.
              </h2>
              <p className="pt-3 text-xl font-normal">
                Lorem ipsum dolor sit amet consectetur. Parturient pharetra
                mattis ridiculus at eu scelerisque consectetur tellus risus. Vel
                at molestie pharetra ut ultrices nisl sed interdum dolor.
                Interdum pharetra id quis fames odio egestas. Mauris sed eget ac
                blandit tempus nunc pellentesque bibendum. Sed ultrices netus
                lorem sed a feugiat ac arcu risus. Pulvinar enim nibh feugiat
                risus rhoncus ac nullam.
              </p>
              <p className="pt-3 text-xl font-normal">
                Est eu at pharetra dolor. Ullamcorper tellus viverra non augue
                sit id sagittis sodales suspendisse. Netus ullamcorper lectus
                sapien convallis risus. Eget ut nisi mauris iaculis. Felis neque
                etiam enim sed. Ornare non pulvinar sodales pretium a amet.
                Sapien a mi diam leo porta integer. Mattis eget a fringilla
                maecenas. Vel tempor turpis quisque elementum in purus. Purus
                purus arcu venenatis cras malesuada amet blandit nec. Phasellus
                vestibulum eu id sit malesuada faucibus. Vulputate semper diam
                urna eget cursus arcu porta massa. Ultrices amet mollis volutpat
                maecenas eleifend tincidunt tellus urna quam. Risus suspendisse
                enim viverra ornare. Vitae dolor bibendum justo augue eu lectus.
                Id mi enim risus quam maecenas turpis.
              </p>
              <p className="pt-3 text-xl font-normal">
                Id mi enim risus quam maecenas turpis. Justo sem sed cursus arcu
                aliquam. Laoreet est eget vestibulum sollicitudin id urna
                lacinia metus. Feugiat egestas iaculis elementum donec augue
                dolor. At ultrices dignissim nisi blandit.
              </p>
              <p className="pt-3 text-xl font-normal">
                Justo sem sed cursus arcu aliquam. Laoreet est eget vestibulum
                sollicitudin id urna lacinia metus. Feugiat egestas iaculis
                elementum donec augue dolor. At ultrices dignissim nisi blandit.
                Nulla viverra in eget ullamcorper purus pretium dui sit dui.
                Eget ante quis convallis adipiscing purus. Tincidunt egestas
                egestas ipsum in eget consectetur sit. Dictum eleifend arcu
                lectus sapien mi pretium ut. At dolor fermentum magna at rhoncus
                arcu. Nisl est nunc id ac. Risus at libero sed sed orci turpis
                etiam. At magna tincidunt nec nulla. Auctor enim nec aliquam et
                auctor. Nulla praesent sed convallis porta convallis volutpat
                sapien. Ultricies aliquet viverra eu ipsum adipiscing ultrices
                sit nisi nisl. Posuere tellus nascetur augue tincidunt urna sed
                purus. Augue eget integer morbi eget. Tortor libero fusce eget
                id pellentesque fames sapien purus. In venenatis lorem in
                scelerisque mattis enim ac aliquet quis. Condimentum vel tortor
                facilisi fermentum fermentum posuere fermentum. Sed eget
                accumsan sit nam dictumst. Est auctor at sed ullamcorper quis
                massa non dolor. Sit sed volutpat lacus quisque. Magnis
                dignissim massa volutpat dui a risus at enim. Nisi nulla
                accumsan non enim turpis volutpat quisque elementum bibendum.
              </p>
            </div>
          </div>
          <div className="col-span-full sm:px-20 lg:px-0 px-6 lg:col-span-3 py-7">
            <div className=" p-10 text-[#fff] bg-[#12283d80] shadow-lg rounded-3xl border-t-[1px]">
              <h2 className="font-medium uppercase text-[45px]  font-tek">
                Table of Contents
              </h2>
              <div className="text-[#00FFFF] font-light font-tek flex flex-col gap-y-3 text-xl">
                <p>Oyster's rebrand</p>
                <p>Antler's rebrand</p>
                <p>Doodle Lab's rebrand</p>
                <p>Doodle Lab's rebrand</p>
              </div>
              <h2 className="font-medium uppercase text-[45px]  font-tek py-8">
                share content
              </h2>
              <div className="flex gap-6">
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
                <img src={share} alt="" />
              </div>
            </div>
            <div className="2xl:block hidden relative ">
              <img
                src={holographicBlog}
                alt=""
                className="absolute -right-24 top-8 -z-10"
              />
            </div>
            <div className="px-8 py-14 mt-6 text-[#fff] text-center bg-[#1c3c5a80] shadow-lg rounded-3xl border-t-2">
              <h2 className="font-medium uppercase text-[45px]  font-tek text-center  pb-3">
                need a hand for your rebrand?
              </h2>
              <p className="text-[#00FFFF] font-[300] pb-14">
                AIM-FX is here to help, let's chat!
              </p>
              <div className="py-11">
                <Button className="px-8 py-2.5 text-sm font-semibold text-[#fff] bg-[#15B8C7] rounded-full   hover:bg-[#00b3ff] focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                  CHOOSE A PLAN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-gradient-to-br from-[#15B8C7] to-[#0B1A28] rounded-[40px] py-14 px-3 lg:px-28">
            <div className="max-w-xl">
              <h2 className="lg:text-8xl text-5xl uppercase font-tek text-[#fff] font-[400] pb-12">
                rebrand faq
              </h2>
              <div className="flex flex-col justify-between gap-3">
                {Que.map((item, index) => (
                  <div key={index}>
                    <div
                      onClick={() => handleToggle(index)}
                      className="flex justify-between px-5 py-3 cursor-pointer rounded-full bg-slate-800 border-[#15B8C7] border-[1px] font-bold text-[#E4E4E4] hover:bg-gray-700"
                    >
                      <button>{item.question}</button>
                      <span>{expandedIndex === index ? "-" : "+"}</span>
                    </div>
                    {expandedIndex === index && (
                      <p className="p-2 border-t-2 rounded-3xl bg-slate-600">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="promotional-section lg:py-28 py-48 relative bottom-20 z-[-1]">
          <div className="flex flex-wrap lg:flex-nowrap gap-y-10 gap-x-28 max-w-7xl px-7 mx-auto">
            <div className=" max-w-xl">
              <span className="lg:text-8xl text-5xl  uppercase font-tek text-[#fff] font-[400] ">
                dont miss out
              </span>
              <p className="font-[300] text-[20px] text-[#FFF]">
                Join our community of 30,000+ who receive the best in design and
                video development content weekly.
              </p>
            </div>
            <div className="w-full  flex	items-center gap-x-3 lg:gap-x-6 	justify-end ">
              <div className="flex-2 w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Your best e-mail"
                  className="px-4 py-2.5 text-sm w-full placeholder:text-[#1666B0] rounded-full text-gray-700 bg-[#D4E7F5] "
                />
              </div>
              <div className="">
                <Button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#15B8C7]  rounded-full hover:text-white hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
                  subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Promotionalimage />
      <FooterWithForm />
    </div>
  );
};

export default BlogPost;
