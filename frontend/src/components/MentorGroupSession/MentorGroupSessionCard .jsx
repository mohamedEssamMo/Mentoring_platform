import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import UpdateGroupSession from "../../Dashboard/mentor-account/updateGroupSession";

const MentorGroupSessionCard = ({ groupSession, onDeleted, onUpdated }) => {
  const formattedDate = new Date(groupSession.startDatetime).toLocaleString(
    "en-US",
    {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    }
  );

  const onDelete = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/group_sessions/${groupSession._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Delete failed");

      if (typeof onDeleted === "function") onDeleted(groupSession._id);

      toast.success("Group session deleted successfully");
    } catch (error) {
      toast.error("Failed to delete group session");
    }
  };

  const [open, setOpen] = useState(false);

  return (
    
    <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Status Badge */}

      <div className="absolute top-2 left-2 flex gap-2 items-center">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-xl font-bold opacity-75 hover:bg-red-900 hover:opacity-100"
        >
          <FiEdit3 /> Edit
        </button>
        <UpdateGroupSession
          groupSession={groupSession}
          open={open}
          setOpen={setOpen}
          onUpdated={onUpdated}
        />
        <button
          onClick={onDelete}
          className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-xl font-bold opacity-75 hover:bg-red-900 hover:opacity-100"
        >
          <RiDeleteBin6Line /> Delete
        </button>
      </div>

      {/* Image */}
      <img
        src={groupSession.imageURL}
        alt={groupSession.topic}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-headingColor mb-1">
          {groupSession.topic}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{groupSession.description}</p>

        <div className="text-sm text-gray-500 mb-2">
          <strong>🗓️</strong> {formattedDate}
        </div>
        <div className="text-sm text-gray-500 mb-2">
          <strong>⏱️</strong> Duration: {groupSession.durationMinutes} mins
        </div>
        <div className="text-sm text-gray-500 mb-2">
          <strong>👥</strong> Max Participants: {groupSession.maxParticipants}
        </div>
        <div className="text-sm text-gray-500 mb-2">
          <strong>🎟️</strong> Ticket Price: ${groupSession.ticketPrice}
        </div>
        <div className="text-sm text-gray-500 mb-2">
          <strong>☄️</strong> status: {groupSession.status}
        </div>
      </div>
    </div>
  );
};

export default MentorGroupSessionCard;
