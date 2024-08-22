import React from "react";
import Camada from "../../assets/images/Camada_3.png";
import Camada4 from "../../assets/images/Camada_4.png";
import Camada2 from "../../assets/images/Camada_2.png";
import Line from "../../assets/images/Line 3.png";
const Marketing = () => {
  return (
    <div className="grid grid-cols-3 px-20 py-28 gap-4">
      <div>
        <div className="flex items-center">
          <img src={Camada} alt="" />
          <span className="w-5 h-3 rounded-full bg-[#56BEC2]"></span>

          <span>
            <img src={Line} alt="" />
          </span>
          <span className="w-5 h-3 rounded-full bg-[#56BEC2] "></span>
        </div>
        <div className="pr-10">
          <h2 className="text-[40px] text-[#56BEC2] font-[500] py-6 font-tek">
            Offload your <br /> assets to us
          </h2>
          <p className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
            ex, accusamus accusantium voluptatibus
          </p>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <img src={Camada4} alt="" />
          <span className="w-5 h-3 rounded-full bg-[#56BEC2]"></span>

          <span>
            <img src={Line} alt="" />
          </span>
          <span className="w-5 h-3 rounded-full bg-[#56BEC2]"></span>
        </div>
        <div className="pr-10">
          <h2 className="text-[40px] text-[#56BEC2] font-[500] py-6 font-tek">
            Get your first edit in 1-2 business days
          </h2>
          <p className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
            ex, accusamus accusantium voluptatibus
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={Camada2} alt="" />
        </div>
        <div>
          <h2 className="text-[40px] text-[#56BEC2] font-[500] py-6 font-tek">
            Make it perfect with unlimited revisions
          </h2>
          <p className="text-[#fff]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit id
            ex, accusamus accusantium voluptatibus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
