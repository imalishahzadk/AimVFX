import React from "react";
import "./Signin.css";
import Heading from "../../Heading/Heading";
import Button from "../../Button/Button";
import googleicon from "../../../assets/icons/flat-color-icons_google.png";
import back1 from "../../../assets/holographic_fluid_drop_shapes_illustration_02 copy 3 (1).png";
import svg1 from "../../../assets/icons/Group 469320 (1).png";
import svg2 from "../../../assets/icons/flowbite_microphone-solid.png";
import svg3 from "../../../assets/icons/foundation_graph-pie.png";
import svg4 from "../../../assets/icons/mdi_stars.png";
import svg5 from "../../../assets/icons/ph_video-fill.png";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div className="signin-page ">
      <div className="flex items-center justify-center relative lg:pt-32 pt-40 overflow-hidden lg:px-0 px-3">
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
          <div className="lg:px-12 lg:pt-28 lg:pb-24 px-4 py-8 w-full flex items-center justify-center flex-col">
            <Heading className="uppercase text-[60px] lg:text-[80px] font-tek text-white">
              Sign in
            </Heading>
            <div className="flex flex-col items-center justify-center gap-y-3 w-full">
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
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="px-4 py-3 text-sm rounded-full text-gray-700 bg-[#D4E7F5] w-full"
                />
              </div>
              <div className="mt-8 flex flex-col items-center justify-center gap-y-3">
                <Button className="uppercase text-white bg-[#2EABAF] px-12 py-2.5 rounded-full text-sm">
                  Sign in
                </Button>
                <span className="text-[#D4E7F5]">or</span>
                <Button className="uppercase text-white bg-transparent border font-semibold flex items-center gap-x-2 border-white px-12 py-2.5 rounded-full text-sm">
                  <img src={googleicon} alt="googleicon" className="w-5 h-5" />
                  Sign up with Google
                </Button>
              </div>

              <div className="mt-16 lg:text-base text-sm">
                <span className="font-light text-[#D4E7F5]">
                  No account?{" "}
                  <Link
                    to="/signup"
                    className="underline text-[#00FFFF] font-light"
                  >
                    Create one
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
