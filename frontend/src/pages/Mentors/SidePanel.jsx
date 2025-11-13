import { BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { token } from "../../config";
import convertTime from "../../utils/convertTime";

const SidePanel = ({ mentorId, ticketPrice, timeSlots }) => {
  const bookingHandler = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${mentorId}`,
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
    <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] transition-all duration-300">
      {/* --- Ticket Price --- */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-[17px] font-semibold text-gray-600 tracking-wide">
          Ticket Price
        </p>
        <span className="text-[20px] lg:text-[24px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {ticketPrice} BDT
        </span>
      </div>

      {/* --- Time Slots --- */}
      <div className="mt-[30px]">
        <p className="font-semibold text-gray-500 text-[17px] mb-3">
          Available Time Slots
        </p>
        <ul className="space-y-3">
          {timeSlots?.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-3 py-2 hover:bg-white/10 transition-all duration-200"
            >
              <p className="text-[15px] font-medium text-gray-600">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[14px] font-semibold text-cyan-800">
                {convertTime(item.startingTime)} —{" "}
                {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* --- Book Button --- */}
      <button
        onClick={bookingHandler}
        className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-[16px] tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-[1.02] transition-all duration-300"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
