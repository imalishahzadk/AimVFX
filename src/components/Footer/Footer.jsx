import React, { useState, useEffect } from "react";
import "./footer.css"
import client from "../../sanity";
import logo from "../../assets/LOGO ORIGINAL GREEN.png";
import logoImg from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 7.png";
import clutch from "../../assets/Group 236.png";
import trust from "../../assets/Group.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import bg1 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 1 (1).png";
const Footer = () => {

  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "footerSection"][0]`)
      .then((data) => setFooterData(data));
  }, []);

  if (!footerData) return <div>Loading...</div>;


  return (
    <>
      <footer className=" text-white pt-40 lg:pb-52 pb-10 relative overflow-hidden">
        <div className="absolute top-[45%] blur">
          <img
            src={bg1}
            alt="bg"
            className="footer-bg-image hidden lg:block md:block"
          />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 items-center pt-20 mx-auto max-w-6xl ">
          {/* Logo and Rating Section */}
          <div className="flex flex-col  items-center lg:items-start justify-center gap-y-2 lg:border-r border-[#2EABAF] lg:px-10">
            <div className="flex items-center">
              <img className="block  h-16 w-auto" src={logoImg} alt="Logo" />
              <img className="block h-7 w-auto -ml-2.5" src={logo} alt="Logo" />
            </div>
            <div className="flex items-center gap-2.5 ml-2">
              <img src={trust} alt="Trustpilot" />
              <img src={clutch} alt="Clutch" />
            </div>
            <Button
              onClick={() => setIsOpen(true)}
              className=" mt-4 px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase"
            >
              book a call
            </Button>
          </div>

          <div className=" lg:border-r border-[#2EABAF] px-10 py-5">
            <div className="flex gap-y-2 flex-col  items-center">
              <Link to="/" className="mb-2 hover:text-gray-300">
                {footerData.qlink1}
              </Link>
              <Link to="/pricing" className="mb-2 hover:text-gray-300">
                {footerData.qlink2}
              </Link>
              <Link to="/solutions" className="mb-2 hover:text-gray-300">
                {footerData.qlink3}
              </Link>
              <Link to="/services" className="hover:text-gray-300">
                {footerData.qlink4}
              </Link>
            </div>
          </div>

          <div className=" lg:border-r border-[#2EABAF] px-10 py-5">
            {/* Column 1 */}
            <div className="flex gap-y-2 flex-col items-center">
              <Link to="/" className="mb-2 hover:text-gray-300">
                {footerData.qlink1}
              </Link>
              <Link to="/pricing" className="mb-2 hover:text-gray-300">
                {footerData.qlink2}
              </Link>
              <Link to="/solutions" className="mb-2 hover:text-gray-300">
                {footerData.qlink3}
              </Link>
              <Link to="/services" className="hover:text-gray-300">
                {footerData.qlink4}
              </Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end lg:gap-y-2 gap-y-1">
            <h3 className="font-semibold mb-4"> {footerData.socialHead}</h3>

            <div className="flex gap-x-2 ">
              <FaFacebookF className="bg-[#2EABAF] text-black p-2 w-8 h-8 rounded-full hover:bg-[#1D9BF0] hover:text-white transition-colors duration-300 cursor-pointer" />
              <FaTwitter className="bg-[#2EABAF] text-black p-2 w-8 h-8 rounded-full hover:bg-[#1D9BF0] hover:text-white transition-colors duration-300 cursor-pointer" />
              <FaLinkedinIn className="bg-[#2EABAF] text-black p-2 w-8 h-8 rounded-full hover:bg-[#0077B5] hover:text-white transition-colors duration-300 cursor-pointer" />
              <FaYoutube className="bg-[#2EABAF] text-black p-2 w-8 h-8 rounded-full hover:bg-[#FF0000] hover:text-white transition-colors duration-300 cursor-pointer" />
              <FaInstagram className="bg-[#2EABAF] text-black p-2 w-8 h-8 rounded-full hover:bg-[#C13584] hover:text-white transition-colors duration-300 cursor-pointer" />
            </div>

            <Link to="/contact-us">
              <button className="mt-4 bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] rounded-full py-2 px-6 hover:from-[#13A6B2] hover:to-[#74D1DE] transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-gray-800 pt-4 flex items-center justify-center mx-auto max-w-5xl">
          {footerData.socialDiv}
        </div>
      </footer>
    </>
  );
};

export default Footer;
