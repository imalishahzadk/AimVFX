import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ServiceRateDesc = ({ descriptions }) => {
  return (
    <div className="rate-desc lg:flex-nowrap flex-wrap gap-6 text-[16px]">
      {descriptions.map((description, index) => (
        <div key={index} className="rate-desc-list">
          {description.map((item, i) => (
            <li key={i}>
              <span className="mt-1.5">
                <IoCheckmarkCircleOutline
                  style={{ fontSize: "16px", marginRight: "4px" }}
                />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceRateDesc;
