"use client";
import React from "react";

function Summary() {
  const handleClick = () => {
    alert(
      "This feature is still under development, Thank you for your understanding."
    );
  };

  return (
    <div className="container py-4 my-4 bg-white shadow-lg rounded">
      <div className="text-center px-3">
        <h2
          className="mb-3"
          style={{ fontWeight: "700", color: "#333", fontSize: "1.75rem" }}
        >
          Discover Tomorrow&apos;s Hits Today
        </h2>
        <p
          className="mb-4"
          style={{
            fontSize: "16px",
            color: "#555",
            margin: "0 auto",
          }}
        >
          We&apos;re all about connecting music enthusiasts with emerging
          artists. Dive into unique playlists and be part of a genuine community
          shaping the future of music discovery.
        </p>
        <button
          className="btn btn-primary px-3 py-2"
          style={{
            transition: "0.3s",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            fontSize: "16px",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
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
