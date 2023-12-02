
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Navigation from "../components/Nav";
import "../css/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const isFormValid = validateForm();

    if (isFormValid) {
      // Add logic to handle form submission (e.g., send data to a server)
      console.log("Form submitted:", formData);
      // You can add your logic here to send the form data to a server or perform any other action
    }
  };

  const validateForm = () => {
    // Validate form fields
    const isNameValid = formData.name.trim() !== "";
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const isMessageValid = formData.message.trim() !== "";

    // Set touched for all fields
    setTouchedFields({
      name: true,
      email: true,
      message: true,
    });

    // Return true if all fields are valid
    return isNameValid && isEmailValid && isMessageValid;
  };

  return (
    <div>
      <Navigation /> {/* Include Navigation here */}
      <h2 class="page-titles">
        Contact
      </h2>
      <div class="resumetext">
      <form class="form" onSubmit={handleSubmit}>
        <label id="contact-form" htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={() => handleBlur("name")}
          required
        />
        {touchedFields.name && !formData.name.trim() && (
          <p className="error-message">Name is required</p>
        )}

        <label id="contact-form" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur("email")}
          required
        />
        {touchedFields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
          <p className="error-message">Invalid email address</p>
        )}

        <label id="contact-form" htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur("message")}
          required
        />
        {touchedFields.message && !formData.message.trim() && (
          <p className="error-message">Message is required</p>
        )}

        <button type="submit">Submit</button>
      </form></div>
      <Footer />
    </div>
  );
};

export default Contact;