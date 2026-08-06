import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import profileImage from "./assets/images/profile.png";
import "./App.css";

const floatingSymbols = [
  { symbol: "∑", left: "7%", top: "13%", size: "1.18rem", duration: "24s", delay: "-4s", dx: "28px", dy: "-18px", rotation: "24deg" },
  { symbol: "∫", left: "18%", top: "29%", size: "1.04rem", duration: "31s", delay: "-18s", dx: "-22px", dy: "24px", rotation: "-18deg" },
  { symbol: "∂", left: "30%", top: "11%", size: "1.18rem", duration: "27s", delay: "-9s", dx: "18px", dy: "22px", rotation: "40deg" },
  { symbol: "∇", left: "72%", top: "14%", size: "1.08rem", duration: "33s", delay: "-14s", dx: "-24px", dy: "-20px", rotation: "-32deg" },
  { symbol: "π", left: "88%", top: "25%", size: "1.08rem", duration: "29s", delay: "-7s", dx: "16px", dy: "27px", rotation: "28deg" },
  { symbol: "θ", left: "12%", top: "68%", size: "1.12rem", duration: "35s", delay: "-22s", dx: "24px", dy: "18px", rotation: "-36deg" },
  { symbol: "λ", left: "84%", top: "70%", size: "1.08rem", duration: "26s", delay: "-11s", dx: "-20px", dy: "22px", rotation: "18deg" },
  { symbol: "Ω", left: "58%", top: "82%", size: "1.04rem", duration: "30s", delay: "-16s", dx: "26px", dy: "-14px", rotation: "-26deg" },
  { symbol: "ħ", left: "39%", top: "88%", size: "1.08rem", duration: "28s", delay: "-6s", dx: "-18px", dy: "-24px", rotation: "34deg" },
  { symbol: "α", left: "5%", top: "44%", size: "1.08rem", duration: "38s", delay: "-24s", dx: "34px", dy: "-10px", rotation: "-12deg" },
  { symbol: "δ", left: "93%", top: "48%", size: "1.04rem", duration: "34s", delay: "-19s", dx: "-30px", dy: "16px", rotation: "16deg" },
  { symbol: "γ", left: "20%", top: "82%", size: "1.08rem", duration: "37s", delay: "-3s", dx: "18px", dy: "-26px", rotation: "22deg" },
  { symbol: "σ", left: "67%", top: "30%", size: "0.96rem", duration: "23s", delay: "-13s", dx: "-18px", dy: "18px", rotation: "-44deg" },
  { symbol: "μ", left: "33%", top: "63%", size: "1rem", duration: "32s", delay: "-20s", dx: "22px", dy: "-16px", rotation: "30deg" },
  { symbol: "η", left: "77%", top: "88%", size: "1.04rem", duration: "36s", delay: "-27s", dx: "-24px", dy: "-22px", rotation: "-20deg" },
  { symbol: "ξ", left: "13%", top: "91%", size: "1.08rem", duration: "41s", delay: "-30s", dx: "30px", dy: "-18px", rotation: "14deg" },
  { symbol: "ζ", left: "91%", top: "87%", size: "1.04rem", duration: "39s", delay: "-15s", dx: "-28px", dy: "-26px", rotation: "-24deg" },
  { symbol: "∀", left: "47%", top: "8%", size: "1rem", duration: "34s", delay: "-25s", dx: "20px", dy: "24px", rotation: "12deg" },
  { symbol: "∞", left: "61%", top: "9%", size: "1.04rem", duration: "28s", delay: "-8s", dx: "-22px", dy: "18px", rotation: "-16deg" },
  { symbol: "⊕", left: "25%", top: "48%", size: "1rem", duration: "32s", delay: "-21s", dx: "24px", dy: "12px", rotation: "18deg" },
  { symbol: "β", left: "51%", top: "94%", size: "1rem", duration: "30s", delay: "-10s", dx: "-20px", dy: "-24px", rotation: "-28deg" },
  { symbol: "φ", left: "81%", top: "39%", size: "1.04rem", duration: "27s", delay: "-12s", dx: "20px", dy: "-16px", rotation: "26deg" },
  { symbol: "ψ", left: "4%", top: "78%", size: "1.08rem", duration: "35s", delay: "-17s", dx: "20px", dy: "20px", rotation: "-34deg" },
  { symbol: "τ", left: "96%", top: "11%", size: "1rem", duration: "31s", delay: "-5s", dx: "-24px", dy: "20px", rotation: "36deg" },
];

const symbolSpinDurations = [
  "13s",
  "29s",
  "17s",
  "41s",
  "23s",
  "36s",
  "19s",
  "47s",
  "31s",
  "15s",
  "39s",
  "21s",
  "44s",
  "27s",
  "33s",
  "18s",
  "52s",
  "25s",
  "43s",
  "16s",
  "35s",
  "22s",
  "49s",
  "28s",
];

const symbolSpinDirections = [
  "normal",
  "reverse",
  "reverse",
  "normal",
  "reverse",
  "normal",
  "normal",
  "reverse",
  "normal",
  "reverse",
  "normal",
  "reverse",
  "reverse",
  "normal",
  "normal",
  "reverse",
  "normal",
  "reverse",
  "reverse",
  "normal",
  "reverse",
  "normal",
  "reverse",
  "normal",
];

const symbolColors = [
  "rgba(143, 108, 255, 0.3)",
  "rgba(255, 111, 150, 0.28)",
  "rgba(62, 223, 167, 0.28)",
  "rgba(88, 215, 255, 0.3)",
  "rgba(255, 180, 92, 0.28)",
  "rgba(99, 102, 241, 0.28)",
  "rgba(20, 184, 166, 0.28)",
  "rgba(236, 72, 153, 0.26)",
  "rgba(234, 179, 8, 0.28)",
  "rgba(59, 130, 246, 0.28)",
  "rgba(168, 85, 247, 0.27)",
  "rgba(16, 185, 129, 0.28)",
  "rgba(244, 114, 182, 0.27)",
  "rgba(14, 165, 233, 0.28)",
  "rgba(250, 204, 21, 0.27)",
  "rgba(129, 140, 248, 0.29)",
  "rgba(45, 212, 191, 0.27)",
  "rgba(251, 113, 133, 0.28)",
  "rgba(96, 165, 250, 0.28)",
  "rgba(192, 132, 252, 0.28)",
  "rgba(52, 211, 153, 0.28)",
  "rgba(251, 146, 60, 0.27)",
  "rgba(125, 211, 252, 0.29)",
  "rgba(217, 70, 239, 0.26)",
];

const symbolPulseDurations = [
  "7s",
  "11s",
  "8.5s",
  "13s",
  "9.5s",
  "12s",
  "7.8s",
  "14s",
  "10.5s",
  "8s",
  "15s",
  "9s",
  "12.8s",
  "7.4s",
  "11.6s",
  "13.5s",
  "8.8s",
  "10s",
  "14.5s",
  "7.2s",
  "12.2s",
  "9.8s",
  "15.5s",
  "10.8s",
];

const symbolPulseDelays = [
  "-1s",
  "-6s",
  "-3s",
  "-10s",
  "-5s",
  "-8s",
  "-2s",
  "-12s",
  "-7s",
  "-4s",
  "-11s",
  "-6.5s",
  "-9s",
  "-2.5s",
  "-8.5s",
  "-13s",
  "-3.5s",
  "-7.5s",
  "-14s",
  "-1.8s",
  "-10.5s",
  "-5.5s",
  "-12.5s",
  "-4.5s",
];

const symbolPulseScales = [
  "1.18",
  "1.11",
  "1.24",
  "1.14",
  "1.2",
  "1.16",
  "1.22",
  "1.13",
  "1.19",
  "1.25",
  "1.12",
  "1.21",
  "1.15",
  "1.23",
  "1.17",
  "1.1",
  "1.24",
  "1.14",
  "1.2",
  "1.22",
  "1.16",
  "1.25",
  "1.13",
  "1.19",
];

const symbolPulseDirections = [
  "alternate",
  "alternate-reverse",
  "alternate-reverse",
  "alternate",
  "alternate-reverse",
  "alternate",
  "alternate",
  "alternate-reverse",
  "alternate",
  "alternate-reverse",
  "alternate-reverse",
  "alternate",
  "alternate",
  "alternate-reverse",
  "alternate",
  "alternate-reverse",
  "alternate-reverse",
  "alternate",
  "alternate-reverse",
  "alternate",
  "alternate",
  "alternate-reverse",
  "alternate",
  "alternate-reverse",
];

function App() {
  return (
    <main className="portfolio">
      <div className="symbol-field" aria-hidden="true">
        {floatingSymbols.map((item, index) => (
          <span
            className="symbol-token"
            key={`${item.symbol}-${item.left}-${item.top}`}
            style={{
              "--left": item.left,
              "--top": item.top,
              "--size": item.size,
              "--duration": item.duration,
              "--delay": item.delay,
              "--dx": item.dx,
              "--dy": item.dy,
              "--rotation": item.rotation,
              "--spin-duration": symbolSpinDurations[index],
              "--spin-direction": symbolSpinDirections[index],
              "--symbol-color": symbolColors[index],
              "--pulse-duration": symbolPulseDurations[index],
              "--pulse-delay": symbolPulseDelays[index],
              "--pulse-scale": symbolPulseScales[index],
              "--pulse-direction": symbolPulseDirections[index],
            }}
          >
            <span className="symbol-glyph">
              <span className="symbol-core">{item.symbol}</span>
            </span>
          </span>
        ))}
      </div>

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
          Fullstack Software Engineer{" "}
          {/* <span className="backend">(Backend</span>
          <span> &amp; </span>
          <span className="frontend">Frontend)</span> */}
        </p>

        <p className="hero-description">
          I turn ambitious ideas into clear, scalable, and user-friendly products.
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
