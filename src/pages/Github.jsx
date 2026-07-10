import { useState } from "react";
import "./Github.css";

function Github() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const getUser = async () => {
    if (username === "") {
      setMessage("Please enter a username");
      setUser(null);
      return;
    }

    try {
      setMessage("Loading...");

      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();

      setUser(data);
      setMessage("");
    } catch (error) {
      setMessage(error.message);
      setUser(null);
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Finder</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button onClick={getUser}>Search</button>
      </div>

      <p>{message}</p>

      {user && (
        <div className="card">
          <img src={user.avatar_url} alt="avatar" />

          <h2>{user.name || "No Name"}</h2>

          <p>@{user.login}</p>

          <div className="info">
            <span>Followers: {user.followers}</span>

            <span>Following: {user.following}</span>

            <span>Repos: {user.public_repos}</span>
          </div>

          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Github;