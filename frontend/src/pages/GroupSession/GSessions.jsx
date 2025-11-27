import React from "react";
import GSessionList from "../../components/GroupSession/GSessionList";

const GSessions = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Group Sessions</h1>
      <GSessionList />
    </div>
  );
};

export default GSessions;
