import React from 'react';
import { useJob } from '../context/JobContext';

const JobCard = ({ job }) => {
  const { deleteJob } = useJob();

  return (
    <div className="flex justify-between items-center bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition hover:shadow-md">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{job.company}</h3>
        <p className="text-sm text-gray-600 mt-1">{job.role}</p>
        <div className="mt-3">
          <span
            className={`px-3 py-1 text-xs font-semibold tracking-wider rounded-full ${
              job.status === 'Applied'
                ? 'bg-blue-100 text-blue-800'
                : job.status === 'Interview'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {job.status}
          </span>
        </div>
      </div>
      <button
        onClick={() => deleteJob(job.id)}
        className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-md hover:bg-red-50 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default JobCard;
