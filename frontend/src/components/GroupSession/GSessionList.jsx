import React, { useEffect, useState } from "react";
import axios from "axios";
import GSessionCard from "./GSessionCard";

const GSessionList = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/group_sessions")
      .then((res) => {
        console.log("API RESPONSE:", res.data);
        setSessions(res.data.data); // Important: Adjust based on actual API response structure
        setLoading(false);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;

  if (sessions.length === 0)
    return <h2 className="text-center mt-10">No sessions found</h2>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sessions.map((session) => (
        <GSessionCard key={session._id} session={session} />
      ))}
    </div>
  );
};

export default GSessionList;
