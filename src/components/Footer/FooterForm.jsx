import React, { useState, useEffect } from "react";
import client from "../../sanity";
import BackgroundText from "../BackgroundText/BackgroundText";

const FooterForm = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "footerSection"][0]`)
      .then((data) => {
        setFooterData(data);
        console.log("Footer data fetched:", data);
      })
      .catch((err) => {
        console.error("Error fetching footer data:", err);
      });
  }, []);

  if (!footerData) return <div>Loading...</div>;

  return (
    <div className="lg:pt-20 relative">
      {/* Adjusting BackgroundText element for z-index and interaction */}
      <div className="absolute -top-[18%] lg:flex items-center justify-center w-full hidden lg:block pointer-events-none">
        <BackgroundText className="lg:text-[400px] text-[120px] uppercase font-tek footer-text overflow-hidden -z-[100]">
          <span>{footerData.Ques}</span>
        </BackgroundText>
      </div>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center px-10 relative z-10">
        <div className="mb-6 flex flex-col items-start gap-y-1.5 text-white lg:w-1/2 lg:pr-10">
          <h2 className="lg:text-[80px] text-[60px] font-tek font-normal leading-tight">
            {footerData.qHead}
          </h2>
          <p className="w-full text-md mb-2">{footerData.qPara1}</p>
          <p className="w-full text-md">{footerData.qPara2}</p>
        </div>
        <div className="lg:w-1/2 lg:px-12">
          <form className="flex flex-col flex-wrap gap-y-6 w-full pt-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5] relative z-20"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5] relative z-20"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5] relative z-20"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-full text-gray-700 bg-[#D4E7F5] relative z-20"
            />
            <select
              name="companySize"
              className="px-4 py-3 rounded-full text-gray-500 bg-[#D4E7F5] relative z-20"
            >
              <option value="">Company Size</option>
              <option value="small">1-10</option>
              <option value="medium">11-50</option>
              <option value="large">51-200</option>
              <option value="enterprise">201+</option>
            </select>
            <button
              type="submit"
              className="bg-[#2EABAF] hover:bg-[#15B8C7] text-white font-bold py-3 px-4 mt-5 rounded-full relative z-20"
            >
              {footerData.qBtn2}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterForm;
