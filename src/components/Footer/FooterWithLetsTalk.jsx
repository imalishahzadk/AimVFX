import React from "react";
import footerbg from "../../assets/images/footer-bg.png";
import Footer from "./Footer";
import LetsTalk from "../Team Page/LetsTalk";
const FooterWithLetsTalk = () => {
  return (
    <div className="relative pt-40">
      <div className="absolute bottom-0 -z-50 flex items-center justify-center ">
        <img src={footerbg} alt="bg" className="object-cover object-center" />
      </div>
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default FooterWithLetsTalk;
