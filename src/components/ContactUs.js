"use client";
import React from "react";

function ContactUs() {
  const handleClick = () => {
    alert(
      "This feature is still under development, Thank you for your understanding."
    );
  };

  return (
    <div className="container py-5 my-5 bg-white shadow-lg rounded">
      <h2
        className="text-center mb-5"
        style={{ fontWeight: "700", color: "#333" }}
      >
        Contact Us
      </h2>
      <p
        className="text-center mb-5"
        style={{ fontSize: "18px", color: "#555" }}
      >
        Have questions or feedback? We&apos;d love to hear from you.
      </p>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName" className="text-primary">
              <i className="bi bi-person-fill"></i> Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail" className="text-primary">
              <i className="bi bi-envelope-fill"></i> Email
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
            <i className="bi bi-tag-fill"></i> Subject
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
            <i className="bi bi-pencil-fill"></i> Message
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
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
            }}
            onClick={handleClick}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
