import React, { useState } from "react";
import "./Signup.css";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import googleicon from "../../../assets/icons/flat-color-icons_google.png";
import back1 from "../../../assets/holographic_fluid_drop_shapes_illustration_02 copy 3 (1).png";
import svg1 from "../../../assets/icons/Group 469320 (1).png";
import svg2 from "../../../assets/icons/flowbite_microphone-solid.png";
import svg3 from "../../../assets/icons/foundation_graph-pie.png";
import svg4 from "../../../assets/icons/mdi_stars.png";
import svg5 from "../../../assets/icons/ph_video-fill.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpCompanyInfo = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="signin-page lg:h-screen h-auto">
      <div className="flex items-center justify-center relative pt-32 overflow-hidden lg:pb-0 pb-10 lg:px-0 px-3">
        <img
          src={back1}
          alt="bg-image"
          className="absolute -z-10 bg-image-form lg:block hidden"
        />
        <div className="absolute top-[25%] right-[22.5%] form-svg lg:block hidden">
          <img src={svg2} alt="bg-image" className="w-7 h-7" />
        </div>
        <div className="absolute top-[40%] left-[17%] form-svg2 lg:block hidden">
          <img src={svg1} alt="bg-image" className="w-8 h-8" />
        </div>
        <div className="absolute top-[35%] left-[12%] form-svg3 lg:block hidden">
          <img src={svg4} alt="bg-image" className="w-5 h-5" />
        </div>
        <div className="absolute top-[68%] left-[18%] form-svg4 lg:block hidden">
          <img src={svg5} alt="bg-image" className="w-8 h-8" />
        </div>
        <div className="absolute top-[65%] right-[20%] form-svg5 lg:block hidden">
          <img src={svg3} alt="bg-image" className="w-5 h-5" />
        </div>
        <div className="singup-onboarding-form-border lg:w-auto w-full">
          <div className="lg:px-12 px-3 lg:pt-6  lg:pb-8 py-8 w-full flex items-start justify-center flex-col">
            <Heading className="uppercase text-[50px] font-tek text-white ">
              Sign up
            </Heading>
            <div className="flex flex-col items-center justify-center gap-y-6 w-full mt-4">
              <div className="flex lg:flex-row flex-col gap-x-4 gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Enter Your Company Name"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Contact Phone
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="+1"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-x-4 gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Enter Your Country"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your City"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-x-4 gap-y-2 w-full">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Billing Address
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Enter Your Billid Address"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Corporate website
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="https://"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-x-4 gap-y-2 ">
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    placeholder="Zip Code"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
                <div className="lg:w-80 w-full">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                  >
                    What services are you looking for?
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Animated Videos"
                    className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                  />
                </div>
              </div>

            
              <div className="my-2 flex flex-col items-center gap-y-1.5">
                <span className="text-[#D4E7F5] text-xs">
                  By signing up you agree with the </span>
                  <div className="text-xs">
                  <span className="text-[#15B8C7]">Terms of Service</span>{" "}
                  <span className="text-[#D4E7F5]"> & </span>
                  <span className="text-[#15B8C7]">Privacy Policy.</span>
                  </div>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-y-3">
                <Button className="uppercase text-white bg-[#2EABAF] px-12 py-2.5 rounded-full text-sm">
                  Submit
                </Button>
              </div>

              <div className="mt-4">
                <span className="font-light text-[#D4E7F5]">
                  Already have an account?{" "}
                  <span className="underline text-[#00FFFF] font-light">
                    Sign in.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCompanyInfo;
