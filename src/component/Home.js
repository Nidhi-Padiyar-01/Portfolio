
import "../csscomponent/Home.css";
import React, { useRef } from 'react';
import Aboutme from "../component/Aboutme.js";
import Skill from "../component/Skill.js";
import Loader from "./Loader";
import Footer from "./Footer";
import Project from "../component/Project.js";
import Contact from "../component/Contact.js";

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
            <p className="p1">I'm Nidhi P</p>
            <blockquote>
              As a web developer. I'm passionate about creating interfaces that
              are fun,useful and user-centric.
            </blockquote>
            <div>
              <button className="button">My Projects</button>
            </div>
          </div>
        </div>

        <div>
          <h1>
            <u>About Me</u>
          </h1>
          <p>
            My name is Nidhi Padiyar. I'm currently pursuing my third year of
            B.E in Canara Engineering College. I live in Panemangalore with my
            family. An Enthusiast person with a lot of dreams. I like to
            paint,travel.I believe art and travel gives you a new perspective to
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
        <div> <Skill />
          <Project />
          
          <Contact />
          <Footer /></div>
      </body>
    </>
  );
}

export default Home;
