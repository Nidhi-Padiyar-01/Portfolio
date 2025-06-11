import "../csscomponent/Home.css";
import React, { useState, useEffect } from "react";
import Aboutme from "../component/Aboutme.js";
import Skill from "../component/Skill.js";
import Loader from "./Loader";
import Footer from "./Footer";
import Project from "../component/Project.js";
import Contact from "../component/Contact.js";
import { Link } from "react-router-dom";

function Home() {
  const [text, setText] = useState("WEB");

  // For switching between WEB and MOBILE
  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === "WEB" ? "MOBILE" : "WEB"));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // For typewriter effect on tagline
  const fullText =
    "A  web developer passionate about user-focused design and development.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <div className="hero" id="home">
        <div className="hero-content">
          <img src="/gif.gif" alt="avatar" className="avatar" />
          <div className="text-section">
            <p className="intro">Hi, I am Nidhi, I design</p>
            <h1 className="main-heading">
              <span className="switch-word">{text}</span>
              <br />
              APPLICATIONS
            </h1>

            <p className="tagline">{typedText}</p>

            <a
              href="https://drive.google.com/file/d/1RWuANLvE2UboMq5OHZA4WGVd8Z7ahU-r/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>

      <div id="about">
        <Aboutme />
      </div>

      <div id="skills">
        <Skill />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Home;
