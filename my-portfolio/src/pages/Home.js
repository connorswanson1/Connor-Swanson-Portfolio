// Home.js
import React from 'react';
import profilePhoto from '../assets/profile.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="text-container">
        <div className="intro-text">
          <h1>Hi, I'm <span className="name-highlight">Connor Swanson</span></h1>
          <p>Software Engineer | Tech Enthusiast | Problem Solver</p>
          {/* Add buttons or links for projects or contact here */}
        </div>
      </div>
      <div className="image-container">
        <img src={profilePhoto} alt="Connor Swanson" className="profile-photo" />
      </div>
    </div>
  );
}



export default Home;
