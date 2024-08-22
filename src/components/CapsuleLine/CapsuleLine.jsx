import React from "react";

const RectangleLine = () => {
  return (
    <svg
      className="h-20 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 100"
    >
      {/* Horizontal line */}
      <line x1="0" y1="50" x2="1200" y2="50" stroke="#56BEC2" strokeWidth="6" />
      {/* Rectangle shapes */}
      {[...Array(5)].map((_, index) => (
        <g key={index}>
          {/* Rectangle */}
          <rect
            x={(index + 1) * 200 - 8}
            y="42"
            width="16"
            height="16"
            fill="#56BEC2"
          />
          {/* Line connecting to rectangle */}
          {index < 4 && (
            <line
              x1={(index + 1) * 200 + 8}
              y1="50"
              x2={(index + 2) * 200 - 8}
              y2="50"
              stroke="#56BEC2"
              strokeWidth="6"
            />
          )}
        </g>
      ))}
      {/* Line after the 5th rectangle */}
      <line
        x1="1000"
        y1="50"
        x2="1200"
        y2="50"
        stroke="#56BEC2"
        strokeWidth="6"
      />
    </svg>
  );
};

export default RectangleLine;
