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
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="signin-page h-auto">
      <div className="flex items-center justify-center relative lg:pt-32 pt-28 overflow-hidden lg:px-0 px-3 lg:pb-0 pb-10">
        <img
          src={back1}
          alt="bg-image"
          className="absolute -z-10 bg-image-form lg:block hidden"
        />
        <div className="absolute top-[25%] right-[30.5%] form-svg lg:block hidden">
          <img src={svg2} alt="bg-image" className="w-7 h-7" />
        </div>
        <div className="absolute top-[40%] left-[25%] form-svg2 lg:block hidden">
          <img src={svg1} alt="bg-image" className="w-8 h-8" />
        </div>
        <div className="absolute top-[38%] left-[20%] form-svg3 lg:block hidden">
          <img src={svg4} alt="bg-image" className="w-5 h-5" />
        </div>
        <div className="absolute top-[68%] left-[18%] form-svg4 lg:block hidden">
          <img src={svg5} alt="bg-image" className="w-8 h-8" />
        </div>
        <div className="absolute top-[65%] right-[20%] form-svg5 lg:block hidden">
          <img src={svg3} alt="bg-image" className="w-5 h-5" />
        </div>
        <div className="form-border ">
          <div className="lg:px-12 lg:pt-4 lg:pb-4 py-8 w-full flex items-center justify-center flex-col">
            <Heading className="uppercase text-[60px] lg:text-[80px] font-tek text-white">
              Sign up
            </Heading>
            <div className="flex flex-col items-center justify-center gap-y-2 w-full">
              <div className="flex flex-col gap-y-4 lg:ml-3 mb-4">
                <div class="lg:w-96 w-full">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    for="default-radio-1"
                    class="ms-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    I’m a client, looking for a creative team
                  </label>
                </div>
                <div class="lg:w-96 w-full">
                  <input
                    checked
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                  />
                  <label
                    for="default-radio-2"
                    class="ms-2 text-sm font-medium text-white dark:text-gray-300"
                  >
                    I’m a talent, looking for a work
                  </label>
                </div>
              </div>
              <div className="lg:w-96 w-full">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                />
              </div>
              <div className="lg:w-96 w-full">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="px-4 py-3 text-sm  rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                />
              </div>
              <div className="lg:w-96 w-full ">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium ml-3 text-[#D4E7F5] "
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="At least 8 characters"
                    className="px-4 py-3 text-sm rounded-full text-gray-700 bg-[#D4E7F5] w-full pr-12" // Added pr-12 for space for the icon
                  />

                  <div className="absolute inset-y-0 right-1 flex items-center pr-3">
                    {showPassword ? (
                      <FaEye
                        className="text-gray-500 cursor-pointer"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <FaEyeSlash
                        className="text-gray-500 cursor-pointer"
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="my-2">
                <span className="text-[#D4E7F5] text-xs">
                  By signing up you agree with the <span className="text-[#15B8C7]">Terms of Service</span> <span> & </span> 
                  <span className="text-[#15B8C7]">Privacy Policy.</span>
                </span>
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-y-3">
                <Button className="uppercase text-white bg-[#2EABAF] px-12 py-2.5 rounded-full text-sm">
                  Sign up
                </Button>
                <span className="text-[#D4E7F5]">or</span>
                <Button className="uppercase text-white bg-transparent border font-semibold flex items-center gap-x-2 border-white px-12 py-2.5 rounded-full text-sm">
                  <img src={googleicon} alt="googleicon" className="w-5 h-5" />
                  Signup with Google
                </Button>
              </div>

              <div className="mt-10 lg:text-base text-sm">
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

export default Signup;
