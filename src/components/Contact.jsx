import React, { useState } from "react";
import "./Contact_style.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: null,
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

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName || formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.lastName || formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
    }

    if (!formData.email || formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.query || formData.query.trim() === "") {
      newErrors.query = "Query Type is required";
    }

    if (!formData.message || formData.message.trim() === "") {
      newErrors.message = "Message is required";
    }

    if (!formData.consent) {
      newErrors.consent = "You must accept the terms";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted sucessfully!", formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        query: "",
        message: "",
        consent: false,
      });

      setErrors({});
    }
  };

  return (
    <form className="container-contact" onSubmit={handleSubmit}>
      <h1 className="title">Contact Us</h1>

      <div className="form-name">
        <div className="first-name">
          <p>First Name *</p>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="last-name">
          <p>Last Name *</p>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>

      <div className="email">
        <p>Email Adress * </p>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="query-type">
        <p>Query Type *</p>
        <div className="options">
          <div
            className={`query-option ${
              formData.query === "general" ? "option-click" : ""
            }`}
          >
            <input
              type="radio"
              id="check-g"
              name="query"
              value="general"
              checked={formData.query === "general"}
              onChange={handleChange}
            />
            <label htmlFor="check-g">General Enquiry</label>
          </div>

          <div
            className={`query-option ${
              formData.query === "suport" ? "option-click" : ""
            }`}
          >
            <input
              type="radio"
              id="check-s"
              name="query"
              value="suport"
              checked={formData.query === "suport"}
              onChange={handleChange}
            />
            <label htmlFor="check-s">Support Request</label>
          </div>
        </div>
        {errors.query && <span className="error">{errors.query}</span>}
      </div>

      <div>
        <p>Message *</p>
        <textarea
          className="text-message"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}
      </div>

      <div className="box-confirm">
        <input
          type="checkbox"
          id="confirm"
          name="consent"
          value={formData.consent}
        />
        <label htmlFor="confirm">
          I consent to being contacted by the team *
        </label>
        {errors.consent && <span className="error">{errors.message}</span>}
      </div>

      <div className="container-submit">
        <button className="submit">Enviar</button>
      </div>
    </form>
  );
};

export default Contact;
