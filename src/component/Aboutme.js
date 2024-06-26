import "../csscomponent/Aboutme.css";
import Footer from "./Footer";
export default function Aboutme() {
  return (
    <>
      <div className="par">
        <div className="sec2">
          <h1>
            <u>About Me</u>
          </h1>
          <p>
            I am a dedicated Web Developer with over 3 years of experience in
            building dynamic websites and applications using HTML, CSS,
            JavaScript, and React. Currently expanding my expertise in web
            design to merge technical proficiency with creative design.
            Passionate about crafting intuitive user experiences, I continuously
            seek to learn and adopt the latest industry trends and technologies.
            My goal is to deliver seamless, high-performance web solutions that
            exceed user expectations and drive business success.
          </p>
        </div>
        <div className="image-section">
          <div className="image-sec">
            <img className="girl2" src="girl2.jpg" alt="Girl" />
          </div>
        </div>
      </div>
    </>
  );
}
