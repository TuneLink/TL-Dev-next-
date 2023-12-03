"use client";
import React, { useState } from "react";
import DisplayPlaylist from "./DisplayPlaylist"; // Import the Playlist component
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function ExamplePlaylist() {
  // State to track whether to display the playlist and the selected genre
  const [displayPlaylist, setDisplayPlaylist] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Function to handle button click and display the playlist with the selected genre
  const handleButtonClick = (genre = "") => {
    setDisplayPlaylist(true); // Set displayPlaylist to true
    setSelectedGenre(genre); // Set the selected genre in the state
  };

  // If displayPlaylist is true, render the DisplayPlaylist component with the selected genre
  if (displayPlaylist) {
    return <DisplayPlaylist selectedGenre={selectedGenre} />;
  }

  // Genre data to be mapped
  const genres = [
    {
      title: "Rock",
      icon: "bi bi-boombox", // Corrected class name
      genre: "Rock",
    },
    {
      title: "Jazz",
      icon: "bi-music-note-beamed", // Example icon for Jazz
      genre: "Jazz",
    },
    {
      title: "Pop",
      icon: "bi-music-player", // Example icon for Pop
      genre: "Pop",
    },
    {
      title: "EDM",
      icon: "bi-music-note-beamed", // Corrected class name
      genre: "EDM",
    },
    {
      title: "Rap",
      icon: "bi-music-note-beamed", // Corrected class name
      genre: "Rap",
    },
    {
      title: "Lo-Fi",
      icon: "bi-music-note-beamed", // Corrected class name
      genre: "Lo-Fi",
    },
    {
      title: "Country",
      icon: "bi-music-note-beamed", // Corrected class name
      genre: "Country",
    },
    {
      title: "House",
      icon: "bi-music-note-beamed", // Corrected class name
      genre: "House",
    },
  ];

  // Render the main component
  return (
    <div className="container py-5">
      <h2
        className="text-center mb-5"
        style={{ fontWeight: "700", color: "#333" }}
      >
        Generate a new playlist!
      </h2>
      <div className="row justify-content-center">
        {genres.map((genre, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <div
              className="card bg-white shadow-lg"
              style={{ borderRadius: "15px", transition: "0.3s" }}
            >
              <div className="card-body text-center p-5">
                <div
                  className="rounded-circle d-inline-flex justify-content-center align-items-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "0 auto 20px",
                    backgroundColor: "#ffae03",
                  }}
                >
                  <i
                    className={`bi ${genre.icon} text-white`}
                    style={{ fontSize: "4rem" }}
                  ></i>
                </div>
                <h5 className="card-title font-weight-bold">{genre.title}</h5>
                <button
                  style={{
                    transition: "0.3s",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                    fontSize: "18px",
                    backgroundColor: "#ffae03",
                    color: "#333", // if you want the text color on the button to be #333
                    borderColor: "#ffae03", // if you want to set the border color to match the background
                  }}
                  onClick={() => handleButtonClick(genre.genre)}
                  className="btn btn-primary"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamplePlaylist;
