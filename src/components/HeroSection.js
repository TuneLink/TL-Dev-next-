"use client"
import React from "react";

const HeroSection = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8">
          <div
            className="card mb-3"
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              background: `linear-gradient(to right, ${'#f2780c'} 0%, ${'#ffc251'} 100%)`, // Gradient using #ffae03
            }}
          >
            <div className="card-body" style={{ padding: "50px" }}>
              <h2
                className="card-title"
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  marginBottom: "25px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Start Exploring Emerging Music With TuneLink!
              </h2>
              <p
                className="card-text"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.7",
                  color: "#fff",
                  marginBottom: "30px",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                At TuneLink, we're deeply passionate about uncovering emerging
                talent in the music world. Our platform is crafted to curate
                personalized playlists that revolve around specific genres,
                giving our users a chance to discover and support up-and-coming
                artists.
              </p>
              <div className="text-center">
                <button
                  className="btn"
                  style={{
                    background: "#fff",
                    color: "#ffae03",
                    fontWeight: "500",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "12px 30px",
                    borderRadius: "30px",
                    fontSize: "18px",
                    fontFamily: "'Poppins', sans-serif",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <i
                    className="bi bi-music-note-beamed mr-2"
                    style={{ fontSize: "1.3rem" }}
                  ></i>
                  Explore Now
                </button>
              </div>
            </div>
            <div
              className="card-footer text-muted"
              style={{
                backgroundColor: "#fffbe6", // Lightened version of #ffae03 for the footer
                fontSize: "15px",
                borderTop: "1px solid #ffdd99", // Border color lightened for a softer transition
                color: "#333",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Join our growing community of music enthusiasts.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
