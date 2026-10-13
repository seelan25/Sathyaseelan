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
              I'm Sathyaseela G and I'm a <TypingText className="typing-2" />
            </div>
            <p>
              I am Sathyaseela G, a Computer Science and Engineering graduate
              from KSR College of Engineering. I build full stack web
              applications with a focus on clean, reliable software, and I am
              committed to growing further as a developer.
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
