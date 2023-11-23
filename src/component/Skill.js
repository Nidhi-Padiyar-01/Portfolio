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
        head:'C++',
        para:'iqhwdi jwbdjwdu dhd',
    },
    {
        id:2,
        head:'java',
        para:'iqhwdi jwbdjwdu dhd',
    },
    {
        id:3,
        head:"python",
        para:"iqhwdi jwbdjwdu dhd",
    }
    ];
    return(
        <div>
        {
            
            skills.map((item)=>(
                <Cards skills={item}/>//passing item to skill
                )
            )
        }
        </div>
    );
}