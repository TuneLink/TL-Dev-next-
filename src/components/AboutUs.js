'use client'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div className="container py-5">
      <h2
        className="text-center mb-5"
        style={{ fontWeight: "700", color: "#333" }}
      >
        Meet Our Team
      </h2>

      <div className="row justify-content-center">
        {[
          "Cooper",
          "Issac",
          "Zahir",
          "Jeremy",
          "Salsa",
        ].map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card bg-white shadow-lg"
              style={{
                borderRadius: "20px",
                transition: "0.3s",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div className="text-center pt-4">
                <i
                  className="bi bi-person-circle text-primary"
                  style={{ fontSize: "6rem", marginBottom: "20px" }}
                ></i>
              </div>

              <div className="card-body">
                <h5 className="card-title font-weight-bold text-center">
                  {member}
                </h5>
                <hr style={{ margin: "20px 0" }} />
                <p
                  className="card-text text-center"
                  style={{ fontSize: "16px" }}
                >
                  Principal Software Engineer
                </p>
              </div>

              <div className="card-footer bg-light d-flex justify-content-around">
                <a
                  href="https://github.com/TuneLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <i
                    className="bi bi-github"
                    style={{ fontSize: "1.5rem" }}
                  ></i> */}
                </a>
                <a
                  href="https://linkedin.com/in/YourLinkedInProfile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <i
                    className="bi bi-linkedin"
                    style={{ fontSize: "1.5rem" }}
                  ></i> */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
