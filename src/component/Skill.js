<<<<<<< HEAD

=======
// Skill.js
>>>>>>> ad36a1f (updates)
import Card from "./Cards";
import "../csscomponent/Skills.css";

export default function Skill() {
  const skills = [
    { id: 1, head: "C", para: "For high-performance applications" },
    { id: 2, head: "Java", para: "High-level language for various applications" },
    { id: 3, head: "Web Development", para: "To create websites and web applications" },
    { id: 4, head: "ReactJs", para: "A JavaScript library for building UIs" },
    { id: 5, head: "SQL", para: "For manipulating data" },
  ];

  return (
<<<<<<< HEAD
    <div className="skill">
      <h1 className="skills-heading">
        <u>Skills</u>
      </h1>
      <div className="grid-container">
=======
    <div className="skills-section">
      <h1>Skills</h1>
      <div className="skills-container">
>>>>>>> ad36a1f (updates)
        {skills.map((item) => (
          <Card key={item.id} skills={item} />
        ))}
      </div>
    </div>
  );
}
