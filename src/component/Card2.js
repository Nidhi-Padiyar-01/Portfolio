import b1 from "../img/b1.jpg";
import b2 from "../img/b2.jpg";
import b3 from "../img/b3.jpg";
export default function Cards({ projects }) {
  console.log(projects);
  const imgfunc = (value) => {
    if (value === "b1") {
      return b1;
    } else if (value === "b2") {
      return b2;
    } else if (value === "b3") {
      return b3;
    }
  };
  return (
    <>
      <p>{projects.para}</p>
      <div id="container">
        <div className="box">
          <img className="b1" src={imgfunc(projects.img)} />
        </div>
      </div>
    </>
  );
}
