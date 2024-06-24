// import '../csscomponent/Skills.css';
// export default function Skills(){
//     return(
//         <>
//         <h1>Skills</h1>
//         <div id='box1'>
//             <h2>UI/UX Design</h2>
//             <p>I have done many projects on ui and ux designs</p>
//         </div>
//         <div id='box1'>
//             <h2>UI/UX Design</h2>
//             <p>I have done many projects on ui and ux designs</p>
//         </div>
//         <div id='box1'>
//             <h2>UI/UX Design</h2>
//             <p>I have done many projects on ui and ux designs</p>
//         </div>
//         </>
//     );
// }
//import { Component } from "react";
import Card from "./Cards";
import "../csscomponent/Skills.css";
import Cards from "./Cards";
export default function Skill() {
  //creating an array
  const skills = [
    {
      id: 1,
      head: "C",
      para: "For high-performance applications",
    },
    {
      id: 2,
      head: "Python",
      para: "High-level language for various applications",
    },
    {
      id: 6,
      head: "Java",
      para: "Powerful language for various applications",
    },
    {
      id: 3,
      head: "Web Development",
      para: "To create websites and web applications",
    },
    {
      id: 4,
      head: "ReactJs",
      para: "A javascript library for building user interfaces",
    },
    {
      id: 5,
      head: "SQL",
      para: "For manipulating data",
    },
    
  ];
  return (
    <div className="skill">
      <h1>
        <u>Skills</u>
      </h1>
      <div className="grid-container">
        {skills.map((item) => (
          <Cards key={item.id} skills={item} /> //passing item to skill
        ))}
      </div>
    </div>
  );
}
