import React from "react";
import DateConsulation from "../DateConsulation/DateConsulation";
import arrow11 from "../../assets/images/arrow11.png";
import ConsultationImage from "./ConsultationImage";
import HomeTestimoal from "../HomeTestimonals/HomeTestimonals";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FooterForm from "../Footer/Footer";
import FooterWithForm from "../Footer/FooterWithForm";
const BookConsulation = () => {
  return (
    <div className="solution-page pt-28 text-white">
      <div className="2xl:relative">
        <DateConsulation />
        <img
          src={arrow11}
          alt=""
          className="2xl:block hidden absolute top-0 right-10 -z-10"
        />
      </div>
      <div>
        <ConsultationImage />
      </div>
      <div className="2xl:max-w-7xl mx-auto flex flex-col gap-y-32 items-center justify-center py-28 ">
        <div className="flex flex-col items-center justify-center">
          <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
            Testimonals
          </Heading>
          <p className="text-sm text-white  text-center">
            A Collection of Client Testimonials That Speak Volumes.
          </p>
        </div>
        <div className="pt-8 pb-10 lg:px-0 px-3">
          <HomeTestimoal />
        </div>
        <Button className="uppercase text-white border border-[#2EABAF] px-8 py-3 rounded-full">
          Watch More
        </Button>
      </div>
      <FooterWithForm/>
    </div>
  );
};

export default BookConsulation;
