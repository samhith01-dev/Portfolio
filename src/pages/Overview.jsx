import React from "react";
import Navbar from "../components/Navbar";

function Overview() {
  return (
    <>
      <Navbar />

      <div className="page-section">
        <h1>Overview</h1>

        <div className="overview-container">
          <div className="overview-card">
            <h3>About Me</h3>
            <p>
              I’m a Computer Science Engineering student passionate about
              building seamless web applications and solving complex problems
              using clean and efficient code.
            </p>
          </div>

          <div className="overview-card">
            <h3>Education</h3>
            <p>
              B.Tech in Computer Science Engineering <br />
              KL University
            </p>
          </div>

          <div className="overview-card">
            <h3>Core Strengths</h3>
            <ul>
              <li>Strong foundation in Data Structures</li>
                <li>PostgreSQL</li>
                <li>Frontend Development with React</li>
              <li>Problem Solving & Logical Thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;