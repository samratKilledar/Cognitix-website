<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./Aboutuspageui.css";
import { FaBolt, FaMobileAlt, FaPaintBrush, FaUsers } from "react-icons/fa";

function Aboutuspage() {

  // -------- Counter Function ----------
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

=======
import React from "react";
import "./Aboutuspageui.css";

function Aboutuspage() {
>>>>>>> main
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>About Our Website</h1>
        <p>
          We create modern, fast and responsive web applications using React JS.
        </p>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Our Features</h2>

        <div className="feature-box">

          <div className="card">
            <FaBolt className="icon"/>
            <h3>Fast Performance</h3>
            <p>Optimized React apps for smooth experience.</p>
          </div>

          <div className="card">
            <FaMobileAlt className="icon"/>
            <h3>Responsive</h3>
            <p>Perfect design for mobile and desktop devices.</p>
          </div>

          <div className="card">
            <FaPaintBrush className="icon"/>
            <h3>Modern UI</h3>
            <p>Beautiful and clean user interface design.</p>
          </div>

        </div>
      </section>

      {/* COUNTER SECTION */}
      <section className="counter">
        <div className="counter-box">
          <FaUsers className="counter-icon"/>
          <h2>{count}+</h2>
          <p>Happy Users</p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team">
        <h2>Our Team</h2>

        <div className="team-container">

          <div className="team-card">
            <h3>Developer</h3>
            <p>Frontend React Developer</p>
          </div>

          <div className="team-card">
            <h3>Designer</h3>
            <p>UI/UX Specialist</p>
          </div>

          <div className="team-card">
            <h3>Manager</h3>
            <p>Project Coordinator</p>
          </div>

        </div>
      </section>

      {/* CONTACT BUTTON */}
      <div className="contact-section">
        <button className="contact-btn">
          Contact Us
        </button>
      </div>

    </div>
  );
}

export default Aboutuspage;