import React, { useState, useEffect } from "react";
import client from "../../sanity";
import { FaSpinner } from "react-icons/fa";
import Button from "../../components/Button/Button";
import EmotionalSVG from "../../assets/EmotionalSVG.svg";
import FilmAndTVSVG from "../../assets/FilmAndTVSVG.svg";
import AnimationSVG from "../../assets/3DAnimationSVG.svg";
import VideoProductionSVG from "../../assets/VideoProductionSVG.svg";

const Services = () => {
  const [solutionData, setSolutionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(`*[_type == "solutionPage"][0]`);
        setSolutionData(data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <FaSpinner className="animate-spin text-4xl text-blue-500" />
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="text-red-500">
          Error loading data. Please try again later.
        </p>
      </div>
    );
  }

  if (!solutionData) {
    return (
      <div className="no-data-container">
        <p>No solution data found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-8">
      <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0 text-white">
        <div className="flex flex-col items-center">
          <img
            src={EmotionalSVG}
            alt="Emotional Videos"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-5xl mb-4 text-[#00FFFF] uppercase font-tek">
            {solutionData.serviceCategory1Heading}
          </h1>
          <ul className="list-disc mb-4">
            {solutionData.serviceCategory1List?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button className="px-8 py-1.5 text-black mr-3 text-sm font-semibold bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Load More
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <img src={FilmAndTVSVG} alt="Film & TV" className="w-16 h-16 mb-4" />
          <h1 className="text-5xl mb-4 text-[#00FFFF] uppercase font-tek">
            {solutionData.serviceCategory2Heading}
          </h1>
          <ul className="list-disc mb-4">
            {solutionData.serviceCategory2List?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button className="px-8 py-1.5 text-black mr-3 text-sm font-semibold bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Load More
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={AnimationSVG}
            alt="3D Animation"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-5xl mb-4 text-[#00FFFF] uppercase font-tek">
            {solutionData.serviceCategory3Heading}
          </h1>
          <ul className="list-disc mb-4">
            {solutionData.serviceCategory3List?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button className="px-8 py-1.5 text-black mr-3 text-sm font-semibold bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Load More
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={VideoProductionSVG}
            alt="Video Production"
            className="w-16 h-16 mb-4"
          />
          <h1 className="text-5xl mb-4 text-[#00FFFF] uppercase font-tek">
            {solutionData.serviceCategory4Heading}
          </h1>
          <ul className="list-disc mb-4">
            {solutionData.serviceCategory4List?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button className="px-8 py-1.5 text-black mr-3 text-sm font-semibold bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 rounded-full focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
