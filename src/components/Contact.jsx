import React from "react";
import "./Contact_style.css";

export const Contact = () => {
  return (
    <div className="container-contact">
      <h1 className="title">Contact Us</h1>

      <div className="form-name">
        <div className="first-name">
          <p>First Name *</p>
          <input type="text" />
        </div>
        <div className="last-name">
          <p>Last Name *</p>
          <input type="text" />
        </div>
      </div>

      <div className="email">
        <p>Email Adress * </p>
        <input type="text" />
      </div>

      <div className="query-type">
        <p>Query Type *</p>
        <div className="options">
          <label className="query-option">
            <input type="radio" name="query" value="general" />
            General Enquiry
          </label>
          <label className="query-option">
            <input
              className="suport"
              type="radio"
              name="query"
              value="suport"
            />
            Support Request
          </label>
        </div>
      </div>

      <div className="message">
        <p>Message *</p>
      </div>
    </div>
  );
};

export default Contact;
