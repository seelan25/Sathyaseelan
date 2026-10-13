import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";
import { contactEmail } from "../../data/portfolio";
import SocialLinks from "../common/SocialLinks";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width reveal">
        <h2 className="title">
          Contact me
        </h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <div className="icons">
              <div className="row">
                <FaUser aria-hidden="true" />
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Sathyaseela G</div>
                </div>
              </div>
              <div className="row">
                <FaMapMarkerAlt aria-hidden="true" />
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Dharmapuri,Tamilnadu</div>
                </div>
              </div>
              <div className="row">
                <FaPhoneAlt aria-hidden="true" />
                <div className="info">
                  <div className="head">phone</div>
                  <div className="sub-title">6369035881</div>
                </div>
              </div>
              <div className="row">
                <FaEnvelope aria-hidden="true" />
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">{contactEmail}</div>
                </div>
              </div>
              <br />
              <SocialLinks className="contact-sec" />
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="field name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={updateField}
                    required
                  />
                </div>
                <div className="field email">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={updateField}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={updateField}
                  required
                />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  placeholder="Message.."
                  value={form.message}
                  onChange={updateField}
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
