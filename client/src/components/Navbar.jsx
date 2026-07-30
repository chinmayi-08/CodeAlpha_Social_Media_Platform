import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#1976d2",
        padding: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link style={{ color: "white" }} to="/">Home</Link>
      <Link style={{ color: "white" }} to="/login">Login</Link>
      <Link style={{ color: "white" }} to="/register">Register</Link>
      <Link style={{ color: "white" }} to="/feed">Feed</Link>
      <Link style={{ color: "white" }} to="/profile">Profile</Link>
      <Link style={{ color: "white" }} to="/users">Users</Link>
    </nav>
  );
}

export default Navbar;