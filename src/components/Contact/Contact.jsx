import "./Contact.css";
import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaTimes,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const Contact = () => {
  // =========================
  // EXTRA DETAILS TOGGLE
  // =========================

  const [showDetails, setShowDetails] = useState(false);

  // =========================
  // WHATSAPP SUBMIT
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappMessage = `
Hello Ganpati Bags,

Name: ${name}
Phone: ${phone}

Requirement:
${message}
    `;

    const whatsappNumber = "918047646781";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  // =========================
  // SHARE LINKS
  // =========================

  const websiteUrl = window.location.href;

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${websiteUrl}`;

  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${websiteUrl}`;

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* ================= LEFT SIDE ================= */}

        <div className="contact-left">
          <h2>Contact Us</h2>

          {/* LOCATION */}

          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div className="contact-text">
              <h3>Lokesh Parnami (Owner)</h3>

              <h4>Ganpati Bags</h4>

              <p>
                House No. 3486, Nahargarh Road,
                <br />
                Chandpole Bazar
                <br />
                Jaipur - 302011, Rajasthan, India
              </p>

              <a
                href="https://maps.google.com/?q=3486+Nahargarh+Road+Jaipur+Rajasthan+India"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions ➜
              </a>
            </div>
          </div>

          {/* EMAIL */}

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div className="contact-text">
              <a href="mailto:ganpatibags@gmail.com">
                Send Email
              </a>
            </div>
          </div>

          {/* PHONE */}

          <div className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <div className="contact-text">
              <a href="tel:08047646781">
                08047646781
              </a>
            </div>
          </div>

          {/* SHARE */}

          <div className="share-box">
            <span>Share:</span>

            <div className="share-icons">
              <a
                href={facebookShare}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href={linkedinShare}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com/intent/tweet"
                target="_blank"
                rel="noreferrer"
              >
                <FaTimes />
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            {/* MESSAGE */}

            <div className="input-box textarea-box">
              <label>Describe Your Requirement</label>

              <textarea
                name="message"
                placeholder="I would like to..."
                required
              ></textarea>
            </div>

            {/* PHONE */}

            <div className="input-box">
              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="+91 Enter Your Number"
                required
              />
            </div>

            {/* NAME */}

            <div className="input-box">
              <label>Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* BUTTON */}

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>

          {/* EXTRA DETAILS */}

          <div className="extra-details">
            <div
              className="extra-title"
              onClick={() => setShowDetails(!showDetails)}
            >
              <div className="toggle-icon">
                {showDetails ? <FaMinus /> : <FaPlus />}
              </div>

              <span>View Additional Details</span>
            </div>

            {showDetails && (
              <div className="office-details">
                <h4>Head Office</h4>

                <p>
                  sahil sukhija
                  <br />
                  3486 nahargar road jaipur rajasthan, India
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;