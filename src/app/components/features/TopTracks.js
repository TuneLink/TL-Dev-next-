import React, { useEffect, useState } from "react";
import { useSpotify } from "../../hooks/useSpotify"; // Adjust the import path as needed
import PropTypes from "prop-types"; // Add this import statement

const TopTracks = ({ session }) => {
  const { topTracks, fetchTopTracks, createPlaylist } = useSpotify(session);
  const [isFetched, setIsFetched] = useState(false); // New state to track if data is fetched

  const handleCreatePlaylist = async () => {
    const trackUris = topTracks.map((track) => track.uri);
    const playlistName = "My Top Tracks Playlist"; // Customizable playlist name
    await createPlaylist(playlistName, trackUris);
    alert("Playlist created successfully!"); // Replace with a more sophisticated feedback mechanism if needed
  };

  useEffect(() => {
    if (session && !isFetched) {
      fetchTopTracks();
      setIsFetched(true); // Set to true after fetching data
    }
  }, [session]);

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

  // If the top tracks haven't been fetched yet, display a loading message.
  if (topTracks.length === 0) {
    return <div>Loading top tracks...</div>;
  }
  // Otherwise, display the top tracks.
  return (
    <div className="card">
      <div className="card-header">
        <h3>Your Top 15 Tracks from the Last 30 Days</h3>
        <button onClick={handleCreatePlaylist} className="btn btn-primary">
          Create Playlist
        </button>
      </div>
      <ul className="list-group list-group-flush" style={listStyle}>
        {topTracks.map((track, index) => (
          <li key={index} className="list-group-item" style={listItemStyle}>
            <img
              src={track.album.images[2].url}
              alt={track.name}
              style={imageStyle}
            />
            <div>
              <strong>{track.name}</strong> by{" "}
              {track.artists.map((artist) => artist.name).join(", ")}
              <div className="text-muted">
                <small>Album: {track.album.name}</small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

TopTracks.propTypes = {
  session: PropTypes.object.isRequired,
};

export default TopTracks;
