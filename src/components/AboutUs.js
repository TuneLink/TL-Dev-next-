'use client'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
          "Sajjad",
        ].map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card bg-white shadow-lg"
              style={{
                borderRadius: "15px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <div className="card-body text-center">
                {/* Icon with circular style */}
                <div className="rounded-circle bg-primary d-inline-flex justify-content-center align-items-center"
                  style={{
                    width: "100px",
                    height: "100px",
                    margin: "0 auto 20px",
                  }}
                >
                  <i className="bi bi-person-circle text-white" style={{ fontSize: "4rem" }}></i>
                </div>
                {/* Member name and description */}
                <h5 className="card-title font-weight-bold">
                  {member}
                </h5>
                <p className="card-text">
                  Principal Software Engineer
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;