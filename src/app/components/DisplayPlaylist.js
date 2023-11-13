import React, { useState, useEffect } from "react";
import ExamplePlaylist from "./ExamplePlaylist";
import songsData from "../../sample_songs/song_data.json";

function DisplayPlaylist(props) {
  const genre = props.selectedGenre;

  const [examplePlaylist, setExamplePlaylist] = useState(false);
  const [songList, setSongList] = useState([]);

  // Function to select a random set of songs
  const selectRandomSongs = () => {
    const availableSongs = songsData.filter((song) =>
      song.genre.includes(genre.toLowerCase())
    );
    const randomSongs = shuffleArray(availableSongs).slice(0, 25); // Change 25 to the desired number of songs
    setSongList(randomSongs);
  };

  useEffect(() => {
    selectRandomSongs();
  }, [genre]);

  const handleBackButtonClick = () => {
    setExamplePlaylist(true);
  };

  const handleButtonClick = () => {
    // When going back, select a new random playlist
    selectRandomSongs();
    setExamplePlaylist(false);
  };

  if (examplePlaylist) {
    return <ExamplePlaylist />;
  }

  return (
    <div>
      <br />
      <h1>This is your {genre} playlist!</h1>
      <div>
        {songList.map((song, index) => (
          <div key={index} className="song-list-item">
            <p>
              {song.name.length > 30
                ? `${song.name.substring(0, 30)}...`
                : song.name}{" "}
              by {song.artist[0]}
            </p>
          </div>
        ))}
      </div>
      <br />
      <button onClick={handleBackButtonClick}>BACK</button>
      <br />
      <button onClick={handleButtonClick}>Generate New Playlist</button>
    </div>
  );
}

// Function to shuffle an array randomly
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default DisplayPlaylist;
