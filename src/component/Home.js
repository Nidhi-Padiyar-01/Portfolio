import "../csscomponent/Home.css";
import React, { useRef } from "react";
import Aboutme from "../component/Aboutme.js";
import Skill from "../component/Skill.js";  
import Loader from "./Loader";
import Footer from "./Footer";
import Project from "../component/Project.js";
import Contact from "../component/Contact.js";
import { Link } from "react-router-dom";
{
  /* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link> */
}

function Home() {
  return (
    <>
      <body>
        <div id="main">
          <div className="div1">
            <img className="profile" src="Img.jpg" />
          </div>
          <div className="div2">
            <h1>HELLO,</h1>
            <p className="p1">I'm Nidhi Padiyar</p>
            <blockquote>
              As a web developer. I'm passionate about creating interfaces that
              are fun,useful and user-centric.
            </blockquote>
            <div>
              <Link to="/Project">
                {" "}
                <button className="button" href="">
                  My Projects
                </button>
              </Link>
            </div>
            <br></br>
            <a href="https://www.instagram.com/nidhii_padiyar?igsh=MTNmcDM4YXIxeWQ4ag==">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                color="violet"
                height="35"
                fill="currentColor"
                class="icons"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
            <a href="https://github.com/Nidhi-Padiyar-01">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                color="violet"
                height="35"
                fill="currentColor"
                class="icons"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/p-nidhi-padiyar-5097b2228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                color="violet"
                height="35"
                fill="currentColor"
                class="icons"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>

          {/* <i class="bi bi-instagram" color="white"></i> */}
        </div>

        <div className="par">
          <h1>
            <u>About Me</u>
          </h1>
          <p>
            My name is Nidhi Padiyar. I'm currently pursuing my third year of
            B.E in Canara Engineering College. I live in Panemangalore with my
            family. An Enthusiast person with a lot of dreams. I like to code, 
            paint, travel.I believe art and travel gives you a new perspective to
            everything.You will get to know a lot about the different
            cultures,the cuisines,their history,the language and all the small
            unique things every place has to offer.
          </p>
        </div>

        {/* <h1>Skills</h1>
        <div id="box1">
          <h2>UI/UX Design</h2>
          <p>I have done many projects on ui and ux designs</p>
        </div>
        <div id="box1">
          <h2>UI/UX Design</h2>
          <p>I have done many projects on ui and ux designs</p>
        </div>
        <div id="box1">
          <h2>UI/UX Design</h2>
          <p>I have done many projects on ui and ux designs</p>
        </div> */}

        {/* <div id="container">
          <div className="box">
            <img className="b1" src="b1.jpg" />
            <p>Hotstar Clone</p>
          </div>
          <div className="box">
            <img className="b1" src="b2.jpg" />
            <p>Food ordering Website</p>
          </div>
          <div className="box">
            <img className="b1" src="b3.jpg" />
            <p>College Website</p>
          </div>
        </div> */}

        {/* <div className="Contact">
          <form ref={form} onSubmit={sendEmail}>
            <div className="lab">
              <label>Name:</label>
              <input type="text" name="user_name" />
            </div>
            <div className="lab">
              <label>Email:</label>
              <input type="email" name="user_email" />
            </div>
            <div className="lab">
              <label>Message:</label>
              <textarea name="message" />
              <div className="lab">
                <input type="submit" className="btn" value="Send" />
              </div>
            </div>
          </form>
        </div> */}
        <div>
          {" "}
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </div>
      </body>
    </>
  );
}

export default Home;
