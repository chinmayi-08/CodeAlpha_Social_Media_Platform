import { useState } from "react";
import API from "../services/api";

function Users() {
  const [following, setFollowing] = useState(false);

  const followUser = async () => {
    try {
      await API.post("/follow", {
        follower: "Keerthan",
        following: "John",
      });

      setFollowing(true);
      alert("Followed Successfully");
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users</h2>

      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          width: "250px",
        }}
      >
        <h3>John</h3>

        <button onClick={followUser}>
          {following ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default Users;