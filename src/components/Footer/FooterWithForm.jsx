import React from "react";
import footerbg from "../../assets/images/footer-bg.png";
import FooterForm from "./FooterForm";
import Footer from "./Footer";
const FooterWithForm = () => {
  return (
    <div className="relative pt-40">
      <div className="absolute bottom-0 -z-50 flex items-center justify-center ">
        <img src={footerbg} alt="bg" className="object-cover object-center" />
      </div>

      <FooterForm/>
      <Footer/>
    </div>
  );
};

export default FooterWithForm;
