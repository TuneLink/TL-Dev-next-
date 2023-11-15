// This component will be responsible for displaying the list of liked songs.

import React from "react";

const LikedSongsList = ({ songs }) => {
  return (
    <ol>
      {songs.map((song, index) => (
        <li key={index}>
          <p>===</p>
          {song.name} by {song.artists.map((artist) => artist.name).join(", ")}
          <br />
          Album: {song.album.name} <br />
          Release Date: {song.album.release_date} <br />
          Popularity: {song.popularity} <br />
        </li>
      ))}
    </ol>
  );
};

export default LikedSongsList;
