import React from "react";

const UserPlaylists = ({ playlists }) => {
  // if (!playlists.length) return <p>No playlists found.</p>;

  return (
    <div className="card">
      <div className="card-header">
        <h3>Your Playlists:</h3>
      </div>
      <ul className="list-group list-group-flush">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="list-group-item">
            {playlist.name}
            {/* Add more playlist details here if necessary */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPlaylists;
