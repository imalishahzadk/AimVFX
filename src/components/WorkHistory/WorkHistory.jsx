import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const WorkHistoryItem = ({ title, dateRange, description, price, hours }) => {
  return (
    <div className="flex flex-col gap-y-1 text-white px-4 py-10 border-b border-[#15B8C7]">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex justify-start gap-x-2 items-center">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-[#15B8C7]" />
          ))}
        </div>
        <p className="text-gray-300">{dateRange}</p>
      </div>
      <p className="text-sm my-2 text-gray-300">{description}</p>
      <div className="flex justify-between items-center font-semibold">
        <p>{price}</p>
        {hours && <p>{hours}</p>}
      </div>
    </div>
  );
};

const WorkHistory = () => {
  const jobs = [
    {
      title: "Camtasia video editor needed to edit coding videos",
      dateRange: "Nov 29, 2022 - Dec 4, 2022",
      description:
        "As usual, Petr did a great, top-quality job and, not only that, but he also delivered ahead of time, which I really appreciate. I’m super pleased with the results!",
      price: "$1,052.50, Fixed Price",
    },
    {
      title: "Core Video Editing",
      dateRange: "Jan 31, 2022 - Dec 2, 2022",
      description: "7 hours",
      price: "",
    },
    {
      title: "Camtasia video editor needed to edit coding videos",
      dateRange: "May 9, 2022 - Nov 4, 2022",
      description: "",
      price: "$1,283.32, $25.00 / hr, 47 hours",
    },
    // Additional dummy reviews
    {
      title: "Video Editor for YouTube Channel",
      dateRange: "Jan 1, 2023 - Jan 10, 2023",
      description:
        "Petr was fantastic to work with and delivered exactly what we needed.",
      price: "$800.00, Fixed Price",
    },
    {
      title: "Social Media Content Creator",
      dateRange: "Feb 15, 2023 - Mar 1, 2023",
      description: "Great work! Very creative and professional.",
      price: "$600.00, Fixed Price",
    },
    {
      title: "Podcast Editor",
      dateRange: "Mar 5, 2023 - Mar 10, 2023",
      description: "Excellent editing skills and very communicative.",
      price: "$400.00, Fixed Price",
    },
    {
      title: "Commercial Video Editing",
      dateRange: "Apr 20, 2023 - Apr 25, 2023",
      description:
        "Petr exceeded our expectations with his attention to detail.",
      price: "$1,200.00, Fixed Price",
    },
    {
      title: "Tutorial Video Production",
      dateRange: "May 1, 2023 - May 10, 2023",
      description: "High-quality work and quick turnaround time.",
      price: "$950.00, Fixed Price",
    },
  ];

  const [visibleJobs, setVisibleJobs] = useState(3);

  const showMoreJobs = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 3);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-4xl font-tek italic font-medium text-white mb-4">
        WORK HISTORY
      </h2>
      {jobs.slice(0, visibleJobs).map((job, i) => (
        <WorkHistoryItem key={i} {...job} />
      ))}
      {visibleJobs < jobs.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={showMoreJobs}
            className="px-8 py-2.5 text-sm font-semibold text-black rounded-full bg-gradient-to-r from-[#15B8C7] to-[#8CE1EC] hover:from-[#13A6B2] hover:to-[#74D1DE] border-2 border-cyan-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out uppercase"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkHistory;
