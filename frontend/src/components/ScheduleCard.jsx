import React, { useState, useEffect } from "react";

export default function ScheduleCard({
  day,
  date,
  slots,
  time,
  onSelect,
  isSelected,
}) {
  const [showHourPopup, setShowHourPopup] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);

  // Improved time-parser
  const parseHour = (str) => {
    const lower = str.toLowerCase().replace(/\s+/g, "");
    let hour = parseInt(lower.split(":")[0]);

    const isPM = lower.includes("pm");
    const isAM = lower.includes("am");

    if (isPM && hour !== 12) hour += 12;
    if (isAM && hour === 12) hour = 0;

    return hour;
  };

  // Generate hour ranges based on input time
  const generateHourlySlots = () => {
    const [start, end] = time.split("-");
    const startHour = parseHour(start);
    const endHour = parseHour(end);

    const hours = [];

    const fmt = (h) => {
      if (h === 0) return "12 AM";
      if (h < 12) return `${h} AM`;
      if (h === 12) return "12 PM";
      return `${h - 12} PM`;
    };

    for (let h = startHour; h < endHour; h++) {
      hours.push(`${fmt(h)} - ${fmt(h + 1)}`);
    }

    return hours;
  };

  const handleDayClick = () => {
    setShowHourPopup(true);
  };

  const handleHourSelect = (hour) => {
    setSelectedHour(hour);
    onSelect({ day, date, time: hour });
    setShowHourPopup(false);
  };

  return (
    <>
      {/* Main Card */}
      <div
        onClick={handleDayClick}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        onTouchStart={() => setIsPressed(true)}
        onTouchEnd={() => setIsPressed(false)}
        className={`
          cursor-pointer min-w-[200px] p-4 rounded-2xl border transition-all duration-150
          ${
            isSelected
              ? "border-indigo-600 bg-indigo-50 shadow-lg"
              : "border-gray-200 bg-white hover:shadow-md hover:border-indigo-300"
          }
          ${isPressed ? "scale-95" : "scale-100"}
        `}
      >
        <p className="text-xs text-gray-500 capitalize">{day}</p>

        <h3 className="text-lg font-bold mt-1 text-gray-800">{date}</h3>

        <p className="text-green-600 text-sm font-semibold mt-1">
          {slots} slots
        </p>

        <div className="mt-4 py-2 rounded-xl border bg-gray-100 text-center font-semibold text-gray-700">
          {time}
        </div>
      </div>

      {/* Popup */}
      {showHourPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[60]">
          <div className="bg-white rounded-3xl p-6 w-[95%] max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Select Hour - {day}, {date}
            </h3>

            <div className="grid grid-cols-2 gap-4 max-h-[400px] overflow-y-auto">
              {generateHourlySlots().map((hour, index) => (
                <button
                  key={index}
                  onClick={() => handleHourSelect(hour)}
                  className={`
                    p-3 rounded-xl border transition-all font-medium
                    ${
                      selectedHour === hour
                        ? "border-indigo-600 bg-indigo-100 text-indigo-700"
                        : "border-gray-300 bg-gray-50 hover:bg-indigo-100 hover:border-indigo-500"
                    }
                  `}
                >
                  {hour}
                </button>
              ))}
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowHourPopup(false)}
                className="
                  px-5 py-2 rounded-lg border 
                  font-medium text-gray-600
                  hover:bg-gray-100 transition-all
                "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
