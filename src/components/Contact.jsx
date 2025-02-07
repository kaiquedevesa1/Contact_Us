import React, { useState } from "react";
import "./Contact_style.css";

export const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleClick = (value) => {
    setSelectedOption(value);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

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
          <div
            className={`query-option ${
              selectedOption === "general" ? "option-click" : ""
            }`}
            onClick={() => handleClick("general")}
          >
            <input
              type="radio"
              id="check-g"
              name="query"
              value="general"
              checked={selectedOption === "general"}
              onChange={() => handleClick("general")}
            />
            <label htmlFor="check-g">General Enquiry</label>
          </div>

          <div
            className={`query-option ${
              selectedOption === "suport" ? "option-click" : ""
            }`}
            onClick={() => handleClick("suport")}
          >
            <input
              type="radio"
              id="check-s"
              name="query"
              value="suport"
              checked={selectedOption === "suport"}
              onChange={() => handleClick("suport")}
            />
            <label htmlFor="check-s">Support Request</label>
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

      <div className="container-submit">
        <button className="submit">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
