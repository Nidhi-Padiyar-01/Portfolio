// Cards.js (for skills)
import "../csscomponent/Skills.css";

export default function Cards({ skills }) {
  return (
    <div className="skill-box">
      <div className="icon-placeholder">
        {/* Replace this with an <img /> if you have icons */}
        <span role="img" aria-label="icon">🛠️</span>
      </div>
      <h3>{skills.head}</h3>
      <p>{skills.para}</p>
    </div>
  );
}
