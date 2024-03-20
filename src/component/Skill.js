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
import '../csscomponent/Skills.css';
import Cards from "./Cards";
export default function Skill(){//creating an array
    const skills=[{
        id:1,
        head:'C++,Java,Python',
        para:'For high-performance applications',
    },
    {
        id:2,
        head:'HTML,CSS,Javascript,ReactJS',
        para:'To develop user-friendly websites',
    },
    {
        id:3,
        head:"SQL",
        para:"For manipulating data",
    }
    ];
    return(
        <div classname="skill">
            <h1><u>Skills</u></h1>
        {
            
            skills.map((item)=>(
                <Cards skills={item}/>//passing item to skill
                )
            )
        }
        </div>
    );
}