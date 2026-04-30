import { useJobs } from "../context/JobContext";

function JobCard({ job, index }) {
  const { deleteJob, updateStatus } = useJobs();

  return (
    <div className="card">
      <h3>{job.company}</h3>
      <p>{job.role}</p>

      <p className={`status ${job.status}`}>{job.status}</p>

      <select
        value={job.status}
        onChange={(e) => updateStatus(index, e.target.value)}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Rejected</option>
      </select>

      <button className="delete-btn" onClick={() => deleteJob(index)}>
        Delete
      </button>
    </div>
  );
}

export default JobCard;