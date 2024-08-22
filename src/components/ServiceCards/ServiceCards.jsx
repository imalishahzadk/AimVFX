import React, { useState, useRef, useEffect } from "react";
import ServicesCard from "./ServicesCard";

const ServiceCards = ({ serviceList, handleCardClick }) => {
  const [activeServiceId, setActiveServiceId] = useState(null);
  const scrollContainerRef = useRef(null);
  const progressBarRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleCardClickInternal = (service) => {
    setActiveServiceId(service.id);
    handleCardClick(service);
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Adjust the scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const updateProgressBar = () => {
      if (scrollContainer && progressBarRef.current) {
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrollLeft = scrollContainer.scrollLeft;
        const progress = (scrollLeft / maxScrollLeft) * 100;
        progressBarRef.current.style.width = `${progress}%`;
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updateProgressBar);
      scrollContainer.addEventListener("mousedown", handleMouseDown);
      scrollContainer.addEventListener("mousemove", handleMouseMove);
      scrollContainer.addEventListener("mouseup", handleMouseUpOrLeave);
      scrollContainer.addEventListener("mouseleave", handleMouseUpOrLeave);
      
      // Initial progress bar update
      setTimeout(updateProgressBar, 100);

      return () => {
        scrollContainer.removeEventListener("scroll", updateProgressBar);
        scrollContainer.removeEventListener("mousedown", handleMouseDown);
        scrollContainer.removeEventListener("mousemove", handleMouseMove);
        scrollContainer.removeEventListener("mouseup", handleMouseUpOrLeave);
        scrollContainer.removeEventListener("mouseleave", handleMouseUpOrLeave);
      };
    }
  }, [serviceList]);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div
        ref={scrollContainerRef}
        className="flex gap-x-5 cursor-pointer overflow-x-auto px-4 hide-scrollbar w-full mb-4"
      >
        {serviceList.map((service) => (
          <ServicesCard
            key={service.id}
            service={service}
            isActive={service.id === activeServiceId}
            onClick={() => handleCardClickInternal(service)}
          />
        ))}
      </div>
      <div className="w-3w mt-10 bg-gray-200 h-3 w-[40%] rounded-full">
        <div ref={progressBarRef} className="bg-[#2eabaf] h-full rounded"></div>
      </div>
    </div>
  );
};

export default ServiceCards;
