"use client"
import React, { useState } from 'react';
import DisplayPlaylist from './DisplayPlaylist'; // Import the Playlist component

function ExamplePlaylist() {
  // State to track whether to display the playlist and the selected genre
  const [displayPlaylist, setDisplayPlaylist] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Function to handle button click and display the playlist with the selected genre
  const handleButtonClick = (genre="") => {
    setDisplayPlaylist(true); // Set displayPlaylist to true
    setSelectedGenre(genre); // Set the selected genre in the state
  };

  // If displayPlaylist is true, render the DisplayPlaylist component with the selected genre
  if (displayPlaylist) {
    return <DisplayPlaylist selectedGenre={selectedGenre} />;
  }

  // Render the main component
  return (
    <div>
      <br />
      <h1>Example Playlist</h1>
      <p>Click one of the buttons below:</p>
      <div>
        {/* Button to select Rock genre */}
        <button onClick={() => handleButtonClick('Rock')} >
          {/* Icon for the electric guitar*/}
          <i class="fa-solid fa-guitar-electric"></i>
          <p><br />Rock</p>
        </button>
        {/* Button to select Jazz genre */}
        <button onClick={() => handleButtonClick('Jazz')} > 
        <i class="fa-solid fa-saxophone"></i>
        <p><br />Jazz</p>
        </button>
        {/* Button to select Pop genre */}
        <button onClick={() => handleButtonClick('Pop')}>
        <i class="fa-solid fa-microphone-stand"></i>
          <p><br />Pop</p>
        </button>
      </div>
    </div>
  );
}

export default ExamplePlaylist;
