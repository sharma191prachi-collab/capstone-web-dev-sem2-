function StatusTabs({ filter, setFilter }) {
  const tabs = ["All", "Applied", "Interview", "Rejected"];

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          style={{
            margin: "5px",
            background: filter === tab ? "blue" : "gray",
            color: "white",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default StatusTabs;