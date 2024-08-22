import React from "react";
import Answer from "./Answer";
import Button from "../Button/Button";

const Question = () => {
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
    {
      id: 6,
      question: "How will the relationship between ?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 7,
      question: "What is AiM Video FX?",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
    {
      id: 8,
      question:
        "How will the relationship between the marketplace and the partner be formalized?",
      row: "row-span-2",
      answer:
        "You should ensure that your services are safe and compliant with all applicable regulations and standards. You should also provide clear warnings and instructions, and be prepared to address any product liability issues that may arise.",
    },
  ];

  return (
    <div className="promotional-section text-[#fff] py-8 sm:py-16 lg:py-28">
      <h1 className="px-4 sm:px-6 lg:px-10 font-tek font-normal uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center py-8">
        Frequently Asked Questions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {Que.map((q) => {
          const { id } = q;
          return <Answer key={id} {...q} />;
        })}
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-6 justify-center pb-20 pt-8 sm:pt-12 lg:pt-16">
        <Button className="mb-4 sm:mb-0 px-6 py-2 text-sm font-semibold text-[#000] bg-[#fff] rounded-full hover:bg-gray-200 hover:text-[#000] focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          Choose A Plan
        </Button>
        <Button className="px-6 py-2 text-sm font-semibold text-white bg-transparent border-2 border-[#fff] rounded-full hover:bg-cyan-600 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          Book A Call
        </Button>
      </div>
    </div>
  );
};

export default Question;
