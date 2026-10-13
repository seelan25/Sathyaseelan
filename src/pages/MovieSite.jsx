import { useMemo, useState } from "react";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import "./movie.css";

const movies = [
  {
    id: "orbit",
    title: "Night Orbit",
    genre: "Sci-Fi",
    length: "2h 14m",
    rating: "8.6",
    price: 220,
    tone: "orbit",
    blurb: "A pilot races a failing space station back to Earth before dawn.",
  },
  {
    id: "harbor",
    title: "Red Harbor",
    genre: "Thriller",
    length: "1h 58m",
    rating: "8.1",
    price: 180,
    tone: "harbor",
    blurb: "One night on the docks uncovers a shipment that was never meant to arrive.",
  },
  {
    id: "monsoon",
    title: "Monsoon Letters",
    genre: "Drama",
    length: "2h 05m",
    rating: "8.4",
    price: 160,
    tone: "monsoon",
    blurb: "Two strangers trade letters through a season of rain and find their way home.",
  },
  {
    id: "signal",
    title: "Last Signal",
    genre: "Action",
    length: "1h 46m",
    rating: "7.9",
    price: 200,
    tone: "signal",
    blurb: "A radio operator has twelve minutes to stop a blackout across the city.",
  },
];

const shows = ["11:00 AM", "2:30 PM", "6:30 PM", "9:45 PM"];
const rows = ["A", "B", "C", "D", "E"];
const taken = new Set(["A3", "A4", "B6", "C2", "D5", "D6", "E1"]);

export default function MovieSite() {
  const [activeId, setActiveId] = useState(movies[0].id);
  const [show, setShow] = useState(shows[2]);
  const [seats, setSeats] = useState([]);
  const [ticket, setTicket] = useState(null);

  const movie = movies.find((item) => item.id === activeId) ?? movies[0];
  const total = useMemo(() => seats.length * movie.price, [seats, movie.price]);

  const pickMovie = (id) => {
    setActiveId(id);
    setSeats([]);
    setTicket(null);
  };

  const toggleSeat = (seat) => {
    if (taken.has(seat)) return;
    setTicket(null);
    setSeats((current) =>
      current.includes(seat)
        ? current.filter((item) => item !== seat)
        : [...current, seat]
    );
  };

  const book = () => {
    if (!seats.length) return;
    setTicket({
      title: movie.title,
      show,
      seats: [...seats],
      total,
    });
    setSeats([]);
  };

  return (
    <div className="cine">
      <header className="cine-bar">
        <a href="#projects">
          <FaArrowLeft aria-hidden="true" /> Portfolio
        </a>
        <strong>CineVision</strong>
        <span>Now showing</span>
      </header>

      <section className={`cine-hero ${movie.tone}`}>
        <p className="cine-kicker">{movie.genre}</p>
        <h1>{movie.title}</h1>
        <p>{movie.blurb}</p>
        <div className="cine-meta">
          <span>
            <FaStar aria-hidden="true" /> {movie.rating}
          </span>
          <span>{movie.length}</span>
          <span>Rs {movie.price}</span>
        </div>
      </section>

      <section className="cine-wrap">
        <div className="cine-list">
          {movies.map((item) => (
            <button
              key={item.id}
              className={`cine-card ${item.tone}${item.id === movie.id ? " active" : ""}`}
              onClick={() => pickMovie(item.id)}
              type="button"
            >
              <span className="poster" aria-hidden="true"></span>
              <strong>{item.title}</strong>
              <small>
                {item.genre} · {item.length}
              </small>
            </button>
          ))}
        </div>

        <div className="cine-book">
          <h2>Choose a show</h2>
          <div className="cine-shows">
            {shows.map((item) => (
              <button
                key={item}
                type="button"
                className={item === show ? "active" : ""}
                onClick={() => setShow(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="screen">Screen</div>
          <div className="seats">
            {rows.map((row) =>
              [1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
                const seat = `${row}${number}`;
                const className = taken.has(seat)
                  ? "taken"
                  : seats.includes(seat)
                    ? "picked"
                    : "";
                return (
                  <button
                    key={seat}
                    type="button"
                    className={className}
                    onClick={() => toggleSeat(seat)}
                    aria-label={`Seat ${seat}`}
                  >
                    {seat}
                  </button>
                );
              })
            )}
          </div>
          <div className="legend">
            <span>Open</span>
            <span className="picked">Selected</span>
            <span className="taken">Taken</span>
          </div>
          <button className="pay" type="button" onClick={book} disabled={!seats.length}>
            {seats.length ? `Book ${seats.length} seat${seats.length > 1 ? "s" : ""} · Rs ${total}` : "Select seats"}
          </button>
          {ticket ? (
            <p className="ticket">
              Booked {ticket.title} at {ticket.show}. Seats {ticket.seats.join(", ")}. Total Rs {ticket.total}.
            </p>
          ) : null}
        </div>
      </section>
    </div>
  );
}
