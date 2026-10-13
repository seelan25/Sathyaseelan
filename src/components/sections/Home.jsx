import avatar from "../../assets/images/avatar.png";
import SocialLinks from "../common/SocialLinks";
import TypingText from "../common/TypingText";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="glow glow-a" aria-hidden="true"></div>
      <div className="glow glow-b" aria-hidden="true"></div>
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">SATHYASEELA G</div>
          <div className="text-3">
            And I'm a <TypingText />
          </div>
          <SocialLinks className="home-sci" />
          <div className="contact-div">
            <a className="contactme" href="#contact">
              Contact me
            </a>
          </div>
        </div>
        <div className="column right">
          <div className="img">
            <img src={avatar} alt="Sathyaseela G" />
          </div>
        </div>
      </div>
    </section>
  );
}
