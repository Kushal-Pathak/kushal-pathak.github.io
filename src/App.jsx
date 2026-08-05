import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import profileImage from "./assets/images/profile.png";
import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <section className="hero">
        <div className="profile-wrapper">
          <svg
            className="profile-arcs"
            viewBox="0 0 180 180"
            aria-hidden="true"
          >
            <path
              className="profile-arc lavender"
              d="M 55.0 11.4 A 86 86 0 0 1 125.0 11.4"
              strokeLinecap="round"
            />
            <path
              className="profile-arc pink"
              d="M 153.9 32.5 A 86 86 0 0 1 175.5 99.0"
              strokeLinecap="round"
            />
            <path
              className="profile-arc yellow"
              d="M 164.5 133.0 A 86 86 0 0 1 107.9 174.1"
              strokeLinecap="round"
            />
            <path
              className="profile-arc mint"
              d="M 72.1 174.1 A 86 86 0 0 1 15.5 133.0"
              strokeLinecap="round"
            />
            <path
              className="profile-arc cyan"
              d="M 4.5 99.0 A 86 86 0 0 1 26.1 32.5"
              strokeLinecap="round"
            />
          </svg>

          <div className="profile-ring">
            <img
              src={profileImage}
              alt="Kushal Pathak"
              className="profile-image"
            />
          </div>
        </div>

        <h1 className="hero-title">
          Kushal Pathak<span>.</span>
        </h1>

        <p className="hero-role">
          Software Engineer{" "}
          <span className="backend">(Backend</span>
          <span> &amp; </span>
          <span className="frontend">Frontend)</span>
        </p>

        <p className="hero-description">
          I build clean, scalable, and delightful web experiences.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/kushal-pathak"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/KushalPathak7"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/kushal-pathak/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a href="mailto:kushalpathak80@gmail.com" aria-label="Email">
            <MdEmail />
          </a>
        </div>

        <div className="hero-actions">
          <a href="#about" className="hero-button">
            About Me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-button"
          >
            Resume
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
