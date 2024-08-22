import React, { useState, useEffect } from "react";
import client from "../../sanity";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-sm font-semibold">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-sm py-2 px-6 bg-[#0a1a28] hover:bg-[#0a1a28ce] rounded-full"
      >
        {faq.question}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-2 px-4 py-2 bg-[#0a1a28] rounded-full">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [heroSectionData, setHeroSectionData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "heroSection"][0]`)
      .then((data) => setHeroSectionData(data));
  }, []);

  if (!heroSectionData) return <div>Loading...</div>;

  const faqData = [
    {
      question: heroSectionData.faqQ1,
      answer: heroSectionData.faqA1,
    },
    {
      question: heroSectionData.faqQ2,
      answer: heroSectionData.faqA2,
    },
    {
      question: heroSectionData.faqQ3,
      answer: heroSectionData.faqA3,
    },
    {
      question: heroSectionData.faqQ4,
      answer: heroSectionData.faqA4,
    },
    {
      question: heroSectionData.faqQ5,
      answer: heroSectionData.faqA5,
    },
    {
      question: heroSectionData.faqQ6,
      answer: heroSectionData.faqA6,
    },
  ];
  return (
    <div className="faq text-white py-52 md:py-20 px-4 md:px-10">
      <div className="text-center font-tek text-3xl md:text-5xl font-normal mb-8 md:mb-12">
        {heroSectionData.faqHead}
      </div>
      <div className="flex flex-wrap justify-center mx-auto max-w-4xl">
        {faqData.map((faq, index) => (
          <div key={index} className="w-full md:w-1/2 lg:p-4 p-2">
            <FaqItem faq={faq} />
          </div>
        ))}
      </div>
      <div className="flex  items-center justify-center gap-4 md:gap-x-4 mt-8 md:mt-12">
        <Link to="/pricing">
          <Button className="lg:px-10 px-8 py-2.5 text-sm font-semibold text-black bg-white hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Pricing
          </Button>
        </Link>
        <Button className="lg:px-10 px-8 py-2.5 text-sm font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
          Book a call
        </Button>
      </div>
    </div>
  );
};

export default FaqSection;
