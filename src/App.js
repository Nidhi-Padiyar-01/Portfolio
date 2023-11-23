import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Aboutme from "./component/Aboutme";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Project from "./component/Project";
import Loader from "./component/Loader";
import Footer from "./component/Footer";
// import card from "./component/card";

import { Routes,Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Aboutme" element={<Aboutme />} />
            <Route path="/Skill" element={<Skill />} />
             {/* <Route path="/Qualifications" element={<Qualifications />} /> */}
            <Route path="/Project" element={<Project />} />
           <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </div>
     
      <div className="Navbar">
      </div>
      <Project />
      
      </div>
      
    </>
  );
}

export default App;
