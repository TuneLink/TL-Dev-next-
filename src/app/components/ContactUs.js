"use client";
import React from "react";

const Section3 = () => {
  return (
    <div className="container py-5 my-5 bg-white shadow-lg rounded">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {" "}
          {/* Centering the column */}
          <h2
            className="text-center mb-4"
            style={{
              fontWeight: "700",
              color: "#333",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }} // Modern font
          >
            Contact Us
          </h2>
          <p
            className="text-center mb-4"
            style={{
              fontSize: "18px",
              color: "#333",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Have questions or feedback? We&apos;d love to hear from you.
          </p>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6 mx-auto">
                <label htmlFor="inputName" style={{ color: "#333" }}>
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
                <label htmlFor="inputEmail" style={{ color: "#333" }}>
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
              <label htmlFor="inputSubject" style={{ color: "#333" }}>
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
              <label htmlFor="inputMessage" style={{ color: "#333" }}>
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
                className="btn px-4 py-2"
                style={{
                  transition: "0.3s",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  fontSize: "18px",
                  backgroundColor: "#ffae03",
                  color: "#333", // if you want the text color on the button to be #333
                  borderColor: "#ffae03", // if you want to set the border color to match the background
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
