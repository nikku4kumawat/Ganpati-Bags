import React from "react";
import "./Footer.css";

import flogo from "../../assets/images/flogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SECTION */}
        <div className="footer-column footer-brand">
          <img src={flogo} alt="Ganpati Bags" className="footer-logo" />

          <p className="footer-tagline">Quality Bags Manufacturer</p>

          <div className="footer-contact-box">
            <p className="company-name">Ganpati Bags</p>

            <p className="footer-text">
              GST : 08AIPPP4678Q1ZZ
            </p>

            <p className="footer-text">
              Jaipur, Rajasthan
            </p>

            <p className="footer-text">
              Call : 08047646781
            </p>
          </div>

          {/* <div className="social-icons">
            <a href="/">FB</a>
            <a href="/">IN</a>
            <a href="/">WA</a>
            <a href="/">YT</a>
          </div> */}

          <p className="copyright">
            Copyright © 2026 Ganpati Bags.
          </p>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h3>COMPANY</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Testimonial</a></li>
            <li><a href="/">Sitemap</a></li>
            <li><a href="/">Our Product</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>

        {/* PRODUCT RANGE */}
        <div className="footer-column">
          <h3>OUR PRODUCT RANGE</h3>

          <ul>
            <li><a href="/">Home And Kitchen</a></li>
            <li><a href="/">Storage Bag</a></li>
            <li><a href="/">Saree Cover</a></li>
            <li><a href="/">Kitchen Tools</a></li>
            <li><a href="/">Cosmetic Bags</a></li>
            <li><a href="/">Home Appliances</a></li>
            <li><a href="/">Storage Box</a></li>
            <li><a href="/">Bathroom Accessories</a></li>
            <li><a href="/">View All →</a></li>
          </ul>
        </div>

        {/* SHARE */}
        <div className="footer-column">
          <h3>SHARE US</h3>

          <div className="share-icons">
            <a href="/">Fb</a>
            <a href="/">In</a>
            <a href="/">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;