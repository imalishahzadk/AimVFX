import React, { useState } from "react";
import CareersHero from "./CareersHero";
import Persntage from "../Persentage/Persentage";
import CareersCards from "./CareersCards";
import CareersCards2 from "./CareersCards2";
import FooterForm from "../Footer/Footer";
import SucessStories from "../SucessSroeries/SucessStories";
import PopupForDate from "../PopUpForDate/PopupForDate";
import StoryPage from "../SotryPage/StoryPage";
import FooterWithLetsTalk from "../Footer/FooterWithLetsTalk";

const Careers = () => {
  //  'main div of Careers component all component rendered in '

  return (
    <>
      <div className="solution-page text-white">
        <CareersHero />
        <Persntage />
        <CareersCards />
        <CareersCards2 />
        <FooterWithLetsTalk/>
      </div>
    </>
  );
};

export default Careers;
// <ControlPanel />
