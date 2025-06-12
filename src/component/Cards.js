// Cards.js (for skills)
import "../csscomponent/Skills.css";

export default function Cards({ skills }) {
  return (
    <div className="skill-box">
      <div className="icon-placeholder">
        <div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
        
      <p>{skills.para}</p>
      <span role="img" aria-label="icon">👩‍💻</span>
      </div>
      <div class="flip-box-back">
        <h3>{skills.head}</h3>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}
