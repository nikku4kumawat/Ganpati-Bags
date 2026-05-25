import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">

      <div className="about-container">

        {/* SIDEBAR */}

        <div className="about-sidebar">

          <ul>

            <li className="active">
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/about/testimonial">Testimonial</Link>
            </li>

            <li>
              <Link to="/about/company">About The Company</Link>
            </li>

          </ul>

        </div>

        {/* RIGHT CONTENT */}

        <div className="about-content">

          {/* ABOUT */}

          <div className="about-top">

            <h1>About Us</h1>

            <p>
              Established as a <b>Proprietor</b> firm in the year <b>2005</b>,
              we <b>“Ganpati Bags”</b> are a leading <b>Manufacturer</b> of a
              wide range of Saree Bag, Storage Bags, Shoe Bag, Blouse Cover Bag,
              Cloth Bag etc. Situated in Jaipur (Rajasthan, India), we have
              constructed a wide and well functional infrastructural unit.
            </p>

            <p>
              Under the headship of <b>“Mr. Lokesh Parnami” (CEO)</b>, we are
              able to deliver our products within given timeframe across the
              nation.
            </p>

          </div>

          {/* FACTSHEET */}

          <div className="factsheet">

            <h2>Factsheet</h2>

            {/* BASIC INFORMATION */}

            <div className="fact-section">

              <h3>Basic Information</h3>

              <table>

                <tbody>

                  <tr>
                    <td>Nature of Business</td>
                    <td>Manufacturer</td>
                  </tr>

                  <tr>
                    <td>Additional Business</td>

                    <td>
                      Wholesale Business <br />
                      Retail Business <br />
                      Warehouse / Depot
                    </td>
                  </tr>

                  <tr>
                    <td>Company CEO</td>
                    <td>Lokesh Parnami</td>
                  </tr>

                  <tr>
                    <td>Registered Address</td>

                    <td>
                      3486, Nahargarh Road, Chandpole Bazar,
                      Jaipur-302001 Rajasthan, India
                    </td>
                  </tr>

                  <tr>
                    <td>Total Number of Employees</td>
                    <td>26 to 50 People</td>
                  </tr>

                  <tr>
                    <td>GST Registration Date</td>
                    <td>01-07-2017</td>
                  </tr>

                  <tr>
                    <td>Legal Status of Firm</td>
                    <td>Proprietorship</td>
                  </tr>

                  <tr>
                    <td>Annual Turnover</td>
                    <td>1.5 - 5 Cr</td>
                  </tr>

                </tbody>

              </table>

            </div>

            {/* STATUTORY PROFILE */}

            <div className="fact-section">

              <h3>Statutory Profile</h3>

              <table>

                <tbody>

                  <tr>

                    <td>Banker</td>

                    <td>
                      HDFC BANK <br />
                      HDFC BANK LTD <br />
                      ICICI
                    </td>

                  </tr>

                  <tr>
                    <td>GST No.</td>
                    <td>08AIPPP4678Q1ZZ</td>
                  </tr>

                </tbody>

              </table>

            </div>

            {/* PAYMENT */}

            <div className="fact-section">

              <h3>Packaging / Payment and Shipment Details</h3>

              <table>

                <tbody>

                  <tr>

                    <td>Payment Mode</td>

                    <td>
                      Cash <br />
                      Credit Card <br />
                      Cheque <br />
                      Online
                    </td>

                  </tr>

                  <tr>

                    <td>Shipment Mode</td>

                    <td>
                      By Air <br />
                      By Road
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* CARD 1 */}

          <div className="about-card">

            <div className="about-card-text">

              <h3>Our Infrastructure</h3>

              <p>Our Signboard.</p>

              <div className="contact-row">

                <span>For more Information-</span>

                <button>Contact Us</button>

              </div>

            </div>

            <div className="about-card-image">

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402034208/JK/OY/HQ/4207157/img-20240316-wa0047-500x500.jpg"
                alt=""
              />

            </div>

          </div>

          {/* CARD 2 */}

          <div className="about-card">

            <div className="about-card-text">

              <h3>Infrastructural Set-Up</h3>

              <p>Our Office.</p>

              <div className="contact-row">

                <span>For more Information-</span>

                <button>Contact Us</button>

              </div>

            </div>

            <div className="about-card-image">

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402971968/ZD/NS/SY/4207157/10-500x500.jpg"
                alt=""
              />

            </div>

          </div>

          {/* MISSION */}

          <div className="about-section">

            <h3>Our Mission</h3>

            <p>
              The primary goal of any business is to make money,
              but it must also satisfy its customers and employees.
              We are committed to quality and ongoing technological
              advancement to ensure customer satisfaction.
            </p>

            <div className="contact-row">

              <span>For more Information-</span>

              <button>Contact Us</button>

            </div>

          </div>

          {/* WHY US */}

          <div className="about-section">

            <h3>Why Us?</h3>

            <p>
              We are an eminent firm that is actively committed to offering
              premium quality range of products within the minimum time and
              at genuine rates.
            </p>

            <ul>

              <li>Qualitative products</li>
              <li>Dexterous team of professionals</li>
              <li>Client-centric approach</li>
              <li>Positive records</li>
              <li>Excellent transport & logistic facility</li>
              <li>Economical price range</li>
              <li>Prompt delivery</li>

            </ul>

            <div className="contact-row">

              <span>For more Information-</span>

              <button>Contact Us</button>

            </div>

          </div>

          {/* ABOUT COMPANY */}

          <div className="about-section">

            <h3>About The Company</h3>

            <p>
              We started with a small in-house factory 26 years ago.
              Over time we gradually expanded our business and moved
              towards online platforms like Amazon, Flipkart, Myntra,
              Meesho and more.
            </p>

            <div className="contact-row">

              <span>For more Information-</span>

              <button>Contact Us</button>

            </div>

          </div>

          {/* CORE VALUES */}

          <div className="about-section">

            <h3>Our Core Values</h3>

            <ul>

              <li>Best Prices</li>
              <li>Innovative Mindset</li>
              <li>Recently Built Platform</li>
              <li>Unique Product Knowledge</li>
              <li>Excellent Efficiency & Productivity</li>

            </ul>

            <div className="contact-row">

              <span>For more Information-</span>

              <button>Contact Us</button>

            </div>

          </div>

          {/* ABOUT US EXTRA */}

          <div className="about-section">

            <h3>About Us</h3>

            <p>
              Ganpati Bags is among the topmost manufacturers and suppliers
              of premium quality organizers and bags. We offer Saree Covers,
              Jewellery Kits, Makeup Kits, Handbags, Blouse Covers and more.
            </p>

            <div className="contact-row">

              <span>For more Information-</span>

              <button>Contact Us</button>

            </div>

          </div>

          {/* AIM */}

          <div className="about-section">

            <h3>Our Aim</h3>

            <p>
              Our aim is to build long-term relationships with clients
              through quality products, technological advancement and
              customer satisfaction.
            </p>

            <div className="contact-row">

              <span>For more Information-</span>

              <button>Contact Us</button>

            </div>

          </div>

          {/* TEAM */}

          <div className="about-card">

            <div className="about-card-text">

              <h3>Infrastructure & Team</h3>

              <p>Our Team.</p>

              <div className="contact-row">

                <span>For more Information-</span>

                <button>Contact Us</button>

              </div>

            </div>

            <div className="about-card-image">

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402971528/MA/WG/KP/4207157/1-500x500.jpg"
                alt=""
              />

            </div>

          </div>

          {/* FACILITIES */}

          <div className="about-card">

            <div className="about-card-text">

              <h3>Manufacturing Facilities</h3>

              <p>Our Manufacturing Facilities.</p>

              <div className="contact-row">

                <span>For more Information-</span>

                <button>Contact Us</button>

              </div>

            </div>

            <div className="about-card-image">

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402034067/RR/WF/UF/4207157/img-20240316-wa0046-500x500.jpg"
                alt=""
              />

            </div>

          </div>

          {/* UNIT */}

          <div className="about-card">

            <div className="about-card-text">

              <h3>Manufacturing Unit</h3>

              <p>Our Manufacturing Unit.</p>

              <div className="contact-row">

                <span>For more Information-</span>

                <button>Contact Us</button>

              </div>

            </div>

            <div className="about-card-image">

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402034005/QU/XI/SE/4207157/img-20240316-wa0045-500x500.jpg"
                alt=""
              />

            </div>

          </div>

          {/* COMPANY ALBUM */}

          <div className="gallery-section">

            <h2>Company Album</h2>

            <div className="gallery-grid">

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402034208/JK/OY/HQ/4207157/img-20240316-wa0047-500x500.jpg"
                alt=""
              />

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402971968/ZD/NS/SY/4207157/10-500x500.jpg"
                alt=""
              />

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402971528/MA/WG/KP/4207157/1-500x500.jpg"
                alt=""
              />

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402034067/RR/WF/UF/4207157/img-20240316-wa0046-500x500.jpg"
                alt=""
              />

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402034005/QU/XI/SE/4207157/img-20240316-wa0045-500x500.jpg"
                alt=""
              />

              <img
                src="https://5.imimg.com/data5/SELLER/Default/2024/3/402972302/VD/VJ/KA/4207157/9-500x500.jpg"
                alt=""
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;