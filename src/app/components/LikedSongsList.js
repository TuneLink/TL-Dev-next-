// This component will be responsible for displaying the list of liked songs.

import React from "react";

const LikedSongsList = ({ songs }) => {
  const listStyle = {
    maxHeight: "400px",
    overflowY: "scroll",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Adjust the space between the image and the text
  };

  const imageStyle = {
    width: "60px", // Increased size
    height: "60px",
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>Your Recent Liked Songs:</h3>
      </div>
      <ul className="list-group list-group-flush" style={listStyle}>
        {songs.map((song, index) => (
          <li key={index} className="list-group-item">
            <img
              src={
                song.album.images[0]?.url || "https://via.placeholder.com/150"
              }
              alt={song.album.name}
              style={{ width: "60px", height: "60px", marginRight: "10px" }}
            />
            <strong>{song.name}</strong> by{" "}
            {song.artists.map((artist) => artist.name).join(", ")}
            <div className="text-muted">
              <small>
                Album: {song.album.name} <br />
                Release Date: {song.album.release_date} <br />
                Popularity: {song.popularity}
              </small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedSongsList;
