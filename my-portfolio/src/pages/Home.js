// Home.js
import React from 'react';
import profilePhoto from '../assets/profile.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { FaEnvelope } from 'react-icons/fa';
import '../styles/Home.css';


function Home() {
  return (
    <div className="home-container">
      <div className="text-container">
        <div className="intro-text">
          <h1>Hi, I'm <Link to="/about" className="name-link">Connor Swanson</Link></h1>
          <p>Software Engineer | Tech Enthusiast | Problem Solver</p>
          <div className="button-container">
            <Link to="/contact" className="home-button"> Contact <FaEnvelope /></Link>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={profilePhoto} alt="Connor Swanson" className="profile-photo" />
      </div>
    </div>
  );
}



export default Home;
