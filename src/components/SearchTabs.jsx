import React from "react";

function StatusTabs({ currentStatus, setCurrentStatus }) {
  const statuses = ["All", "Applied", "Interviewing", "Rejected", "Hired"];

  return (
    <div className="flex space-x-2 mb-4">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => setCurrentStatus(status)}
          className={`px-4 py-2 rounded-md border 
            ${currentStatus === status 
              ? "bg-blue-500 text-white" 
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
          `}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default StatusTabs;
