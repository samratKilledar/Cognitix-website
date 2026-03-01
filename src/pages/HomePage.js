import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to My Website</h1>
        <p>This is a simple home page built with React JS.</p>
        <button className="btn">Get Started</button>
      </header>
    </div>
  );
}

export default HomePage;