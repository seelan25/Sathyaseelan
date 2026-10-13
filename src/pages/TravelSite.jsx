import { useState } from "react";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import "./travel.css";

const places = [
  {
    name: "Ooty",
    region: "Tamil Nadu",
    tone: "hill",
    days: [
      { title: "Botanical garden and lake", cost: 1800, note: "Morning garden walk, boat ride, and local lunch." },
      { title: "Doddabetta and tea estates", cost: 2200, note: "Viewpoint, tea factory stop, and a hill dinner." },
      { title: "Pykara falls", cost: 2500, note: "Waterfall drive, pine forest, and a slow evening in town." },
    ],
  },
  {
    name: "Munnar",
    region: "Kerala",
    tone: "tea",
    days: [
      { title: "Tea museum and town walk", cost: 2000, note: "Plantation views and a spice-market lunch." },
      { title: "Echo Point and Mattupetty", cost: 2400, note: "Dam, lake, and a scenic ridge drive." },
      { title: "Eravikulam range", cost: 2800, note: "National park morning and a quiet cafe evening." },
    ],
  },
  {
    name: "Goa",
    region: "West coast",
    tone: "coast",
    days: [
      { title: "North beaches", cost: 2600, note: "Beach morning, fort sunset, and seafood dinner." },
      { title: "Old Goa and Panaji", cost: 2100, note: "Churches, riverfront, and a Latin quarter walk." },
      { title: "South coast day", cost: 2700, note: "Quieter beaches and a spice plantation stop." },
    ],
  },
];

export default function TravelSite() {
  const [placeName, setPlaceName] = useState(places[0].name);
  const [days, setDays] = useState(2);
  const [budget, setBudget] = useState(5000);
  const [plan, setPlan] = useState(null);

  const buildPlan = (event) => {
    event.preventDefault();
    const place = places.find((item) => item.name === placeName) ?? places[0];
    const count = Math.min(Math.max(Number(days) || 1, 1), place.days.length);
    const chosen = place.days.slice(0, count);
    const total = chosen.reduce((sum, day) => sum + day.cost, 0);
    setPlan({
      name: place.name,
      region: place.region,
      tone: place.tone,
      days: chosen,
      total,
      budget: Number(budget) || 0,
    });
  };

  return (
    <div className="trip">
      <header className="trip-bar">
        <a href="#projects">
          <FaArrowLeft aria-hidden="true" /> Portfolio
        </a>
        <strong>Trip Planner</strong>
        <span>Day-wise routes</span>
      </header>

      <section className="trip-hero">
        <p>Build a route from your days and budget</p>
        <h1>Plan the next few days, not the whole year.</h1>
      </section>

      <section className="trip-layout">
        <form className="trip-form" onSubmit={buildPlan}>
          <label>
            Destination
            <select value={placeName} onChange={(event) => setPlaceName(event.target.value)}>
              {places.map((place) => (
                <option key={place.name}>{place.name}</option>
              ))}
            </select>
          </label>
          <label>
            Days
            <input
              type="number"
              min="1"
              max="3"
              value={days}
              onChange={(event) => setDays(event.target.value)}
            />
          </label>
          <label>
            Budget (Rs)
            <input
              type="number"
              min="1000"
              step="500"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            />
          </label>
          <button type="submit">Create itinerary</button>
        </form>

        <div className="trip-picks">
          {places.map((place) => (
            <button
              key={place.name}
              type="button"
              className={`place ${place.tone}${place.name === placeName ? " active" : ""}`}
              onClick={() => setPlaceName(place.name)}
            >
              <FaMapMarkerAlt aria-hidden="true" />
              <strong>{place.name}</strong>
              <span>{place.region}</span>
            </button>
          ))}
        </div>
      </section>

      {plan ? (
        <section className="trip-plan">
          <div className="trip-summary">
            <h2>
              {plan.name}, {plan.days.length} day{plan.days.length > 1 ? "s" : ""}
            </h2>
            <p>
              Estimated Rs {plan.total.toLocaleString("en-IN")} · Budget Rs {plan.budget.toLocaleString("en-IN")}
            </p>
            <p className={plan.total > plan.budget ? "over" : "ok"}>
              {plan.total > plan.budget
                ? "This plan is over budget. Drop a day or raise the budget."
                : "This plan fits the budget."}
            </p>
          </div>
          <div className="trip-days">
            {plan.days.map((day, index) => (
              <article key={day.title}>
                <span>Day {index + 1}</span>
                <h3>{day.title}</h3>
                <p>{day.note}</p>
                <strong>Rs {day.cost.toLocaleString("en-IN")}</strong>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
