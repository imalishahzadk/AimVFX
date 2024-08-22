import React, { useState } from "react";
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

function FooterPricing() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companySize: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submit logic here, like sending data to an API
    console.log(formData);
    alert("Form submitted. Check the console for form data.");
  };

  return (
    <>
      <footer className=" text-white pt-40 pb-10">
        <div className="promotional-section">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-x-24 lg:px-32 px-8">
            <div className="mb-6 flex flex-col items-center gap-y-1.5">
              <h2 className="text-[65px] font-tek font-normal leading-tight">
                STILL HAVE QUESTIONS?
              </h2>
              <p className="lg:w-96 w-full text-md mb-2">
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide help. Have
                some big idea or brand to develop and need help? Then reach out
                we'd love to hear about your project and provide help.
              </p>
              <p className="lg:w-96 w-full text-md">
                Have some big idea or brand to develop and need help? Then reach
                out we'd love to hear about your project and provide helpHave
                some big idea or brand to develop and need help? Then reach out
                we'd love to hear about your project and provide help
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col flex-wrap gap-y-6 w-full pt-10"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleInputChange}
                value={formData.firstName}
                className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleInputChange}
                value={formData.lastName}
                className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                value={formData.email}
                className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleInputChange}
                value={formData.phone}
                className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
              />
              <select
                name="companySize"
                onChange={handleInputChange}
                value={formData.companySize}
                className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5]"
              >
                <option value="">Company Size</option>
                <option value="small">1-10</option>
                <option value="medium">11-50</option>
                <option value="large">51-200</option>
                <option value="enterprise">201+</option>
              </select>
              <button
                type="submit"
                className="bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 px-4 mt-5 rounded-full"
              >
                BOOK A CALL
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-20 lg:px-40 gap-y-2">
          {/* Logo and Rating Section */}
          <div className="flex flex-col lg:items-start items-center lg:justify-center gap-y-2 lg:border-r lg:border-[#2EABAF] px-10">
            <div className="flex items-center">
              <img className="block  h-16 w-auto" src={logoImg} alt="Logo" />
              <img className="block h-7 w-auto -ml-2.5" src={logo} alt="Logo" />
            </div>
            <div className="flex items-center gap-2.5 ml-2">
              <img src={trust} alt="Trustpilot" />
              <img src={clutch} alt="Clutch" />
            </div>
            <Button
              className=" mt-4 px-8 py-2.5 text-sm font-semibold text-white bg-transparent hover:border-cyan-500 border-2 border-white rounded-full focus:outline-none focus:border-white focus:shadow-outline-gray active:border-white active:bg-gray-700 transition duration-150 ease-in-out uppercase"
            >
              book a call
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-10 justify-center lg:border-r  lg:text-start text-center border-[#2EABAF] px-10 py-5">
            {/* Column 1 */}
            <div className="flex gap-y-2 flex-col ">
              <Link to="/" className="mb-2 hover:text-gray-300">
                HOME
              </Link>
              <Link to="/pricing" className="mb-2 hover:text-gray-300">
                PRICING
              </Link>
              <Link to="/solution" className="mb-2 hover:text-gray-300">
                SOLUTION
              </Link>
              <Link to="/services" className="hover:text-gray-300">
                SERVICES
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 justify-center lg:border-r lg:text-start text-center lg:border-[#2EABAF] px-10 py-5">
            {/* Column 1 */}
            <div className="flex gap-y-2 flex-col">
              <Link to="/" className="mb-2 hover:text-gray-300">
                HOME
              </Link>
              <Link to="/pricing" className="mb-2 hover:text-gray-300">
                PRICING
              </Link>
              <Link to="/solution" className="mb-2 hover:text-gray-300">
                SOLUTION
              </Link>
              <Link to="/services" className="hover:text-gray-300">
                SERVICES
              </Link>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center lg:items-end gap-y-2">
            <h3 className="font-semibold mb-4">SOCIALIZE WITH AIM FX</h3>

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

        <div className="text-center mt-10 border-t border-gray-700 pt-4">
          2023 © AiM FX - ALL RIGHTS RESERVED
        </div>
      </footer>
    </>
  );
}

export default FooterPricing;
