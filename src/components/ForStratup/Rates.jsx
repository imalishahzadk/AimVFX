import React from "react";
import Rectangle130 from "../../assets/images/Rectangle 130.png";
import Rectangle7583 from "../../assets/images/Rectangle 7583.png";
import Design3d from "../Design3d/Design3d";
import Promotionalimage from "../PromotionalVideo/Promotionalimage";
import Rateimage from "./RateImages";

const Rates = () => {
  return (
    <div className="promotional-section">
      <div className="sm:px-28 lg:px-50 lg:pt-28 grid lg:grid-cols-2 text-[#fff]  gap-5">
        <div className="relative">
          <img className="absolute" src="" alt="" />
          <img src={Rectangle130} alt="" />
        </div>
        <div className="text-[#fff]">
          <h2 className="text-[50px] font-tek">
            Hands down the best way to create consistent video content!
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus fusce sit amet cursus
            dignissim viverra aliquam orci. Elit viverra nunc ut mauris amet
            amet egestas tortor. Eros.
          </p>
          <div className="flex gap-2 pt-3">
            <span>
              <img src={Rectangle7583} alt="" />
            </span>
            <span>
              <span className="italic font-[700]">Dean Collins</span>
              <p className="font-[300] text-[#00FFFF] text-[18px]">
                Director of Brand Design
              </p>
            </span>
          </div>
        </div>
        <div className="pt-28">
          <h2 className="text-[50px] font-semibold leading-tight">EDITING SERVICES FOR BUSINESS OWNERS</h2>
        </div>
      </div>
      <Rateimage />
    </div>
  );
};

export default Rates;
