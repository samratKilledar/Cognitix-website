import React from "react";
import "./Aboutuspageui.css";

function Aboutuspage() {
  return (
    <div className="page">

      {/* Title Section */}
      <h1>About Us</h1>

      <p className="about-text">
        This is a simple React website created for learning purpose.
        We are learning how to build modern and responsive websites
        using React JS.
      </p>

      {/* Features Section */}
      <div className="features">
        <h2>Our Features</h2>

        <div className="feature-box">
          <div className="card">
            <h3>⚡ Fast</h3>
            <p>React provides fast and smooth user experience.</p>
          </div>

          <div className="card">
            <h3>📱 Responsive</h3>
            <p>Works perfectly on mobile, tablet and desktop.</p>
          </div>

          <div className="card">
            <h3>🎨 Modern Design</h3>
            <p>Clean and attractive UI using CSS styling.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team">
        <h2>Our Team</h2>
        <p>
          We are passionate developers learning React JS and building
          modern web applications.
        </p>
      </div>

      {/* Button */}
      <button className="about-btn">Contact Us</button>

    </div>
  );
}

export default Aboutuspage;