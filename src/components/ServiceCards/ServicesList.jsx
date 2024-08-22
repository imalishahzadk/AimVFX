import React, { useState, useEffect, useRef } from "react";

// Import icons
import icon1 from "../../assets/clock-111.png";
import icon2 from "../../assets/Group 114.png";
import icon3 from "../../assets/Group 77.png";
import icon4 from "../../assets/Group 78.png";
import icon5 from "../../assets/icon.png";

// Sample data (can be replaced with actual data fetching)
const services = [
  {
    id: 1,
    title: "Time-Saving",
    description:
      "Outsourcing video editing allows you to focus on your core business activities while professionals take care of the time-consuming editing process.",
    icon: icon1,
    active: true,
  },
  {
    id: 2,
    title: "Expertise",
    description:
      "Video editing experts bring a wealth of technical skills and creative insights to enhance your footage, ensuring a polished and professional end product.",
    icon: icon4,
    active: false,
  },
  {
    id: 3,
    title: "Quality",
    description:
      "Professional video editors have extensive experience and access to advanced editing tools, resulting in high-quality videos that captivate and engage your audience.",
    icon: icon2,
    active: false,
  },
  {
    id: 4,
    title: "Consistency",
    description:
      "By delegating video editing, you ensure consistency across your content, maintaining a cohesive brand identity and aesthetic that resonates with your viewers.",
    icon: icon5,
    active: false,
  },
  {
    id: 5,
    title: "Efficiency",
    description:
      "Video editing professionals work efficiently, utilizing their expertise and streamlined workflows to deliver your edited videos promptly, saving you valuable time and effort.",
    icon: icon3,
    active: false,
  },
];

const ServicesList = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleScroll = () => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrolled = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(scrolled);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // The multiplier here adjusts the scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseleave", handleMouseLeaveOrUp);
    scrollContainer.addEventListener("mouseup", handleMouseLeaveOrUp);
    scrollContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeaveOrUp);
      scrollContainer.removeEventListener("mouseup", handleMouseLeaveOrUp);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center lg:pt-20 pt-6 gap-y-5">
      <div className="w-full px-4 overflow-hidden">
        <div
          className="flex gap-5 justify-items-center overflow-x-scroll hide-scrollbar pt-20 pb-10"
          ref={scrollRef}
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-6 rounded-5xl shadow-lg text-center flex flex-col items-center flex-shrink-0"
              style={{
                paddingTop: "3rem",
                width: "100%", // Set width to 100% by default
                maxWidth: "26rem", // Max width for larger screens
                backgroundColor: "rgba(5, 19, 55, 1)",
              }}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 w-16 h-16"
              />
              <div className="relative z-10 text-white">
                <h3 className="text-[24px] md:text-[32px] lg:text-[40px] uppercase font-tek font-semibold mb-2 bg-gradient-to-r from-[#00FFFF] to-[#15B8C7] bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-white/80 text-[14px] md:text-[16px] lg:text-[18px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-4">
          <div className="w-[90%] md:w-[70%] lg:w-[40%] bg-gray-300 h-3 rounded-full">
            <div
              className="bg-[#56BEC2] h-3 rounded-full"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
