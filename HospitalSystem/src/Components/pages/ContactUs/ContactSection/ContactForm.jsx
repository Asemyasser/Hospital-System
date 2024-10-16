import React, { useState } from 'react';
import './ContactSection.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{11}$/;

    if (!formData.email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.match(phonePattern)) {
      alert("Please enter a valid 11-digit phone number.");
      return;
    }

    if (formData.subject.trim() === "") {
      alert("Please enter a subject.");
      return;
    }

    if (formData.message.trim() === "") {
      alert("Please enter a message.");
      return;
    }
  };

  return (
    <div className="contact-form col-12 col-md-6">
      <h2>We Love To Hear From You</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            id="phone"
            className="form-control"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            id="subject"
            className="form-control"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            id="message"
            className="form-control"
            placeholder="Write a message..."
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Send Message »
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
