import React from "react";

const GSessionCard = ({ session }) => {
  const { imageURL, topic, startDatetime, durationMinutes, ticketPrice } =
    session;

  return (
    <div className="p-4 border rounded-xl shadow hover:shadow-md transition">
      <div className="w-full h-48 bg-gray-100 rounded-md overflow-hidden mb-3">
        <img
          src={imageURL}
          alt={topic}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-lg font-semibold">{topic}</h2>

      <p className="text-sm text-gray-600">
        {new Date(startDatetime).toLocaleString()}
      </p>

      <p className="text-sm text-gray-700 mt-1">
        Duration: {durationMinutes} min
      </p>

      <p className="text-primaryColor font-semibold text-md mt-2">
        ${ticketPrice}
      </p>
    </div>
  );
};

export default GSessionCard;
