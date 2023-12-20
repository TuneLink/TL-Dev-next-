import React, { useEffect, useState } from "react";
import { useSpotify } from "../../hooks/useSpotify"; // Adjust the import path as needed

const UserPlaylists = ({ session }) => {
  const { fetchUserPlaylists, deletePlaylist, updatePlaylistName } = useSpotify(session);
  const [playlists, setPlaylists] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);


   useEffect(() => {
     const loadPlaylists = async () => {
       const userPlaylists = await fetchUserPlaylists();
       setPlaylists(userPlaylists);
     };

     if (session && !hasFetched) {
       loadPlaylists();
       setHasFetched(true);
     }
   }, [session, hasFetched, fetchUserPlaylists]);

  const handleDeletePlaylist = async (playlistId, playlistName) => {
    // Ask for confirmation
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the playlist "${playlistName}"?`
    );
    if (confirmDelete) {
      const isDeleted = await deletePlaylist(playlistId);
      if (isDeleted) {
        setPlaylists((prevPlaylists) =>
          prevPlaylists.filter((p) => p.id !== playlistId)
        );
        alert(`${playlistName} has been deleted.`); // Or replace with more sophisticated feedback
      } else {
        alert("Failed to delete the playlist."); // Replace with more sophisticated feedback
      }
    }
  };

  const handleUpdatePlaylistName = async (playlistId) => {
    const newName = prompt("Enter the new name for the playlist:");
    if (newName) {
      const isUpdated = await updatePlaylistName(playlistId, newName);
      if (isUpdated) {
        setPlaylists((prevPlaylists) =>
          prevPlaylists.map((p) =>
            p.id === playlistId ? { ...p, name: newName } : p
          )
        );
        alert(`Playlist name updated to "${newName}".`); // Or replace with more sophisticated feedback
      } else {
        alert("Failed to update the playlist name."); // Replace with more sophisticated feedback
      }
    }
  };

  if (!playlists.length) return <p>No playlists found.</p>;

  const listStyle = {
    maxHeight: "400px",
    overflowY: "scroll",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const imageStyle = {
    width: "60px",
    height: "60px",
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Your Spotify Playlists:</h3>
      </div>
      <ul className="list-group" style={listStyle}>
        {playlists.map((playlist) => (
          <li
            key={playlist.id}
            className="list-group-item"
            style={listItemStyle}
          >
            <img
              src={playlist.images[0]?.url || "https://via.placeholder.com/150"}
              alt={playlist.name}
              style={imageStyle}
            />
            <div>
              <a
                href={playlist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                {playlist.name}
              </a>
              <p className="mb-1">Tracks: {playlist.tracks.total}</p>
              <button
                onClick={() => handleUpdatePlaylistName(playlist.id)}
                className="btn btn-primary"
              >
                Update Name
              </button>
              <button
                onClick={() => handleDeletePlaylist(playlist.id, playlist.name)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPlaylists;
