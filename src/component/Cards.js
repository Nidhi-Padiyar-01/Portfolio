// import Skill from "./Skill";
export default function Cards({skills}){
    console.log(skills)
    
    return(
        <>
        
        <div id="box1">
        <h1>{skills.head}</h1>
        <p>{skills.para}</p>
        </div>
        
        </>
    );
}

