import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <h2>JobTracker</h2>

      <div>
        <Link to="/" style={{ color: location.pathname === "/" ? "yellow" : "white" }}>
          Dashboard
        </Link>

        <Link
          to="/add"
          style={{
            marginLeft: "10px",
            color: location.pathname === "/add" ? "yellow" : "white",
          }}
        >
          Add Job
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;