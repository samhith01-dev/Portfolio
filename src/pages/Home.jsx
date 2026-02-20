import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="hero">
        <video autoPlay loop muted className="bg-video">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="overlay"></div>

        <Navbar />

        <div className="hero-content">
          <h1 className="small-title">Veda Samhith Reddy</h1>
          <h1>
            Seamless creativity across <br /> Web and Code
          </h1>

          <div className="buttons">
            <button
              className="primary"
              onClick={() =>
                document
                  .getElementById("skills")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Skills & Tools ↓
            </button>

            <button
              className="secondary"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=samhithveda6@gmail.com&su=Portfolio%20Contact&body=Hi%20Veda%20Samhith,%0A%0AI%20would%20like%20to%20connect%20with%20you.",
                  "_blank"
                )
              }
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div id="skills" className="skills-section">
        <h2>Skills & Tools</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Vite</p>
            <div className="card-progress">
              <div
                className="card-progress-bar"
                style={{ width: "70%" }}
              ></div>
            </div>
            <span className="level-text">70%</span>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express, PostgreSQL, MySQL</p>
            <div className="card-progress">
              <div
                className="card-progress-bar"
                style={{ width: "60%" }}
              ></div>
            </div>
            <span className="level-text">60%</span>
          </div>

          <div className="skill-card">
            <h3>Data Structures</h3>
            <p>C, C++, LinkedList, Stacks, Queues</p>
            <div className="card-progress">
              <div
                className="card-progress-bar"
                style={{ width: "75%" }}
              ></div>
            </div>
            <span className="level-text">75%</span>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, VS Code, Figma, Adobe PR</p>
            <div className="card-progress">
              <div
                className="card-progress-bar"
                style={{ width: "80%" }}
              ></div>
            </div>
            <span className="level-text">80%</span>
          </div>

          <div className="skill-card">
            <h3>Hobbies & Interests</h3>
            <p>Video Editing, Cinematography, Gaming</p>
            <div className="card-progress">
              <div
                className="card-progress-bar"
                style={{ width: "80%" }}
              ></div>
            </div>
            <span className="level-text">80%</span>
          </div>

          <div className="skill-card">
            <h3>Cloud DevOps</h3>
            <p>CI/CD, Docker, Kubernetes</p>
            <div className="card-progress">
              <div
                className="card-progress-bar"
                style={{ width: "50%" }}
              ></div>
            </div>
            <span className="level-text">50%</span>
          </div>
        </div>

        {/* SOCIAL ICONS BELOW SKILLS */}
        <div className="social-inline">
          <a
            href="https://www.linkedin.com/in/veda-samhith-reddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/samhith01-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;