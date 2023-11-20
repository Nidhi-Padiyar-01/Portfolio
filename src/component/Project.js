import "../csscomponent/Project.css";
export default function Project(){
    return(
        <>
        <h1>Projects</h1>
            <div id="container">
            <div className="box">
            <img className="b1" src="b1.jpg"/>
            <p>Hotstar Clone</p>
            </div>
            <div id="container">
            <div className="box">
            <img className="b1" src="b2.jpg"/>
            <p>Food ordering Website</p>
            </div>
            </div>
            <div id="container">
            <div className="box">
            <img className="b1" src="b3.jpg"/>
            <p>College Website</p>
            </div>
            </div>
            </div>
        </>
    );
}