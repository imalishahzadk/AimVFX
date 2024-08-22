import React from "react";

const ServiceRatesCount = () => {
  const counts = [
    {
      title: "MUCH FASTER",
      value: "20x",
      description: "Faster than hiring creatives in-house",
    },
    {
      title: "CUT COSTS",
      value: "50%",
      description: "Reduction in average of cost per asset",
    },
    {
      title: "Ship Faster",
      value: "70%",
      description: "Lower turnaround time for digital assets",
    },
    {
      title: "Stress Less",
      value: "9.6",
      description: "Average rating from customers.",
    },
  ];

  return (
    <div className="flex lg:flex-row flex-col items-center justify-center gap-x-4 lg:py-10 pt-6">
      {counts.map((count, index) => (
        <div key={index} className="rate-count-content">
          <h3 className="count-head">{count.title}</h3>
          <h1 className="count-nmbr">{count.value}</h1>
          <p className="count-text">{count.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceRatesCount;
