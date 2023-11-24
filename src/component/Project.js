import "../csscomponent/Project.css";
export default function Project() {
  return (
    <>
      <h1>Projects</h1>
      <div id="container">
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
      </div>
    </>
  );
}
// import "../csscomponent/Project.css";
// import Card2 from "./Card2";

// export default function Project(){//creating an array
  
//     const projects=[{
//         id:1,
//         para:'iqhwdi jwbdjwdu dhd',
//         img:'b1',
//     },
//     {
//         id:2,
//         para:'iqhwdi jwbdjwdu dhd',
//         img:'b2',
//     },
//     {
//         id:3,
//         para:"iqhwdi jwbdjwdu dhd",
//         img:'b3',
//     }
//     ];
//     return(
//         <div>
//             <h1><u>Projects</u></h1>
//         {
//             projects.map((item2)=>(
//                 <Card2 projects={item2}/>//passing item to skill
//                 )
//             )
//         }
//         </div>
//     );
// }