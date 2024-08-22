import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import trademark14021431 from "../../assets/images/trademark_14021431 1.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import FooterForm from "../Footer/Footer";
import DateConsulation from "../DateConsulation/DateConsulation";
import footerbg from "../../assets/images/footer-bg.png";
import bg1 from "../../assets/holographic_fluid_drop_shapes_illustration_02 copy 5 (1).png";
import bg2 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 2.png";
import bg3 from "../../assets/holographic_fluid_drop_shapes_illustration_02 copy 2.png";
import bg4 from "../../assets/1.png";
import BackgroundText from "../BackgroundText/BackgroundText";
import footerbg2 from "../../assets/127_arrow_icon_logo_with_3d_modern_style copy 1 (1).png";
const ContactUs = () => {
  return (
    <div className="contact-us-page pt-40 text-[#fff] relative">
      <div className="w-full flex items-center justify-center absolute top-0">
        <BackgroundText className="lg:text-[520px] text-[120px] uppercase font-tek contact-us-text overflow-hidden -z-[100]">
          <span>Contact</span>
        </BackgroundText>
      </div>
      <div className="absolute top-[17%]  left-0 -z-50">
        <img src={bg2} alt="bg1" className="max-w-sm" />
      </div>

      <div className="absolute top-0  right-0 -z-50 ">
        <img src={bg4} alt="bg1" className="max-w-7xl" />
      </div>

      <div className="relative">
        <div className="absolute -top-16  left-[15%] -z-50">
          <img src={bg1} alt="bg1" className="max-w-md" />
        </div>

        <div className="absolute bottom-16  right-[12%] -z-50">
          <img src={bg1} alt="bg1" className="max-w-xl" />
        </div>

        <div className="absolute -bottom-[46%] -z-50 flex items-center justify-center w-full ">
          <img src={bg3} alt="bg1" className="max-w-6xl blur-lg  " />
        </div>

        <div className="px-10 max-w-4xl rounded-3xl mx-auto pt-14 pb-20 flex items-center justify-center flex-col w-full contact-us-from relative">
          <h1 className="uppercase  font-tek lg:text-[80px] text-[60px] ">
            contact us
          </h1>

          <div className="py-3 grid grid-cols-2 lg:grid-cols-4 ">
            <div className="">
              <h2 className="py-6 text-base font-semibold">EMAIL</h2>
              <p className="font-light text-base">hello@aimfx.com</p>
            </div>
            <div>
              <h2 className="py-6 text-base font-semibold">PHONE</h2>
              <p className="font-light text-base">00 000 000</p>
            </div>
            <div>
              <h2 className="py-6 text-base font-semibold">MESSENGER</h2>
              <p className="font-light text-base uppercase">@aimfx.com</p>
            </div>
            <div>
              <h2 className="py-6 text-base font-semibold">
                SOCIALIZE WITH AIM FX
              </h2>

              <div className="flex gap-x-2 ">
                <FaFacebookF className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
                <FaTwitter className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
                <FaLinkedinIn className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
                <FaYoutube className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
                <FaInstagram className=" bg-[#2EABAF] p-2 w-8 h-8 rounded-full" />
              </div>
            </div>
          </div>
          <div className="py-10 w-full px-10">
            <form className="w-full">
              <div className=" grid sm:grid-cols-2 gap-6 ">
                <div className="mt-2 ">
                  <input
                    type="text"
                    name="frist-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="First Name"
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-full border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2 ">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="given-name"
                    placeholder="Last Name"
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-full border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="col-span-full mt-2 ">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="given-name"
                    placeholder="Email"
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-full border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="mt-2 ">
                  <input
                    type="text"
                    name="sutdio"
                    id="studio"
                    autoComplete="given-name"
                    placeholder="Studio Name"
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-full border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2 ">
                  <input
                    type="text"
                    name="sic=ze"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Studio Size "
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-full border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2 ">
                  <input
                    type="text"
                    name="studio-website"
                    id="studio-website"
                    autoComplete="given-name"
                    placeholder="Studio Website"
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-full border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2 ">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="given-name"
                    placeholder="Studio Phone Number"
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-full border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-full mt-2 ">
                  <input
                    type="text"
                    name="country"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="What service area can we help you with?"
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-full border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="col-span-full mt-2 ">
                  <textarea
                    type="text"
                    name="country"
                    id="first-name"
                    rows="8"
                    autoComplete="given-name"
                    placeholder="Message"
                    className="w-full px-6 bg-[#D4E7F5] outline-none rounded-2xl border-0 py-3 text-gray-800  shadow-sm  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-center py-6">
                <button className="text-center bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-medium py-3 px-14 rounded-full uppercase">
                  ASK FOR QUOTE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*----------------------------   TradeMarke Section    ------------------------------*/}
      <div className="max-w-7xl mx-auto lg:py-32">
        <h1 className="lg:text-[80px] text-[60px] uppercase  font-tek">
          in need of video
        </h1>
        <div className="flex items-center gap-x-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col justify-end">
              <h1 className="text-base uppercase py-4 font-semibold">
                book a meeting
              </h1>
              <p className="font-light text-sm ">
                Lorem ipsum dolor sit amet consectetur. Malesuada interdum
                tellus viverra ut nulla placerat tincidunt velit scelerisque.
              </p>
              <span className="flex items-center gap-1.5 pt-10">
                <h1 className=" text-lg font-semibold  uppercase">
                  book a meeting
                </h1>
                <ArrowLongRightIcon className="h-5 w-5" />
              </span>
            </div>
            <div className="flex flex-col justify-end">
              <h1 className="text-base uppercase py-4 font-semibold">
                phone us
              </h1>
              <p className="font-light text-sm ">
                Lorem ipsum dolor sit amet consectetur. Malesuada interdum
                tellus viverra ut nulla placerat tincidunt velit scelerisque.
              </p>
              <span className="flex items-center gap-1.5 pt-10">
                <h1 className=" text-lg font-semibold uppercase ">
                  call us on +1 123 123 4567
                </h1>
                <ArrowLongRightIcon className="h-5 w-5" />
              </span>
            </div>
            <div className="flex flex-col justify-end">
              <h1 className="text-base uppercase py-4  font-semibold">
                Work in aim vfx
              </h1>
              <p className="font-light text-sm ">
                Lorem ipsum dolor sit amet consectetur. Malesuada interdum
                tellus viverra ut nulla placerat tincidunt velit scelerisque.
              </p>
              <span className="flex items-center gap-1.5 pt-10">
                <h1 className=" text-lg font-semibold  uppercase ">
                  go to carrer page
                </h1>
                <ArrowLongRightIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
          <div className="w-1/2">
            <img src={trademark14021431} alt="" className="w-full" />
          </div>
        </div>
      </div>
      {/*----------------------------  Date Consulation Section    ------------------------------*/}
      <div className="promotional-section">
        <DateConsulation />
      </div>

      <div className="relative ">
        <div className="absolute bottom-0  flex items-center justify-center ">
          <img src={footerbg} alt="bg" className="object-cover object-center" />
        </div>
        
        <FooterForm />
      </div>
    </div>
  );
};

export default ContactUs;
