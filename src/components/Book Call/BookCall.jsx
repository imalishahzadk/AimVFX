import React, { useState } from "react";
import "./BookCall.css";
import bg1 from "../../assets/holographic_fluid_drop_shapes_illustration_02 copy 3 (1).png";
import bookcall from "../../assets/book-call.png"
import {
  FaArrowRight,
  FaPlus,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGoogle,
  FaTiktok,
  FaGlobe,
  FaEllipsisH,
} from "react-icons/fa";
import Button from "../Button/Button";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BookCall = () => {

    const [value, setValue] = useState('');
  const icons = [
    {
      icon: FaFacebook,
      name: "Facebook",
    },
    {
      icon: FaInstagram,
      name: "Instagram",
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
    },
    {
      icon: FaYoutube,
      name: "YouTube",
    },
    {
      icon: FaGoogle,
      name: "Google",
    },
    {
      icon: FaTiktok,
      name: "TikTok",
    },
    {
      icon: FaGlobe,
      name: "Website Page",
    },
    {
      icon: FaEllipsisH,
      name: "Other",
    },
  ];

  return (
    <div className="book-call ">
      <div className="mx-auto h-screen flex items-center justify-center">
        <div className="border border-gray-900 rounded-[39px] flex flex-col items-center justify-center gap-y-4 max-w-lg bg-[#0B1A2880] pb-10">
            <img src={bookcall} alt="" className="w-full"/>
            <div className="flex flex-col items-center justify-center -mt-32  gap-y-10"> 
            <span className="text-[40px] text-white font-tek uppercase text-center">Lets find right <br/> plan for you</span>
            <span className="px-10 text-white font-light text-center">
            Lorem ipsum dolor sit amet consectetur. Malesuada interdum tellus viverra ut nulla placerat tincidunt velit scelerisque. 
            </span>

            <button className="bg-[#2EABAF] px-8 py-2.5 rounded-full text-white mt-2">
                Book Call
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
