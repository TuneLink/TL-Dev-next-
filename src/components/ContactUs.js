"use client"
import React from "react";

const Section3 = () => {
  return (
    <div className="container py-5 my-5 bg-white shadow-lg rounded">
      <div className="row">
        <div className="col-md-8 offset-md-2"> {/* Centering the column */}
          <h2
            className="text-center mb-4"
            style={{ fontWeight: "700", color: "#333", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }} // Modern font
          >
            Contact Us
          </h2>
          <p
            className="text-center mb-4"
            style={{ fontSize: "18px", color: "#555", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
          >
            Have questions or feedback? We'd love to hear from you.
          </p>

          <form>
            <div className="form-row">
              <div className="form-group col-md-6 mx-auto">
                <label htmlFor="inputName" className="text-primary">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group col-md-6 mx-auto">
                <label htmlFor="inputEmail" className="text-primary">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputSubject" className="text-primary">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="inputSubject"
                placeholder="Message Subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputMessage" className="text-primary">
                Message
              </label>
              <textarea
                className="form-control"
                id="inputMessage"
                rows="5"
                placeholder="Your Message Here"
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary px-4 py-2"
                style={{
                  transition: "0.3s",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  fontSize: "18px",
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section3;
