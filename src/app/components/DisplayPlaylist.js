"use client"
import React, { useState, useEffect } from "react";
import ExamplePlaylist from "./ExamplePlaylist";
import songsData from "../../sample_songs/song_data.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function DisplayPlaylist(props) {
  const genre = props.selectedGenre;

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

  const handleNewPlaylistClick = () => {
    selectRandomSongs();
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-left" style={{ fontWeight: '700', color: '#333' }}> {genre} playlist</h1>
        <button 
        style={{
          transition: "0.3s",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          fontSize: "18px",
          backgroundColor: "#ffae03",
          color: "#333", // if you want the text color on the button to be #333
          borderColor: "#ffae03", // if you want to set the border color to match the background
        }}
        onClick={handleBackButtonClick} className="btn btn-primary">Back</button>
      </div>
      <div className="row justify-content-center">
        {songList.map((song, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <div className="card bg-white shadow-lg" style={{ borderRadius: '15px' }}>
              <div className="card-body text-center p-3">
                <h5 className="card-title">{song.name.length > 30 ? `${song.name.substring(0, 30)}...` : song.name}</h5>
                <p className="card-text">by {song.artist[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button 
        style={{
          transition: "0.3s",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          fontSize: "18px",
          backgroundColor: "#ffae03",
          color: "#333", // if you want the text color on the button to be #333
          borderColor: "#ffae03", // if you want to set the border color to match the background
        }}
        onClick={handleNewPlaylistClick} className="btn btn-primary">Generate New Playlist</button>
      </div>
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
