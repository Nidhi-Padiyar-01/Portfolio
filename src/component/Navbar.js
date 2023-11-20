// import "../csscomponent/Navbar.css";
// import { useState } from "react";

// function Navbar() {
//   const [navbar, setNavbar] = useState(false);

//   const hamburger = (value) => {
//     setNavbar(value);
//   };

//   return (
//     <div className="navbar">
//       <nav>
//         <h2>P Nidhi Padiyar</h2>
//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About me</a></li>
//         <li><a href="#">contact</a></li>
//         <li><a href="#">Feedback</a></li>
//         <li>
//           <i className="fa fa-bars" onClick={hamburger}></i>
//         </li>
//       </ul>

//       {
//         navbar ?(

//         )
//         <div>sidebar</div>
//         :
//         ""
//       }
//       </nav>
//     </div>
//   );
// }
// export default Navbar;
import "../csscomponent/Navbar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const hamburger = (value) => {
    setNavbar(value);
  /*const location=useLocation();
  useEffect(()=>{
    if(location.pathname==="/about"){
      console.log("hii");
    }
  },[location]);*/
  const hamburger=()=>{
    setNavbar(!setNavbar);
  }
}
  return (
    <div class="navbar">
      <nav>
        <h2>Portfolio</h2>
        <ul>
          <li>
            <Link className="home" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="about" to="/Aboutme">
              About me
            </Link>
          </li>
          <li>
            <Link className="skills" to="/Skills">
              Skills
            </Link>
          </li>
          <li>
            <Link className="qual" to="/Qualifications">
              Qualifications
            </Link>
          </li>
          <li>
            <Link className="Project" to="/Project">
              Projects
            </Link>
          </li>
          <li>
            <Link className="connect" to="/Connect">
              Connect
            </Link>
          </li>
          <li>
            <a href="#" onClick={() => hamburger(true)} id="hamburger">
              &#9776;
            </a>
          </li>
        </ul>
        
        {navbar ? (
          <>
            <ul class="sidebar">
              <li>
                <a href="#" onClick={() => hamburger(false)} id="hamburger">
                  &#x2715;
                </a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Qualifications</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
}
export default Navbar;
