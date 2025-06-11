import b1 from "../img/b1.jpg";
import b2 from "../img/b2.jpg";
import b3 from "../img/b3.jpg";
import "../csscomponent/Projects.css"; // Create or reuse CSS

export default function ProjectCard({ projects }) {
  const imgfunc = (value) => {
    if (value === "b1") return b1;
    if (value === "b2") return b2;
    if (value === "b3") return b3;
    return b1; // default
  };

  return (
    <div className="project-card">
      <img src={imgfunc(projects.img)} alt={projects.head} className="project-img" />
      <h3>{projects.head}</h3>
      <p>{projects.para}</p>
    </div>
  );
}
