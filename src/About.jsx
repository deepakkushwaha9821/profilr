import React from "react";
import './About.css';

import { Link } from 'react-router-dom';


import { FaBell, FaHome, FaClipboardCheck, FaUserCheck, FaBook, FaClock } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">

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
        <Link to="/Contact" className="contact-link">
          
            <span>Contact</span>
          </Link>
      </div>

     
      <div className="about-content">
        <h2>About Us</h2>
        <img
          src="image"
          alt="Businessman"
          className="about-image"
        />
    
        <p>
          We are a team of dedicated professionals driven by creativity,
          innovation, and a passion for exceptional design. With years of
          expertise in mobile application and website design, we specialize in
          transforming ideas into captivating digital experiences that seamlessly
          combine functionality and aesthetics.
        </p>
        <p>
          At the core of our work is our mastery of modern design tools like
          Figma, allowing us to bring concepts to life with precision and style.
          We take pride in crafting user-centric designs that are intuitive,
          visually appealing, and optimized for performance.
        </p>
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

export default About;
