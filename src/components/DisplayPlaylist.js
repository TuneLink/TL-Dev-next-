'use client'
import React, { useState, useEffect } from 'react';
import songsData from '../sample_songs/song_data.json'; // Update the path to where your JSON file is

import ExamplePlaylist from './ExamplePlaylist';

function DisplayPlaylist(props) {
  // Get the selected genre from props
  const genre = props.selectedGenre;

  // State to track if the example playlist should be displayed
  const [examplePlaylist, setExamplePlaylist] = useState(false);

  // State to store songs
  const [songList, setSongList] = useState([]);

  // Effect to filter songs by genre and set song list
  useEffect(() => {
    // Assuming your JSON structure is an array of song objects with a 'genre' key
    const filteredSongs = songsData.filter(song => song.genre === genre);
    setSongList(filteredSongs);
  }, [genre]); // This effect runs when the genre prop changes

  // Function to handle the button click to show the example playlist
  const handleButtonClick = () => {
    setExamplePlaylist(true);
  };

  // If the examplePlaylist state is true, render the ExamplePlaylist component
  if (examplePlaylist) {
    return <ExamplePlaylist />;
  }

  // Render the main component
  return (
    <div>
      <br />
      <h1>This is your {genre} playlist!</h1>
      <div>
        {/* Map over the songList and display each song */}
        {songList.map((song, index) => (
          <div key={index}>
            {/* Display song name and artist */}
            {song.Name} by {song.Artist}
          </div>
        ))}
      </div>
      <br />
      <button onClick={handleButtonClick}>BACK</button>
      <br />
    </div>
  );
}

export default DisplayPlaylist;
