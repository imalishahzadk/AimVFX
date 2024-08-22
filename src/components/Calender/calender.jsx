import React, { useState } from "react";
import dayjs from "dayjs"; // Import dayjs for date handling
import "dayjs/locale/en"; // Import locale if needed

// Array of days of the week for header display
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Array of months for dropdown display
const months = Array.from({ length: 12 }, (_, i) =>
  dayjs().month(i).format("MMMM")
);

// Calendar component
const Calendar = () => {
  // State variables
  const [currentDate, setCurrentDate] = useState(dayjs()); // Current date state
  const [selectedDate, setSelectedDate] = useState(null); // Selected date state

  // Calculate start and end of current month
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");

  // Number of days in the current month and starting day index
  const daysInMonth = endOfMonth.date();
  const startDay = startOfMonth.day();

  // Generate arrays for days of previous, current, and next months
  const prevMonthDays = Array.from({ length: startDay }, (_, i) =>
    startOfMonth.subtract(i + 1, "day").date()
  ).reverse();
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const nextMonthDays = Array.from(
    { length: 42 - (prevMonthDays.length + currentMonthDays.length) },
    (_, i) => i + 1
  );

  // Combined array of days for rendering in the calendar
  const days = [
    ...prevMonthDays.map((day) => ({ day, isPrevMonth: true })),
    ...currentMonthDays.map((day) => ({ day, isCurrentMonth: true })),
    ...nextMonthDays.map((day) => ({ day, isNextMonth: true })),
  ];

  // State for showing month dropdown
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);

  // Function to change the month
  const changeMonth = (month) => {
    setCurrentDate(currentDate.month(month)); // Set new month
    setShowMonthDropdown(false); // Hide month dropdown
    setSelectedDate(null); // Clear selected date when changing month
  };

  // Function to change the year
  const changeYear = (year) => setCurrentDate(currentDate.year(year)); // Set new year

  // Function to handle click on a day
  const handleDayClick = (day) => {
    if (!day.isPrevMonth && !day.isNextMonth) {
      setSelectedDate(dayjs(currentDate).date(day.day)); // Set selected date
    }
  };

  // Function to reset calendar to today
  const resetToToday = () => {
    setCurrentDate(dayjs()); // Set current date
    setSelectedDate(dayjs()); // Set selected date
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full lg:w-[400px] bg-white rounded-3xl shadow-lg">
        {/* Calendar header */}
        <div className="grid grid-cols-3 items-center p-5 bg-gray-100 rounded-t-3xl">
          {/* Month dropdown */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowMonthDropdown(!showMonthDropdown)}
              className="flex items-center px-3 py-1 rounded-lg bg-blue-500 text-white"
            >
              <span className="mr-1">{months[currentDate.month()]}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ${
                  showMonthDropdown ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Month dropdown options */}
            {showMonthDropdown && (
              <div className="absolute mt-1 w-32 bg-white border rounded-lg shadow-lg">
                {months.map((month, index) => (
                  <button
                    key={month}
                    onClick={() => changeMonth(index)}
                    className={`block w-full px-4 py-2 text-left ${
                      currentDate.month() === index
                        ? "bg-blue-200 text-blue-800"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Year dropdown */}
          <div className="relative flex items-center">
            <select
              value={currentDate.year()}
              onChange={(e) => changeYear(parseInt(e.target.value))}
              className="px-3 py-1 appearance-none bg-transparent"
            >
              {/* Generate options for years from 1970 to 2100 */}
              {Array.from({ length: 2100 - 1970 + 1 }, (_, i) => 1970 + i).map(
                (year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                )
              )}
            </select>
            {/* Year dropdown icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute mr-10 right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-700 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {/* Today button */}
          <button onClick={resetToToday} className="text-gray-700 text-right">
            Today
          </button>
        </div>

        {/* Calendar body */}
        <div className="p-5 bg-gradient-to-b from-gray-100 to-white">
          {/* Days of the week header */}
          <div className="grid grid-cols-7 text-center font-bold text-gray-500">
            {daysOfWeek.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1 mt-2">
            {/* Map through days array and render each day cell */}
            {days.map(
              ({ day, isPrevMonth, isCurrentMonth, isNextMonth }, i) => (
                <div
                  key={i}
                  onClick={() =>
                    handleDayClick({
                      day,
                      isPrevMonth,
                      isCurrentMonth,
                      isNextMonth,
                    })
                  }
                  className={`p-2 text-center font-semibold cursor-pointer rounded-lg ${
                    isPrevMonth || isNextMonth
                      ? "text-gray-400"
                      : isCurrentMonth
                      ? "bg-blue-100 text-blue-500"
                      : ""
                  } ${
                    selectedDate &&
                    selectedDate.date() === day &&
                    !isPrevMonth &&
                    !isNextMonth
                      ? "bg-blue-600 text-white"
                      : ""
                  }`}
                >
                  <span>{day}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Selected date display */}
        {selectedDate && (
          <div className="text-center py-3 bg-gray-100 rounded-3xl mb-2 shadow-md">
            Date: {selectedDate.format("DD MMMM YYYY")}
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
