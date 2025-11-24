import { useState } from "react";
import { BASE_URL, token } from "../config";
import { toast } from "react-toastify";
import convertTime from "../utils/convertTime";
import ScheduleCard from "./ScheduleCard";

const SidePanel = ({ mentorId, hourlyFee, timeSlots = [] }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const bookingHandler = async () => {
    if (!selectedSlot) {
      return toast.error("Please select a time slot first.");
    }

    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout_session/${mentorId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: selectedSlot.date,
            time: selectedSlot.time,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      if (data.session?.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error("Booking failed — please log in and try again.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-3xl shadow-xl border border-gray-100">
      {/* Fee */}
      <div className="flex items-center justify-between mb-5 border-b pb-3">
        <p className="text-[16px] font-semibold text-gray-700">Hourly Fee</p>
        <span className="text-[22px] font-bold text-indigo-600">
          {hourlyFee} <span className="text-sm text-gray-500">USD</span>
        </span>
      </div>

      {/* Preview slots */}
      <p className="text-[15px] font-semibold text-gray-800 mb-3">
        Available Time Slots
      </p>

      <ul className="space-y-2">
        {(timeSlots || []).slice(0, 2).map((slot, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-50 rounded-lg border px-3 py-2"
          >
            <span className="capitalize">{slot.day}</span>
            <span className="text-indigo-600 font-medium">
              {convertTime(slot.startingTime)} - {convertTime(slot.endingTime)}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="w-full mt-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700"
      >
        Book Appointment
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 w-[95%] max-w-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Choose a Session
            </h3>

            <div className="flex gap-4 overflow-x-auto pb-3">
              {(timeSlots || []).map((slot, index) => {
                const time = `${convertTime(slot.startingTime)} - ${convertTime(
                  slot.endingTime
                )}`;

                return (
                  <ScheduleCard
                    key={index}
                    day={slot.day}
                    date={slot.date}
                    slots={slot.slots}
                    time={time}
                    onSelect={(s) => setSelectedSlot(s)}
                    isSelected={selectedSlot?.time === time}
                  />
                );
              })}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowPopup(false)}
                className="px-5 py-2 rounded-lg border font-medium text-gray-600"
              >
                Cancel
              </button>

              <button
                onClick={bookingHandler}
                className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidePanel;
