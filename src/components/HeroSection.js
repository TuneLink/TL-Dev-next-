"use client"
import React from "react";

// hero section 1
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
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(to right, #e6e9f0 0%, #eef1f5 100%)",
            }}
          >
            <div className="card-body" style={{ padding: "50px" }}>
              <h2
                className="card-title"
                style={{
                  color: "#333",
                  fontWeight: "600",
                  marginBottom: "25px",
                }}
              >
                Start Exploring Emerging Music With TuneLink!
              </h2>
              <p
                className="card-text"
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  color: "#555",
                  marginBottom: "30px",
                }}
              >
                At TuneLink, we&apos;re deeply passionate about uncovering emerging
                talent in the music world. Our platform is crafted to curate
                personalized playlists that revolve around specific genres,
                giving our users a chance to discover and support up-and-coming
                artists.
              </p>
                {/* <button
                  className="btn"
                  style={{
                    background:
                      "linear-gradient(90deg, #1e67d8 0%, #5d9cec 100%)",
                    padding: "12px 25px",
                    color: "white",
                    fontWeight: "500",
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0px)";
                  }}
                >
                  <i
                    className="bi bi-arrow-right-circle-fill mr-2"
                    style={{ fontSize: "1.3rem" }}
                  ></i>
                  Explore Now
                </button> */}
            </div>
            <div
              className="card-footer text-muted"
              style={{
                backgroundColor: "#f7f9fc",
                fontSize: "15px",
                borderTop: "1px solid #ddd",
              }}
            >
              Join our growing community of music enthusiasts.
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <h2
          className="text-center mb-5"
          style={{ fontWeight: "700", color: "#333" }}
        >
          Features
        </h2>
        <div className="row justify-content-center">
          <div className="col-lg-4 mb-4">
            <div
              className="card bg-light shadow-lg"
              style={{ borderRadius: "15px", overflow: "hidden" }}
            >
              <div className="card-body text-center p-5">
                <i
                  className="bi bi-vinyl-fill text-primary"
                  style={{ fontSize: "5rem", marginBottom: "20px" }}
                ></i>
                <h5 className="card-title font-weight-bold">
                  Discover New Bops
                </h5>
                <p className="card-text mb-4">
                  Generate curated playlists based on your favorite genres or mood.
                </p>
                {/* <button className="btn btn-primary">Start Generating Playlists</button> */}
              </div>
              <span
                className="badge badge-primary position-absolute"
                style={{
                  top: "20px",
                  right: "1px",
                  transform: "translate(-50%, -50%)",
                  zIndex: "10",
                }}
              >
                New
              </span>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div
              className="card bg-light shadow-lg"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body text-center p-5">
                <i
                  className="bi bi-people-fill text-primary"
                  style={{ fontSize: "5rem", marginBottom: "20px" }}
                ></i>
                <h5 className="card-title font-weight-bold">
                  Discover The Undiscovered
                </h5>
                <p className="card-text mb-4">
                  Support up-and-coming artists and help them grow.
                </p>
                {/* <button className="btn btn-primary">Check Them Out</button> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div
              className="card bg-light shadow-lg"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body text-center p-5">
                <i
                  className="bi bi-box2-heart-fill text-primary"
                  style={{ fontSize: "5rem", marginBottom: "20px" }}
                ></i>
                <h5 className="card-title font-weight-bold">
                  More Coming Soon...
                </h5>
                <p className="card-text mb-4">
                  We&apos;re working hard to bring you more cool features!
                </p>
                {/* <button className="btn btn-primary">Start Exploring</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
