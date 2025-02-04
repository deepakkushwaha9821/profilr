import React from 'react';
import { FaEnvelope, FaPhone, FaBell, FaHome, FaClipboardCheck, FaUserCheck, FaBook, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
  
      <div className="header">
        <img
          src="image"
          alt="User"
          className="profile-pic"
        />
        <div className="header-text">
          <p>Hello, Welcome 🎉</p>
          <h3>John Weak</h3>
        </div>
        <FaBell className="notification-icon" />
      </div>

  
      <div className="contact-content">
        <h2>Contact us</h2>

        <div className="contact-info">
          <p><FaEnvelope /> <b>Email</b></p>
          <p>workforeign@gmail.com</p>

          <p><FaPhone /> <b>Phone No.</b></p>
          <p>+44 (0) XXXX XXX XXX</p>
        </div>

        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="John Weak" />

          <label>Email</label>
          <input type="email" placeholder="john@example.com" />

          <label>Message</label>
          <textarea placeholder="Enter your query........"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>


      <div className="bottom-nav">
        <div className="nav-item">
          <FaHome />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <FaClipboardCheck />
          <span>Compliance</span>
        </div>
        <div className="nav-item">
          <FaUserCheck />
          <span>Eligibility</span>
        </div>
        <div className="nav-item">
          <FaBook />
          <span>Resource</span>
        </div>
        <div className="nav-item">
          <FaClock />
          <span>Reminder</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
