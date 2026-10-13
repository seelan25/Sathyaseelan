import { skills } from "../../data/portfolio";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="max-width reveal">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My skills</div>
            <p>
              I am a full stack developer with a strong foundation in Java,
              SQL, HTML, CSS, and JavaScript. I build responsive web
              applications, REST APIs, and object-oriented systems.
            </p>
            <a href="#projects">View projects</a>
          </div>
          <div className="column right">
            {skills.map((skill, index) => (
              <div className="box" key={skill} style={{ "--i": index }}>
                <p className="box-1">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
