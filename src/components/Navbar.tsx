import { Link, useSearchParams } from "react-router-dom";

function Navbar() {
  const [searchParams] = useSearchParams();
  const listType = searchParams.get("list");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #d1d5db",
      }}
    >
      <Link to="/?" className={`${listType === null ? "active-tab" : ""} tab`}>
        ALL
      </Link>
      <Link
        to="/?list=active"
        className={`${listType === "active" ? "active-tab" : ""} tab`}
      >
        Active
      </Link>
      <Link
        to="/?list=completed"
        className={`${listType === "completed" ? "active-tab" : ""} tab`}
      >
        Completed
      </Link>
    </div>
  );
}

export default Navbar;
