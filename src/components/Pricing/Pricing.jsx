import React from "react";
import PRICING from "../../assets/images/PRICING.png";
import { TagIcon } from "@heroicons/react/24/outline";
import GuaranteCard from "./GuaranteCard";
import PageTestimonals from "../PageTestimonals/PageTestimals";
import Button from "../Button/Button";
import HomeTestimoal from "../HomeTestimonals/HomeTestimonals";
import Heading from "../Heading/Heading";
import FooterPricing from "./FooterPricing";
import PricingPortfolio from "./PricingPortfolio";
import PopUpForm from "../PopUpForm/PopUpForm";
import PricingArrow from "../../assets/images/PricingArrow.png";
import CardWorks from "../HowitWorksPage33/CardWorks";
const Pricing = () => {
  return (
    <div className="solution-page pt-28 text-white">
      <div className=" lg:block hidden relative ">
        <img src={PricingArrow} alt="" className="absolute right-0 -z-50" />
        <div className="max-w-7xl mx-auto absolute top-64 left-72 -z-10  overflow-hidden">
          <img src={PRICING} alt="" className="object-cover " />
        </div>
      </div>
      {/* ---------- Cards Works and Form   Section -----------*/}

      <CardWorks />

      {/* ---------- GuaranteCard  Section -----------*/}

      <GuaranteCard />

      {/* ---------- Testimonals Section -----------*/}
      <div className="2xl:max-w-7xl mx-auto flex flex-col gap-y-7 items-center justify-center py-20 ">
        <div className="flex flex-col items-center justify-center">
          <Heading className="text-[60px] font-tek text-white uppercase leading-tight">
            Testimonals
          </Heading>
          <p className="text-sm text-white  text-center">
            A Collection of Client Testimonials That Speak Volumes.
          </p>
        </div>
        <div className="py-8 lg:px-0 px-3">
          <HomeTestimoal />
        </div>
      </div>
      <FooterPricing />
    </div>
  );
};

export default Pricing;
