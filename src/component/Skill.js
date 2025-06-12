import Card from "./Cards";
import "../csscomponent/Skills.css";

export default function Skill() {
  const skills = [
    { id: 1, head: "C, Java, SQL", para: "Programming Languages" },
    { id: 2, head: "HTML, CSS, Tailwind CSS, JS, Responsive design", para: "Web Technologies" },
    { id: 3, head: "MongoDB, ReactJS, NodeJS, MySQL, REST APIs, SDLC, Agile", para: "Development Stack:" },
    { id: 4, head: "Visual Studio Code, GitHub, PyCharm, Power BI, UiPath Studio, Wix Studio, Excel, AWS", para: "Software/Tools" },
    { id: 5, head: "React Native", para: "App Development" },
  ];

  return (
    <div className="skill">
      <h1 className="skills-heading">
     Skills
      </h1>
      <div className="grid-container">
        <div className="skills-section">
          <div className="skills-container">
            {skills.map((item) => (
              <Card key={item.id} skills={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
