import React from 'react';

const Contact = () => {
  return (
    <div className="contact-section">
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
      
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@bookstore.com</p>
        <p>Address: 123 Book Street, Book City, BK 10001</p>
      </div>
    </div>
  );
};

export default Contact;