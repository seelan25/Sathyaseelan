import aboutPhoto from "../../assets/images/about.png";
import TypingText from "../common/TypingText";

const cvUrl =
  "https://drive.google.com/file/d/1KylQ9Eoa6lyQJkGxCfOFLU5TNBPT1bxt/view?usp=drive_link";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="max-width reveal">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={aboutPhoto} alt="Sathyaseelan" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Sathyaseelan and I'm a <TypingText className="typing-2" />
            </div>
            <p>
              Hello! My Name is Sathyaseelan G, and I am a passionate Computer
              Science and Engineering student currently pursuing my degree at
              KSR College Of Engineering.I am dedicated to expanding my
              knowledge and honing my skills in Web Development,and I am
              commited to continuous growth and development.
            </p>
            <a href={cvUrl} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
