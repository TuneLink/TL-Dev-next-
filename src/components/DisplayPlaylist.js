'use client'
import './Playlist.css'
import ExamplePlaylist from './ExamplePlaylist';
import React, { useState } from 'react';

function DisplayPlaylist(props) {
  // Get the selected genre from props
  const genre = props.selectedGenre;

  // State to track if the example playlist should be displayed
  const [examplePlaylist, setExamplePlaylist] = useState(false);

  // Initialize an empty array to store song data
  const songList = [];

  // Generate 25 example songs and add them to the songList array
  for (let i = 1; i <= 25; i++) {
    const song = {
      Name: `Song ${i}`, // Generate song name
      Artist: 'N/A',      // Set artist to "N/A" for simplicity
    };
    songList.push(song);
  }

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
    <div className='Playlist'>
      <br />
      <h1>This is your {genre} playlist!</h1>
      <div className='InnerContainer'>
        {/* Map over the songList and display each song */}
        {songList.map((item, index) => {
          return (
            <div className="SongBox" key={index}>
              {/* Display song name and artist */}
              {songList[index]["Name"]} by {songList[index]["Artist"]}
            </div>
          );
        })}
      </div>
      <br />
      <button onClick={handleButtonClick}>BACK</button>
      <br />
    </div>
  );
}

export default DisplayPlaylist;
