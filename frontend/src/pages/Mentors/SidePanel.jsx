import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { token } from "../../config";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ mentorId, hourlyFee, timeSlots }) => {
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout_session/${mentorId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + ", please try again");
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="p-5 lg:p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-300 hover:shadow-[0_6px_35px_rgba(0,0,0,0.1)]">
      {/* Hourly Fee Section */}
      <div className="flex items-center justify-between mb-5 border-b border-gray-200 pb-3">
        <p className="text-[16px] font-semibold text-gray-700 tracking-wide">
          Hourly Fee
        </p>
        <span className="text-[20px] lg:text-[24px] font-bold text-indigo-600">
          {hourlyFee} <span className="text-[14px] font-medium">USD</span>
        </span>
      </div>

      {/* Time Slots */}
      <div className="mt-4">
        <p className="text-[15px] font-semibold text-gray-700 uppercase tracking-wider">
          Available Time Slots
        </p>
        <ul className="mt-3 space-y-2">
          {timeSlots?.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 hover:bg-indigo-50 transition-colors rounded-md px-3 py-2 border border-gray-100"
            >
              <p className="text-[15px] font-medium text-gray-700">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] font-semibold text-indigo-600">
                {convertTime(item.startingTime)} -{" "}
                {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Book Button */}
      <button
        onClick={bookingHandler}
        className="btn w-full mt-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold tracking-wide shadow-md transition-all duration-200 hover:shadow-lg active:scale-[0.98]"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
