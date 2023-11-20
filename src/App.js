import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Aboutme from "./component/Aboutme";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Project from "./component/Project";

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
            <Route path="/Skills" element={<Skills />} />
             {/* <Route path="/Qualifications" element={<Qualifications />} /> */}
            <Route path="/Project" element={<Project />} />
           <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="Navbar">
      </div>
      </div>
    </>
  );
}

export default App;
