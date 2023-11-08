"use client"
import React from "react";

function Summary() {
  const handleClick = () => {
    alert("This is still under development!");
  };

  return (
    // Apply gradient background to the entire container
    <div className="container py-4 my-4 shadow-lg rounded" style={{
      background: 'linear-gradient(to right, #f2780c 0%, #ffc251 100%)',
      borderRadius: "20px",
    }}>
      <div className="text-center px-3">
        <h2
          className="mb-3"
          style={{
            fontWeight: "700",
            color: "#fff",
            fontSize: "1.75rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Discover Tomorrow's Hits Today
        </h2>
        <p
          className="mb-4"
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#fff",
            fontFamily: "'Poppins', sans-serif",
            margin: "0 auto",
            maxWidth: "600px", // Optional, for better readability
          }}
        >
          We're all about connecting music enthusiasts with emerging artists.
          Dive into unique playlists and be part of a genuine community shaping
          the future of music discovery.
        </p>
        <button
          className="btn px-3 py-2"
          style={{
            transition: "0.3s",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
            fontSize: "18px",
            fontWeight: "500",
            background: "#fff",
            color: "#f2780c",
            borderRadius: "30px",
            fontFamily: "'Poppins', sans-serif",
            border: "none",
            cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.1)";
          }}
          onClick={handleClick}
        >
          <i className="bi bi-play-fill mr-1"></i> Get Started!
        </button>
      </div>
    </div>
  );
}

export default Summary;
