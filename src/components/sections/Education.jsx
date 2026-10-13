import college from "../../assets/images/college.png";
import school from "../../assets/images/school.png";

const items = [
  {
    image: college,
    title: "BE Computer Science and Engineering",
    place: "KSR College of Engineering",
  },
  {
    image: school,
    title: "HSC",
    place: "Variyar Hr Sec School",
  },
  {
    image: school,
    title: "SSLC",
    place: "Yesu Raja Matric Hr Sec School",
  },
];

export default function Education() {
  return (
    <section className="Education" id="Education">
      <div className="max-width reveal">
        <h2 className="title">My Education</h2>
        <div className="serv-content">
          {items.map((item) => (
            <div className="card" key={item.title}>
              <div className="box">
                <img src={item.image} alt="" />
                <div className="text">{item.title}</div>
                <p>{item.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
