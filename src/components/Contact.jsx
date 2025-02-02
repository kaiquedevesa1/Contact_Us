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
          <div className="query-option">
            <input type="radio" name="query" value="general" />

            <label className="check">General Enquiry</label>
          </div>

          <div className="query-option">
            <input type="radio" name="query" value="suport" />
            <label className="check">Support Request</label>
          </div>
        </div>
      </div>

      <div>
        <p>Message *</p>
        <textarea
          className="text-message"
          name="message"
          id="message"
        ></textarea>
      </div>

      <div className="box-confirm">
        <input type="checkbox" id="confirm" />
        <label htmlFor="confirm">
          I consent to being contacted by the team *
        </label>
      </div>

      <button>Enviar</button>
    </div>
  );
};

export default Contact;
