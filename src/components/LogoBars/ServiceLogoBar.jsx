import React from "react";
import logoBar1 from "../../assets/LOGOS BAR - manylogo (1).png";
import logoBar2 from "../../assets/LOGOS BAR - manylogo.png";

const ServiceLogoBar = () => {
  return (
    <div className="logo-bar">
      <div className="logo-container">
        <img src={logoBar1} alt="Logo Bar 1" className="logo-image" />
        <img src={logoBar2} alt="Logo Bar 2" className="logo-image" />
      </div>
    </div>
  );
};

export default ServiceLogoBar;
